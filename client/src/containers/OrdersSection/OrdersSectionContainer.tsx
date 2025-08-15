import React from "react";
import "./OrdersSectionContainer.css";

// hooks
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

// reducers
import { getAllUserOrders } from "../../store/order/orderSlice";

const OrdersSectionContainer = () => {
  const dispatch = useAppDispatch();
  const { orders } = useAppSelector((state) => state.order);

  // function
  React.useEffect(() => {
    dispatch(getAllUserOrders());
  }, [dispatch]);
  return (
    <div id="my-orders">
      {orders.length === 0 ? (
        <div className="empty">You dont have any orders yet</div>
      ) : (
        <table className={`my-orders-table`}>
          <thead>
            <tr>
              <th>Order Id</th>
              <th className="hidden-xs">Payment Status</th>
              <th className="hidden-xs">Order Date</th>
              <th>Delivery Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.orderId}>
                <td className="order-id">{order.orderId.slice(0, 8)}</td>
                <td className="order-payment hidden-xs">
                  {order.payment_status}
                </td>
                <td className="order-date hidden-xs">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="order-delivery">{order.delivery_status}</td>
                <td className="order-price">₹ {order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrdersSectionContainer;
