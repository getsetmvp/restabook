import React from "react";
import "./App.css";
import WebRoutes from "./WebRoutes";

// toast
import toast, { Toaster } from "react-hot-toast";

// hooks
import { useAppDispatch, useAppSelector } from "./hooks/hooks";

// reducers
import { authenticateToken } from "./store/auth/authSlice";
import { getCart } from "./store/cart/cartSlice";

function App() {
  const dispatch = useAppDispatch();
  const { successMessage, errorMessage } = useAppSelector(
    (state) => state.alert
  );
  const { loggedIn } = useAppSelector((state) => state.auth);
  // function
  React.useEffect(() => {
    dispatch(authenticateToken());
  }, [dispatch]);

  React.useEffect(() => {
    dispatch(getCart());
  }, [dispatch, loggedIn]);

  React.useEffect(() => {
    if (successMessage) toast.success(successMessage);
  }, [successMessage]);

  React.useEffect(() => {
    if (errorMessage) toast.error(errorMessage);
  }, [errorMessage]);

  return (
    <div className="App">
      <WebRoutes />
      <Toaster position={"top-center"} />
    </div>
  );
}

export default App;
