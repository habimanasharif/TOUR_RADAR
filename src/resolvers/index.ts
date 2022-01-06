/* eslint-disable import/extensions */
import userResolvers from './userResolvers';
import { adminResolvers } from './adminResolvers';
import { verificationResolvers } from './verificationResolvers';
import postResolvers from './postResolver';
import followResolver from './followResolver';
import { searchResolvers } from './searchResolver';

const resolvers = [
  userResolvers,
  adminResolvers,
  verificationResolvers,
  postResolvers,
  followResolver,
  searchResolvers
];

export default resolvers;
