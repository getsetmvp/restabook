const mongoose = require('mongoose');

const itemSchema = mongoose.Schema(
  {
    product: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Product',
      required: true,
    },
    qty: {
      type: Number,
      required: true,
      min: [1, 'Quantity can not be less than 1'],
    },
    price: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [itemSchema],
  subtotal: {
    type: Number,
    default: 0,
  },
  total: {
    type: Number,
    default: 0,
  },
});

/**
 * @typedef Cart
 */
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
