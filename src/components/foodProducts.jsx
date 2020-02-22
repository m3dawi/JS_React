import React from "react";
import FoodProduct from "./foodProduct";
import { useSelector } from "react-redux";
import { AddProduct } from "./addProduct";

export const FoodProducts = () => {
  const foods = useSelector(state => [...state.foods]);

  const calcTotal = function(foods) {
    let sum = 0;
    for (let i = 0; i < foods.length; i++) {
      sum += foods[i].price * foods[i].value;
    }
    return sum;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex align-items-stretch">
          {foods.map(counter => (
            <FoodProduct id={counter.id} key={counter.id} />
          ))}
        </div>
      </div>
      <div className="row">
        <AddProduct />
      </div>
    </div>
  );
};

export default FoodProducts;
