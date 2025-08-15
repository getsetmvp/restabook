const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createReservation = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required(),
    date: Joi.date().greater(Date.now()).required(),
    persons: Joi.number().min(1).max(10).integer().required(),
    message: Joi.string().required(),
  }),
};

const getReservations = {
  query: Joi.object().keys({
    user: Joi.custom(objectId),
    name: Joi.string(),
    date: Joi.string(),
    persons: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

module.exports = {
  createReservation,
  getReservations,
};
