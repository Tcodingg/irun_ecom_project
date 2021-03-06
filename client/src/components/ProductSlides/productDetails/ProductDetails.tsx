import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import "./ProductDetails.scss";

interface details {
   title: string;
   description: string;
}
const ProductDetails: React.FC<details> = ({ title, description }) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <div className="general-info-wrapper">
         <div
            onClick={() => setIsOpen((prevState) => !prevState)}
            className="general-info-content"
         >
            <p className="sub-title">{title}</p>
            <button>{isOpen ? <BiMinus /> : <BiPlus />} </button>
         </div>
         <p
            style={{
               maxHeight: isOpen ? "200px" : "0px",
               overflow: "hidden",
               display: "block",
               transition: "all 0.3s ease-out",
            }}
            className="text"
         >
            {description}
         </p>
      </div>
   );
};

export default ProductDetails;
