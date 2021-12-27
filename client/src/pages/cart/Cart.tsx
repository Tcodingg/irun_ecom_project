import { useSelector } from "react-redux";
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
                  <p className="sub-title">summary</p>
                  <div className="cart-checkout-wrapper">
                     <div>
                        <p className="sub-title">subtotal</p>
                        <p className="sub-title">tax</p>
                        <p className="sub-title">total</p>
                     </div>
                     <div>
                        <p className="sub-title">subtotal</p>
                        <p className="sub-title">tax</p>
                        <p className="sub-title">total</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Cart;
