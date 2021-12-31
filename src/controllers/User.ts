/* eslint-disable lines-between-class-members */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
import { UserInputError, AuthenticationError } from 'apollo-server';
import { sign, verify } from '../helpers/jwt';
import { generate, check } from '../helpers/bcrypt';
import UserService from '../database/services/users';
import FollowService from '../database/services/follow';
import VerifyGuiderService from '../database/services/verifyGuider';
import PostService from '../database/services/post';
import { mailer } from '../helpers/mailer';
import * as Validations from '../middleware/validation/user';
import config from '../config';
import { isUser } from '../middleware/authorization';
import uploader from '../helpers/storage';
import extension from '../helpers/extention';
import { allPostsIterator } from '../helpers/iterator';

class User {
  static async signUp(parent:any, { input }:{input:any}, ctx:any) {
    const {
      firstname, lastname, username, password, email, role
    } = input;
    const exists = await UserService.findUser({ $or: [{ email }, { username }] });
    if (exists) {
      throw new UserInputError('USER EXISTS ERROR');
    }
    Validations.signUp(input);
    await mailer(['sign-up', {
      email,
      firstname,
      lastname,
      body: `${config.HOST}/user/verify?token=${sign(email)}`
    }, email
    ]);
    const hashedpassword = await generate(password);
    const newUser = {
      firstname,
      lastname,
      username,
      password: hashedpassword,
      role,
      email,
    };

    const newAcount = await UserService.signUp(newUser);
    newAcount.password = undefined;

    return newAcount;
  }

  static async logIn(parent:any, { password, account }:{password:string, account:string}, ctx:any) {
    const exists = await UserService.findUser({ $or: [{ email: account }, { username: account }] });
    if (!exists) {
      throw new UserInputError('USER NOT FOUND');
    }
    const match = check(exists.password, password);
    if (!match) {
      throw new UserInputError('INCORRECT PASSWORD');
    }
    if (exists.isVerified === false) throw new UserInputError('Your email is not verified');
    exists.token = await sign({ email: exists.email, id: exists._id, role: 'user' });
    exists.password = undefined;
    return exists;
  }

  static async verifyEmail(parent:any, { token }:{token:string}, ctx:any) {
    const email = await verify(token);
    const exist = await UserService.findUser({ email });
    if (!exist) throw new UserInputError('USER NOT FOUND');
    if (exist.isVerified === true) throw new UserInputError('USER ALREADY VERIFIED');
    const verifiedAccount = await UserService.updateUser({ email }, { isVerified: true });
    verifiedAccount.password = undefined;
    const follow = {
      owner: verifiedAccount._id,
      follower: [],
      following: []
    };
    await FollowService.createFollow(follow);
    return verifiedAccount;
  }

  static async updateUser(parent:any, { input }:{input:any}, ctx:any) {
    const user = await isUser(ctx);
    const userExists = await UserService.findUser({ _id: user });
    if (!userExists) {
      throw new UserInputError("USER DOES'NT EXIST");
    }
    if (userExists.isVerified === false) throw new UserInputError('User Is Not verified');
    Validations.update(input);
    const update = await UserService.updateUser({ _id: user }, input);

    return update;
  }

  static async verifyGuider(parent:any, { cirtificate }:{cirtificate:string}, ctx:any) {
    const user = await isUser(ctx);
    const ext = extension(cirtificate);
    const exist = await UserService.findUser({ _id: user });
    if (!exist) throw new AuthenticationError('AUTHENTICATION ERROR');
    if ((ext !== 'jpg') && (ext !== 'JPG') && ext !== 'png' && ext !== 'jpeg' && ext !== 'JPEG') { throw new UserInputError('UNSUPPORTED FILE'); }
    const response = await uploader(cirtificate);
    const request = await VerifyGuiderService.findrequest({ email: exist.email });
    if (request) {
      throw new Error('REQUEST ALREADY EXIST');
    }
    const guider = {
      firstname: exist.firstname,
      lastname: exist.lastname,
      username: exist.username,
      email: exist.email,
      profilePicture: exist.profilePicture,
      bio: exist.bio,
      socials: exist.socials,
      cirtificate: response.secure_url

    };
    const verifyGuider = await VerifyGuiderService.requestVerification(guider);
    verifyGuider.message = 'verification successfully requested';
    return verifyGuider;
  }

  static async fetchUserProfile(parent:any, { userId }:{userId:string}, ctx:any) {
    const id = await isUser(ctx);
    const user = await UserService.findUser({ _id: userId });
    if (!user || !user.isVerified) throw new AuthenticationError('No user Found');
    const follower = await FollowService.findAllFollowers({ owner: userId });
    const follow = await FollowService.findAllFollowing({ owner: userId });
    const { followers } = follower;
    const { following } = follow;
    const posts = await PostService.findOwnerPosts({ owner: userId });
    user.totalposts = posts.length;
    user.followers = followers.length;
    user.following = following.length;
    user.allFollowers = followers;
    user.allFollowing = following;
    const followed = await FollowService.findFollowing(id, userId);
    user.isFollowing = (followed.length > 0);
    user.posts = await allPostsIterator(id, posts);
    user.isUser = (id === userId);
    return user;
  }

  static async updateProfilePicture(parent:any, { picture }:{picture:string}, ctx:any) {
    const id = await isUser(ctx);
    const user = await UserService.findUser({ id });
    if (!user || !user.isVerified) throw new AuthenticationError('No user Found');
    const ext = extension(picture);
    if ((ext !== 'jpg') && (ext !== 'JPG') && ext !== 'png' && ext !== 'jpeg' && ext !== 'JPEG') { throw new UserInputError('UNSUPPORTED FILE'); }
    const response = await uploader(picture);
    await UserService.updateUser({ _id: id }, { profilePicture: response.secure_url });
    return ({ message: 'Profile Picture Update successfully' });
  }
  static async removeProfilePicture(parent:any, arg:any, ctx:any) {
    const id = await isUser(ctx);
    const user = await UserService.findUser({ id });
    if (!user || !user.isVerified) throw new AuthenticationError('No user Found');
    await UserService.updateUser({ _id: id }, { profilePicture: 'none' });
    return ({ message: 'Profile Picture Removed successfully' });
  }
  static async changePassword(parent:any, { oldPassword, newPassword }:{oldPassword:string, newPassword:string}, ctx:any) {
    const id = await isUser(ctx);
    const user = await UserService.findUser({ id });
    if (!user || !user.isVerified) throw new AuthenticationError('No user Found');
    const match = check(user.password, oldPassword);
    if (!match) {
      throw new UserInputError('INCORRECT PASSWORD');
    }
    const hashedpassword = await generate(newPassword);
    await UserService.updateUser({ _id: id }, { password: hashedpassword });

    return ({ message: 'Password Changed Succefully' });
  }
}
export default User;
