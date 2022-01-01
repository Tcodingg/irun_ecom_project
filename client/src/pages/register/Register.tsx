import Button from "../../components/button/squareButtons/Button";
import "./Register.scss";
const Register: React.FC = () => {
   return (
      <section className="register">
         <div className="bd-container register-container section flex">
            <h2 className="title">sign up using your email address</h2>
            <div className="register-content flex">
               <input type="text" placeholder="Name *" />
               <input type="text" placeholder="Email *" />
               <input type="text" placeholder="Password *" />
               <input type="text" placeholder="Confirm Password *" />
               <Button text="create an account" />
            </div>
         </div>
      </section>
   );
};

export default Register;
