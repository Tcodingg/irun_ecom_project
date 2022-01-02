import { Dispatch } from "redux";
import axios from "axios";
import { actionTypes, Actions } from "./authTypes";

const url = process.env.REACT_APP_SERVER_URL;

export const login = (input: any) => async (dispatch: Dispatch<Actions>) => {
   try {
      const { data } = await axios.get(`${url}/auth/login`, input);
      dispatch({
         type: actionTypes.LOGIN_SUCCESS,
         payload: data,
      });
   } catch (error) {
      dispatch({
         type: actionTypes.LOGIN_FAIL,
         payload: error,
      });
   }
};
