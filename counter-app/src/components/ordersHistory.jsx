import React from "react";
import { useSelector } from "react-redux";

const OrdersHistory = () => {
  const orders = useSelector(state => [...state.ordersHistory]);

  return (
    <div className="container">
      <h2>Orders History</h2>

      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Number of Items</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(val => (
            <tr key={val.orderID}>
              <td>{val.orderID}</td>
              <td>{val.numOfItems}</td>
              <td>{val.dateCreated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersHistory;
