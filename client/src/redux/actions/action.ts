import { actionTypes } from "./actionTypes.";
import { Dispatch } from "redux";
import axios from "axios";

// ==== GET ALL PRODUCTS ==== //
export const getAllProducts = () => async (dispatch: Dispatch) => {
   const url: any = process.env.REACT_APP_SERVER_URL;
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
   } catch (error) {
      dispatch({
         type: actionTypes.GET_ALL_PRODUCTS_FAIL,
         payload: error,
      });
   }
};
