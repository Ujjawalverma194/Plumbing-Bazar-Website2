import "../styles/Blogs.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import { useImageContext } from "../context/ContextProvider";
const Blogs = () => {
  const { Blogsjson } = useImageContext();
  return (
    <>
      <div className="d-flex align-items-center flex-column blogs-section py-4">
        <h1 className="m-0 p-0">Our Blogs</h1>
        <div className="container blogs-swiper ">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            autoplay={{ delay: 3000 }}
            speed={1200}
            loop
             breakpoints={{
                320: { slidesPerView: 1 }, 
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
          >
            {Blogsjson.map((data, index) => (
              <SwiperSlide key={index}>
                <div  className=" blog-card p-4 border">
                  <img
                    src={data.image}
                    className="card-img-top"
                    alt="..."
                    height="50%"
                  />
                  <div className="">
                    <h5 className=" blog-title">{data.title}</h5>
                    <p className="blog-desc">{data.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Blogs;
