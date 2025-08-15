const { Reservation } = require('../models');

/**
 * Create a reservation
 * @param {Object} reservationBody
 * @returns {Promise<Reservation>}
 */
const createReservation = async (reservationBody) => {
  return Reservation.create(reservationBody);
};

/**
 * Get reservations by user id
 * @param {ObjectId} user
 * @returns {Promise<Reservation>}
 */
const getUserReservations = async (user) => {
  return Reservation.find({ user }).select('-user');
};

/**
 * Query for reservation
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryReservations = async (filter, options) => {
  const reservation = await Reservation.paginate(filter, options);
  return reservation;
};

module.exports = {
  createReservation,
  getUserReservations,
  queryReservations,
};
