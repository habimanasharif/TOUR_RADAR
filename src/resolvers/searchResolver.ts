/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import { Search } from '../controllers';

const searchResolvers = {
  Mutation: {
    searchUser: (parent:any, args:any, ctx:any) => Search.searchUser(parent, args, ctx),
  }
};
export { searchResolvers };
