import React, {useState, useEffect} from "react";
import "./_banner.scss";
import '../../'
function Banner() {
  const [bannerImages, setBannerImages] = useState('');

  //get banner images from DB
  useEffect(() => {
    // call api

    // temp data
    let images = [
      {
        src: '',
        alt: 'Apple Watch',
        status: 'active'
      },
      {
        src: '',
        alt: 'Apple Watch',
        status: 'active'
      },
      {
        src: '',
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
