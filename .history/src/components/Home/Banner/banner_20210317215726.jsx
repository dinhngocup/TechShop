import React, { useState, useEffect } from "react";
import "./_banner.scss";

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
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>
      <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="la.jpg" alt="Los Angeles">
    </div>
    <div class="carousel-item">
      <img src="chicago.jpg" alt="Chicago">
    </div>
    <div class="carousel-item">
      <img src="ny.jpg" alt="New York">
    </div>
  </div>
    </div>
  );
}

export default Banner;
