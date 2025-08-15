const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { orderValidation } = require('../../validations');
const { orderController } = require('../../controllers');

const router = express.Router();

router.route('/').get(auth('getOrder'), orderController.getUserOrders);
router
  .route('/:orderId')
  .get(auth('getOrder'), validate(orderValidation.getOrderByOrderId), orderController.getOrderByOrderId);
router.route('/all').get(auth('getOrders'), validate(orderValidation.getOrders), orderController.getOrders);

module.exports = router;

// TODO -  Add Swagger Documentation
