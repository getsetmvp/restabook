const httpStatus = require('http-status');
const Stripe = require('stripe');
const { stripeApiKey } = require('../config/config');
const logger = require('../config/logger');
const { orderService } = require('../services');
const catchAsync = require('../utils/catchAsync');

const stripeWebhook = catchAsync(async (req, res) => {
  const stripe = Stripe(stripeApiKey);
  const event = req.body;

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed': {
      const data = event.data.object;
      const customer = await stripe.customers.retrieve(data.customer);
      await orderService.createOrder({
        user: customer.metadata.userId,
        orderId: customer.metadata.orderId,
        customer: data.customer,
        payment_intent: data.payment_intent,
        items: JSON.parse(customer.metadata.items).map((item) => {
          return {
            ...item,
            price: item.price / 100,
          };
        }),
        subtotal: data.amount_subtotal / 100,
        total: data.amount_total / 100,
        shipping_address: {
          city: data.shipping.address.city,
          country: data.shipping.address.country,
          address_line_1: data.shipping.address.line1,
          address_line_2: data.shipping.address.line2,
          pincode: data.shipping.address.postal_code,
          state: data.shipping.address.state,
        },
        payment_status: data.payment_status,
      });
      break;
    }
    // ... handle other event types
    default: {
      logger.info(`Unhandled event type ${event.type}`);
    }
  }

  // Return a 200 response to acknowledge receipt of the event
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  stripeWebhook,
};
