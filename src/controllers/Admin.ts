import { sign} from '../helpers/jwt';
import confing  from "../config";
import { UserInputError } from "apollo-server";

class Admin {
static async AdminLogin (parent:any,{password,username}:{password:string,username:string},ctx:any) {
    if (username!==confing.username ||password!==confing.password) 

    throw new UserInputError ("WRONG CREDITENTIALS") ;

    const token = await sign({role:"admin"});

    return {token,role:"admin"};
   


}
}
export {Admin}
