/* eslint-disable import/extensions */
import userResolvers from './userResolvers';
import { adminResolvers } from './adminResolvers';
import { verificationResolvers } from './verificationResolvers';

const resolvers = [userResolvers, adminResolvers, verificationResolvers];

export default resolvers;
