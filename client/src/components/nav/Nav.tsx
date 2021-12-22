import React, { useState } from "react";
import "./Nav.scss";

import { RiShoppingBagLine } from "react-icons/ri";
const Nav: React.FC = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <nav>
         <div className="bd-container nav-container">
            <div className="nav-left-content">
               <a className="title" href="##">
                  iRun<span>.</span>
               </a>
            </div>
            <div className="nav-right-content">
               <div className={`menu ${isOpen ? "isOpen" : ""}`}>
                  <li>shop</li>
                  <li>support</li>
               </div>
               <div className="cart-icon-wrapper">
                  <RiShoppingBagLine />
               </div>
               <div
                  onClick={() => setIsOpen((preVal) => !preVal)}
                  className="burger-icon-container"
               >
                  <div className={`burger ${isOpen ? "isOpen" : ""}`}></div>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Nav;
