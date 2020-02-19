import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, resetAmount } from "../actions";

export const AddProduct = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [valid, setValid] = useState(true);

  return (
    <div>
      {valid ? (
        ""
      ) : (
        <div className="alert alert-danger alert-dismissible">
          <button type="button" className="close" data-dismiss="alert">
            &times;
          </button>
          <strong>Error!</strong> Product Name cannot be EMPTY.
        </div>
      )}
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="m-1"
          placeholder="Product Name"
          onChange={e => {
            setProductName(e.target.value);
            setValid(true);
          }}
        ></input>

        <input
          type="number"
          className="m-1"
          placeholder="Product Price"
          onChange={e => {
            setProductPrice(e.target.value);
          }}
        ></input>

        <button
          onClick={e =>
            productName.length > 0
              ? dispatch(addProduct(productName, productPrice))
              : setTimeout(() => {
                  setValid(false);
                  setTimeout(() => setValid(true), 4000);
                }, 0.01)
          }
          className="btn btn-primary btn-sm m-2"
        >
          Add Product
        </button>
        <button
          onClick={() => dispatch(resetAmount())}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
      </form>
    </div>
  );
};
