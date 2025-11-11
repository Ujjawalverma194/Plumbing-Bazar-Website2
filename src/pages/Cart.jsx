import React from "react";
import { useProducts } from "../context/ProductContext";
const Cart = () => {
  const { cartItems } = useProducts();

  return (
    <div>
      <div className="container p-4">
        <h2 className="fw-bold mb-3"> Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>No items in cart yet.</p>
        ) : (
          <>
            <div className="row">
              {cartItems.map((cart,index)=>(
                <div className=" card cart-product col-lg-4 mx-4">
                <img src={cart.images[0]} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{cart.title} </h5>
                  <p className="card-text">
                    <i className="fa-solid fa-indian-rupee-sign"></i> {cart.price}
                  </p>
                  
                </div>
              </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
