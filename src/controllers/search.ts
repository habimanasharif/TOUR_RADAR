/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { isUser } from '../middleware/authorization';
import SearchService from '../database/services/search';

class Search {
  static async searchUser(parent:any, { search }:{search:string}, ctx:any) {
    await isUser(ctx);

    const results = await SearchService(
      'User',
      search,
      parseInt('1', 10),
      parseInt('10', 10)
    );
    return results;
  }
}
export { Search };
