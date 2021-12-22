import React from "react";
import "./Nav.scss";
const Nav: React.FC = () => {
   return (
      <nav>
         <div className="bd-container nav-container">
            <div className="nav-left-content">
               <h1>
                  iRun<span>.</span>
               </h1>
            </div>
            <div className="nav-right-content">
               <div className="burger-icon-container"></div>
               <div className="cart-icon-wrapper"></div>
               <ul className="menu">
                  <li>shop</li>
                  <li>support</li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Nav;
