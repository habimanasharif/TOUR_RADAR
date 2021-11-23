import Joi from "@hapi/joi"
export default Joi.object().keys({
    firstname: Joi.string().min(3).max(30).required(),
    lastname: Joi.string().min(3).max(30).required(),
    username: Joi.string().required()
      .regex(/^[a-z0-9_.]{3,25}$/),
    password: Joi.string().min(3).max(25).required(),
    email: Joi.string().required().email(),
  
  }).options({ allowUnknown: false });