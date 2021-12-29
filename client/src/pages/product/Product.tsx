import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/actions/actionsFetchProducts";

import "./Product.scss";
import ProductSlides from "../../components/ProductSlides/ProductSlides";
import ProductDetails from "../../components/ProductSlides/productDetails/ProductDetails";
import { addToCart } from "../../redux/actions/actionCart";

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
                     <button onClick={() => dispatch(addToCart(product))}>
                        add to cart
                     </button>
                  </div>
                  <div className="general-info">
                     <ProductDetails
                        title="product details"
                        description={product.description}
                     />
                     <ProductDetails
                        title="free delivery and return"
                        description={product.generalInfo}
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Product;
