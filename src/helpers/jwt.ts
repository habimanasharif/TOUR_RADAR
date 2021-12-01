/* eslint-disable import/extensions */
import jwt from 'jsonwebtoken';
import config from '../config';

export const sign = (payload:any) => jwt.sign(payload, config.JWT_SECRET as string);
export const verify = (payload:any) => jwt.verify(payload, config.JWT_SECRET as string);
