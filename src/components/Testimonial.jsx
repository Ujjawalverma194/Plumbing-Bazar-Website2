import React from "react";
import "../styles/testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useImageContext } from "../context/ContextProvider";
import "swiper/css";
const Testimonial = () => {
  const { Testimonialjson } = useImageContext();
  return (
    <>
      <div className="d-flex align-items-center flex-column test-section py-4">
        <h1 className="m-0 p-0">Our Testimonials</h1>
        <div className="container test-swiper ">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            autoplay={{ delay: 3000 }}
            speed={1200}
            loop
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            <div className="test-row ">
              {Testimonialjson.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className=" test-col">
                    <p className="test-para">{data.description}</p>
                    <div className="test-img">
                      <img src={data.image} alt="" />
                    </div>
                    <div className="test-ratings">
                      
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <h5>{data.name}</h5>
                    <p className="test-title">{data.title}</p>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
