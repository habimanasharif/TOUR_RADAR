/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import signUpSchema from './schema/user/signup';
import updateSchema from './schema/user/update';

export const signUp = ({
  firstname, lastname, username, password, email
}:{firstname:string, lastname:string, username:string, password:string, email:string}) => {
  validator(signUpSchema, {
    firstname, lastname, username, password, email
  });
};
export const update = (payload:any) => {
  validator(updateSchema, payload);
};
