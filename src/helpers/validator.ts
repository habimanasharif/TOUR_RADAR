import { UserInputError } from 'apollo-server';

export default (schema:any, toValidate:any,) => {
  const { error } = schema.validate(toValidate);
  if (error) {
    throw new UserInputError('VALIDATION ERROR', { validationErros: error.details });
  }
};
