import React from "react";
import "./MenuProductItem.css";

// interface
import { Product } from "../../interface";
interface MenuProductItemProps {
  product: Product;
}

const MenuProductItem: React.FC<MenuProductItemProps> = ({ product }) => {
  return (
    <div className="menu-product">
      <div className="menu-product-image">
        <img src={product.image_thumb_url} alt="Product Thumbnail" />
      </div>
      <div className="menu-product-details">
        <div className="flex justify-between items-start menu-line relative w-full">
          <div className="menu-product-title">{product.name}</div>
          <div className="menu-product-price">₹ {product.price}</div>
        </div>
        <div className="menu-product-desc">{product.description}</div>
      </div>
    </div>
  );
};

export default MenuProductItem;
