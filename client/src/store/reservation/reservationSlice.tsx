import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// api
import reservationApi from "../../store/reservation/reservationApi";

// interface
interface Reservation {
  _id: string;
  name: string;
  email: string;
  date: string;
  persons: string;
  message: string;
}

interface reservationState {
  reservations: Reservation[] | [];
  reservation: Reservation | {};
}

const initialState: reservationState = {
  reservation: {},
  reservations: [],
};

// extra reducers
export const getAllUserReservations = createAsyncThunk(
  "reservation/getUserReservations",
  async (_, thunkApi) => {
    const res = await reservationApi.getUserReservations();
    if (res.isSuccessful) {
      return res.data;
    } else {
      return thunkApi.rejectWithValue(res.error);
    }
  }
);

export const createReservation = createAsyncThunk(
  "reservation/createReservation",
  async (payload: any, thunkApi) => {
    const res = await reservationApi.createReservation(payload);
    if (res.isSuccessful) {
      return res.data;
    } else {
      return thunkApi.rejectWithValue(res.error);
    }
  }
);

const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(["Method Name"].fulfilled, (state, action) => {});
    builder.addCase(getAllUserReservations.fulfilled, (state, action) => {
      state.reservations = action.payload as Reservation[];
    });
    builder.addCase(getAllUserReservations.rejected, (state, action) => {});
    builder.addCase(createReservation.fulfilled, (state, action) => {
      state.reservation = action.payload as Reservation;
    });
    builder.addCase(createReservation.rejected, (state, action) => {});
  },
});

export default reservationSlice.reducer;
