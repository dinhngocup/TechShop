import React, {useState, useEffect} from "react";
import "./_banner.scss";

function Banner() {
  const [bannerImages, setBannerImages] = useState('');

  //get banner images from DB
  useEffect(() => {
    // call api

    // temp data
    let images = [
      {
        src: '../../../assets/images/pic1.jpg',
        alt: 'Apple Watch',
        status: 'active'
      },
      {
        src: '../../../assets/images/pic2.jpg',
        alt: 'Apple Watch',
        status: 'inactive'
      },
      {
        src: '../../../assets/images/pic3.jpg',
        alt: 'Apple Watch',
        status: 'inactive'
      },
    ]
    
  }, []);


  return (
    <div className='banner id="demo" class="carousel slide" data-ride="carousel"'>
      banner
    </div>
  );
}

export default Banner;
