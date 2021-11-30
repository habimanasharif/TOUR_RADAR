/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/extensions */
import Users from '../modals/users';

class UserService {
  static async signUp(newUser:any) {
    try {
      return await Users.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async findUser(data:any) {
    try {
      return await Users.findOne(data);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(filter:any, update:any) {
    try {
      return await Users.findOneAndUpdate(filter, update, { new: true });
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
