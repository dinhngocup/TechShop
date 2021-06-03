import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Review from "./review";
import "./_reviewList.scss";
import Pagination from "pages/Product/ProductDetail/SingleProTab/ReviewTab/Pagination/pagination";
import { REVIEWS_PER_PAGE } from "utilities/Constant";

function ReviewList(props) {
  console.log('list')
  const { totalReviews } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState(null);
  const reviewsPerPage = REVIEWS_PER_PAGE;

  useEffect(() => {
    const reviews = [
      {
        review:
          "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam veritatis atque repudiandae dolorem molestiae ad.",
      },
      {
        review:
          "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam veritatis atque repudiandae dolorem molestiae ad.",
      },
      {
        review:
          "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam veritatis atque repudiandae dolorem molestiae ad.",
      },
      {
        review:
          "4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam veritatis atque repudiandae dolorem molestiae ad.",
      },
      {
        review:
          "5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam veritatis atque repudiandae dolorem molestiae ad.",
      },
      {
        review:
          "6. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam veritatis atque repudiandae dolorem molestiae ad.",
      },
      {
        review:
          "7. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam veritatis atque repudiandae dolorem molestiae ad.",
      },
      {
        review:
          "8. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam veritatis atque repudiandae dolorem molestiae ad.",
      },
      {
        review:
          "9. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam veritatis atque repudiandae dolorem molestiae ad.",
      },
      {
        review:
          "10. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam veritatis atque repudiandae dolorem molestiae ad.",
      },
      {
        review:
          "11. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam veritatis atque repudiandae dolorem molestiae ad.",
      },
      {
        review:
          "12. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam veritatis atque repudiandae dolorem molestiae ad.",
      },
      {
        review:
          "13. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam veritatis atque repudiandae dolorem molestiae ad.",
      },
      {
        review:
          "14. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam veritatis atque repudiandae dolorem molestiae ad.",
      },
    ];

    // call api to get review suitable with current page
    let response = [];
    // temp
    let indexOfFirstReview = currentPage * reviewsPerPage - reviewsPerPage;
    let indexOfLastReview = indexOfFirstReview + reviewsPerPage;
    for (
      let i = indexOfFirstReview;
      i < reviews.length && i < indexOfLastReview;
      i++
    ) {
      response.push(reviews[i]);
    }
    setReviews(response);
  }, [currentPage, reviewsPerPage]);

  const changeCurrentPage = (page) => {
    if(page === currentPage) return;
    setCurrentPage(page);
  };
  const renderListReview = (reviewList) => {
    return reviewList.map((review, index) => (
      <Col xs="12" sm="12" md="6" lg="6" className="col-review" key={index}>
        <Review key={index} review={review.review} />
      </Col>
    ));
  };
  return (
    <div className="review-list">
      {reviews !== null ? (
        <React.Fragment>
          {" "}
          <Row>{renderListReview(reviews)}</Row>
          <Pagination
            reviewsPerPage={reviewsPerPage}
            totalReviews={totalReviews}
            changeCurrentPage={changeCurrentPage}
          />
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
}

ReviewList.propTypes = {};

export default ReviewList;
