/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
import { UserInputError } from 'apollo-server';
import { sign, verify } from '../helpers/jwt';
import { generate, check } from '../helpers/bcrypt';
import UserService from '../database/services/users';
import { mailer } from '../helpers/mailer';
import * as Validations from '../middleware/validation/user';
import config from '../config';

class User {
  static async signUp(parent:any, {
    firstname, lastname, username, password, email, role
  }:
    {firstname:string, lastname:string, username:string, password:string, email:string, role:string},
  ctx:any) {
    const exists = await UserService.findUser({ $or: [{ email }, { username }] });
    if (!exists) {
      throw new UserInputError('USER EXISTS ERROR');
    }
    Validations.signUp({
      firstname, lastname, username, password, email
    });
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
  static async updateUser (parent:any,{firstname,lastname,bio,profilepicture,email}:{firstname:String,lastname:String,bio:String,profilepicture:String,email:String},ctx:any){
   
    const userExists = await UserService.findUser({email});
    if (userExists) {
      const update = await UserService.updateUser( )
    }
    
    return update;

  }
}
export default User;
