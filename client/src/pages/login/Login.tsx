import { useState } from "react";
import Button from "../../components/button/squareButtons/Button";
import "./Login.scss";
const Login: React.FC = () => {
   type inputTypes = {
      email: string;
      password: string;
   };
   const [input, setInput] = useState<inputTypes>({
      email: "",
      password: "",
   });

   //handle input onChange
   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInput({ ...input, [name]: value });
   };

   // handle login
   const handleLogin = () => {
      console.log(input);
   };
   // handle register
   const handleRegister = () => {
      console.log("handle register");
   };
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
               <Button handleClick={handleRegister} text="Create an account" />
            </div>
         </div>
      </section>
   );
};

export default Login;
