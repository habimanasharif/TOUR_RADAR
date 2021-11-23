import {User}  from "../controllers";

const userResolvers = {
  Query: {
  //  users: () => User.fetchUsers(),
  },
  Mutation:{
   signUp:(parent:any,args:any,ctx:any)=>User.signUp(parent, args,ctx),
   //login
   logIn:(parent:any,args:any,ctx:any)=>User.logIn(parent,args,ctx),


  }
};

export{ 
  userResolvers,
}
