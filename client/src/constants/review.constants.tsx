/**
 * This file will contain all constants related to the cards
 */

interface ReviewI {
  img: string;
  name: string;
  rating: number;
  review: string;
  number: string;
}

export const Reviews: ReviewI[] = [
  {
    img: "1.jpg",
    name: "Andy Dimasky",
    rating: 5,
    review:
      "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. ",
    number: "01.",
  },
  {
    img: "2.jpg",
    name: "Frank Dellov",
    rating: 4,
    review:
      "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. ",
    number: "02.",
  },
  {
    img: "3.jpg",
    name: "Centa Simpson",
    rating: 5,
    review:
      "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. ",
    number: "03.",
  },
  {
    img: "4.jpg",
    name: "Nicolo Svensky",
    rating: 5,
    review:
      "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. ",
    number: "04.",
  },
];
