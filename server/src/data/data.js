const products = [
  {
    category: 'Starters',
    name: 'Honey Chilli Potato',
    description: 'Crispy honey chilli potato wedges to feed the friendly gossip n cravings.',
    price: 229,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/009/d1312101293308fb4cf9fec48616a009.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/009/d1312101293308fb4cf9fec48616a009.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Starters',
    name: 'Nachos with Salsa Cheese',
    description: 'Irresistible munch between a conversation with cheese and chilies.',
    price: 229,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/efb/20456863d74c6b31069b25ca7fcc9efb.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/efb/20456863d74c6b31069b25ca7fcc9efb.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Starters',
    name: 'Triple Fries',
    description: 'French fries, wedges, cheese sticks served together with 3 sauces [ketchup, tabasco mayo and salsa]',
    price: 229,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/bcf/b40cf411dc167629a82e915c7ddbabcf.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/bcf/b40cf411dc167629a82e915c7ddbabcf.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'Cheese N Onion Rings',
    category: 'Starters',
    description:
      'A deep fried snack recipe prepared from rings of onions. Onions are stuffed with grated mozzarella cheese mixed with mashed boiled potato.',
    price: 229,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/9e2/8e2439d022e36f5920487415e18f19e2.jpeg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/9e2/8e2439d022e36f5920487415e18f19e2.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Starters',
    name: 'Veggy Cigars',
    description:
      "Specialty dishes from around the world. Taste it, you'll love it! No cholesterol. No trans fat. No MSG. Product of Israel.",
    price: 229,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/1a3/637c5d564645a351d1a1d657668081a3.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/1a3/637c5d564645a351d1a1d657668081a3.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Starters',
    name: 'Veg Shaslik',
    description: 'Dices of cottage cheese and vegetables marinated and arranged on satay stick and grilled.',
    price: 229,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/06d/7cc4db9c949d8d38cf45307088df206d.jpeg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/06d/7cc4db9c949d8d38cf45307088df206d.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Starters',
    name: 'Tex Mex Quesadilla',
    description: 'Moon shape tortilla Filled with cheese, a savory mix of vegetables n beans, cooked on a griddle.',
    price: 229,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/a9c/99a57c932c530b331ec3009267947a9c.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/a9c/99a57c932c530b331ec3009267947a9c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Starters',
    name: 'Mezze Platter',
    description: 'Babaganoush, hummus, falafel, fattoush, olive, pickle, cheesy phyllo cigars.',
    price: 399,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/132/d489de2e4e97e2c25601e82410a87132.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/132/d489de2e4e97e2c25601e82410a87132.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Starters',
    name: 'Pesto Chicken',
    description: 'Strips of chicken flavoured with fresh pesto on satay sticks.',
    price: 329,
    stock: 10,
    type: 'nonveg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/637/7821c81597a5e31867b1b91ad6ab6637.jpeg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/637/7821c81597a5e31867b1b91ad6ab6637.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Starters',
    name: 'Shish Taouk',
    description: 'Traditional arabic kebab of juicy cubes of chicken marinated skewered and grilled.',
    price: 329,
    stock: 10,
    type: 'nonveg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/792/174bd5354149e8a6445d2f1d3e9ca792.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/792/174bd5354149e8a6445d2f1d3e9ca792.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Starters',
    name: 'Chicken Shawarma',
    description: 'Herb marinated chicken served with hummus and pita bread.',
    price: 349,
    stock: 10,
    type: 'nonveg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/c13/6b1318f4c5bb47ad036a5aece73fdc13.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/c13/6b1318f4c5bb47ad036a5aece73fdc13.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'Pocket Chimichangas Baked',
    category: 'Starters',
    description:
      "These baked chicken chimichangas are a healthier twist on the old classic. You won't even miss them being baked because they get nice and crispy.",
    price: 399,
    stock: 10,
    type: 'nonveg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/c06/a516d41b2c5b62423f8a504db5691c06.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/c06/a516d41b2c5b62423f8a504db5691c06.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'Triple Chicken Sampler',
    category: 'Starters',
    description:
      'The big-enough to share appetizer platter features a trio of sensational flavours: our spicy chicken wings, sesame jock chicken strips and herb marinated chicken served with humus, hot n spice, BBQ dip.',
    price: 449,
    stock: 10,
    type: 'nonveg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/1f0/b99a6df4fc7a607369e92f15a15d91f0.jpeg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/1f0/b99a6df4fc7a607369e92f15a15d91f0.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Starters',
    name: 'Chicken Snack Platter',
    description: 'Thai chicken satay, lebanese chicken kebab and chicken pentagon.',
    price: 449,
    stock: 10,
    type: 'nonveg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/398/45da3374d5f62bbbfa1e5cbc201da398.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/398/45da3374d5f62bbbfa1e5cbc201da398.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'Fish Croquettes',
    category: 'Starters',
    description:
      'A tasty recipe of croquettes confectioned with fish, onion, garlic. olive oil. milk, lemon, pepper and salt, wrapped in beaten egg and fried to perfection served with aioli sauce.',
    price: 449,
    stock: 10,
    type: 'nonveg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/87e/3074fd81929e212f3168036ad092987e.jpeg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/87e/3074fd81929e212f3168036ad092987e.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'Diet Bowl',
    category: 'Main Course',
    description:
      'The dietarians favourite order of garden vegetables sauteed in extra virgin olive oil and served with plain bread.',
    price: 349,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/666/7f9033a5147eb245e3b3a19c6cc10666.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/666/7f9033a5147eb245e3b3a19c6cc10666.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Main Course',
    name: 'Ratatouille',
    description: 'Gordon vegetables simmered in tomato sauce and served with herbed rice.',
    price: 399,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/891/05b6835ff3416ba5bbe3c81d8bec8891.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/891/05b6835ff3416ba5bbe3c81d8bec8891.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Main Course',
    name: 'Veg Au Gratin',
    description: 'Exotic vegetables with a golden crust on top and served in its traditional baking dish.',
    price: 399,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/6e5/dcf3654f29b878bb673d5a806952d6e5.jpeg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/666/7f9033a5147eb245e3b3a19c6cc10666.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'Grilled Cottage Cheese and Spinach',
    category: 'Main Course',
    description:
      'Golden fritters of mozzarella and cheddar cheese in a fine herbed coating. served with tomato sauce and saute vegetables.',
    price: 449,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/34e/97437c07ae7a5371396afbaa8cfc534e.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/34e/97437c07ae7a5371396afbaa8cfc534e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'Cheese Steaks',
    category: 'Main Course',
    description:
      'Cottage cheese spice rubbed, mushroom, tomatoes, bell pepper, onions and garlic cooked in pin piri sauce served on a bed of rice and seasonal vegetables.',
    price: 429,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/1f0/64985e8a16c13e45b1611d0fdfee21f0.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/1f0/64985e8a16c13e45b1611d0fdfee21f0.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'Cheese Steaks',
    category: 'Main Course',
    description:
      'Golden fritters of mozzarella and cheddar cheese in a fine herbed coating. served with tomato sauce and saute vegetables.',
    price: 449,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/ea7/be8cccd8655ae46d12466e76ada3aea7.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/ea7/be8cccd8655ae46d12466e76ada3aea7.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'Grilled Breast of Chicken',
    category: 'Main Course',
    description:
      "Melbourne's beloved tutto bene are well known for their risottos. this caprese risotto is one of their lighter options, making it perfect for the summer months.",
    price: 449,
    stock: 10,
    type: 'nonveg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/149/7fa1b275efefae160136f647f7da3149.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/149/7fa1b275efefae160136f647f7da3149.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'Pepper Chicken',
    category: 'Main Course',
    description:
      'Grilled chicken cutlets simmered in pepper n cream sauce, served with garlic bread, sauteed vegetables and pasta.',
    price: 479,
    stock: 10,
    type: 'nonveg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/2ac/758500911f5a8f830f2b5c8fe08e72ac.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/2ac/758500911f5a8f830f2b5c8fe08e72ac.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Main Course',
    name: 'Red Wine Chicken',
    description: 'Chicken simmered in flavourful red wine sauce served with herbed rice.',
    price: 479,
    stock: 10,
    type: 'nonveg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/ece/b9d1081e2d059ae3d70deb0f6ec41ece.jpeg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/ece/b9d1081e2d059ae3d70deb0f6ec41ece.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Main Course',
    name: 'Fish with Florentine Sauce',
    description: 'Grilled fillet of fish in herbed mushroom sauce with rice and greens.',
    price: 479,
    stock: 10,
    type: 'nonveg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/640/25ae15e35a20451bcf23850246ef1640.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/640/25ae15e35a20451bcf23850246ef1640.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'South African Roast Chicken',
    category: 'Main Course',
    description:
      "A purely continental prep, herbed marinated chicken broiler roasted, the authentic way, served with jacket potatoes, a ’la' jus.",
    price: 499,
    stock: 10,
    type: 'nonveg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/922/53c8f920ed36424db6998da91c02c922.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/922/53c8f920ed36424db6998da91c02c922.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'Florentine Chicken',
    category: 'Main Course',
    description:
      'Chicken fillets stuffed with spinach n mushroom, cheddar cheese, simmered in cream sauce with a hint of garlic.',
    price: 499,
    stock: 10,
    type: 'nonveg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/0bc/f8babc7ced39ef524ba4c9207e7a50bc.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/0bc/f8babc7ced39ef524ba4c9207e7a50bc.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'Grilled Fish with Lemon Butter Sauce',
    category: 'Main Course',
    description:
      'Grilled fish with lemon butter sauce is a very popular dish in European countries. This wonderful recipe will make your mouth water when you have a bite of this lemon butter spiced fillets.',
    price: 499,
    stock: 10,
    type: 'nonveg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/3b9/954ed67b957f1caef22b853727b953b9.jpeg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/3b9/954ed67b957f1caef22b853727b953b9.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'Garlic Butter Prawns',
    category: 'Main Course',
    description:
      'Brown rice is groat in terms of nutritional and make a classic italian risotto, provides a creamy texture to the dish in a healthier manner without starch and gives out a royal flash with saffron infused to it.',
    price: 549,
    stock: 10,
    type: 'nonveg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/d33/ed9b0549596eabc4c40dfd3372d12d33.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/d33/ed9b0549596eabc4c40dfd3372d12d33.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Desserts',
    name: 'Brownie with Hot Chocolate',
    description: 'Hot brownie with chocolate sauce.',
    price: 295,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/d73/3fa10ab9873f7977a19834cef5e48d73.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/d73/3fa10ab9873f7977a19834cef5e48d73.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Desserts',
    name: 'Eggless Pineapple Pastry',
    description: 'Sumptuous pineapple flavored old fashioned pastry.',
    price: 109,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/f31/895a3051fee477b3b32b5f8e6f73bf31.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/f31/895a3051fee477b3b32b5f8e6f73bf31.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Desserts',
    name: 'Choco Truffle Ball',
    description: 'Crispy and mild tart filled with apple pieces and flavored with cinnamon and sugar.',
    price: 35,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/eae/bcca044558e167feab97f36f3f31eeae.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/eae/bcca044558e167feab97f36f3f31eeae.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Desserts',
    name: 'Butter Scotch Pastry',
    description: 'Give in to your Butter scotch cravings with a unique combination deserved \nto be tried once',
    price: 109,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/b93/1a70a512363e5d10ea667d6d5af33b93.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/b93/1a70a512363e5d10ea667d6d5af33b93.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Desserts',
    name: 'Eggless Chocolate Truffle Pastry',
    description: 'Lavishing drippy chocolate treasured \nwith velvety rich Chocó base.',
    price: 149,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/df5/6472d87b887bc58237e25e4724eacdf5.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/df5/6472d87b887bc58237e25e4724eacdf5.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Desserts',
    name: 'Blueberry Cheesecake Slice',
    description: 'Pleasurable cream cheese pre- sliced with dripping blueberry highly irresistible.',
    price: 149,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/454/087d829aba9b47457f063635c90fd454.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/454/087d829aba9b47457f063635c90fd454.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'Eggless Red velvet pastry',
    category: 'Desserts',
    description:
      'A “mahogany” colored layer cake slice with white cream icing with a distinctive fluffy texture & white chocolate overload.',
    price: 149,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/4f7/e7adec06bb70869e77c01f505e43e4f7.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/4f7/e7adec06bb70869e77c01f505e43e4f7.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Desserts',
    name: 'German Black Forest Pastry',
    description: 'Comforting Choco Crunch wall With Lovingly Spread of Choco Shaving\nand whipped cream',
    price: 129,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/a7b/639a9bef1924f45a2bbc2330a8264a7b.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/a7b/639a9bef1924f45a2bbc2330a8264a7b.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Desserts',
    name: 'Fresh Fruit Pastry',
    description: 'Surprising nectarous fruits layered and topped freshly made pastry',
    price: 129,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/a1e/e4bf33f8cbc3019534c97acc38087a1e.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/a1e/e4bf33f8cbc3019534c97acc38087a1e.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'Eggless Banoffee Pie',
    category: 'Desserts',
    description:
      'An irresistible English dessert pie has its share of fanatics banana slices, Sticky toffee & whipped Cream arranged in layers.',
    price: 149,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/91a/171d40955d74baf3908eb929e79bf91a.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/91a/171d40955d74baf3908eb929e79bf91a.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Desserts',
    name: 'Chocolate Mousse Jar Cake',
    description: 'Truffle layers of Chocó mousse and cake base stuffed in a jar, so you can satisfy your cravings.',
    price: 199,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/b5c/785c663e2cacd54b2201d575126eeb5c.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/b5c/785c663e2cacd54b2201d575126eeb5c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    name: 'Jar Cake Combo',
    category: 'Desserts',
    description:
      'Red Velvet Jar Cake+Chocolate Mousse Jar Cake \nNow enjoy a chocolate  mousse jar and  red velvet jar together do let us know which one u liked.....Both are eggless [veg]',
    price: 399,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/3ae/c95e9a643d156913820658b9fe3713ae.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/3ae/c95e9a643d156913820658b9fe3713ae.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Drinks',
    name: 'Fizzy Iced Tea (Glass Bottle Delivered)',
    description: 'Add the pop and soda in ice tea, & fizz out the heat.',
    price: 149,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/9c7/0f7b4a1619d654284c32569a320219c7.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/9c7/0f7b4a1619d654284c32569a320219c7.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Drinks',
    name: 'Lemon Mint Ice Tea [Glass Bottle Delivered]',
    description: 'A delightful mix of lemon tea with freshness of mint, served chilled',
    price: 149,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/3a2/261d10f222f6db22937135ff5ec973a2.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/3a2/261d10f222f6db22937135ff5ec973a2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Drinks',
    name: 'Lemon Ice Tea [Glass Bottle Delivered]',
    description: 'Ice Tea with all the goodness of lemon.',
    price: 179,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/187/e44b2bb393d2c33a507eb7d9dd817187.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/187/e44b2bb393d2c33a507eb7d9dd817187.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Drinks',
    name: 'Cold Coffee (Glass Bottle Delivered)',
    description: 'Dark colored and cool , a true Italian',
    price: 179,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/c49/d5afc422239f2e4237635f1088eb8c49.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/c49/d5afc422239f2e4237635f1088eb8c49.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Drinks',
    name: 'Grape Cut [Glass Bottle Delivered]',
    description: 'Fresh grape crush with tang of lemon.',
    price: 179,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/615/f55babf11314e0bb84de2a29ce663615.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/615/f55babf11314e0bb84de2a29ce663615.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Drinks',
    name: 'Lime & Mint Kaipiroshka [Glass Bottle Delivered ]',
    description: 'Enjoy a twist in pina colada, with a hint of lemon & black grapes.',
    price: 179,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/537/7f4b3b02c9772a462db173df8b4d6537.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/537/7f4b3b02c9772a462db173df8b4d6537.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Drinks',
    name: 'Tropical Dream [Glass Bottle Delivered]',
    description: 'Sip in the exotic dream with mango, litchi, kiwi, orange and grapes and a hint of lemon.',
    price: 179,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/017/b5e8990f1384e33966d060cdbe5ee017.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/017/b5e8990f1384e33966d060cdbe5ee017.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
  {
    category: 'Drinks',
    name: 'Frappe [Glass Bottle Delivered ]',
    description: 'Refreshing cold coffee blended with vanilla ice cream.',
    price: 199,
    stock: 10,
    type: 'veg',
    image_url: 'https://b.zmtcdn.com/data/dish_photos/d36/427160fc1ab3d66093c54bc96ee72d36.jpg',
    image_thumb_url:
      'https://b.zmtcdn.com/data/dish_photos/d36/427160fc1ab3d66093c54bc96ee72d36.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  },
];

const users = [
  {
    name: 'User One',
    email: 'user.one@gmail.com',
    password: '!RestaurantProdUser01!',
    role: 'user',
  },
  {
    name: 'User Two',
    email: 'user.two@gmail.com',
    password: '!RestaurantProdUser02!',
    role: 'user',
  },
  {
    name: 'User Three',
    email: 'user.three@gmail.com',
    password: '!RestaurantProdUser03!',
    role: 'user',
  },
];

module.exports = {
  products,
  users,
};
