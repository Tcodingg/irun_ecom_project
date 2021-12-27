import CartItem from "../../components/cartItem/CartItem";

const Cart: React.FC = () => {
   return (
      <section className="cart">
         <div className="bd-container cart-container">
            <CartItem />
         </div>
      </section>
   );
};

export default Cart;
