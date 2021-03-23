import React from "react";
import { Link } from "react-router-dom";
import image from "../../../../assets/images/pic3.jpg";
import "./_results.scss";
import { PropTypes } from "prop-types";
import { nanoid } from "nanoid";

function Results(props) {
  const { data } = props;
  const { results, otherResults } = data;
  const arrangeResults = (results, otherResults) => {
    let res = "";

    if (results === null || results.length === 0) {
      return (
        <div className="result justify-content-center">NO results found</div>
      );
    }

    if (otherResults === 0) {
      res = results.map((result) => {
        return (
          <Link className="result" to="" key={nanoid()}>
            <img src={image} alt={result.name} />
            <div className="info">
              <div className="name">{result.name}</div>
              <div className="price">{result.price}</div>
            </div>
          </Link>
        );
      });
    } else {
      res = results.map((result, index) => {
        if (index !== results.length - 1) {
          return (
            <Link className="result" to="" key={nanoid()}>
              <img src={image} alt={result.name} />
              <div className="info">
                <div className="name">{result.name}</div>
                <div className="price">{result.price}</div>
              </div>
            </Link>
          );
        } else {
          return (
            <React.Fragment key={nanoid()}>
              <Link className="result" to="">
                <img src={image} alt={result.name} />
                <div className="info">
                  <div className="name">{result.name}</div>
                  <div className="price">{result.price}</div>
                </div>
              </Link>
              <Link
                className="result justify-content-center"
                to=""
                key={nanoid()}
              >
                {otherResults} different results were found
              </Link>
            </React.Fragment>
          );
        }
      });
    }
    return res;
  };

  return (
    <React.Fragment>{arrangeResults(results, otherResults)}</React.Fragment>
  );
}

Results.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Results;
