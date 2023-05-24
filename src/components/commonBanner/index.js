import React from "react";
import "./index.css";

const CommonBanner = ({ props }) => {
  return (
  
      <div className="common-banner-outer-container">
        <div className="comman-banner-inner-container">
          <h2 className="common-banner-heading">{props.heading}</h2>
          <p className="common-banner-sub-heading">{props.subHeading}</p>
        </div>
      </div>
     
   
  );
};

export default CommonBanner;
