/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
import { UserInputError } from 'apollo-server';
import { sign } from '../helpers/jwt';
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

    const newAcount = UserService.signUp(newUser);

    return newAcount;
  }
<<<<<<< HEAD
=======

  /**verifying email function
  1.get data from the token
  2. use the ID from the token to fetch user
  3.if user doesnt exists throw error
  4.update isverified to true
  4.1user.password:undifined
  5.return data without password
  */
 
}
export {User}
>>>>>>> starts verifying email

  static async logIn(parent:any, { password, account }:{password:string, account:string}, ctx:any) {
    const exists = await UserService.findUser({ $or: [{ email: account }, { username: account }] });
    if (!exists) {
      throw new UserInputError('USER NOT FOUND');
    }
    const match = check(exists.password, password);
    if (!match) {
      throw new UserInputError('INCORRECT PASSWORD');
    }
    exists.token = await sign({ email: exists.email, id: exists._id, role: 'user' });
    return exists;
  }
}
export default User;
