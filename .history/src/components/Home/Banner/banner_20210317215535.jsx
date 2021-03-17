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
        status: 'active'
      },
      {
        src: '../../../assets/images/pic1.jpg',
        alt: 'Apple Watch',
        status: 'active'
      },

    ]
    
  }, []);


  return (
    <div className='banner'>
      banner
    </div>
  );
}

export default Banner;
