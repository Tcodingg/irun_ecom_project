import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/button/squareButtons/Button";
import { register } from "../../redux/actions/auth/authActions";
import "./Register.scss";
const Register: React.FC = () => {
   const dispatch = useDispatch();
   const [input, setInput] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
   });

   const [isValidName, setIsValidName] = useState(null);
   const [isValidEmail, setIsValidEmail] = useState(null);
   const [isValidPassword, setIsValidPassword] = useState(null);
   const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(null);
   // handle input values
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInput({
         ...input,
         [name]: value,
      });
   };

   // handle register
   const handleRegister = () => {
      dispatch(register(input));
   };

   return (
      <section className="register">
         <div className="bd-container register-container section flex">
            <h2 className="title">sign up using your email address</h2>
            <div className="register-content flex">
               <div className="form-control">
                  <input
                     onChange={handleChange}
                     type="text"
                     placeholder="Name *"
                     name="name"
                  />
                  <small>Please enter a valid name!</small>
               </div>
               <div className="form-control">
                  <input
                     onChange={handleChange}
                     type="text"
                     placeholder="Email *"
                     name="email"
                  />
                  <small>Please enter a valid email!</small>
               </div>

               <div className="form-control">
                  <input
                     onChange={handleChange}
                     type="password"
                     placeholder="Password *"
                     name="password"
                  />
                  <small>Please enter a valid password!</small>
               </div>
               <div className="form-control">
                  <input
                     onChange={handleChange}
                     type="password"
                     placeholder="Confirm Password *"
                     name="confirmPassword"
                  />
                  <small>Password did not match!</small>
               </div>
               <Button handleClick={handleRegister} text="create an account" />
            </div>
         </div>
      </section>
   );
};

export default Register;
