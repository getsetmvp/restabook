const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createProduct = {
  body: Joi.object().keys({
    category: Joi.string().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().integer().required(),
    stock: Joi.number().integer().required(),
    type: Joi.string().required().valid('veg', 'nonveg'),
    image_url: Joi.string().required(),
    image_thumb_url: Joi.string().required(),
    ratings: Joi.object().keys({
      1: Joi.number().integer(),
      2: Joi.number().integer(),
      3: Joi.number().integer(),
      4: Joi.number().integer(),
      5: Joi.number().integer(),
    }),
    avgRating: Joi.number().integer(),
    reviews: Joi.number().integer(),
  }),
};

const getProducts = {
  query: Joi.object().keys({
    name: Joi.alternatives().try(Joi.string(), Joi.array()),
    category: Joi.alternatives().try(Joi.string(), Joi.array()),
    type: Joi.alternatives().try(Joi.string().valid('veg', 'nonveg'), Joi.array()),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

const updateProduct = {
  params: Joi.object().keys({
    productId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      category: Joi.string().required(),
      name: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().integer().required(),
      stock: Joi.number().integer().required(),
      type: Joi.string().required().valid('veg', 'nonveg'),
      image_url: Joi.string().required(),
      image_thumb_url: Joi.string().required(),
      ratings: Joi.object().keys({
        1: Joi.number().integer(),
        2: Joi.number().integer(),
        3: Joi.number().integer(),
        4: Joi.number().integer(),
        5: Joi.number().integer(),
      }),
      reviews: Joi.number().integer(),
    })
    .min(1),
};

const deleteProduct = {
  params: Joi.object().keys({
    productId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
