import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/actions/actionsFetchProducts";

import "./Product.scss";
import ProductSlides from "../../components/ProductSlides/ProductSlides";
import Button from "../../components/button/Button";

const Product: React.FC = () => {
   const dispatch = useDispatch();
   const { id } = useParams();

   const product = useSelector(
      (state: RootState) => state.productReducer.product
   );

   useEffect(() => {
      dispatch(getProduct(id));
   }, [id, dispatch]);

   return (
      <section className="product">
         <div className="bd-container product-container">
            <div className="product-wrapper">
               <div>
                  <ProductSlides images={product.images} />
               </div>
               <div>
                  <p className="text">
                     {product.title}
                     <p>{`$${product.price}`}</p>
                     <button>add to cart</button>
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Product;
