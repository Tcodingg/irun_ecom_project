import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { AiFillDelete } from "react-icons/ai";
import "./CartItem.scss";

const CartItem: React.FC = () => {
   const cartItems = useSelector((state: RootState) => state.cartReducer);

   const [state, setState] = useState(1);
   const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
      setState(event.target.value);
   };

   console.log(state);

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
