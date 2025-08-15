const express = require('express');
const { webhookController } = require('../../controllers');

const router = express.Router();

router.post('/stripe', webhookController.stripeWebhook);

module.exports = router;

// TODO -  Add Swagger Documentation
