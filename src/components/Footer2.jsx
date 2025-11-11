import React from "react";
import "../styles/footer2.css";
const Footer2 = () => {
  return (
    <>
      <div className="container-fluid footer2">
        <div className="container footer2-section ">
          <div className="footer2-row">
            <div className="col-lg-3 col-md-6 foot2-col foot2-col1">
                <div className="img-logo">
                    <img src="https://plumbingbazzar.com/uploads/media/2023/logo-f.png" alt="" />
                </div>
                <p>We are in the business of sanitary providers and all types of plumbing products. Check out our best-selling brands.</p>
                <h5>Subscribe to news Letter</h5>
                <input type="email" placeholder="Enter Email" />
                <div className="col1-para">We'll never share your email with anyone else.</div>
                
            </div>
            <div className="col-lg-3 foot2-col foot2-col2">
              <h4>Useful Links</h4>
              <hr />
              <ul>
                <li>Home </li>
                <li>About Us </li>
                <li>Contact </li>
              </ul>
            </div>
            <div className="col-lg-3 foot2-col foot2-col3">
             
              <h4>Quick Links</h4>
              <hr />
              <ul>
                <li>Login </li>
                <li>Register  </li>
              
              </ul>
            </div>
            <div className="col-lg-3 foot2-col foot2-col4">
              <h4>Contact </h4>
              <hr />
              <ul>
                <li> <i className="ri-map-pin-2-fill"></i> BARGARH,Odisha </li>
                <li> <i className="ri-phone-fill"></i>18002023352 </li>
                <li><i className="ri-mail-fill"></i> plumbingbazar@gmail.com </li>
              </ul>
            </div>
          </div>
          <p className="f-para">Follow Us</p>
          <div className="foot-logos">
              <div className="facebook"><i className="ri-facebook-fill"></i></div>
              <div className="youtube"><i className="ri-youtube-fill"></i></div>
              <div className="insta"><i className="ri-instagram-line"></i></div>
          </div>
        </div>
        <div className="main-footer">
          <div className="left-content">
            Copyright © 2022, All Right Reserved Plumbing Bazzar
          </div>
          <div className="right-content">
            <ul>
              <li>Home </li>
              <li>Terms & Condition</li>
              <li>Privacy Policy </li>
              <li>Return Policy </li>
              <li>Exchange Policy</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
