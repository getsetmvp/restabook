const mongoose = require('mongoose');
const { paginate } = require('./plugins');

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

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    orderId: {
      type: String,
      required: true,
    },
    customer: {
      type: String,
      required: true,
    },
    payment_intent: {
      type: String,
      required: true,
    },
    items: [itemSchema],
    subtotal: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    shipping_address: {
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      address_line_1: {
        type: String,
        required: true,
      },
      address_line_2: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
    },
    delivery_status: {
      type: String,
      default: 'pending',
      enum: ['pending', 'on the way', 'delivered'],
    },
    payment_status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// add plugin that converts mongoose to json
orderSchema.plugin(paginate);

/**
 * @typedef Order
 */
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
