// utils
import apiService from "../../utils/apiService";
import { clearObject, getObject, setObject } from "../../utils/localStorage";

// interface
import { Product } from "../../interface";

interface Item {
  product: Product;
  qty: number;
  price: number;
  total: number;
}

interface cartState {
  items: [Item] | [];
  subtotal: number;
  total: number;
}

// methods
class CartApi {
  async getCart() {
    try {
      const token = await getObject("token");
      let data: cartState = {
        items: [],
        subtotal: 0,
        total: 0,
      };
      if (token) {
        const cart = await apiService.get(`/v1/cart`);
        data.items = cart.data.items;
        data.subtotal = cart.data.subtotal;
        data.total = cart.data.total;
      } else {
        const cart = await getObject("cart");
        if (cart) data = cart;
      }
      return apiService.response(true, data, "");
    } catch (err: any) {
      return apiService.response(false, {}, err.response.data.message);
    }
  }

  async clearCart() {
    try {
      const token = await getObject("token");
      const data: cartState = {
        items: [],
        subtotal: 0,
        total: 0,
      };
      if (token) {
        await apiService.get(`/v1/cart/clear`);
      } else {
        await clearObject("cart");
      }
      return apiService.response(true, data, "");
    } catch (err: any) {
      return apiService.response(false, {}, err.response.data.message);
    }
  }

  async addToCart(item: Item) {
    try {
      const token = await getObject("token");
      let data: cartState = {
        items: [],
        subtotal: 0,
        total: 0,
      };
      if (token) {
        const cart = await apiService.post(`/v1/cart/add`, {
          item: {
            price: item.price,
            product: item.product._id,
            qty: item.qty,
            total: item.total,
          },
        });
        data.items = cart.data.items;
        data.subtotal = cart.data.subtotal;
        data.total = cart.data.total;
      } else {
        let cart = await getObject("cart");
        if (!cart) cart = data;
        const itemIdx = cart.items.findIndex(
          (i: Item) => i.product._id === item.product._id
        );
        if (itemIdx > -1) {
          cart.items[itemIdx].qty += item.qty;
          cart.items[itemIdx].total += item.total;
        } else {
          cart.items.push(item);
        }
        cart.subtotal += item.price * item.qty;
        cart.total += item.price * item.qty;
        data = cart;
        await setObject("cart", JSON.stringify(data));
      }
      return apiService.response(true, data, "");
    } catch (err: any) {
      return apiService.response(false, {}, err.response.data.message);
    }
  }

  async removeFromCart(item: Item) {
    try {
      const token = await getObject("token");
      let data: cartState = {
        items: [],
        subtotal: 0,
        total: 0,
      };
      if (token) {
        const cart = await apiService.post(`/v1/cart/remove`, {
          item: {
            price: item.price,
            product: item.product._id,
            qty: item.qty,
            total: item.total,
          },
        });
        data.items = cart.data.items;
        data.subtotal = cart.data.subtotal;
        data.total = cart.data.total;
      } else {
        const cart = await getObject("cart");
        if (cart) {
          const itemIdx = cart.items.findIndex(
            (i: Item) => i.product._id === item.product._id
          );
          if (itemIdx > -1) {
            if (cart.items[itemIdx].qty <= item.qty) {
              cart.items = cart.items.filter(
                (i: Item) => i.product._id !== item.product._id
              );
            } else {
              cart.items[itemIdx].qty -= item.qty;
              cart.items[itemIdx].total -= item.total;
            }
            cart.subtotal -= item.price * item.qty;
            cart.total -= item.price * item.qty;
          } else {
            return apiService.response(false, {}, "Item not found");
          }
          data = cart;
        } else {
          return apiService.response(false, {}, "Item not found");
        }
        await setObject("cart", JSON.stringify(data));
      }
      return apiService.response(true, data, "");
    } catch (err: any) {
      return apiService.response(false, {}, err.response.data.message);
    }
  }
}

const cartApi = new CartApi();
export default cartApi;
