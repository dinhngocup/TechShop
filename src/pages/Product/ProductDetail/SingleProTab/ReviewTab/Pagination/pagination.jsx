import React from "react";
import "./_pagination.scss";

function Pagination(props) {
  const { reviewsPerPage, totalReviews, changeCurrentPage } = props;
  const renderPagination = () => {
    let pageNumbers = Math.ceil(totalReviews / reviewsPerPage);
    let result = [];
    for (let i = 1; i <= pageNumbers; i++) {
      result.push(
        <li className="page-item" key={i}>
          <button className="page-link" onClick={() => changeCurrentPage(i)}>
            {i}
          </button>
        </li>
      );
    }
    return result;
  };
  return (
    <div>
      <ul className="pagination">{renderPagination()}</ul>
    </div>
  );
}

Pagination.propTypes = {};

export default React.memo(Pagination);
