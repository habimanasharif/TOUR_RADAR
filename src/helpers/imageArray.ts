/* eslint-disable no-await-in-loop */
/* eslint-disable import/extensions */
/* eslint-disable no-plusplus */
import uploader from './storage';

export default async (array:any) => {
  const newarray = [];
  let image;
  const len = array.length;
  for (let i = 0; i < len; i++) {
    image = await uploader(array[i]);
    newarray[i] = image.secure_url;
  }
  return newarray;
};
