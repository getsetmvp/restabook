import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

// reducers
import authReducer from "./auth/authSlice";
import alertReducer from "./alert/alertSlice";
import cartReducer from "./cart/cartSlice";
import orderReducer from "./order/orderSlice";
import reservationReducer from "./reservation/reservationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
    cart: cartReducer,
    order: orderReducer,
    reservation: reservationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
