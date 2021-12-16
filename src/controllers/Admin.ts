/* eslint-disable brace-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable indent */
import { UserInputError } from 'apollo-server';
import { sign } from '../helpers/jwt';
import { isAdmin } from '../middleware/authorization';
import confing from '../config';
import VerifyGuiderService from '../database/services/verifyGuider';
import UserService from '../database/services/users';

class Admin {
static async AdminLogin(_parent:any, { password, username }:{password:string, username:string}, _ctx:any) {
    if (username !== confing.username || password !== confing.password)

    // eslint-disable-next-line nonblock-statement-body-position
    { throw new UserInputError('WRONG CREDITENTIALS'); }

    const token = await sign({ role: 'admin' });

    return { token, role: 'admin' };
}

static async Fetchverifications(_parent:any, _args:any, ctx:any) {
  const role = await isAdmin(ctx);
  const requests = VerifyGuiderService.fetchrequests();
  return requests;
}

static async verifyGuider(_parent:any, { email }:{email:string}, ctx:any) {
  const role = await isAdmin(ctx);
  const user = await UserService.findUser({ email });
  if (!user) throw new UserInputError('USER NOT FOUND');
  if (user.isVerified !== true) throw new UserInputError('USER NOT VERIFIED');
  const updateUser = UserService.updateUser({ email }, { isGuider: true });
  return updateUser;
}
}
export { Admin };
