import "./App.scss";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import "./App.scss";
import Shop from "./pages/shop/Shop";

function App() {
   return (
      <Router>
         <div className="App">
            <Nav />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/product/:id" element={<Product />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/shop" element={<Shop />} />
            </Routes>
            {/* <Footer /> */}
         </div>
      </Router>
   );
}

export default App;
