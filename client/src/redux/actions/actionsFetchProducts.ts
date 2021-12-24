import { Actions, actionTypes } from "./actionTypes.";
import { Dispatch } from "redux";
import axios from "axios";

const url: any = process.env.REACT_APP_SERVER_URL;
// ==== GET ALL PRODUCTS ==== //

export const getAllProducts = () => async (dispatch: Dispatch<Actions>) => {
   dispatch({
      type: actionTypes.GET_ALL_PRODUCTS_LOADING,
   });
   try {
      const { data } = await axios.get(`${url}/api/products`);
      dispatch({
         type: actionTypes.GET_ALL_PRODUCTS_SUCCUSS,
         payload: data,
      });

      console.log(data);
   } catch (error: any) {
      dispatch({
         type: actionTypes.GET_ALL_PRODUCTS_FAIL,
         payload: error,
      });
   }
};

//   GET A PRODUCT

export const getProduct =
   (id: string) => async (dispatch: Dispatch<Actions>) => {
      dispatch({
         type: actionTypes.GET_PRODUCT_LOADING,
      });

      try {
         const { data } = await axios.get(`${url}/api/products/${id}`);
         dispatch({
            type: actionTypes.GET_PRODUCT_SUCCESS,
            payload: data,
         });
      } catch (error: any) {
         dispatch({
            type: actionTypes.GET_PRODUCT_FAIL,
            payload: error,
         });
      }
   };
