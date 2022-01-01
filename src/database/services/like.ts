/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/extensions */
import Likes from '../modals/like';

class LikeService {
  static async createLike(data:any) {
    try {
      return await Likes.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async findLike(user:string, post:string) {
    try {
      return await Likes.find({ $and: [{ post }, { likes: user }] });
    } catch (error) {
      throw error;
    }
  }

  static async updateLikes(filter:any, update:string) {
    try {
      return await Likes.findOneAndUpdate(filter, { $push: { likes: update } }, { new: true });
    } catch (error) {
      throw error;
    }
  }

  static async removeLikes(filter:any, update:string) {
    try {
      return await Likes.findOneAndUpdate(filter, { $pull: { likes: update } }, { new: true });
    } catch (error) {
      throw error;
    }
  }

  static async findAllLikes(postId:any) {
    try {
      return await Likes.find(postId).populate('likes', ['username', 'profilePicture', 'firstname', 'lastname']);
    } catch (error) {
      throw error;
    }
  }
}

export default LikeService;
