/* eslint-disable import/extensions */
import { Follow } from '../controllers';

const followResolvers = {
  Query: {
  //  users: () => User.fetchUsers(),
  },
  Mutation: {
    followUser: (parent:any, args:any, ctx:any) => Follow.follow(parent, args, ctx),
  }
};

export default followResolvers;
