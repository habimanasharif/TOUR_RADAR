/* eslint-disable import/extensions */
import { User } from '../controllers';

const userResolvers = {
  Query: {
  //  users: () => User.fetchUsers(),
  },
  Mutation: {
    signUp: (parent:any, args:any, ctx:any) => User.signUp(parent, args, ctx),
    // login
    logIn: (parent:any, args:any, ctx:any) => User.logIn(parent, args, ctx),
    verifyEmail: (parent:any, args:any, ctx:any) => User.verifyEmail(parent, args, ctx),
    updateUser: (parent:any, args:any, ctx:any) => User.updateUser(parent, args, ctx),
  }
};

export default userResolvers;
