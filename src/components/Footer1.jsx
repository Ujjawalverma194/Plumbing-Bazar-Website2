import React from "react";
import "../styles/Footer1.css";
const Footer1 = () => {
  return (
    <>
      <div className="container-fluid footer1-section">
        <div className="left-foot">
          <img
            src="https://plumbingbazzar.com/assets/front_end/classic/demo/avtars/4861083.jpg"
            alt=""
            
          />
        </div>
        <div className="right-foot">
          <h1>Plumbing Bazar</h1>
          <p className="heading-2">
            Affordable Ecommerce Platform <br /> For Your All Sanitary Needs
          </p>
          <p className="para">
            Welcome to Plumbing Bazzar, where we redefine cleanliness & elegance
            in every space with a passion for quality, innovation &
            authenticity. We strive to revolutionize sanitaryware industry one
          </p>
          <div className="logos">
            <img src="https://plumbingbazzar.com/assets/front_end/classic/demo/app-store/app-store.png" alt="" />
            <img src="https://plumbingbazzar.com/assets/front_end/classic/demo/app-store/google-play-store.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer1;
