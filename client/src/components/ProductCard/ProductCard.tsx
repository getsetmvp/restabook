import React from "react";
import "./ProductCard.css";

// interface
import { Product } from "../../interface";

// hooks
import { useAppDispatch } from "../../hooks/hooks";

// reducers
import { addItemToCart } from "../../store/cart/cartSlice";
import { errorMessage, successMessage } from "../../store/alert/alertSlice";
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  // state

  // function
  const handleAddToCart = async () => {
    const res = await dispatch(
      addItemToCart({
        product: product,
        qty: 1,
        price: product.price,
        total: product.price,
      })
    );
    if (res.type === "cart/addToCart/fulfilled") {
      dispatch(successMessage("Added to cart successfully"));
    } else if (res.type === "cart/addToCart/rejected") {
      dispatch(errorMessage(res.payload));
    }
  };
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image_url}
          alt="Product"
          className="h-full object-cover"
        />
      </div>
      <div className="product-details">
        <div className="product-name">{product.name}</div>
        <div className="product-desc">{product.description}</div>
        <div className="product-price">₹ {product.price}</div>
        <div className="product-add-to-cart-cta" onClick={handleAddToCart}>
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
