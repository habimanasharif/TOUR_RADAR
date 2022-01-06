/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import query from './query';
import { mutation } from './mutation';
import {
  userType, AdminType, verificationType, PostType, MessageType, LikeType, CommentType
} from './types';

const typeDefs = [query, mutation, userType, AdminType, verificationType, PostType, MessageType, LikeType, CommentType];

export {
  typeDefs,
};
