/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
import { UserInputError, AuthenticationError } from 'apollo-server';
import { Auth } from 'googleapis';
import { sign, verify } from '../helpers/jwt';
import { generate, check } from '../helpers/bcrypt';
import UserService from '../database/services/users';
import VerifyGuiderService from '../database/services/verifyGuider';
import { mailer } from '../helpers/mailer';
import * as Validations from '../middleware/validation/user';
import config from '../config';
import { isUser } from '../middleware/authorization';
import uploader from '../helpers/storage';
import extension from '../helpers/extention';

class User {
  static async signUp(parent:any, { input }:{input:any}, ctx:any) {
    const {
      firstname, lastname, username, password, email, role
    } = input;
    const exists = await UserService.findUser({ $or: [{ email }, { username }] });
    if (!exists) {
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
    const email = verify(token);
    const exist = await UserService.findUser({ email });
    if (!exist) throw new UserInputError('USER NOT FOUND');
    if (exist.isVerified === true) throw new UserInputError('USER ALREADY VERIFIED');
    const verifiedAccount = await UserService.updateUser({ email }, { isVerified: true });
    verifiedAccount.password = undefined;
    return verifiedAccount;
  }

  static async verifyGuider(parent:any, { cirtificate }:{cirtificate:string}, ctx:any) {
    const user = await isUser(ctx);
    const ext = extension(cirtificate);
    const exist = await UserService.findUser({ _id: user });
    if (!exist) throw new AuthenticationError('AUTHENTICATION ERROR');
    if ((ext !== 'jpg') && (ext !== 'JPG') && ext !== 'png' && ext !== 'jpeg' && ext !== 'JPEG') { throw new UserInputError('UNSUPPORTED FILE'); }
    const response = await uploader(cirtificate);
    const request = await VerifyGuiderService.findrequest({ email: exist.email });
    // if (request) {
    //   throw new Error('REQUEST ALREADY EXIST');
    // }
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
}
export default User;
