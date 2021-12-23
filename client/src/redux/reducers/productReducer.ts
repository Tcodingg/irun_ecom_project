import { Actions, actionTypes } from "../actions/actionTypes.";
import { product } from "../actions/actionTypes.";

interface interfaceState {
   loading: boolean;
   product: product;
   err?: string;
}

const initialState = {
   loading: false,
   product: {
      title: "",
      details: "",
      price: 0,
      description: "",
      images: [],
      inStock: 0,
      generalInfo: "",
      gender: "",
      _id: "",
   },
};

export const productReducer = (
   state: interfaceState = initialState,
   action: Actions
) => {
   switch (action.type) {
      case actionTypes.GET_PRODUCT_LOADING:
         return {
            ...state,
            loading: true,
         };
      case actionTypes.GET_PRODUCT_SUCCESS:
         return {
            ...state,
            loading: false,
            product: action.payload,
         };
      case actionTypes.GET_PRODUCT_FAIL:
         return {
            ...state,
            err: action.payload,
         };
   }
};
