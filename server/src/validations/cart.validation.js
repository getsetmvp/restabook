const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createCart = {
  body: Joi.object().keys({
    items: Joi.array().items(
      Joi.object().keys({
        product: Joi.string().required().custom(objectId),
        qty: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
        total: Joi.number().integer().required(),
      }),
    ),
    subTotal: Joi.number().integer(),
    total: Joi.number().integer(),
  }),
};

const addItemToCart = {
  body: Joi.object().keys({
    item: Joi.object()
      .required()
      .keys({
        product: Joi.string().required().custom(objectId),
        qty: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
        total: Joi.number().integer().required(),
      }),
  }),
};

const removeItemFromCart = {
  body: Joi.object().keys({
    item: Joi.object()
      .required()
      .keys({
        product: Joi.string().required().custom(objectId),
        qty: Joi.number().integer().required(),
        price: Joi.number().integer().required(),
        total: Joi.number().integer().required(),
      }),
  }),
};

module.exports = {
  createCart,
  addItemToCart,
  removeItemFromCart,
};
