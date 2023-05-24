import React from "react";
import "./index.css";

const OurExperts = ({ props }) => {
  return (
    <div className="our-expert-main-container">
      <div className="our-expert-inner-container container_wrapper">
        <p className="expert-heading">Our Experts</p>
        <p className="expert-para">{props.content}</p>
      </div>
    </div>
  );
};

export default OurExperts;
