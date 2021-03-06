/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/extensions */
import Posts from '../modals/post';

class PostService {
  static async createPost(data:any) {
    try {
      return await Posts.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async fetchPost(page:number, limit:number) {
    try {
      return await Posts.find()
        .sort({ createdAt: -1 })
        .populate('owner', ['username', 'profilePicture'])
        .skip((page - 1) * limit)
        .limit(limit);
    } catch (error) {
      throw error;
    }
  }

  static async deletePost(id:any) {
    try {
      return await Posts.deleteOne({ _id: id });
    } catch (error) {
      throw error;
    }
  }

  static async fetchSinglePost(id:any) {
    try {
      return await Posts.findOne({ _id: id }).populate('owner', ['username', 'profilePicture']);
    } catch (error) {
      throw error;
    }
  }

  static async findOwnerPosts(id:any) {
    try {
      return await Posts.find(id)
        .sort({ createdAt: -1 });
    } catch (error) {
      throw error;
    }
  }
}

export default PostService;
