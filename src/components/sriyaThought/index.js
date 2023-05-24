import React from "react";
import "./index.css";

const SriyaThought = ({ props }) => {
  return (
    <div className="thought-outer-container">
      <div className="container_wrapper">
        <p className="thought-para">"{props.content}"</p>
      </div>
    </div>
  );
};

export default SriyaThought;
