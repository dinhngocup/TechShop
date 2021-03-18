import React, { useState, useEffect } from "react";
import "./_banner.scss";
import image from "../../../assets/images/pic1.jpg";

function Banner() {
  const [bannerImages, setBannerImages] = useState("");

  //get banner images from DB
  useEffect(() => {
    // call api

    // temp data
    let images = [
      {
        src: { image },
        alt: "Apple Watch",
      },
      {
        src: { image },
        alt: "Apple Watch",
      },
      {
        src: { image },
        alt: "Apple Watch",
      },
    ];
    setBannerImages(images);
  }, []);

  const showCarouselIndicators = (items) => {
    let result = "";

    if (items.length === 0) return result;

    result = items.map((items, index) => {
      return (
        <li
          data-target="#demo"
          data-slide-to={index}
          className="active"
          key={index}
        ></li>
      );
    });
    return result;
  };

  const showCarouselItems = (items) => {
    let result = "";
    if (items.length === 0) return result;

    result = items.map((items, index) => {
      return (
        <div
          className={`carousel-item ${index === 0 ? "active" : ""}`}
          key={index}
        >
          <img src={image} alt={items.alt} />
        </div>
      );
    });

    return result;
  };

  return (
    <div
      id="demo"
      className="banner carousel slide"
      data-ride="carousel"
    >
      <ul className="carousel-indicators">
        {/* <li data-target="#demo" data-slide-to="0" className="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li> */}
        {showCarouselIndicators(bannerImages)}
      </ul>
      <div className="carousel-inner">
        {/* <div className="carousel-item active">
          <img src={image} alt="Los Angeles" />
        </div>
        <div className="carousel-item">
          <img src={image} alt="Los Angeles" />
        </div>
        <div className="carousel-item">
          <img src={image} alt="Los Angeles" />
        </div> */}
        {showCarouselItems(bannerImages)}
      </div>
    </div>
  );
}

export default Banner;
