const mongoose = require('mongoose');
const { paginate } = require('./plugins');

const reservationSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    persons: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// add plugins
reservationSchema.plugin(paginate);

/**
 * @typedef Reservation
 */
const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
