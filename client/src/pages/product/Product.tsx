import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { getProduct } from "../../redux/actions/actionsFetchProducts";

const Product: React.FC = () => {
   const { id } = useParams();

   const dispatch = useDispatch;
   useEffect(() => {
      // dispatch(getProduct(id));
   }, [dispatch, id]);

   return (
      <section className="product">
         <div className="bd-container product-container"></div>
      </section>
   );
};

export default Product;
