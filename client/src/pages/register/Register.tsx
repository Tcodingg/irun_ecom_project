import { useState, useEffect } from "react";
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

   const [isValidName, setIsValidName] = useState<any>(null);
   const [isValidEmail, setIsValidEmail] = useState<any>(null);
   const [isValidPassword, setIsValidPassword] = useState<any>(null);
   const [isValidConfirmPassword, setIsValidConfirmPassword] =
      useState<any>(null);
   // handle input values
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInput({
         ...input,
         [name]: value,
      });
   };

   // validate input fields
   const regexp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   useEffect(() => {
      function validateInput() {
         // validate name
         input.name.length === 0
            ? setIsValidName(null)
            : input.name.length > 4
            ? setIsValidName(true)
            : setIsValidName(false);

         // validate password
         input.password.length === 0
            ? setIsValidPassword(null)
            : input.password.length < 6
            ? setIsValidPassword(false)
            : setIsValidPassword(true);

         // validate confirm password
         input.confirmPassword.length === 0
            ? setIsValidConfirmPassword(null)
            : input.password === input.confirmPassword
            ? setIsValidConfirmPassword(true)
            : setIsValidConfirmPassword(false);
         // validate email
         input.email.length === 0
            ? setIsValidEmail(null)
            : regexp.test(input.email)
            ? setIsValidEmail(true)
            : setIsValidEmail(false);
      }
      validateInput();
   }, [input.name, input.email, input.confirmPassword, input.password]);
   // handle register
   const handleRegister = () => {
      if (
         isValidName &&
         isValidPassword &&
         isValidEmail &&
         isValidConfirmPassword
      ) {
         dispatch(register(input));
      }

      if (!isValidName) {
         setIsValidName(false);
      }
      if (!isValidPassword) {
         setIsValidPassword(false);
      }
      if (!isValidEmail) {
         setIsValidEmail(false);
      }
      if (!isValidConfirmPassword) {
         setIsValidConfirmPassword(false);
      }
   };

   console.log(
      isValidPassword,
      isValidEmail,
      isValidConfirmPassword,
      isValidName
   );

   console.log(input.password);
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
                  {isValidName === false ? (
                     <small>Please enter a valid name!</small>
                  ) : (
                     ""
                  )}
               </div>
               <div className="form-control">
                  <input
                     onChange={handleChange}
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
                     onChange={handleChange}
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
               <div className="form-control">
                  <input
                     onChange={handleChange}
                     type="password"
                     placeholder="Confirm Password *"
                     name="confirmPassword"
                  />
                  {isValidConfirmPassword === false ? (
                     <small>Password did not match!</small>
                  ) : (
                     ""
                  )}
               </div>
               <Button handleClick={handleRegister} text="create an account" />
            </div>
         </div>
      </section>
   );
};

export default Register;
