import React from "react";
import "./herobanners.css";

//Images Herobanner
import banner from "../../assets/image.png";

export const HeroBanner = () => {
  return (
    <div className="banner">
      <img src={banner} />
      <div className="contantBanner">
        <p>Luxury Fashion & Accessories</p>
        <button className="btn"><a>Explore Collection</a></button>
      </div>
    </div>
  );
};
