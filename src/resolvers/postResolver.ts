/* eslint-disable import/extensions */
import { Post } from '../controllers';

const postResolvers = {
  Mutation: {
    createPost: (parent:any, args:any, ctx:any) => Post.createPost(parent, args, ctx),
  }
};

export default postResolvers;
