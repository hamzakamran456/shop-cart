import React from "react";

const Ratting = () => {
  const starStyle = { color: "#ffdf40" };

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
