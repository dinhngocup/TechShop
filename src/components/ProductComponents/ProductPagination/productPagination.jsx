import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import {
  MAX_PAGINATION_NAV_ITEM,
  PRODUCTS_PER_PAGE,
} from "../../../utilities/Constant";
import "./_productPagination.scss";

function ProductPagination(props) {
  const { totalProducts, changeCurrentPage, currentPage } = props;
  const [firstPage, setFirstPage] = useState(0);
  const pageNumbers = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  const updatePagination = (newPage) => {
    let currentFirstPage = firstPage;
    const pagninationNavItem =
      pageNumbers < MAX_PAGINATION_NAV_ITEM
        ? pageNumbers
        : MAX_PAGINATION_NAV_ITEM;
    const middlePage = currentFirstPage + Math.floor(pagninationNavItem / 2);

    if (newPage > middlePage) {
      currentFirstPage += newPage - middlePage;
      if (currentFirstPage > pageNumbers - pagninationNavItem) {
        currentFirstPage = pageNumbers - pagninationNavItem;
      }
    } else if (newPage < middlePage && currentFirstPage !== 0) {
      currentFirstPage -= middlePage - newPage;
      if (currentFirstPage < 0) {
        currentFirstPage = 0;
      }
    }
    setFirstPage(currentFirstPage);
    changeCurrentPage(newPage);
  };

  const renderPagination = () => {
    let result = [];
    for (
      let i = firstPage;
      i < pageNumbers && i < firstPage + MAX_PAGINATION_NAV_ITEM;
      i++
    ) {
      result.push(
        <Pagination.Item
          key={i}
          onClick={() => updatePagination(i)}
          active={currentPage === i}
        >
          {i + 1}
        </Pagination.Item>
      );
    }
    return result;
  };
  return (
    <Pagination>
      <Pagination.First onClick={() => updatePagination(0)}>
        First
      </Pagination.First>
      <Pagination.Prev
        onClick={() => currentPage > 0 && updatePagination(currentPage - 1)}
      >
        Previous
      </Pagination.Prev>
      {renderPagination()}
      <Pagination.Next
        onClick={() =>
          currentPage < pageNumbers - 1 && updatePagination(currentPage + 1)
        }
      >
        Next
      </Pagination.Next>
      <Pagination.Last onClick={() => updatePagination(pageNumbers - 1)}>
        Last
      </Pagination.Last>
    </Pagination>
  );
}

export default React.memo(ProductPagination);
