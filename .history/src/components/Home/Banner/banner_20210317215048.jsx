import React from "react";
import "./_banner.scss";
function Banner() {
  const [bannerImages, setBannerImages] = useState('');

  //get banner images from DB
  useEffect(() => {
    // cal
    
  }, []);


  return (
    <div className='banner'>
      banner
    </div>
  );
}

export default Banner;
