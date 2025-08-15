const rateLimit = require('express-rate-limit');
const config = require('../config/config');

const rateLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs, // Already converted to milliseconds in config
  limit: config.rateLimit.max, // Updated property name from 'max' to 'limit'
  message: {
    error: 'Too many requests from this IP, please try again later.',
  },
  standardHeaders: 'draft-7', // Use draft-7 headers format
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  validate: {
    trustProxy: false, // Explicit trust proxy setting
  },
});

module.exports = {
  rateLimiter,
};
