import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/images/footer1.jpeg";
import image1 from "../../../assets/images/white.png";
import "./_emptyItem.scss";
import { PropTypes } from 'prop-types';


EmptyItem.propTypes = {
    title: PropTypes.string.isRequired
};
EmptyItem.defaultProps = {
    title: 'cart'
}

function EmptyItem(props) {
  const { title } = props;
  return (
    <React.Fragment>
      <div className="row empty-compo">
        <div className="col-lg-7 empty-compo-pic">
          <img src={image} alt="apple-watch" />
          <img src={image1} alt="apple-watch" className="white-line" />
        </div>
        <div className="col-lg-5"></div>
        <div className="empty-compo-content">
          <h4>Your {title} is empty</h4>
          <div>
            <Link to="/products">Shop today's deals</Link>
          </div>
          <div>
            <button className="btn-sign-in">Sign in to your account</button>
            <button className="btn-sign-up">Sign up now </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}


export default EmptyItem;
