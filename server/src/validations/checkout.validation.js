const Joi = require('joi');

const checkout = {
  body: Joi.object().keys({
    orderId: Joi.string().required(),
    items: Joi.array().items(
      Joi.object().keys({
        _id: Joi.string().required(),
        product: Joi.object().required().keys({
          _id: Joi.string().required(),
          name: Joi.string().required(),
          description: Joi.string().required(),
          image_url: Joi.string().required(),
        }),
        qty: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
        total: Joi.number().integer().required(),
      }),
    ),
  }),
};
module.exports = {
  checkout,
};
