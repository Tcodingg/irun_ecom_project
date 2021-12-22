import React from "react";
import "./Home.scss";

const Home: React.FC = () => {
   return (
      <section className="home">
         <main className="main-container">
            <div className="bd-container main-info">
               <h1 className="title">flash sale of 70%</h1>
               <p>
                  Fashion is part of the daily air and it changes all the time,
                  with all the events. You can see and feel everything in
                  clothes. Start shopping now to enjoy exclusive offers!
               </p>
               <a href="##">shop now</a>
            </div>
            <div className="img-banner bd-container">
               <img src="images/running-banner1.png" alt="" />
            </div>
         </main>
      </section>
   );
};

export default Home;
