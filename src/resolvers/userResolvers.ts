import {User}  from "../controllers";

const userResolvers = {
  Mutation:{
   signUp:(parent:any,args:any,ctx:any)=>User.signUp(parent, args,ctx),
  }
};

export{ 
  userResolvers,
}
