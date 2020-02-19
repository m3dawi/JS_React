import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAmount, decrementAmount, deleteProduct } from "../actions";

export const ProductInCart = props => {
  const dispatch = useDispatch();
  const { id } = props;
  const cart = useSelector(state => state.productsInCart);
  const productInCart = cart.find(v => v.id === id);
  return (
    <div className="row">
      <div className="col-1">
        <span className={getBadgeClasses(productInCart.count)}>
          {formatCount(productInCart.count)}
        </span>
      </div>
      <div className="col-2">
        <a className="font-weight-bold m-auto">{productInCart.name}</a>
      </div>
      <div className="col-1">
        <a className="font-weight-bold">{productInCart.price}</a>
      </div>
      <div className="col-2">
        <button
          onClick={() => dispatch(addAmount(id))}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => dispatch(decrementAmount(id))}
          className="btn btn-secondary btn-sm m-2"
          disabled={productInCart.count === 0 ? "disabled" : ""}
        >
          -
        </button>
        <button
          onClick={() => dispatch(deleteProduct(id))}
          className="bnt btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export const getBadgeClasses = value => {
  let classes = "badge m-2 badge-";
  classes += value === 0 ? "warning" : "primary";
  return classes;
};

export const formatCount = value => {
  return value === 0 ? "Zero" : value;
};
export default ProductInCart;
