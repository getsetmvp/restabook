const Joi = require('joi');

const contact = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    subject: Joi.string().required(),
    message: Joi.string().required(),
  }),
};

module.exports = {
  contact,
};
