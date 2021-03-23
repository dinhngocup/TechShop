import React, { useState, useEffect } from "react";
import Results from "./results";
import "./_search.scss";

function Search(props) {
  const [data, setData] = useState({ results: null, otherResults: null });
  useEffect(() => {
    let data = {
      results: [
        {
          name: "Apple Watch Series 6 40mm",
          price: "10.000.000đ",
          img: "",
        },
        {
          name: "IPhone 8 Plus 265GB Gold",
          price: "10.000.000đ",
          img: "",
        },
        {
          name: "IPhone 7 Plus 265GB Gold",
          price: "10.000.000đ",
          img: "",
        },
        {
          name: "Apple Watch Series 5 44mm",
          price: "10.000.000đ",
          img: "",
        },
        {
          name: "IPhone XS Max 265GB Gold",
          price: "10.000.000đ",
          img: "",
        },
      ],
      otherResults: 10,
    };
    setData(data);
  }, []);
  return (
    <form className="search-form">
      <div className="search-bar">
        <input type="search" />
        <i className="fa fa-search"></i>
      </div>
      <div className="result-container">
        <Results data={data} />
      </div>
    </form>
  );
}

export default Search;
