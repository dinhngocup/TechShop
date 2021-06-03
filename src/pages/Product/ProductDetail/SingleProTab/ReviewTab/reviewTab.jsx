import React from "react";
import ReviewList from "./ReviewList/reviewList";
import "./_reviewTab.scss";

function ReviewTab(props) {
  console.log("review");
  return (
    <div className="review-tab">
      <div className="review-tab-title d-flex">
        <i className="fas fa-star"></i>
        <span className="rate ml-2">4.5 (230 reviews)</span>
      </div>
      <div className="review-tab-content">
        <ReviewList  totalReviews={14}/>
      </div>
    </div>
  );
}

ReviewTab.propTypes = {};

export default ReviewTab;
