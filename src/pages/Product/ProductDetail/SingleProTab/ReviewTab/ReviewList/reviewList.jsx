import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import Review from "./review";
import "./_reviewList.scss";
import Pagination from "pages/Product/ProductDetail/SingleProTab/ReviewTab/Pagination/pagination";
import { REVIEWS_PER_PAGE } from "utilities/Constant";
import ProductApi from "api/productApi";

function ReviewList(props) {
  const { id, totalReviews, firstReviews } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState(firstReviews);

  useEffect(() => {
    // totalReviews = 0 => no comment for this product =>  no need to call api
    // current page = 1 => get review from props => no need to call api
    if (totalReviews === 0 || currentPage === 1) return;

    // call api to get review suitable with current page
    const fetchReviews = async (id, currentPage) => {
      let pageInDB = currentPage - 1
      let response = await ProductApi.getReviewsByProductIDByPagination(
        id,
        pageInDB,
        REVIEWS_PER_PAGE
      );
      setReviews(response);
    };

    fetchReviews(id, currentPage);
  }, [currentPage, totalReviews, id]);

  const changeCurrentPage = (page) => {
    if (page === currentPage) return;
    setCurrentPage(page);
  };

  const renderReviewPage = (reviewList) => {
    if (reviewList === null) return "";
    if (totalReviews === 0) return <div>Ko tồn tại review nào</div>;
    return (
      <React.Fragment>
        <Row>
          {reviewList.map((review, index) => (
            <Col
              xs="12"
              sm="12"
              md="6"
              lg="6"
              className="col-review"
              key={index}
            >
              <Review key={index} review={review} />
            </Col>
          ))}
        </Row>
        <Pagination
          totalReviews={totalReviews}
          changeCurrentPage={changeCurrentPage}
        />
      </React.Fragment>
    );
  };
  return <div className="review-list">{renderReviewPage(reviews)}</div>;
}

ReviewList.propTypes = {};

export default ReviewList;
