import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";

const CartItem: React.FC = () => {
   const cartItems = useSelector((state: RootState) => state.cartReducer);
   console.log(cartItems);
   return <div>cart item</div>;
};

export default CartItem;
