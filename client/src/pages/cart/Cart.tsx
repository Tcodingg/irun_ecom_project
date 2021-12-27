import { useSelector } from "react-redux";
import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import { RootState } from "../../redux/rootReducer";
import "./Cart.scss";
const Cart: React.FC = () => {
   const cart = useSelector((state: RootState) => state.cartReducer.cart);

   console.log(cart);

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
                        <p className="text">$1390</p>
                        <p className="text">$20</p>
                     </div>
                  </div>
                  <div className="checkout-bottom">
                     <p className="text">total</p>
                     <p className="text">$1270</p>
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
