const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { reservationValidation } = require('../../validations');
const { reservationController } = require('../../controllers');

const router = express.Router();

router
  .route('/')
  .get(auth('getReservation'), reservationController.getUserReservations)
  .post(
    auth('createReservation'),
    validate(reservationValidation.createReservation),
    reservationController.createReservation,
  );
router
  .route('/all')
  .get(auth('getReservations'), validate(reservationValidation.getReservations), reservationController.getReservations);

module.exports = router;

// TODO -  Add Swagger Documentation
