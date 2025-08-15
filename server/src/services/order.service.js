const { Order } = require('../models');

/**
 * Create a order
 * @param {Object} orderBody
 * @returns {Promise<Order>}
 */
const createOrder = async (orderBody) => {
  return Order.create(orderBody);
};

/**
 * Get order by order id
 * @param {string} orderId
 * @returns {Promise<Order>}
 */
const getOrderByOrderId = async (orderId) => {
  return Order.findOne({ orderId }).populate({ path: 'items.product' }).select('-user');
};

/**
 * Get orders by user id
 * @param {ObjectId} user
 * @returns {Promise<Order>}
 */
const getUserOrders = async (user) => {
  return Order.find({ user }).populate({ path: 'items.product' }).select('-user');
};

/**
 * Query for orders
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryOrders = async (filter, options) => {
  const orders = await Order.paginate(filter, options);
  return orders;
};

module.exports = {
  createOrder,
  getOrderByOrderId,
  getUserOrders,
  queryOrders,
};
