import React from "react";
import "./index.css";
import EastIcon from "@mui/icons-material/East";

const WhatWeDo = ({ props }) => {
  // console.log("props : ", props);
  return (
    <div className="what-we-do-main-container">
      <div className="container_wrapper">
        <h2 className="what-heading">{props.heading}</h2>
        <p className="what-para">{props.content}</p>
        <a href="https://info.sriya.ai/academy/">
          <p className="what-contact-btn">
            Contact Us <EastIcon />
          </p>
        </a>
      </div>
    </div>
  );
};

export default WhatWeDo;
