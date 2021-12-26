import { Dispatch } from "redux";
import { actionTypes, product } from "./actionTypes";
// add to cart

export const addToCart = (item: product) => async (dispatch: Dispatch) => {
   dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: item,
   });
};
export const removeFromCart = (id: string) => async (dispatch: Dispatch) => {
   dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: id,
   });
};
