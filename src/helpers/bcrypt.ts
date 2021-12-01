/* eslint-disable max-len */
import { hash, genSalt, compareSync } from 'bcrypt';

export const generate = async (password:string) => hash(password, await (0 as any, genSalt)(10));
export const check = (hashedPassword:string, password:string) => compareSync(password, hashedPassword);
