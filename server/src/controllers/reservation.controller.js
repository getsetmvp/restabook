const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { reservationService } = require('../services');

const createReservation = catchAsync(async (req, res) => {
  const reservation = await reservationService.createReservation({ ...req.body, user: req.user.id });
  res.status(httpStatus.CREATED).send(reservation);
});

const getReservations = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['user', 'name', 'persons', 'date']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await reservationService.queryReservations(filter, options);
  res.send(result);
});

const getUserReservations = catchAsync(async (req, res) => {
  const reservations = await reservationService.getUserReservations(req.user.id);
  res.send(reservations);
});

module.exports = {
  createReservation,
  getReservations,
  getUserReservations,
};
