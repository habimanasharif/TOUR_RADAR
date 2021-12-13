/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { Admin, User } from '../controllers';

const verificationResolvers = {
  Query: {
    verifications: (parent:any, args:any, ctx:any) => Admin.Fetchverifications(parent, args, ctx)
  },
  Mutation: {

    verifyGuider: (parent:any, args:any, ctx:any) => User.verifyGuider(parent, args, ctx),
  }
};
export { verificationResolvers };
