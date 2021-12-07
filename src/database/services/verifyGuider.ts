/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/extensions */
import verifyGuider from '../modals/verifyGuider';

class VerifyGuider {
  static async requestVerification(data:any) {
    try {
      return await verifyGuider.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async findrequest(data:any) {
    try {
      return await verifyGuider.findOne(data);
    } catch (error) {
      throw error;
    }
  }
}
export default VerifyGuider;
