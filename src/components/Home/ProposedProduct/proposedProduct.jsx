import { PropTypes } from "prop-types";
import React, { useEffect, useState } from "react";
import image1 from "../../../assets/images/pic7.jpeg";
import "./_proposedProduct.scss";

ProposedProduct.propTypes = {
  product: PropTypes.object.isRequired,
};

function ProposedProduct(props) {
  const { product } = props;

  const [duration, setDuration] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      let EXP = new Date(product.EXP);

      let milliSeconds = Math.abs(EXP - new Date()) / 1000;
      //console.log(milliSeconds);

      let days = Math.floor(milliSeconds / 86400);
      milliSeconds -= days * 86400;

      let hours = Math.floor(milliSeconds / 3600) % 24;
      milliSeconds -= hours * 3600;

      let minutes = Math.floor(milliSeconds / 60) % 60;
      milliSeconds -= minutes * 60;

      let seconds = Math.floor(milliSeconds);

      setDuration({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [product.EXP]);

  return (
    <div className="proposed-product row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8">
          <img src={image1} alt="Apple Watch" />
        
      </div>
      <div className="col-sm-12 proposed-product-content col-xs-12 col-md-12 col-lg-4">
        <h2>{product.name}</h2>
        <p className="price">
          Best price: <span>{product.price}</span>
        </p>
        <div className="count-down">
          <div className="count-down-element">
            <div className="count-down-content">
              <div>{duration.days}</div>
              <span>days</span>
            </div>
          </div>
          <div className="count-down-element">
            <div className="count-down-content">
              <div>{duration.hours}</div>
              <span>hours</span>
            </div>
          </div>
          <div className="count-down-element">
            <div className="count-down-content">
              <div>{duration.minutes}</div>
              <span>minutes</span>
            </div>
          </div>
          <div className="count-down-element">
            <div className="count-down-content">
              <div>{duration.seconds}</div>
              <span>seconds</span>
            </div>
          </div>
        </div>
        <p className="description">{product.description}</p>
        <div className="d-flex">
          <button className="btn-learn-more">Learn more</button>
          <button className="btn-add-to-cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProposedProduct;
