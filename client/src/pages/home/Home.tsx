import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../redux/actions/actionsFetchProducts";

import Button from "../../components/button/Button";
import "./Home.scss";

import Products from "../../components/products/Products";

const Home: React.FC = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getAllProducts());
   }, [dispatch]);

   return (
      <section className="home">
         <main className="main-container">
            <div className="bd-container main-info">
               <h1 className="title">flash sale 70% off</h1>
               <p className="text">
                  Fashion is part of the daily air and it changes all the time,
                  with all the events. You can see and feel everything in
                  clothes. Start shopping now to enjoy exclusive offers!
               </p>

               <Button text="shop now" txtColor="white" />
            </div>
            <div className="img-banner bd-container">
               <img src="images/running-banner1.png" alt="" />
            </div>
         </main>
         <div className="bd-container section collection">
            <div className="collection-title">
               <h1>change the trajectory</h1>
               <p className="text">Define our way forward with Huarache.</p>
               <Button text="shop" txtColor="white" />
            </div>
            <div className="collection-container ">
               <Products />
            </div>
         </div>
      </section>
   );
};

export default Home;
