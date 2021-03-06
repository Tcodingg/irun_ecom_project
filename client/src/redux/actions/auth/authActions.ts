import { Dispatch } from "redux";
import axios from "axios";
import { actionTypes, Actions } from "./authTypes";

const url = process.env.REACT_APP_SERVER_URL;

// login
export const login = (input: any) => async (dispatch: Dispatch<Actions>) => {
   try {
      const { data } = await axios.post(`${url}/api/auth/login`, input);
      dispatch({
         type: actionTypes.LOGIN_SUCCESS,
         payload: data,
      });
   } catch (error) {
      dispatch({
         type: actionTypes.LOGIN_FAIL,
         payload: error,
      });
      console.log(error);
   }
};

// register
export const register = (input: any) => async (dispatch: Dispatch) => {
   try {
      const { data } = await axios.post(`${url}/api/auth/register`, input);
      dispatch({
         type: actionTypes.REGISTER_SUCCESS,
         payload: data,
      });
   } catch (error) {
      dispatch({
         type: actionTypes.REGISTER_FAIL,
         payload: error,
      });
   }
};

// logout
export const logout = () => (dispatch: Dispatch) => {
   dispatch({
      type: actionTypes.LOGOUT,
   });
};
