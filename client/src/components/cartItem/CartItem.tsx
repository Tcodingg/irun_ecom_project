import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import "./CartItem.scss";
interface cartInterface {
   title: string;
   details: string;
   price: number;
   images: string[];
   qty: number;
   inStock: number;
}
const CartItem: React.FC<cartInterface> = ({ title, details, images, qty }) => {
   const [state, setState] = useState(1);
   const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
      setState(event.target.value);
   };

   return (
      <div className="cart-item">
         <div className="cart-item-container">
            <div className="cart-item-info">
               <img src="" alt="" />
               <div className="cart-item-left">
                  <h4 className="title">Lorem, ipsum.</h4>
                  <p className="text"> Lorem ipsum dolor sit.</p>
                  <label htmlFor="qty"> quantity</label>
                  <select
                     onChange={handleChange}
                     value={state}
                     name="qty"
                     id=""
                  >
                     <option value="1">1</option>
                     <option value="3">3</option>
                     <option value="4">4</option>
                     <option value="5">5</option>
                     <option value="10">10</option>
                  </select>
               </div>
            </div>
            <div className="cart-item-right">
               <p>$219</p>
               <button className="delete-icon">
                  <AiFillDelete />
               </button>
            </div>
         </div>
      </div>
   );
};

export default CartItem;