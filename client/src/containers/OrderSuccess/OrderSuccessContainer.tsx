import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSuccessContainer.css";

// hooks
import { useAppDispatch } from "../../hooks/hooks";
import useWindowDimensions from "../../hooks/useWindowDimensions";

// reducers
import { clearCart } from "../../store/cart/cartSlice";

// components
import Layout from "../../components/Layout/Layout";
import ImageBackground from "../../components/ImageBackground/ImageBackground";
import Button from "../../components/Button/Button";

// constants
import { OrderSuccessPage } from "../../constants/page.constants";

// icons
import { GiPartyPopper } from "react-icons/gi";

const OrderSuccessContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  // function
  React.useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);
  return (
    <Layout pageTitle={OrderSuccessPage.Title}>
      <ImageBackground
        img={OrderSuccessPage.Img}
        extraText={OrderSuccessPage.ImgText}
        mainTitle={OrderSuccessPage.ImgTitle}
      />
      <div className="order-success-container">
        <div className="wrapper">
          <div className="order-success-icon">
            <GiPartyPopper />
          </div>
          <div className="order-success-title">
            Thank You. Your Order has been received.
          </div>
          <div className="order-success-text">
            You will receive an email confirmation with the order details. You
            can also visit the dashboard to view the order details.
          </div>
          <div className="order-success-cta sm:flex justify-center items-center mt-6">
            <div className="to-dashboard-btn sm:mr-4">
              <Button
                type={"button"}
                variant="contained"
                bgColor="black"
                label={"Dashboard \t\t→"}
                fullWidth={width < 640}
                onClick={() => navigate("/dashboard/order")}
              />
            </div>
            <div className="to-home-btn mt-4 sm:mt-0 sm:ml-4">
              <Button
                type={"button"}
                variant="contained"
                bgColor="golden"
                label={"Home \t\t→"}
                fullWidth={width < 640}
                onClick={() => navigate("/home")}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderSuccessContainer;
