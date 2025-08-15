import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// api
import contactApi from "../../store/contact/contactApi";

const initialState = {};

// extra reducers
export const contactUs = createAsyncThunk(
  "contact/contact",
  async (payload: any, thunkApi) => {
    const res = await contactApi.contact(payload);
    if (res.isSuccessful) {
      return res.data;
    } else {
      return thunkApi.rejectWithValue(res.error);
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(["Method Name"].fulfilled, (state, action) => {});
    builder.addCase(contactUs.fulfilled, (state, action) => {});
    builder.addCase(contactUs.rejected, (state, action) => {});
  },
});

export default contactSlice.reducer;
