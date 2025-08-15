export interface Product {
  _id: string;
  category: string;
  avgRating: number;
  description: string;
  image_url: string;
  image_thumb_url: string;
  name: string;
  price: number;
  ratings: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
  reviews: number;
  stock: number;
  type: "veg" | "nonveg";
}
