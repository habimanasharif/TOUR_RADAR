import { sign, verify } from '../helpers/jwt';
import { generate, check } from '../helpers/bcrypt';
import { UserService } from '../database/services/users';

 class User{
  static async signUp(parent:any,{firstname,lastname,username,password,email,role}:{firstname:string,lastname:string,username:string,password:string,email:string,role:string},ctx:any) {
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
}
export {User}

