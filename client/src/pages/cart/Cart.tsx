import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/cartItem/CartItem";
import { RootState } from "../../redux/rootReducer";
import "./Cart.scss";

interface checkoutInterface {
   subTotal: number;
   taxes: number;
   total: number;
}
const Cart: React.FC = () => {
   const [checkout, setCheckout] = useState<checkoutInterface>({
      subTotal: 0,
      taxes: 0,
      total: 0,
   });
   const cart = useSelector((state: RootState) => state.cartReducer.cart);
   const subTotal: number = cart.reduce(
      (amount, item) => item.price * item.qty + amount,
      0
   );
   const taxes: number = subTotal * 0.13;
   const total = subTotal + taxes;
   useEffect(() => {
      setCheckout({
         subTotal: Number(subTotal.toFixed(2)),
         taxes: Number(taxes.toFixed(2)),
         total: Number(total.toFixed(2)),
      });
   }, [subTotal, taxes, total]);
   console.log(checkout.subTotal);
   return (
      <section className="cart">
         <div className="bd-container cart-container">
            <div className="cart-items">
               {cart.map((item) => {
                  return (
                     <CartItem
                        title={item.title}
                        details={item.details}
                        price={item.price}
                        images={item.images}
                        qty={item.qty}
                        inStock={item.inStock}
                        _id={item._id}
                     />
                  );
               })}
            </div>
            <div className="cart-checkout">
               <div className="cart-checkout-container">
                  <p className="title">summary</p>
                  <div className="cart-checkout-wrapper">
                     <div className="checkout-left">
                        <p className="text">subtotal</p>
                        <p className="text">taxes</p>
                     </div>
                     <div className="checkout-right">
                        <p className="text">{`$${checkout.subTotal.toFixed(
                           2
                        )}`}</p>
                        <p className="text">{`$${checkout.taxes}`}</p>
                     </div>
                  </div>
                  <div className="checkout-bottom">
                     <p className="text">total</p>
                     <p className="text">{`$${checkout.total}`}</p>
                  </div>
               </div>
               <div className="checkout-btn-container">
                  <a href="##">check out</a>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Cart;
