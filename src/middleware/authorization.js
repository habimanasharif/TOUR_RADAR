/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/extensions */
import { AuthenticationError } from 'apollo-server';
import config from '../config';
import { verify } from '../helpers/jwt';

// eslint-disable-next-line import/prefer-default-export
const decodeToken = async (ctx) => {
  try {
    if (!ctx.user.token) throw new Error('Invalid access token');
    const user = await verify(ctx.user.token.split(' ')[1]);
    return user;
  } catch (error) {
    throw error;
  }
};

const isUser = async (ctx) => {
  const user = await decodeToken(ctx);
  if (user.role != 'user') throw new AuthenticationError('AUTHENTICATION ERROR');
  return user.id;
};
export { isUser };
