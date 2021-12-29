import React, { useState } from "react";
import "./Nav.scss";

import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Nav: React.FC = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <nav>
         <div className="bd-container nav-container">
            <div className="nav-left-content">
               <Link className="title" to="/">
                  iRun<span>.</span>
               </Link>
            </div>
            <div className="nav-right-content">
               <div className={`menu ${isOpen ? "isOpen" : ""}`}>
                  {" "}
                  <li>
                     <Link to="/">home</Link>
                  </li>
                  <li>
                     <Link to="/shop">shop</Link>
                  </li>
               </div>
               <div className="cart-icon-wrapper">
                  <Link to="/cart">
                     <RiShoppingBagLine />
                  </Link>
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
