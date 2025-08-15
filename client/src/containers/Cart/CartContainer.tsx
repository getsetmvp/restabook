import React from "react";
import "./CartContainer.css";

// components
import Layout from "../../components/Layout/Layout";
import ImageBackground from "../../components/ImageBackground/ImageBackground";
import CartItems from "../../components/CartItems/CartItems";
import CartTotals from "../../components/CartTotals/CartTotals";

// constants
import { CartPage } from "../../constants/page.constants";

const CartContainer = () => {
  return (
    <Layout pageTitle={CartPage.Title}>
      <ImageBackground
        img={CartPage.Img}
        mainTitle={CartPage.ImgTitle}
        extraText={CartPage.ImgText}
      />
      <div id="cart">
        <div className="wrapper">
          <div className="row-md">
            <div className="col-md-8">
              <CartItems />
            </div>
            <div className="col-md-4 mt-6 lg:mt-0">
              <CartTotals />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartContainer;
