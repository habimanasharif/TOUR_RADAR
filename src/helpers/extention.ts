/* eslint-disable import/prefer-default-export */
export default (file:string) => {
  const ext = file.split('.').pop();
  return ext;
};
