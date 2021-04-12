import React, { useRef, useState } from "react";
import ProductApi from "../../../../api/productApi";
import Results from "./Results/results";
import "./_search.scss";

function Search() {
  const [data, setData] = useState({ results: null, otherResults: null });
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  const handleChangeSearchTerm = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      submitSearchTerm(value);
    }, 300);
  };

  const submitSearchTerm = async (info) => {
    /**
     * TODO: API return array including first 5 products and the quantity of others
     */
    let response = await ProductApi.searchProducts(info);

    let otherResults = 0;
    // TEMP CODE TO EXTRACT 5 FIRST PRODUCTS
    if (response.length > 5) {
      otherResults = response.length - 5;
      response = response.slice(0, 5);
    }
    let data = {
      results: response,
      otherResults: otherResults,
    };
    setData(data);
  };

  const resetSearchForm = () => {
    setSearchTerm("");
    setData({ results: null, otherResults: null });
  };

  return (
    <form className="search-form">
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChangeSearchTerm}
          onBlur={resetSearchForm}
        />
        <i className="fa fa-search"></i>
      </div>
      
        <Results data={data} />
      
    </form>
  );
}

export default Search;
