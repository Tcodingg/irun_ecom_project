import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RootState } from "../../redux/rootReducer";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../redux/actions/actionsFetchProducts";

const Product: React.FC = () => {
   const dispatch = useDispatch();
   const product = useSelector(
      (state: RootState) => state.productReducer.product
   );
   const { id } = useParams();
   useEffect(() => {
      dispatch(getProduct(id));
   }, [id, dispatch]);
   console.log(product);
   return (
      <section className="product">
         <div className="bd-container product-container"></div>
      </section>
   );
};

export default Product;
