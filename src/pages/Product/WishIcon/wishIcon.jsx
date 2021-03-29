import React, { useState } from "react";
import image1 from "../../../assets/images/heart.png";
import image2 from "../../../assets/images/heart1.png";
import "./_wishIcon.scss";

function WishIcon() {
  const [image, setImage] = useState(image1);
  const editWishItem = () => {
    if (image === image1) setImage(image2);
    else setImage(image1);
  };
  return (
    <div className="wish-icon" onClick={editWishItem}>
      <img src={image} alt="Apple watch" />
    </div>
  );
}

export default WishIcon;
