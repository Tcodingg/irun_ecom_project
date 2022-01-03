import { actionTypes, userData, Actions } from "./authTypes";
interface authInterface {
   loading: boolean;
   user: userData;
   err: any;
}
const initialState: authInterface = {
   loading: false,
   user: {
      accessToken: "",
      refreshToken: "",
      user: {
         name: "",
         email: "",
         id: "",
      },
   },

   err: null,
};

export const authReducer = (
   state: authInterface = initialState,
   action: Actions
): authInterface => {
   switch (action.type) {
      case actionTypes.USER_LOADING:
         return {
            ...state,
            loading: true,
         };
      case actionTypes.LOGIN_SUCCESS:
      case actionTypes.REGISTER_SUCCESS:
         return {
            ...state,
            loading: false,
            user: {
               accessToken: action.payload.accessToken,
               refreshToken: action.payload.refreshToken,
               user: {
                  name: action.payload.user.name,
                  email: action.payload.user.email,
                  id: action.payload.user.id,
               },
            },
            err: null,
         };
      case actionTypes.LOGIN_FAIL:
      case actionTypes.REGISTER_FAIL:
      case actionTypes.AUTH_FAIL:
         return {
            ...state,
            loading: false,
            user: {
               accessToken: "",
               refreshToken: "",
               user: {
                  name: "",
                  email: "",
                  id: "",
               },
            },
            err: action.payload,
         };

      case actionTypes.LOGOUT:
         return {
            ...state,
            loading: false,
            user: {
               accessToken: "",
               refreshToken: "",
               user: {
                  name: "",
                  email: "",
                  id: "",
               },
            },
            err: null,
         };
      default:
         return state;
   }
};