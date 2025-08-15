import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// api
import checkoutApi from "../../store/checkout/checkoutApi";

const initialState = {};

// extra reducers
export const checkout = createAsyncThunk(
  "checkout/checkout",
  async (payload: any, thunkApi) => {
    const res = await checkoutApi.checkout(payload);
    if (res.isSuccessful) {
      return res.data;
    } else {
      return thunkApi.rejectWithValue(res.error);
    }
  }
);

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(["Method Name"].fulfilled, (state, action) => {});
    builder.addCase(checkout.fulfilled, (state, action) => {});
    builder.addCase(checkout.rejected, (state, action) => {});
  },
});

export default checkoutSlice.reducer;
