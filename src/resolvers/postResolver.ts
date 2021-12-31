/* eslint-disable import/extensions */
import { Post } from '../controllers';

const postResolvers = {
  Mutation: {
    createPost: (parent:any, args:any, ctx:any) => Post.createPost(parent, args, ctx),
    deletePost: (parent:any, args:any, ctx:any) => Post.deletPost(parent, args, ctx),
    likePost: (parent:any, args:any, ctx:any) => Post.likePost(parent, args, ctx),
  },
  Query: {
    posts: (parent:any, args:any, ctx:any) => Post.fetchPost(parent, args, ctx),
    fetchSinglePost: (parent:any, args:any, ctx:any) => Post.fetchSinglePost(parent, args, ctx),
  },
};

export default postResolvers;
