/* eslint-disable import/extensions */
import mongoose from 'mongoose';
import config from '../config';

export default async () => {
  await mongoose.connect(config.MONGO_URI as string,)
    .then(() => {
      console.log('Database Connected');
    })
    .catch((err) => {
      console.log(err);
    });
};
