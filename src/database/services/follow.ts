/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/extensions */
import Follow from '../modals/follow';

class FollowService {
  static async createFollow(data:any) {
    try {
      return await Follow.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async findFollowing(user:string, following:string) {
    try {
      return await Follow.find({ $and: [{ following }, { owner: user }] });
    } catch (error) {
      throw error;
    }
  }

  static async follow(filter:any, update:string) {
    try {
      return await Follow.findOneAndUpdate(filter, { $push: { following: update } }, { new: true });
    } catch (error) {
      throw error;
    }
  }

  static async follower(filter:any, update:string) {
    try {
      return await Follow.findOneAndUpdate(filter, { $push: { followers: update } }, { new: true });
    } catch (error) {
      throw error;
    }
  }
}

export default FollowService;
