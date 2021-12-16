import Joi from '@hapi/joi';

export default Joi.object().keys({
  firstname: Joi.string().min(3).max(30),
  lastname: Joi.string().min(3).max(30),
  bio: Joi.string().min(10).max(700)

}).options({ allowUnknown: false });
