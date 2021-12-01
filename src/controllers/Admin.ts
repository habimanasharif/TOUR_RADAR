/* eslint-disable brace-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable indent */
import { UserInputError } from 'apollo-server';
import { sign } from '../helpers/jwt';
import confing from '../config';

class Admin {
static async AdminLogin(parent:any, { password, username }:{password:string, username:string}, ctx:any) {
    if (username !== confing.username || password !== confing.password)

    // eslint-disable-next-line nonblock-statement-body-position
    { throw new UserInputError('WRONG CREDITENTIALS'); }

    const token = await sign({ role: 'admin' });

    return { token, role: 'admin' };
}
}
export { Admin };
