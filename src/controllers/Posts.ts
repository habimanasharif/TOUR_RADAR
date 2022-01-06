/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { UserInputError } from 'apollo-server';
import PostService from '../database/services/post';
import UserService from '../database/services/users';
import LikeService from '../database/services/like';
import { allPostsIterator } from '../helpers/iterator';
import { isUser } from '../middleware/authorization';
import imageArray from '../helpers/imageArray';
import extension from '../helpers/extention';
import CommentService from '../database/services/comment';

class Post {
  static async createPost(_parent:any, { input }:{input:any}, ctx:any) {
    const id = await isUser(ctx);
    const user = await UserService.findUser({ _id: id });
    if (!user) throw new UserInputError('User Not found');
    if (user.isVerified !== true) throw new UserInputError('Verify Your Email First');
    if (user.isGuider !== true) throw new UserInputError("This user can't post ");
    if (input.content.length === 0) throw new UserInputError('Please Atleastselect Onefile');
    input.content.forEach((element:any) => {
      element = extension(element);
      if ((element !== 'jpg') && (element !== 'JPG') && element !== 'png' && element !== 'jpeg' && element !== 'JPEG') { throw new UserInputError('UNSUPPORTED FILE'); }
    });
    input.owner = id;
    const images = await imageArray(input.content);
    input.content = images;
    const post = await PostService.createPost(input);
    const like = {
      post: post._id,
      likes: []
    };
    await LikeService.createLike(like);
    return post;
  }

  static async fetchPost(_parent:any, args:any, ctx:any) {
    const id = await isUser(ctx);
    let posts = await PostService.fetchPost(1, 10);
    posts = await allPostsIterator(id, posts);
    return posts;
  }

  static async deletPost(parent:any, { id }:{id:any}, ctx:any) {
    const user = await isUser(ctx);
    const post = await PostService.fetchSinglePost(id);
    if (!post) throw new UserInputError('Post Not Available');
    if (post.owner !== user) throw new UserInputError('You are not allowed to delete  this post');
    const posts = await PostService.deletePost(id);
    return { message: ' Post Deleted Successfully' };
  }

  // eslint-disable-next-line max-len
  static async commentPost(_parent:any, { postId, content }: {postId:string, content:string}, ctx:any) {
    const id = await isUser(ctx);
    const post = await PostService.fetchSinglePost({ _id: postId });

    const user = await UserService.findUser({ _id: id });

    if (!user) throw new UserInputError('user does not exist');

    if (!post) throw new UserInputError('post not found');

    const comment = { user: id, post: postId, content };
    await CommentService.createComment(comment);

    return { message: 'comment created successfully' };
  }

  static async likePost(parent:any, { postId }:{postId:string}, ctx:any) {
    const id = await isUser(ctx);
    const post = await PostService.fetchSinglePost(postId);
    const user = await UserService.findUser({ _id: id });
    if (!user) throw new UserInputError('User Not found');
    if (!post) throw new UserInputError('Post Not Found');
    const likeExist = await LikeService.findLike(id, post);
    if (likeExist.length > 0) throw new UserInputError('You Can not like Post Twice');
    await LikeService.updateLikes({ post: postId }, id);
    return { message: ' Post liked Successfully' };
  }

  static async fetchSinglePost(parent:any, { postId }:{postId:string}, ctx:any) {
    const id = await isUser(ctx);
    const post = await PostService.fetchSinglePost(postId);
    const user = await UserService.findUser({ _id: id });
    if (!user) throw new UserInputError('User Not found');
    if (!post) throw new UserInputError('Post Not Found');
    const postLikes = await LikeService.findAllLikes({ post: postId });
    const postComments = await CommentService.fetchPostComments({ post: postId });
    const like = postLikes[0].likes;
    const likeNo = like.length;
    const isLiked = await LikeService.findLike(id, postId);
    post.isLiked = (isLiked.length > 0);
    post.comments = postComments;
    post.commentNo = postComments.length;

    post.likesNo = likeNo;
    post.likes = like;
    return post;
  }

  static async UnLikePost(parent:any, { postId }:{postId:string}, ctx:any) {
    const id = await isUser(ctx);
    const post = await PostService.fetchSinglePost(postId);
    const user = await UserService.findUser({ _id: id });
    if (!user) throw new UserInputError('User Not found');
    if (!post) throw new UserInputError('Post Not Found');
    const likeExist = await LikeService.findLike(id, post);
    if (likeExist.length < 0) throw new UserInputError('You Can not unlike a non liked PostPost ');
    await LikeService.removeLikes({ post: postId }, id);
    return ({ message: 'Post Unliked Successfully' });
  }
}
export { Post };
