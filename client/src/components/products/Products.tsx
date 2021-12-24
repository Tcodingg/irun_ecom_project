import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { Link } from "react-router-dom";

import "./Products.scss";

const Products: React.FC = () => {
   const { products } = useSelector(
      (state: RootState) => state.productsReducer
   );
   return (
      <section className="product-list">
         {products.map(({ title, price, gender, _id, images }) => {
            return (
               <div className="product" key={_id}>
                  <Link to={`/product/${_id}`}>
                     <img src={images[0]} alt="" />
                     <div className="product-details">
                        <div className="product-info">
                           <p className="text">{title}</p>
                           <p className="gender">{`${gender}'s Shoes`}</p>
                        </div>
                        <p className="text price">${price}</p>
                     </div>
                  </Link>
               </div>
            );
         })}
      </section>
   );
};

export default Products;
