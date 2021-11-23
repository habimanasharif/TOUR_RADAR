import Joi from "@hapi/joi"
import { UserInputError } from 'apollo-server';
export default (schema:any, toValidate:any,) => {
  const { error } = schema.validate(toValidate);
  if(error){
    throw new UserInputError("VALIDATION ERRO",{validationErros:error.details});
 }
};