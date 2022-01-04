/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty */
import LikeService from '../database/services/like';

export const allPostsIterator = async (id:string, posts:any) => {
  try {
    posts = await Promise.all(posts.map(async (post:any) => {
      const postId = post._id;
      const postLikes = await LikeService.findAllLikes({ post: postId });
      const isLiked = await LikeService.findLike(id, postId);
      const result = post;
      result.isLiked = (isLiked.length > 0);
      const like = postLikes[0].likes;
      const likers = await Promise.all(like.map(async (likee:any) => {
        const likes = likee;
        const liker = {
          _id: postLikes[0]._id,
          user: likee
        };
        const { user } = liker;
        const likerId = user._id;
        likes._doc.fullname = `${likee.firstname} ${likee.lastname}`;
        return liker;
      }));
      if (like.length === 0) {
        result._doc.likes = 'none';
        result._doc.likesNo = 0;
      } else {
        result.likes = like;
        result.likesNo = likers.length;
      }

      return result;
    }));
    const followingPosts = posts.filter((post:any) => post !== undefined);
    return followingPosts;
  } catch (error) {
    throw error;
  }
};
