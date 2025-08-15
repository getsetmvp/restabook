import React from "react";
import "./CartItems.css";

// hooks
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

// icons
import { AiOutlineClose } from "react-icons/ai";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

// reducers
import { addItemToCart, removeItemFromCart } from "../../store/cart/cartSlice";

// interface
import { Product } from "../../interface";
interface Item {
  product: Product;
  qty: number;
  price: number;
  total: number;
}

const CartItems = () => {
  const dispatch = useAppDispatch();
  const { items } = useAppSelector((state) => state.cart);
  // state

  // function
  const handleAddQty = async (item: Item) => {
    await dispatch(addItemToCart({ ...item }));
  };

  const handleSubtractQty = async (item: Item) => {
    await dispatch(removeItemFromCart({ ...item }));
  };
  return (
    <div className="cart-items">
      <div className="cart-items-count">
        Your cart{" "}
        {items.length > 0 ? (
          <span>{items.length} items</span>
        ) : (
          <span>is Empty</span>
        )}
      </div>
      <div className="cart-items-container">
        {items.length > 0 && (
          <table className="cart-items-table">
            <tbody>
              <tr>
                <th className="hidden-xs">Item</th>
                <th>Description</th>
                <th className="hidden-xs">Price</th>
                <th>Count</th>
                <th>Total</th>
                <th></th>
              </tr>
              {items.map((item) => (
                <tr key={Math.random() * 4654864648}>
                  <td className="hidden-xs">
                    <img src={item.product.image_thumb_url} alt="Product" />
                  </td>
                  <td className="item-name">{item.product.name}</td>
                  <td className="item-price hidden-xs">₹ {item.price}</td>
                  <td>
                    <div className="item-qty">
                      {item.qty}
                      <div className="item-qty-cta">
                        <div
                          className={`item-qty-plus ${
                            item.qty === 1 ? `disabled` : ``
                          }`}
                          onClick={() =>
                            item.qty > 1 &&
                            handleSubtractQty({
                              ...item,
                              qty: 1,
                              total: item.price,
                            })
                          }
                        >
                          <GrFormPrevious />
                        </div>
                        <div
                          className={`item-qty-minus ${
                            item.qty === 10 ? `disabled` : ``
                          }`}
                          onClick={() =>
                            item.qty < 10 &&
                            handleAddQty({ ...item, qty: 1, total: item.price })
                          }
                        >
                          <GrFormNext />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="item-total">₹ {item.total}</td>
                  <td>
                    <div
                      className="delete-item-icon"
                      onClick={() => handleSubtractQty(item)}
                    >
                      <AiOutlineClose />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default CartItems;
