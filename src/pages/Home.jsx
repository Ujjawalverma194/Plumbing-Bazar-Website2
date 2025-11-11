import React from 'react'
import Video from "../components/Video"
import ImageSwiper from "../components/ImageSwiper"
import SanitaryWare from '../components/SanitaryWare'
import Faucets from '../components/Faucets'
import Accessories from '../components/Accessories'
import KitchenSinks from '../components/KitchenSinks'
import Designer from '../components/Designer'
import Blogs from '../components/Blogs'
import Footer1 from '../components/Footer1'
import Footer2 from '../components/Footer2'
import Testimonial from '../components/Testimonial'
const Home = () => {
  return (
    <div>
     <Video/>
     <ImageSwiper/>
     <SanitaryWare/>
     <Faucets/>
     <Accessories/>
     <KitchenSinks/>
     <Designer/>
     <Testimonial/>
     <Blogs/>
     <Footer1/>
     <Footer2/>
    </div>

  )
}

export default Home
