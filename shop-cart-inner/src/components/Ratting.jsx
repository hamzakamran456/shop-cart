import React from "react";

const Ratting = () => {
  const starStyle = { color: "#e9ba17", marginBottom: "10px" };

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
