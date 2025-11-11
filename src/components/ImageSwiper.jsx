import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/imageswiper.css";
import { Autoplay } from "swiper/modules";
import { useImageContext } from "../context/ContextProvider";
const ImageSwiper = () => {
  const { Imagedata } = useImageContext();
  return (
    <>
      <div className="swiper-box">
        <Swiper
          className="swiper"
          modules={[Autoplay]}
          spaceBetween={20}
          breakpoints={{
                320: { slidesPerView: 1 }, 
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
          
          autoplay={{ delay: 3000 }}
         speed={1200}
          loop
        >
          {Imagedata.map((images, index) => (
            <SwiperSlide className="swiper-image">
              <img className="image" src={images.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ImageSwiper;
