const httpStatus = require('http-status');
const { Cart } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a cart
 * @param {Object} cartBody
 * @returns {Promise<Cart>}
 */
const createCart = async (cartBody) => {
  return Cart.create(cartBody);
};

/**
 * Get cart by user id
 * @param {string} user
 * @returns {Promise<Cart>}
 */
const getCartByUser = async (user) => {
  return Cart.findOne({ user }).select('-user');
};

/**
 * Get cart by user id
 * @param {string} user
 * @returns {Promise<Cart>}
 */
const getCartByUserWithPopulate = async (user) => {
  return Cart.findOne({ user }).populate({ path: 'items.product' }).select('-user');
};

/**
 * Clear user cart
 * @param {string} user
 * @returns {Promise<Cart>}
 */
const clearCart = async (user) => {
  const cart = await getCartByUser(user);
  cart.items = [];
  cart.subtotal = 0;
  cart.total = 0;
  await cart.save();
  return cart;
};

/**
 * Add item to cart
 * @param {ObjectId} user
 * @param {Object} item
 * @returns {Promise<Cart>}
 */
const addItemToCart = async (user, item) => {
  const cart = await getCartByUser(user);
  if (!cart) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cart not found');
  }

  const itemIdx = cart.items.findIndex((i) => i.product.equals(item.product));
  // Item already exists in the cart so update the qty
  if (itemIdx > -1) {
    cart.items[itemIdx].qty += item.qty;
    cart.items[itemIdx].total += item.total;
  }
  // Create a new item
  else {
    cart.items.push(item);
  }
  cart.subtotal += item.price * item.qty;
  cart.total += item.price * item.qty;
  await cart.save();
  return getCartByUserWithPopulate(user);
};

/**
 * Remove item from cart
 * @param {ObjectId} user
 * @param {Object} item
 * @returns {Promise<Cart>}
 */
const removeItemFromCart = async (user, item) => {
  const cart = await getCartByUser(user);
  if (!cart) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cart not found');
  }

  const itemIdx = cart.items.findIndex((i) => i.product.equals(item.product));
  // Item already exists in the cart
  if (itemIdx > -1) {
    if (cart.items[itemIdx].qty <= item.qty) {
      cart.items = cart.items.filter((i) => !i.product.equals(item.product));
    } else {
      cart.items[itemIdx].qty -= item.qty;
      cart.items[itemIdx].total -= item.total;
    }
    cart.subtotal -= item.price * item.qty;
    cart.total -= item.price * item.qty;
  }
  // Item not found
  else {
    throw new ApiError(httpStatus.NOT_FOUND, 'Item not found');
  }
  await cart.save();
  return getCartByUserWithPopulate(user);
};

/**
 * Delete cart by user
 * @param {ObjectId} user
 * @returns {Promise<Cart>}
 */
const deleteCartByUser = async (user) => {
  const cart = await getCartByUser(user);
  if (!cart) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cart not found');
  }
  await cart.remove();
  return cart;
};

module.exports = {
  createCart,
  getCartByUser,
  getCartByUserWithPopulate,
  clearCart,
  addItemToCart,
  removeItemFromCart,
  deleteCartByUser,
};
