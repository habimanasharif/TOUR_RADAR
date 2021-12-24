/* eslint-disable brace-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable indent */
import { UserInputError } from 'apollo-server';
import { isUser } from '../middleware/authorization';
import UserService from '../database/services/users';
import FollowService from '../database/services/follow';

class Follow {
    static async follow(parent: any, { userId }: { userId: string }, ctx: any) {
        const id = await isUser(ctx);
        const followed = await UserService.findUser({ _id: userId });
        const follow = await UserService.findUser({ _id: id });
        if (!followed) throw new UserInputError('User Not found');
        if (!follow) throw new UserInputError('User Not Found');
        if (id === userId) throw new UserInputError("You can't Follow Yourself");
        const followExist = await FollowService.findFollowing(id, userId);
        if (followExist.length > 0) throw new Error('Already Following');
        await FollowService.follow({ owner: id }, userId);
        await FollowService.follower({ owner: userId }, id);
        return { message: 'User followed Succefully' };
    }
}
export { Follow };
