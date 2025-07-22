import React from "react";

const Ratting = ({ color = "#e9ba17" }) => {
  const starStyle = { color };

  return (
    <span className="rating">
      <i className="icofont-ui-rating" style={starStyle}></i>
      <i className="icofont-ui-rating" style={starStyle}></i>
      <i className="icofont-ui-rating" style={starStyle}></i>
      <i className="icofont-ui-rating" style={starStyle}></i>
      <i className="icofont-ui-rating" style={starStyle}></i>
    </span>
  );
};

export default Ratting;
