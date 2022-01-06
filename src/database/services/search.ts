/* eslint-disable import/extensions */
import User from '../modals/users';

export default async (searchBy:any, payload:any, page:any, limit:any) => {
  try {
    let collection;
    let query;
    let fieldsToOmit = '-_v';
    fieldsToOmit += ' ';
    switch (searchBy.toLowerCase()) {
      case 'user':
        collection = User;
        query = { $or: [{ username: { $regex: `.*${payload}.*`, $options: 'i' }, isVerified: true }, { firstname: { $regex: `.*${payload}.*`, $options: 'i' }, isVerified: true }, { lastname: { $regex: `.*${payload}.*`, $options: 'i' }, isVerified: true }] };
        fieldsToOmit += '-createdAt -password';
        break;
      default:
        collection = User;
        query = { payload };
        break;
    }

    return await collection.find(query, fieldsToOmit)
      .skip((page - 1) * limit).limit(limit);
  } catch (error) {
    throw error;
  }
};
