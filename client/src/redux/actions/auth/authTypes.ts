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
