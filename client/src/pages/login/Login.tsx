import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/button/squareButtons/Button";
import { login } from "../../redux/actions/auth/authActions";
import { RootState } from "../../redux/rootReducer";
import "./Login.scss";

export type loginTypes = {
   email: string;
   password: string;
};
const Login: React.FC = () => {
   const [input, setInput] = useState<loginTypes>({
      email: "",
      password: "",
   });

   const [isValidEmail, setIsValidEmail] = useState<any>(null);
   const [isValidPassword, setIsValidPassword] = useState<any>(null);
   const [isAuth, setIsAuth] = useState<any>(null);

   const nav = useNavigate();
   const location = useLocation();
   const dispatch = useDispatch();

   //handle input onChange
   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value });
   };

   const isLoggedIn = useSelector(
      (state: RootState) => state.authReducer.isLoggedIn
   );
   const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   // validate input values
   useEffect(() => {
      function validateInput() {
         // validate email
         input.email.length === 0
            ? setIsValidEmail(null)
            : regexp.test(input.email)
            ? setIsValidEmail(true)
            : setIsValidEmail(false);

         // validate phone
         input.password.length === 0
            ? setIsValidPassword(null)
            : input.password.length > 6
            ? setIsValidPassword(true)
            : setIsValidPassword(false);
      }
      validateInput();
   }, [input.email, input.password]);

   // handle login
   const handleLogin = () => {
      if (isValidEmail && isValidPassword) {
         dispatch(login(input));
      }
      if (!isValidEmail) {
         setIsValidEmail(false);
      }
      if (!isValidPassword) {
         setIsValidPassword(false);
      }
      if (!isLoggedIn) {
         setIsAuth(false);
      }
   };
   console.log(isLoggedIn);

   useEffect(() => {
      if (isLoggedIn) {
         nav(-1);
      }
   }, [isLoggedIn, location.pathname, nav]);

   return (
      <section className="login">
         <div className="bd-container section login-container flex">
            <div className="block-customer-login flex">
               <div className="login-heading">
                  <h2 className="title">already registered?</h2>
                  <p className="text">
                     If you have an account, sign in with your email address.
                  </p>
               </div>
               <div className="login-content flex">
                  {isAuth === false ? (
                     <small className="auth-message">
                        Invalid email/password
                     </small>
                  ) : (
                     ""
                  )}
                  <div className="form-control">
                     <input
                        onChange={handleInput}
                        type="text"
                        placeholder="Email *"
                        name="email"
                     />
                     {isValidEmail === false ? (
                        <small>Please enter a valid email!</small>
                     ) : (
                        ""
                     )}
                  </div>
                  <div className="form-control">
                     <input
                        onChange={handleInput}
                        type="password"
                        placeholder="Password *"
                        name="password"
                     />
                     {isValidPassword === false ? (
                        <small>Please enter a valid password!</small>
                     ) : (
                        ""
                     )}
                  </div>
                  <Button handleClick={handleLogin} text="sign in" />
               </div>
            </div>
            <div className="block-new-customer flex">
               <h2 className="title">Don't have an account?</h2>
               <p>
                  Creating an account has many benefits: checkout faster, keep
                  more than one address, track orders and more.
               </p>
               <Button
                  handleClick={() => nav("/register")}
                  text="Create an account"
               />
            </div>
         </div>
      </section>
   );
};

export default Login;
