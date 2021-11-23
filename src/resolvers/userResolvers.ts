import {User}  from "../controllers";

const userResolvers = {
  Query: {
  //  users: () => User.fetchUsers(),
  },
  Mutation:{
   signUp:(parent:any,args:any,ctx:any)=>User.signUp(parent, args,ctx),
  }
};

export{ 
  userResolvers,
}
