const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createReview = {
  body: Joi.object().keys({
    product: Joi.string().custom(objectId).required(),
    rating: Joi.number().integer().required().valid(1, 2, 3, 4, 5),
    review: Joi.string().required(),
  }),
};

const getReviews = {
  query: Joi.object().keys({
    user: Joi.string().custom(objectId),
    product: Joi.string().custom(objectId),
    rating: Joi.alternatives().try(Joi.number().integer(), Joi.array()),
    approved: Joi.boolean(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getReview = {
  params: Joi.object().keys({
    reviewId: Joi.string().custom(objectId),
  }),
};

const updateReview = {
  params: Joi.object().keys({
    reviewId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      rating: Joi.number().integer().valid(1, 2, 3, 4, 5),
      review: Joi.string(),
      approved: Joi.boolean(),
    })
    .min(1),
};

const deleteReview = {
  params: Joi.object().keys({
    reviewId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createReview,
  getReviews,
  getReview,
  updateReview,
  deleteReview,
};
