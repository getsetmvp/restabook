import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartTotals.css";

// hooks
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

// components
import Button from "../Button/Button";

// reducers
import { checkout } from "../../store/checkout/checkoutSlice";

// loader
import { ClipLoader } from "react-spinners";

const CartTotals = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items, subtotal, total } = useAppSelector((state) => state.cart);
  const { loggedIn } = useAppSelector((state) => state.auth);
  // state
  const [isLoading, setIsLoading] = React.useState(false);
  // function
  const handleCheckout = async () => {
    if (!loggedIn) navigate("/login");
    else {
      setIsLoading(true);
      const res = await dispatch(checkout(items));
      if (res.type === "checkout/checkout/fulfilled") {
        window.location.href = (res.payload as any).url;
      }
      setIsLoading(false);
    }
  };
  return (
    <div className="cart-totals">
      <div className="cart-totals-title">Cart Totals</div>
      <table className="cart-totals-table">
        <tbody>
          <tr>
            <th>Cart subtotal:</th>
            <td>₹ {subtotal}</td>
          </tr>
          <tr>
            <th>Shipping total:</th>
            <td>₹ 0</td>
          </tr>
          <tr>
            <th>Cart total:</th>
            <td>₹ {total}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-12">
        <Button
          type={"button"}
          variant={"contained"}
          bgColor={"golden"}
          label={
            <div className="spinner">
              Proceed to Checkout{" "}
              {isLoading && <ClipLoader loading={isLoading} size={20} />}
            </div>
          }
          fullWidth
          onClick={handleCheckout}
        />
      </div>
    </div>
  );
};

export default CartTotals;
