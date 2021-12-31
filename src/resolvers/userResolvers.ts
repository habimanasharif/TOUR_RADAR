/* eslint-disable max-len */
/* eslint-disable import/extensions */
import { User } from '../controllers';

const userResolvers = {
  Query: {
    userProfile: (parent:any, args:any, ctx:any) => User.fetchUserProfile(parent, args, ctx),
  },
  Mutation: {
    signUp: (parent:any, args:any, ctx:any) => User.signUp(parent, args, ctx),
    // login
    logIn: (parent:any, args:any, ctx:any) => User.logIn(parent, args, ctx),
    verifyEmail: (parent:any, args:any, ctx:any) => User.verifyEmail(parent, args, ctx),
    updateUser: (parent:any, args:any, ctx:any) => User.updateUser(parent, args, ctx),
    verifyGuider: (parent:any, args:any, ctx:any) => User.verifyGuider(parent, args, ctx),
    updateProfilePicture: (parent:any, args:any, ctx:any) => User.updateProfilePicture(parent, args, ctx),
    removeProfilePicture: (parent:any, args:any, ctx:any) => User.removeProfilePicture(parent, args, ctx)
  }
};

export default userResolvers;
