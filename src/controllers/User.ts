import Joi from "@hapi/joi"
import { sign, verify } from '../helpers/jwt';
import { generate, check } from '../helpers/bcrypt';
import { UserService } from '../database/services/users';
import {mailer} from '../helpers/mailer'
import { UserInputError } from 'apollo-server';
import * as Validations from '../middleware/validation/user';
import config from '../config';
 class User{
  static async signUp(parent:any,{firstname,lastname,username,password,email,role}:{firstname:string,lastname:string,username:string,password:string,email:string,role:string},ctx:any) {
   const exists = await UserService.findUser({ $or: [{ email }, { username }] });
   if(exists){
    throw new UserInputError("USER EXISTS ERROR");
   }
 Validations.signUp({firstname,lastname,username,password,email});
await mailer(['sign-up', {
  email,
  firstname,
  lastname,
  body: `${config.HOST}/user/verify?token=${sign(email)}`
}, email
]);
    const hashedpassword= await generate(password);
    let newUser ={
    firstname,
    lastname,
    username,
    password:hashedpassword,
    role,
    email,
    }

    const newAcount=UserService.signUp(newUser);
    
    return newAcount;
    
  }


  static async logIn(parent:any,{password,account}:{password:string,account:string},ctx:any)  {
   const exists = await UserService.findUser({$or:[{email:account},{username:account}]});
   if(!exists){
    throw new UserInputError("USER NOT FOUND");
   }
   const match =check(exists.password,password);
   if(!match){
    throw new UserInputError("INCORRECT PASSWORD"); 
   }
   exists.token= await sign({email:exists.email,id:exists._id,role:'user'});
   return exists;
  }    
  
}
export {User}

