/* eslint-disable import/extensions */
import userResolvers from './userResolvers';
import { adminResolvers } from './adminResolvers';
import { verificationResolvers } from './verificationResolvers';
import postResolvers from './postResolver';
import followResolver from './followResolver';

const resolvers = [
  userResolvers,
  adminResolvers,
  verificationResolvers,
  postResolvers,
  followResolver
];

export default resolvers;
