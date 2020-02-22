import React from "react";
import "../App.css";
import ProductsInCart from "./productsInCart";
import OrdersHistory from "./ordersHistory";
import { addOrder } from "../reducers";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const productsInCartLen = useSelector(state => state.productsInCart.length);
  const orders = useSelector(state => state.ordersHistory.length);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <main role="main" className="container">
        <ProductsInCart />
        {productsInCartLen > 0 ? (
          <button
            onClick={() => dispatch(addOrder(productsInCartLen))}
            className="btn btn-secondary btn-sm m-2"
            //disabled={productInCart.count === 0 ? "disabled" : null}
          >
            Create Order
          </button>
        ) : null}
      </main>
      {orders > 0 ? <OrdersHistory /> : null}
    </React.Fragment>
  );
};

export default Cart;
