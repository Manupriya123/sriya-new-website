import React from "react";
import "./index.css";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
const WhySriya = () => {
  return (
    <div className="why-sriya-main-container">
      <div className="container_wrapper">
        <div className="why-inner-container">
          <p className="why-heading">Why Sriya.Ai?</p>
          <p className="why-content">
            We believe companies create valuable data every minute and we are
            committed to helping our clients unravel the patterns and insights
            only AI-ML can do!
          </p>
          <div className="why-container">
            <div className="why-img">
              <QueryBuilderIcon />
              <p className="why-pointer-heading">PREDICTIVE</p>
              <p className="why-pointer">Standard AI-ML</p>
            </div>
            <div className="why-img">
              <PrecisionManufacturingIcon />
              <p className="why-pointer-heading">PRECISION</p>
              <p className="why-pointer">SXI - Indexing</p>
            </div>
            <div className="why-img">
              <ContentPasteIcon />
              <p className="why-pointer-heading">PRESCRIPTION</p>
              <p className="why-pointer">GPT</p>
            </div>
            <div className="why-img">
              <ToggleOffIcon />
              <p className="why-pointer-heading">REINFORCED</p>
              <p className="why-pointer">Feedback loop</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySriya;
