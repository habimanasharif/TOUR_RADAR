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
}
export default commentService;
