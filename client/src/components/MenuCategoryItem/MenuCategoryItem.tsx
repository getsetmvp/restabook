import React from "react";
import MenuProductItem from "../MenuProductItem/MenuProductItem";
import "./MenuCategoryItem.css";

// interface
import { Product } from "../../interface";
interface MenuCategoryItemProps {
  img: string;
  category: string;
  number: string;
  products: Array<Product>;
}

const MenuCategoryItem: React.FC<MenuCategoryItemProps> = ({
  img,
  category,
  number,
  products,
}) => {
  return (
    <div className="menu-item">
      <div
        className="menu-category"
        style={{
          backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.5), rgba(0,0,0,0.5)),  url(${require(`../../assets/images/all/${img}`)})`,
        }}
      >
        <div className="menu-category-title">{category}</div>
        <div className="menu-category-number">{number}</div>
      </div>
      {products && products.length > 0 && (
        <div className="menu-products">
          <div className="row-sm">
            <div className="col-sm-6">
              {products.slice(0, products.length / 2).map((product) => (
                <MenuProductItem
                  product={product}
                  key={Math.random() * 99999999}
                />
              ))}
            </div>
            <div className="col-sm-6">
              {products.slice(products.length / 2 + 1).map((product) => (
                <MenuProductItem
                  product={product}
                  key={Math.random() * 99999999}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuCategoryItem;
