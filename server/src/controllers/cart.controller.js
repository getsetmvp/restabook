const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { cartService } = require('../services');

const createCart = catchAsync(async (req, res) => {
  const cart = await cartService.createCart({ ...req.body, user: req.user.id });
  res.status(httpStatus.CREATED).send(cart);
});

const getCart = catchAsync(async (req, res) => {
  const cart = await cartService.getCartByUserWithPopulate(req.user.id);
  if (!cart) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Cart not found');
  }
  res.send(cart);
});

const clearCart = catchAsync(async (req, res) => {
  const cart = await cartService.clearCart(req.user.id);
  res.status(httpStatus.ACCEPTED).send(cart);
});

const addItemToCart = catchAsync(async (req, res) => {
  const cart = await cartService.addItemToCart(req.user.id, req.body.item);
  res.send(cart);
});

const removeItemFromCart = catchAsync(async (req, res) => {
  const cart = await cartService.removeItemFromCart(req.user.id, req.body.item);
  res.send(cart);
});

const deleteCart = catchAsync(async (req, res) => {
  await cartService.deleteCartByUser(req.user.id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createCart,
  getCart,
  clearCart,
  addItemToCart,
  removeItemFromCart,
  deleteCart,
};
