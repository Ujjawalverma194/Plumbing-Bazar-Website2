import React from 'react'
import "../styles/sanitaryware.css"
import '../styles/faucets.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { useImageContext } from "../context/ContextProvider";
import { useProducts } from '../context/ProductContext';
import { useNavigate } from "react-router-dom";
const KitchenSinks = () => {
  const { sanitaryData } = useImageContext();
  const {products}=useProducts();
  const navigate=useNavigate();
   const handleClick=(id)=>{
    navigate(`/details/${id}`)
   }
  return (
    <div>
       <div className="line">
        <div className="left-line"></div>
        <h2>  KITCHEN SINKS  </h2>
        <div className="right-line"></div>
      </div>
      <div className="selling-swiper container-fluid">
        <div className="offer col-lg-2">
          <div className="offer-circle">
            <h2>27% OFF</h2>
          </div>
          <p>Most Selling Product</p>
        </div>
        <div className=" col-lg-9">
          <Swiper
            className="offer-swiper"
            modules={[Autoplay]}
            spaceBetween={20}
            breakpoints={{
                320: { slidesPerView: 1 }, // mobile
                640: { slidesPerView: 2 }, // small tablets
                1024: { slidesPerView: 4 }, // desktops
              }}
            autoplay={{ delay: 2000 }}
            loop
          >
            {products.map((data, index) => (
              <SwiperSlide key={index} className="offer-swiper-circle ">
                <img src={data.images[0]} alt="Kerovit" />
                <p className="offer-badge"> Min 27% OFF</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className=" sanitary-products container-fluid">
        <div className="row ">
          {products.slice(0, products.length / 5).map((product, index) => (
            <div className="col-lg-3 product ">
              <img src={product.images[0]} alt="" />
              <p className="text-center fw-400">{product.title.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="liked-products">
              <p className="text-center">MOST LIKED PRODUCTS</p>
              <Swiper
                className="sanitary-swiper"
                modules={[Navigation, Autoplay]}
                spaceBetween={15}
                breakpoints={{
                320: { slidesPerView: 1 }, // mobile
                640: { slidesPerView: 2 }, // small tablets
                1024: { slidesPerView: 4 }, // desktops
              }}
                navigation
                loop={true}
              >
                {products.map((data, index) => (
                  <SwiperSlide key={index} className="">
                    <div className="card">
                      <div><button className="like-btn"><i className="ri-heart-line"></i></button>
                       <div className="off">27% </div></div>
                      <img src={data.images[0]} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{data.title}</h5>
                        <div className="rating">
                          <i className="ri-star-line"></i>
                          <i className="ri-star-line"></i>
                          <i className="ri-star-line"></i>
                          <i className="ri-star-line"></i>
                          <i className="ri-star-line"></i>
                         
                        </div>
                        <p><i className="fa-solid fa-indian-rupee-sign"></i>{data.price}</p>
                      </div>
                      <button  onClick={()=>handleClick(data.id)} className="view-btn"> View Details</button>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="">
              <Swiper
                        className="kitchen-swiper"
                        modules={[Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        autoplay={{ delay: 3000 }}
                       
                        loop
                      >
                        
                          <SwiperSlide className="kitchen-swiper-img">
                            <img className="" src="https://plumbingbazzar.com/uploads/media/2025/most_like_product.jpeg" />
                          </SwiperSlide>
                          <SwiperSlide className="kitchen-swiper-img">
                            <img className="" src="https://plumbingbazzar.com/uploads/media/2025/most_like_product_jpeg_2.jpg" />
                          </SwiperSlide>
                          
                      </Swiper>
            </div>
    </div>
  )
}

export default KitchenSinks
