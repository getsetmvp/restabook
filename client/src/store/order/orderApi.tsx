// utils
import apiService from "../../utils/apiService";

// methods
class OrderApi {
  async getUserOrders() {
    try {
      const res = await apiService.get(`/v1/order`);
      return apiService.response(true, res.data, "");
    } catch (err: any) {
      return apiService.response(false, {}, err.response.data.message);
    }
  }

  async getOrderByOrderId(orderId: string) {
    try {
      const res = await apiService.get(`/v1/order/${orderId}`);
      return apiService.response(true, res.data, "");
    } catch (err: any) {
      return apiService.response(false, {}, err.response.data.message);
    }
  }
}

const orderApi = new OrderApi();
export default orderApi;
