import Button from "../../components/button/squareButtons/Button";
import "./Login.scss";
const Login: React.FC = () => {
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
                  <input type="text" placeholder="Email *" />
                  <input type="text" placeholder="Password *" />
                  <Button text="sign in" />
               </div>
            </div>
            <div className="block-new-customer flex">
               <h2 className="title">Don't have an account?</h2>
               <p>
                  Creating an account has many benefits: checkout faster, keep
                  more than one address, track orders and more.
               </p>
               <Button text="Create an account" />
            </div>
         </div>
      </section>
   );
};

export default Login;
