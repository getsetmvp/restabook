const express = require('express');
const authRoute = require('./auth.route');
const seedRoute = require('./seed.route');
const userRoute = require('./user.route');
const productRoute = require('./product.route');
const reviewRoute = require('./review.route');
const contactRoute = require('./contact.route');
const cartRoute = require('./cart.route');
const checkoutRoute = require('./checkout.route');
const orderRoute = require('./order.route');
const reservationRoute = require('./reservation.route');
const webhookRoute = require('./webhook.route');
const healthRoute = require('./health.route');
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/health',
    route: healthRoute,
  },
  {
    path: '/seed',
    route: seedRoute,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/reviews',
    route: reviewRoute,
  },
  {
    path: '/contact',
    route: contactRoute,
  },
  {
    path: '/cart',
    route: cartRoute,
  },
  {
    path: '/checkout',
    route: checkoutRoute,
  },
  {
    path: '/order',
    route: orderRoute,
  },
  {
    path: '/reservation',
    route: reservationRoute,
  },
  {
    path: '/webhook',
    route: webhookRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
