import React, { useState, useEffect } from "react";
import "./_banner.scss";
import image from '../../../assets/images/pic4.jpg'

function Banner() {
  const [bannerImages, setBannerImages] = useState("");

  //get banner images from DB
  useEffect(() => {
    // call api

    // temp data
    let images = [
      {
        src: "../../../assets/images/pic1.jpg",
        alt: "Apple Watch",
        status: "active",
      },
      {
        src: "../../../assets/images/pic2.jpg",
        alt: "Apple Watch",
        status: "inactive",
      },
      {
        src: "../../../assets/images/pic3.jpg",
        alt: "Apple Watch",
        status: "inactive",
      },
    ];
  }, []);

  return (
    <div id="demo" className="banner carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
      </ul>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image} alt="Los Angeles" />
        </div>
        
      </div>
      
    </div>
  );
}

export default Banner;
