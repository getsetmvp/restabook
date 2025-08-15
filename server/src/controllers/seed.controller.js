const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { seedService } = require('../services');

const resetDB = catchAsync(async (req, res) => {
  await seedService.resetDB();
  res.status(httpStatus.RESET_CONTENT).send();
});

module.exports = {
  resetDB,
};
