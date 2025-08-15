const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { cartValidation } = require('../../validations');
const { cartController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .post(auth('manageCart'), validate(cartValidation.createCart), cartController.createCart)
  .get(auth('manageCart'), cartController.getCart)
  .delete(auth('manageCart'), cartController.deleteCart);

router.route('/clear').get(auth('manageCart'), cartController.clearCart);
router.route('/add').post(auth('manageCart'), validate(cartValidation.addItemToCart), cartController.addItemToCart);
router
  .route('/remove')
  .post(auth('manageCart'), validate(cartValidation.removeItemFromCart), cartController.removeItemFromCart);

module.exports = router;

// TODO -  Add Swagger Documentation
