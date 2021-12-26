import { Actions, actionTypes, cartItems } from "../actions/actionTypes";

interface cartInterface {
   cart: cartItems[];
}
const initialState: cartInterface = {
   cart: [],
};
export const cartReducer = (
   state: cartInterface = initialState,
   action: Actions
) => {
   switch (action.type) {
      case actionTypes.ADD_TO_CART:
         let inCart = state.cart.find((item) =>
            item._id === action.payload._id ? true : false
         );
         return {
            ...state,
            cart: inCart
               ? state.cart.map((item) =>
                    item._id === action.payload._id
                       ? { ...item, qty: item.qty + 1 }
                       : item
                 )
               : [...state.cart, { ...action.payload, qty: 1 }],
         };
      default:
         return state;
   }
};
