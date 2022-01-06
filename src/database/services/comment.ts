// eslint-disable-next-line import/extensions
import comments from '../modals/comment';

class commentService {
  static async createComment(data:any) {
    try {
      return await comments.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async fetchPostComments(data:any) {
    try {
      return await comments.find(data)
        .sort({ createdAt: -1 })
        .populate('user', ['username', 'profilePicture']);
    } catch (error) {
      throw error;
    }
  }
}
export default commentService;
