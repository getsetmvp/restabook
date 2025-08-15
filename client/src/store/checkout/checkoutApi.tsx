import { v4 as uuid } from "uuid";
// utils
import apiService from "../../utils/apiService";

// interface
import { Product } from "../../interface";

interface Item {
  _id: string;
  product: Product;
  qty: number;
  price: number;
  total: number;
}

// methods
class CheckoutApi {
  async checkout(items: Item[]) {
    try {
      const newItems = items.map((item) => {
        return {
          product: {
            _id: item.product._id,
            name: item.product.name,
            image_url: item.product.image_url,
            description: item.product.description,
          },
          price: item.price * 100,
          qty: item.qty,
          total: item.total,
          _id: item._id,
        };
      });
      const orderId = uuid();
      const res = await apiService.post(`/v1/checkout`, {
        items: newItems,
        orderId,
      });
      return apiService.response(true, res.data, "");
    } catch (err: any) {
      return apiService.response(false, {}, err.response.data.message);
    }
  }
}

const checkoutApi = new CheckoutApi();
export default checkoutApi;
