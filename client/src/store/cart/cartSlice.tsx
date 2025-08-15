import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// api
import cartApi from "../../store/cart/cartApi";

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

const initialState: cartState = {
  items: [],
  subtotal: 0,
  total: 0,
};

// extra reducers
export const getCart = createAsyncThunk("cart/getCart", async (_, thunkApi) => {
  const res = await cartApi.getCart();
  if (res.isSuccessful) {
    return res.data;
  } else {
    return thunkApi.rejectWithValue(res.error);
  }
});

export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, thunkApi) => {
    const res = await cartApi.clearCart();
    if (res.isSuccessful) {
      return res.data;
    } else {
      return thunkApi.rejectWithValue(res.error);
    }
  }
);

export const addItemToCart = createAsyncThunk(
  "cart/addToCart",
  async (payload: any, thunkApi) => {
    const res = await cartApi.addToCart(payload);
    if (res.isSuccessful) {
      return res.data;
    } else {
      return thunkApi.rejectWithValue(res.error);
    }
  }
);

export const removeItemFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async (payload: any, thunkApi) => {
    const res = await cartApi.removeFromCart(payload);
    if (res.isSuccessful) {
      return res.data;
    } else {
      return thunkApi.rejectWithValue(res.error);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(["Method Name"].fulfilled, (state, action) => {});
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.items = (action.payload as cartState).items;
      state.subtotal = (action.payload as cartState).subtotal;
      state.total = (action.payload as cartState).total;
    });
    builder.addCase(getCart.rejected, (state, action) => {});
    builder.addCase(clearCart.fulfilled, (state, action) => {
      state.items = (action.payload as cartState).items;
      state.subtotal = (action.payload as cartState).subtotal;
      state.total = (action.payload as cartState).total;
    });
    builder.addCase(clearCart.rejected, (state, action) => {});
    builder.addCase(addItemToCart.fulfilled, (state, action) => {
      state.items = (action.payload as cartState).items;
      state.subtotal = (action.payload as cartState).subtotal;
      state.total = (action.payload as cartState).total;
    });
    builder.addCase(addItemToCart.rejected, (state, action) => {});
    builder.addCase(removeItemFromCart.fulfilled, (state, action) => {
      state.items = (action.payload as cartState).items;
      state.subtotal = (action.payload as cartState).subtotal;
      state.total = (action.payload as cartState).total;
    });
    builder.addCase(removeItemFromCart.rejected, (state, action) => {});
  },
});

export default cartSlice.reducer;
