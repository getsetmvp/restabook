const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { orderService } = require('../services');

const getOrders = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['user', 'orderId', 'customer', 'payment_status', 'delivery_status']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await orderService.queryOrders(filter, options);
  res.send(result);
});

const getOrderByOrderId = catchAsync(async (req, res) => {
  const order = await orderService.getOrderByOrderId(req.params.orderId);
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not found');
  }
  res.send(order);
});

const getUserOrders = catchAsync(async (req, res) => {
  const orders = await orderService.getUserOrders(req.user.id);
  res.send(orders);
});

module.exports = {
  getOrders,
  getOrderByOrderId,
  getUserOrders,
};
