import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./ProductSlides.scss";

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

interface imagesInterface {
   images: string[];
}
const ProductSlides: React.FC<imagesInterface> = ({ images }) => {
   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
   return (
      <>
         <Swiper
            spaceBetween={10}
            // navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            className="mySwiper2"
         >
            {images.map((i, index) => {
               return (
                  <SwiperSlide key={index}>
                     <img src={i} alt="" />
                  </SwiperSlide>
               );
            })}
         </Swiper>
         <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            className="mySwiper"
         >
            {images.map((i, index) => {
               return (
                  <SwiperSlide key={index}>
                     <img src={i} alt="" />
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </>
   );
};

export default ProductSlides;
