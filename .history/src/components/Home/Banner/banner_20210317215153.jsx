import React from "react";
import "./_banner.scss";
function Banner() {
  const [bannerImages, setBannerImages] = useState('');

  //get banner images from DB
  useEffect(() => {
    // call api

    // temp data
    let images = [
      {
        
        status: 'active'
      }
    ]
    
  }, []);


  return (
    <div className='banner'>
      banner
    </div>
  );
}

export default Banner;
