import  {sign} from '../helpers/jwt';
import confing  from "../config";
import { UserInputError } from "apollo-server";
import { config } from 'dotenv';

class Admin {
static async  AdminLogin(parent:any,{password,username}:{password:string,username:string},ctx:any) {
    if (username!==confing.username ||password!==confing.password) 
    console.log("gygu")
    
    throw new UserInputError ("WRONG CREDITENTIALS") ;
    
    console.log("vbnjb")
    
 const token = await sign({role:"admin"});

     console.log("cgnj")

     return {token,role:"admin"};
   
    }
}
export {Admin}
