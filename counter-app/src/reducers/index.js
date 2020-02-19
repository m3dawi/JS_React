import {
  ADD_PRODUCT,
  ADD_AMOUNT,
  DECREMENT_AMOUNT,
  RESET_AMOUNT,
  DELETE_PRODUCT,
  LOAD_FOODS_SUCCESS,
  LOAD_ORDERS_HISTORY_SUCCESS,
  ADD_FOOD_TO_CART,
  ADD_ORDER_SUCCESS
} from "../constants/action-types";

import axios from "axios";
import {
  loadFoodsSuccess,
  loadOrdersHistorySuccess,
  addOrderSuccess
} from "../actions";

let initialState = {
  foods: [],
  productsInCart: [],
  ordersHistory: [],
  nextId: 5
};

export function loadFoods() {
  return function(dispatch) {
    return axios
      .get("http://localhost:8000/calTracking/public/getFoods")
      .then(response => response.data)
      .then(foods => {
        //console.log(foods);
        dispatch(loadFoodsSuccess(foods));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadOrdersHistory() {
  return function(dispatch) {
    return axios
      .get("http://localhost:8000/calTracking/public/getOrdersHistory")
      .then(response => response.data)
      .then(orders => {
        //console.log(foods);
        dispatch(loadOrdersHistorySuccess(orders));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function addOrder(numOfItems) {
  return function(dispatch) {
    return axios
      .post("http://localhost:8000/calTracking/public/addOrder", null, {
        params: {
          numOfItems
        }
      })
      .then(response => response.data)
      .then(order => {
        //console.log(foods);
        dispatch(addOrderSuccess(order));
      })
      .catch(error => {
        throw error;
      });
  };
}

function foodsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FOOD_TO_CART:
      return {
        ...state,
        productsInCart: [
          ...state.productsInCart,
          { ...action.payload, count: 1 }
        ]
      };
    case ADD_ORDER_SUCCESS:
      return {
        ...state,
        ordersHistory: [...state.ordersHistory, action.order]
      };
    case LOAD_FOODS_SUCCESS:
      return {
        ...state,
        foods: action.foods
      };
    case LOAD_ORDERS_HISTORY_SUCCESS:
      return {
        ...state,
        ordersHistory: action.orders
      };
    case ADD_PRODUCT:
      return {
        ...state,
        foods: [
          ...state.foods,
          {
            id: state.nextId,
            desc: action.payload.productName,
            price: action.payload.productPrice,
            count: 0
          }
        ],
        nextId: state.nextId + 1
      };
    case ADD_AMOUNT:
      return {
        ...state,
        productsInCart: state.productsInCart.map(val =>
          val.id === action.payload
            ? {
                ...val,
                count: val.count + 1
              }
            : val
        )
      };
    case DECREMENT_AMOUNT:
      return {
        ...state,
        productsInCart: state.productsInCart.map(val =>
          val.id === action.payload
            ? {
                ...val,
                count: val.count - 1
              }
            : val
        )
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        productsInCart: (state.productsInCart = state.productsInCart.filter(
          val => val.id !== action.payload
        ))
      };
    case RESET_AMOUNT:
      return {
        ...state,
        productsInCart: state.productsInCart.map(val => ({
          ...val,
          count: 0
        }))
      };
    default:
      return state;
  }
}

export default foodsReducer;
