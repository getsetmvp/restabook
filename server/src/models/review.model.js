const mongoose = require('mongoose');
const { paginate } = require('./plugins');

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    product: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Product',
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// add plugins
reviewSchema.plugin(paginate);

/**
 * @typedef Review
 */
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
