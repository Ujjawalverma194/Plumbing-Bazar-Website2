import React, { createContext, useContext, useState } from "react";
import imageDataJson from "../data/data.json";
import sanitaryDatajson from "../data/sanitarywareData.json"
import sanitaryProductsjson from "../data/sanitaryProducts.json"
const ImageContext = createContext();
import Blogsjson from "../data/BlogsData.json"
import Testimonialjson from "../data/testimonialData.json"
import likedProductsjson from "../data/likedProducts.json"
const ContextProvider = ({ children }) => {
  const [Imagedata, setImagedata] = useState(imageDataJson);
  const [sanitaryData, setsanitaryData] = useState(sanitaryDatajson);
  const [sanitaryProducts, setsanitaryProducts] = useState(sanitaryProductsjson);
  const [likedProducts, setLikedProducts] = useState(likedProductsjson);

  return (
    <ImageContext.Provider value={{Blogsjson, Testimonialjson, Imagedata, setImagedata,sanitaryData ,setsanitaryData,sanitaryProducts,setsanitaryProducts,likedProducts,setLikedProducts }}>
      {children}
    </ImageContext.Provider>
  );
};

export default ContextProvider;

export const useImageContext = () => useContext(ImageContext);
