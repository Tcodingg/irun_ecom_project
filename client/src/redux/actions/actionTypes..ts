export enum actionTypes {
   GET_ALL_PRODUCTS_LOADING = "GET_ALL_PRODUCTS_LOADING",
   GET_ALL_PRODUCTS_SUCCUSS = "GET_ALL_PRODUCTS_SUCCESS",
   GET_ALL_PRODUCTS_FAIL = "GET_ALL_PRODUCTS_FAIL",
   GET_PRODUCT_LOADING = "GET_PRODUCT_LOADING",
   GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS",
   GET_PRODUCT_FAIL = "GET_PRODUCT_FAIL",
   ADD_TO_CART = "ADD_TO_CART",
   REMOVE_FROM_CART = "REMOVE_FROM_CART",
}
export interface product {
   title: String;
   details: String;
   price: Number;
   description: String;
   images: String[];
   inStock: Number;
   generalInfo: String;
   gender: String;
   _id: String;
}

type actionAllProductsLoading = {
   type: actionTypes.GET_ALL_PRODUCTS_LOADING;
};
type actionAllProductsSuccess = {
   type: actionTypes.GET_ALL_PRODUCTS_SUCCUSS;
   payload: product[];
};
type actionAllProductsFail = {
   type: actionTypes.GET_ALL_PRODUCTS_FAIL;
   payload: String;
};

type actionGetProductLoading = {
   type: actionTypes.GET_PRODUCT_LOADING;
};

type actionGetProductSuccess = {
   type: actionTypes.GET_PRODUCT_SUCCESS;
   payload: product;
};
type actionGetProductFAil = {
   type: actionTypes.GET_PRODUCT_FAIL;
   payload: String;
};

export type Actions =
   | actionAllProductsLoading
   | actionAllProductsSuccess
   | actionAllProductsFail
   | actionGetProductLoading
   | actionGetProductSuccess
   | actionGetProductFAil;
