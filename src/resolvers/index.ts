/* eslint-disable import/extensions */
import userResolvers from './userResolvers';
import { adminResolvers } from './adminResolvers';
import { verificationResolvers } from './verificationResolvers';
import postResolvers from './postResolver';

const resolvers = [userResolvers, adminResolvers, verificationResolvers, postResolvers];

export default resolvers;
