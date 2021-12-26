export enum actionTypes {
   GET_ALL_PRODUCTS_LOADING = "GET_ALL_PRODUCTS_LOADING",
   GET_ALL_PRODUCTS_SUCCUSS = "GET_ALL_PRODUCTS_SUCCESS",
   GET_ALL_PRODUCTS_FAIL = "GET_ALL_PRODUCTS_FAIL",
   GET_PRODUCT_LOADING = "GET_PRODUCT_LOADING",
   GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS",
   GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL",
   ADD_TO_CART = "ADD_TO_CART",
   REMOVE_FROM_CART = "REMOVE_FROM_CART",
   ADJUST_QTY_CART = "ADJUST_QTY_CART",
}
export interface product {
   title: string;
   details: string;
   price: Number;
   description: string;
   images: string[];
   inStock: number;
   generalInfo: string;
   gender: string;
   _id: string;
}
// === actions types for all products
type actionAllProductsLoading = {
   type: actionTypes.GET_ALL_PRODUCTS_LOADING;
};
type actionAllProductsSuccess = {
   type: actionTypes.GET_ALL_PRODUCTS_SUCCUSS;
   payload: product[];
};
type actionAllProductsFail = {
   type: actionTypes.GET_ALL_PRODUCTS_FAIL;
   payload: string;
};

// === actions types for single product
type actionGetProductLoading = {
   type: actionTypes.GET_PRODUCT_LOADING;
};

type actionGetProductSuccess = {
   type: actionTypes.GET_PRODUCT_SUCCESS;
   payload: product;
};
type actionGetProductFAil = {
   type: actionTypes.GET_PRODUCT_FAIL;
   payload: string;
};

// === actions types for cart

type actionAddToCart = {
   type: actionTypes.ADD_TO_CART;
   payload: product;
};

export interface cartItems {
   title: string;
   details: string;
   price: Number;
   description: string;
   images: string[];
   inStock: number;
   generalInfo: string;
   gender: string;
   _id: string;
   qty: number;
}

type actionRemoveFromCart = {
   type: actionTypes.REMOVE_FROM_CART;
   payload: string;
};

type actionAdjustQty = {
   type: actionTypes.ADJUST_QTY_CART;
   payload: {
      id: string;
      qty: number;
   };
};

export type Actions =
   | actionAllProductsLoading
   | actionAllProductsSuccess
   | actionAllProductsFail
   | actionGetProductLoading
   | actionGetProductSuccess
   | actionGetProductFAil
   | actionAddToCart
   | actionRemoveFromCart;
