import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/actionCart";
import "./CartItem.scss";
interface cartInterface {
   title: string;
   details: string;
   price: number;
   images: string[];
   qty: number;
   inStock: number;
   _id: string;
}
const CartItem: React.FC<cartInterface> = ({
   title,
   details,
   images,
   qty,
   inStock,
   price,
   _id,
}) => {
   const [state, setState] = useState(1);
   const dispatch = useDispatch();
   const handleChange = (event: React.ChangeEvent<{ value: any }>) => {
      setState(event.target.value);
   };

   return (
      <div className="cart-item">
         <div className="cart-item-left">
            <div className="image-container">
               <img src={images[0]} alt="" />
            </div>
            <div className="cart-item-info">
               <div>
                  <h4 className="title">{title}</h4>
                  <p className="text"> {details}</p>
               </div>
               <div>
                  <label htmlFor="qty"> quantity</label>
                  <select
                     onChange={handleChange}
                     value={state}
                     name="qty"
                     id=""
                  >
                     {Array.from(Array(inStock).keys()).map((x, i) => {
                        return (
                           <option key={i} value={x + 1}>
                              {x + 1}
                           </option>
                        );
                     })}
                  </select>
               </div>
            </div>
         </div>
         <div className="cart-item-right">
            <p>{`$${price}`}</p>

            <button
               onClick={() => dispatch(removeFromCart(_id))}
               className="delete-icon"
            >
               <AiFillDelete />
            </button>
         </div>
      </div>
   );
};

export default CartItem;
