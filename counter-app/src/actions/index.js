import {
  ADD_PRODUCT,
  ADD_AMOUNT,
  DECREMENT_AMOUNT,
  RESET_AMOUNT,
  DELETE_PRODUCT,
  LOAD_FOODS_SUCCESS,
  ADD_FOOD_TO_CART,
  LOAD_ORDERS_HISTORY_SUCCESS,
  ADD_ORDER_SUCCESS
} from "../constants/action-types";

export function loadFoodsSuccess(foods) {
  return { type: LOAD_FOODS_SUCCESS, foods };
}
export function loadOrdersHistorySuccess(orders) {
  return { type: LOAD_ORDERS_HISTORY_SUCCESS, orders };
}

export function addProduct(productName, productPrice) {
  return {
    type: ADD_PRODUCT,
    payload: { productName: productName, productPrice: productPrice }
  };
}

export function deleteProduct(counter) {
  return { type: DELETE_PRODUCT, payload: counter };
}

export function addAmount(counter) {
  return { type: ADD_AMOUNT, payload: counter };
}

export function decrementAmount(counter) {
  return { type: DECREMENT_AMOUNT, payload: counter };
}

export function resetAmount() {
  return { type: RESET_AMOUNT };
}

export function addFoodToCart(food) {
  return { type: ADD_FOOD_TO_CART, payload: food };
}

export function addOrderSuccess(order) {
  return { type: ADD_ORDER_SUCCESS, order };
}
