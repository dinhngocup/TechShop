import React, { useState } from "react";
import Media from "react-bootstrap/Media";
import { useHistory } from "react-router-dom";
import { Spinner } from "reactstrap";
import ReviewApi from "../../../api/reviewApi";
import image1 from "../../../assets/images/headphone1.jpeg";
import starIcon from "../../../assets/images/review.jpeg";
import "./_reviewModal.scss";

function ReviewModal(props) {
  const { order } = props;

  const history = useHistory();

  const [isReviewed, setIsReviewed] = useState(false);
  const [reviews, setReviews] = useState([]);

  const [loading, setLoading] = useState(false);

  const rate = (rate, productId) => {
    let stars = document
      .getElementById(`rating-${productId}`)
      .querySelectorAll("svg");
    for (let index = 4; index >= 0; index--) {
      if (index >= rate)
        stars[index]
          .querySelector("path")
          .setAttribute("fill", " var(--review-star-background)");
      else stars[index].querySelector("path").setAttribute("fill", "none");
    }
    const listReview = reviews;
    for (let i = 0; i < listReview.length; i++) {
      if (listReview[i].productId === productId) {
        listReview[i].rating = 5 - rate;
        setReviews([...listReview]);
        return;
      }
    }
    listReview.push({
      rating: 5 - rate,
      productId,
    });
    setReviews([...listReview]);
  };

  const updateReview = (review, productId) => {
    const listReview = reviews;
    for (let i = 0; i < listReview.length; i++) {
      if (listReview[i].productId === productId) {
        listReview[i].reviewContent = review;
        setReviews([...listReview]);
        return;
      }
    }
    listReview.push({
      reviewContent: review,
      productId,
    });
    setReviews([...listReview]);
  };

  const renderStarRating = (productId, reviewInfo) => {
    let result = [];
    for (let i = 0; i < 5; i++) {
      result.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          onClick={reviewInfo ? null : () => rate(i, productId)}
        >
          <path
            className={`${!reviewInfo ? "unrate-star" : ""}`}
            fill={
              reviewInfo && reviewInfo.rating > i
                ? "var(--review-star-background)"
                : "none"
            }
            fillRule="evenodd"
            stroke="var(--review-star-border)"
            strokeWidth="1.5"
            d="M16 1.695l-4.204 8.518-9.401 1.366 6.802 6.631-1.605 9.363L16 23.153l8.408 4.42-1.605-9.363 6.802-6.63-9.4-1.367L16 1.695z"
          ></path>
        </svg>
      );
    }
    return result;
  };

  const renderAReview = (product) => (
    <Media className="p-3 product-review">
      <img alt="" className="mr-3" src={image1} />
      <Media.Body className="d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between">
          <div>
            <div>
              <b>{product.name}</b>
            </div>
            <div>
              <small>Provided by TechShop</small>
            </div>
          </div>
          <div
            className={`rate-star${product.reviewInfo ? " rated" : " unrated"}`}
            id={`rating-${product.productId}`}
          >
            {renderStarRating(product.productId, product.reviewInfo)}
          </div>
        </div>
        {product.reviewInfo ? (
          <div>{product.reviewInfo.reviewContent}</div>
        ) : (
          <textarea
            rows="1"
            placeholder="Your review"
            onChange={(e) => {
              updateReview(e.target.value, product.productId);
            }}
          ></textarea>
        )}
      </Media.Body>
    </Media>
  );

  const submitReview = () => {
    // call api post review
    // productID, orderID, review Content, rate
    const addReview = async (data) => {
      console.log(data);
      setLoading(true);
      return ReviewApi.addReview(data)
        .then((res) => {
          console.log(res);
          setLoading(false);
          setIsReviewed(true);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    let body = {
      orderId: order.orderId,
      reviewInfo: reviews,
    };
    addReview(body);
  };

  const renderReviewBtn = () => {
    if (loading) {
      return (
        <div className="text-center loading-review">
          <Spinner color="primary" />
        </div>
      );
    }
    let emptyRating = reviews.filter((review) => review.rating);
    return (
      <button
        disabled={emptyRating.length !== order.products.length ? true : false}
        onClick={submitReview}
      >
        Submit your review
      </button>
    );
  };

  const closeModal = () => {
    history.push("/your-orders/deliveried");
  };

  const renderReviewArea = () => {
    return isReviewed ? (
      <div className="modal-body reviewed-modal-body">
        <img src={starIcon} alt="" srcSet="" />
        <div className="response">
          <div className="thank-you">Thank you for your valuable review!</div>
          <div>
            We really appreciate you taking the time to share your rating with
            us. We look forward to seeing you again soon
          </div>
        </div>
        <button data-dismiss="modal" onClick={closeModal}>
          OK
        </button>
      </div>
    ) : (
      <React.Fragment>
        <div className="modal-header">
          <h5>Review your experience</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body review-modal-body p-0">
          {order.products.map((product) => (
            <React.Fragment key={product.productId}>
              {renderAReview(product)}
            </React.Fragment>
          ))}
        </div>
        {order.isReviewed ? (
          ""
        ) : (
          <div className="modal-footer">
            <div className="btn-review">{renderReviewBtn()}</div>
          </div>
        )}
      </React.Fragment>
    );
  };

  return (
    <div
      className="modal fade"
      id="reviewModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="menuModalLabel"
      aria-hidden="true"
    >
      <div
        className="reviewModal modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">{renderReviewArea()}</div>
      </div>
    </div>
  );
}

ReviewModal.propTypes = {};
ReviewModal.defaultProps = {};

export default React.memo(ReviewModal);
