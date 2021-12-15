/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import query from './query';
import { mutation } from './mutation';
import { userType, AdminType, verificationType } from './types';

const typeDefs = [query, mutation, userType, AdminType, verificationType];

export {
  typeDefs,
};
