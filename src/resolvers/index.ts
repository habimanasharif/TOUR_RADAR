/* eslint-disable import/extensions */
import userResolvers from './userResolvers';
import { adminResolvers } from './adminResolvers';

const resolvers = [userResolvers, adminResolvers];

export default resolvers;
