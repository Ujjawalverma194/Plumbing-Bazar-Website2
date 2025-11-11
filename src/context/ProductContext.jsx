import React, { createContext, useContext, useEffect, useState } from "react";
const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [likedItems ,setLikedItems] = useState([]);
  const addToCart = (product) => {
    
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  };


   const toggleLike=(product)=>{
    setLikedItems((prev)=>{
      const exists=prev.find((item)=>item.id===product.id)
      if(exists){
        return prev.filter((item)=>item.id!==product.id);
      }
      else{
        return[...prev,product]
      }
    })
  }


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading ,addToCart,cartItems ,likedItems,toggleLike }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
