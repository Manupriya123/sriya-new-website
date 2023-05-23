import React from "react";
import "./index.css";
const DrSay = ({ props }) => {
  return (
    <div className="dr-main-container">
      <div className="container_wrapper">
        <div className="dr-inner-container">
          <div className="dr-container">
            <div className="dr-image-container">
              <img
                src="https://sriya.ai/wp-content/uploads/2023/02/DrSrinivasKilambi.jpg"
                loading="lazy"
                alt="srinivas"
              />
              <div className="dr-info">
                <p className="dr-name">{props.para}</p>
              </div>
            </div>
            <div className="dr-words-container">
              <div className="edge-traingle"></div>
              <div className="edge-triangle-mobile"></div>
              <p>{props.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrSay;
