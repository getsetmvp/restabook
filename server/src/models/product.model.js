const mongoose = require('mongoose');
const { paginate } = require('./plugins');

const productSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ['veg', 'nonveg'],
    },
    image_url: {
      type: String,
      required: true,
    },
    image_thumb_url: {
      type: String,
      required: true,
    },
    ratings: {
      type: mongoose.SchemaTypes.Mixed,
      1: Number,
      2: Number,
      3: Number,
      4: Number,
      5: Number,
      default: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    },
    avgRating: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

// add plugins
productSchema.plugin(paginate);

/**
 * @typedef Product
 */
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
