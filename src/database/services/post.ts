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
}

export default PostService;
