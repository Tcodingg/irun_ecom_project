import { useSelector } from "react-redux";
import CartItem from "../../components/cartItem/CartItem";
import { RootState } from "../../redux/rootReducer";

const Cart: React.FC = () => {
   const cart = useSelector((state: RootState) => state.cartReducer.cart);

   console.log(cart);

   return (
      <section className="cart">
         <div className="bd-container cart-container">
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
      </section>
   );
};

export default Cart;
