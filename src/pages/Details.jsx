import React from 'react';
import { useProducts } from '../context/ProductContext';
import { useParams } from 'react-router-dom';
import {  toast } from 'react-toastify';
const Details = () => {

  const { id } = useParams();
 const productId = Number(id);
 const {products,addToCart}=useProducts();
 
  const product = products.find((p) => p.id === productId);
  if (!product) return <p>Product not found</p>;
   const notify = (title) => {
    toast.success(`${title.toUpperCase()} added to Cart`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
    });
  };

  return (
    <div className="container details-container ">
      <div className="row">
        <div className="col-lg-5 image-container">
           <img src={product.images} alt="" width="100%" height="100%" />
        </div>
        <div className="col-lg-5">
          <h5>{product.title.toUpperCase()}</h5>
          <p className='rating'>{product.rating} Ratings</p>
          <p className='price'> <i class="fa-solid fa-indian-rupee-sign"></i>{product.price}</p>
          <p className='desc'>{product.description}</p>
          <div className='Offer'>Save {product.discountPercentage} %</div>
          <button onClick={()=>{addToCart(product); notify(product.title)}} className='Cart'>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
