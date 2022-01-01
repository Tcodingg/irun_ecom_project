import Button from "../../components/button/squareButtons/Button";
import "./Login.scss";
const Login: React.FC = () => {
   return (
      <section className="login">
         <div className="bd-container login-container flex">
            <div className="block-customer-login">
               <div className="login-heading">
                  <h2 className="title">already registered?</h2>
                  <p className="text">
                     If you have an account, sign in with your email address
                  </p>
               </div>
               <div className="login-content">
                  <input type="text" placeholder="Email *" />
                  <input type="text" placeholder="Password *" />
                  <Button text="sign in" />
               </div>
            </div>
         </div>
      </section>
   );
};

export default Login;
