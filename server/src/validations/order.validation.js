const Joi = require('joi');
const { objectId } = require('./custom.validation');

const getOrders = {
  query: Joi.object().keys({
    user: Joi.custom(objectId),
    orderId: Joi.string(),
    customer: Joi.string(),
    delivery_status: Joi.string(),
    payment_status: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getOrderByOrderId = {
  params: Joi.object().keys({
    orderId: Joi.string().required(),
  }),
};

module.exports = {
  getOrders,
  getOrderByOrderId,
};
