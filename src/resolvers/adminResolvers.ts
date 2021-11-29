
import {Admin} from "../controllers";
const adminResolvers = {
    Mutation :{
        AdminLogin:(parent:any,args:any,ctx:any)=>Admin.AdminLogin(parent,args,ctx),
    }
};
export {adminResolvers}