import  { booksResolvers } from './booksResolvers';

import { categoriesResolvers} from './categoryResolvers';

const resolvers = [booksResolvers,categoriesResolvers];

export {
  resolvers,
};
