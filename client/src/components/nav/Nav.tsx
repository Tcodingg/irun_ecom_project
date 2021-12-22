import React from "react";
import "./Nav.scss";

import { RiShoppingBagLine } from "react-icons/ri";
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
               <div className="cart-icon-wrapper">
                  <RiShoppingBagLine />
               </div>
               <div className="menu">
                  <li>shop</li>
                  <li>support</li>
               </div>
               <div className="burger-icon-container">
                  <div className="burger"></div>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Nav;
