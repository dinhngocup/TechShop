import React from "react";
import PropTypes from "prop-types";
import './_headerSection.scss'

function HeaderSection(props) {
  const { content } = props;
  return <h3>{content}</h3>;
}

HeaderSection.propTypes = {
  content: PropTypes.string.isRequired,
};

export default HeaderSection;
