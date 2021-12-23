import { Actions, actionTypes } from "../actions/actionTypes.";
import { product } from "../actions/actionTypes.";

interface interfaceState {
   loading: boolean;
   products: product[];
   err?: String;
}

let initialState: interfaceState = {
   loading: false,
   products: [],
};

export const productsReducer = (
   state: interfaceState = initialState,
   action: Actions
): interfaceState => {
   switch (action.type) {
      case actionTypes.GET_ALL_PRODUCTS_LOADING:
         return {
            ...state,
            loading: true,
         };
      case actionTypes.GET_ALL_PRODUCTS_SUCCUSS:
         return {
            ...state,
            loading: false,
            products: action.payload,
         };
      case actionTypes.GET_ALL_PRODUCTS_FAIL:
         return {
            ...state,
            loading: false,
            err: action.payload,
         };
      default:
         return state;
   }
};
