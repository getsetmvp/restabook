const Stripe = require('stripe');
const { stripeApiKey, clientUrl } = require('../config/config');
const catchAsync = require('../utils/catchAsync');

const checkout = catchAsync(async (req, res) => {
  const stripe = Stripe(stripeApiKey);
  const { items, orderId } = req.body;
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.user.id,
      orderId,
      items: JSON.stringify(
        req.body.items.map((item) => {
          return {
            ...item,
            product: item.product._id,
          };
        }),
      ),
    },
  });
  const session = await stripe.checkout.sessions.create({
    line_items: items.map((item) => {
      return {
        price_data: {
          currency: 'inr',
          product_data: {
            name: item.product.name,
            images: [item.product.image_url],
            description: item.product.description,
            metadata: {
              id: item._id,
            },
          },
          unit_amount: item.price,
        },
        quantity: item.qty,
      };
    }),
    phone_number_collection: {
      enabled: true,
    },
    shipping_address_collection: {
      allowed_countries: ['IN'],
    },
    customer: customer.id,
    mode: 'payment',
    success_url: `${clientUrl}/checkout/success/${orderId}`,
    cancel_url: `${clientUrl}/cart`,
  });
  res.send({ url: session.url });
});

module.exports = {
  checkout,
};
