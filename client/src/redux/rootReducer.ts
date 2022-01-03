import { authReducer } from "./actions/auth/authReducer";
import { cartReducer } from "./reducers/cartReducer";
import { productsReducer } from "./reducers/ProductsReducer";
import { productReducer } from "./reducers/productReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
   productsReducer,
   productReducer,
   cartReducer,
   authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
