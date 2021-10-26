import  { booksResolvers } from './booksResolvers';

import { categoriesResolvers} from './categoryResolvers';
import { userResolvers} from './userResolvers';

const resolvers = [booksResolvers,categoriesResolvers,userResolvers];

export {
  resolvers,
};
