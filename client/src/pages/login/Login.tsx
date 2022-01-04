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
   const nav = useNavigate();
   const location = useLocation();
   const dispatch = useDispatch();

   //handle input onChange
   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value });
   };

   // handle login
   const handleLogin = () => {
      dispatch(login(input));
      nav(-1);
   };

   const isLoggedIn = useSelector(
      (state: RootState) => state.authReducer.isLoggedIn
   );
   useEffect(() => {
      if (isLoggedIn) {
         nav("/");
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
                  <input
                     onChange={handleInput}
                     type="text"
                     placeholder="Email *"
                     name="email"
                  />
                  <input
                     onChange={handleInput}
                     type="text"
                     placeholder="Password *"
                     name="password"
                  />
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
