export enum actionTypes {
   LOGIN_SUCCESS = "LOGIN_SUCCESS",
   LOGIN_FAIL = "LOGIN_FAIL",
   REGISTER_SUCCESS = "REGISTER_SUCCESS",
   REGISTER_FAIL = "REGISTER_FAIL",
   AUTH_FAIL = "AUTH_FAIL",
}

export type userData = {
   accessToken: string;
   refreshToken: string;
   user: {
      name: string;
      email: string;
      id: string;
   };
};

type actionLoginSuccess = {
   type: actionTypes.LOGIN_SUCCESS;
   payload: userData;
};
type actionRegisterSuccess = {
   type: actionTypes.LOGIN_SUCCESS;
   payload: userData;
};

type actionLoginFail = {
   type: actionTypes.LOGIN_FAIL;
   payload: any;
};

type actionRegisterFail = {
   type: actionTypes.LOGIN_FAIL;
   payload: any;
};

type actionAuthFail = {
   type: actionTypes.LOGIN_FAIL;
   payload: any;
};

export type Actions =
   | actionLoginSuccess
   | actionLoginFail
   | actionRegisterSuccess
   | actionRegisterFail
   | actionAuthFail;
