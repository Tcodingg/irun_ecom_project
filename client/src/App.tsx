import "./App.scss";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/product/Product";

function App() {
   return (
      <Router>
         <div className="App">
            <Nav />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/product/:id" element={<Product />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
