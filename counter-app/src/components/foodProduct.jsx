import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFoodToCart } from "../actions";

export const FoodProduct = props => {
  const dispatch = useDispatch();
  const { id } = props;
  const foods = useSelector(state => state.foods);
  const food = foods.find(v => v.id === id);
  return (
    <div className="card">
      <img className="card-img-top" src={food.img}></img>
      <div className="card-body">
        <h5 className="card-title">{food.name}</h5>
        <p className="card-text">this food has {food.calories} calories</p>
        <a
          href="#"
          className="btn btn-primary"
          onClick={() => dispatch(addFoodToCart(food))}
        >
          add to cart
        </a>
      </div>
    </div>
  );
};
export default FoodProduct;
