import React from "react";

function ProReview(props) {
  const { content } = props;
  console.log('review', content);
  return <div>review</div>;
}

ProReview.propTypes = {};

export default ProReview;
