const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { emailService } = require('../services');

const contact = catchAsync(async (req, res) => {
  await emailService.sendEmail(req.body.email, 'User Contacted', JSON.stringify(req.body));
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  contact,
};
