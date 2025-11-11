import React from "react";
import "../styles/navbar.css";
import "../styles/media.css";
import navLogo from "../assets/navLogo.png";
import { NavLink } from "react-router-dom";
import { useProducts } from "../context/ProductContext";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import Modal from "react-modal";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, likedItems } = useProducts();
  return (
    <> 
      <div className="container nav-up-container">
        <div className="left-container">
          <ul>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              &nbsp; &nbsp; &nbsp; Indore City, Indore, Juni Indore Tahsil,
              Indore,
            </li>
            <li>
              <i className="ri-mail-fill"></i> &nbsp; &nbsp; &nbsp;
              plumbingbazzar@gmail.com
            </li>
            <li>
              <i className="ri-phone-fill"></i> &nbsp; &nbsp; &nbsp; 18002023352
            </li>
          </ul>
        </div>
        <div className="right-container">
          <i className="ri-facebook-fill"></i>
          <i className="ri-youtube-fill"></i>
          <i className="ri-instagram-line"></i>
        </div>
      </div>
      <hr />
      <nav className="navbar  main-navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid down-navbar">
          <div className="navlogo">
            <img src={navLogo} alt="" height="30%" width="30%" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 left-list">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/products"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" to="#">
                      SANITARYWARE
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" to="#">
                      FAUCETS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" to="#">
                      ACCESSORIES
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" to="#">
                      KITCHEN SINKS
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" to="#">
                      DESIGNER BASIN & MIRROR
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 right-list">
              <li className="nav-item">
                <button onClick={() => setIsOpen(true)} className="login-btn">
                  Join Us / Login
                </button>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/search">
                  <i className="ri-search-line"></i>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="/likes">
                  <i className="ri-heart-3-line"></i>
                  <span className=" like-badge Badge  p-0 position-absolute  badge  ">
                    {likedItems.length}
                  </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/notification">
                  <i className="fa-regular fa-bell"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  <i className="ri-user-3-line"></i>
                </NavLink>
              </li>
              <li className="nav-item  position-relative">
                <NavLink className="nav-link" to="/cart">
                  <i className="ri-shopping-cart-line"></i>
                  <span className=" cart-badge Badge  p-0 position-absolute badge  ">
                    {cartItems.length}
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ToastContainer />
      <hr />

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="Example Modal"
          style={{
    content: {
      width: "600px",
      margin: " 100px auto",
      height:"400px"
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  }}
      >
        <form className="login-form"> 
          <div className="form-heading">
            <p>Login</p>
          </div>
          <input type="number" placeholder="Mobile Number" />
          <div className="buttons">
            <button className="cancel">Cancel</button>
             <button type="submit" className="login">
            Login
          </button>
          </div>
         
        </form>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>
    </>
  );
};

export default Navbar;
