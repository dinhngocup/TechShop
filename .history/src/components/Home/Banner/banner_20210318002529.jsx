import React, { useState, useEffect } from "react";
import "./_banner.scss";
import image from '../../../assets/images/pic1.jpg'

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
      },
      {
        src: "../../../assets/images/pic2.jpg",
        alt: "Apple Watch",
      },
      {
        src: "../../../assets/images/pic3.jpg",
        alt: "Apple Watch",
      },
    ];
    setBannerImages(images);
  }, []);

  const showCarouselIndicators = (length) => {
    let result = '';
    for(let i = 0; i <length; i++) {
      result += `<li data-target="#demo" data-slide-to="${i}" className="${i === 0 ? 'active' : }"></li>`
    }
  }

  return (
    <div id="demo" className="banner carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image} alt="Los Angeles" />
        </div>
        <div className="carousel-item">
          <img src={image} alt="Los Angeles" />
        </div>
        <div className="carousel-item">
          <img src={image} alt="Los Angeles" />
        </div>
        
      </div>
      
    </div>
  );
}

export default Banner;
