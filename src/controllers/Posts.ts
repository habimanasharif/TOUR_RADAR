/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { UserInputError } from 'apollo-server';
import PostService from '../database/services/post';
import UserService from '../database/services/users';
import { isUser } from '../middleware/authorization';
import imageArray from '../helpers/imageArray';
import extension from '../helpers/extention';

class Post {
  static async createPost(_parent:any, { input }:{input:any}, ctx:any) {
    const id = await isUser(ctx);
    const user = await UserService.findUser({ _id: id });
    if (!user) throw new UserInputError('User Not found');
    if (user.isVerified !== true) throw new UserInputError('Verify Your Email First');
    if (user.isGuider !== true) throw new UserInputError("This user can't post ");

    input.content.forEach((element:any) => {
      element = extension(element);
      if ((element !== 'jpg') && (element !== 'JPG') && element !== 'png' && element !== 'jpeg' && element !== 'JPEG') { throw new UserInputError('UNSUPPORTED FILE'); }
    });
    input.owner = id;
    const images = await imageArray(input.content);
    input.content = images;
    const post = await PostService.createPost(input);
    return post;
  }

  static async fetchPost(_parent:any, args:any, ctx:any) {
    const id = await isUser(ctx);
    const posts = await PostService.fetchPost(1, 10);
    return posts;
  }

  static async deletPost(_parent:any, { id }:{id:any}, ctx:any) {
    const user = await isUser(ctx);
    const post = await PostService.fetchSinglePost(id);
    if (!post) throw new UserInputError('Post Not Available');
    if (post.owner !== user) throw new UserInputError('You are not allowed to delete  this post');
    const posts = await PostService.deletePost(id);
    return { message: ' Post Deleted Successfully' };
  }
}
export { Post };
