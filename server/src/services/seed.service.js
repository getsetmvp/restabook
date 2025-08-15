const { User, Product, Review, Cart, Token, Order, Reservation } = require('../models');
const { products, users } = require('../data/data');

const resetDB = async () => {
  return Promise.all([
    Token.deleteMany({}),
    Product.deleteMany({}),
    Product.insertMany(products),
    User.deleteMany({ role: 'user' }),
    Cart.deleteMany({}),
    users.map(async (user) => {
      const createdUser = await User.create(user);
      await Cart.create({ user: createdUser._id, items: [] });
    }),
    Review.deleteMany({}),
    Order.deleteMany({}),
    Reservation.deleteMany({}),
  ]);
};

module.exports = {
  resetDB,
};
