import "./App.scss";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from "react-router-dom";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import "./App.scss";
import Shop from "./pages/shop/Shop";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Checkout from "./pages/checkout/Checkout";
import { useSelector } from "react-redux";
import { RootState } from "./redux/rootReducer";
function App() {
   const isLoggedIn = useSelector(
      (state: RootState) => state.authReducer.isLoggedIn
   );

   return (
      <Router>
         <div className="App">
            <Nav />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/product/:id" element={<Product />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/shop" element={<Shop />} />
               <Route path="/login" element={<Login />} />
               <Route
                  path="/register"
                  element={isLoggedIn ? <Navigate to="/" /> : <Register />}
               />
               <Route
                  path="/checkout"
                  element={isLoggedIn ? <Checkout /> : <Navigate to="/login" />}
               />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
