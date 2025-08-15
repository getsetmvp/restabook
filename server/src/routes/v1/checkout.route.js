const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { checkoutValidation } = require('../../validations');
const { checkoutController } = require('../../controllers');

const router = express.Router();

router.post('/', auth('checkout'), validate(checkoutValidation.checkout), checkoutController.checkout);

module.exports = router;

// TODO -  Add Swagger Documentation
