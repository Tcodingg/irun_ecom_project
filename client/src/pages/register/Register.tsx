import { useState } from "react";
import Button from "../../components/button/squareButtons/Button";
import "./Register.scss";
const Register: React.FC = () => {
   const [input, setInput] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
   });
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
      console.log(input);
   };
   return (
      <section className="register">
         <div className="bd-container register-container section flex">
            <h2 className="title">sign up using your email address</h2>
            <div className="register-content flex">
               <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Name *"
                  name="name"
               />
               <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Email *"
                  name="email"
               />
               <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Password *"
                  name="password"
               />
               <input
                  onChange={handleChange}
                  type="text"
                  placeholder="Confirm Password *"
                  name="confirmPassword"
               />
               <Button handleClick={handleRegister} text="create an account" />
            </div>
         </div>
      </section>
   );
};

export default Register;
