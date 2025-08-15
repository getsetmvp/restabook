import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// api
import orderApi from "../../store/order/orderApi";

// interface
import { Product } from "../../interface";

interface Item {
  product: Product;
  qty: number;
  price: number;
  total: number;
}

interface Order {
  _id: string;
  orderId: string;
  customer: string;
  payment_intent: string;
  items: [Item] | [];
  subtotal: number;
  total: number;
  shipping_address: {
    city: string;
    country: string;
    address_line_1: string;
    address_line_2: string;
    pincode: string;
    state: string;
  };
  delivery_status: string;
  payment_status: string;
  createdAt: string;
}

interface orderState {
  orders: Order[] | [];
  order: Order | {};
}

const initialState: orderState = {
  order: {},
  orders: [],
};

// extra reducers
export const getAllUserOrders = createAsyncThunk(
  "order/getUserOrders",
  async (_, thunkApi) => {
    const res = await orderApi.getUserOrders();
    if (res.isSuccessful) {
      return res.data;
    } else {
      return thunkApi.rejectWithValue(res.error);
    }
  }
);

export const getOrderByOrderId = createAsyncThunk(
  "order/getOrderByOrderId",
  async (payload: any, thunkApi) => {
    const res = await orderApi.getOrderByOrderId(payload);
    if (res.isSuccessful) {
      return res.data;
    } else {
      return thunkApi.rejectWithValue(res.error);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(["Method Name"].fulfilled, (state, action) => {});
    builder.addCase(getOrderByOrderId.fulfilled, (state, action) => {
      state.order = action.payload;
    });
    builder.addCase(getOrderByOrderId.rejected, (state, action) => {});
    builder.addCase(getAllUserOrders.fulfilled, (state, action) => {
      state.orders = action.payload as Order[];
    });
    builder.addCase(getAllUserOrders.rejected, (state, action) => {});
  },
});

export default orderSlice.reducer;
