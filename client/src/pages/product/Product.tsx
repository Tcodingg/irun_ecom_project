import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/actions/actionsFetchProducts";

import "./Product.scss";
import ProductSlides from "../../components/ProductSlides/ProductSlides";

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
               <div className="product-images">
                  <ProductSlides images={product.images} />
               </div>
               <div className="product-info-container">
                  <p className=" title">{product.title}</p>
                  <p className="text">{product.details}</p>
                  <p className="text price">{`$${product.price}`}</p>
                  <div className="btn-qty-container">
                     <select name="qty" id="">
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                     </select>
                     <button>add to cart</button>
                  </div>
                  <div className="general-info">
                     <div className="general-info-wrapper">
                        <div>
                           <p className="sub-title">product details</p>
                           <button>+</button>
                        </div>
                        <p className="text">{product.description}</p>
                     </div>
                     <div className="general-info-wrapper">
                        <div>
                           <p className="sub-title">free delivery and return</p>
                           <button>+</button>
                        </div>
                        <p className="text">{product.generalInfo}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Product;
