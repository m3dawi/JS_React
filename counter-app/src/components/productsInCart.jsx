import React from "react";
import ProductInCart from "./productInCart";
import { useSelector } from "react-redux";

export const ProductsInCart = () => {
  const productsInCart = useSelector(state => [...state.productsInCart]);

  const calcTotal = function(productsInCart) {
    let sum = 0;
    for (let i = 0; i < productsInCart.length; i++) {
      sum += productsInCart[i].price * productsInCart[i].count;
    }
    return sum;
  };

  return (
    <div>
      {productsInCart.map(counter => (
        <ProductInCart id={counter.id} key={counter.id} />
      ))}
      <a className="font-weight-bold">total is: {calcTotal(productsInCart)} </a>
    </div>
  );
};

export default ProductsInCart;
