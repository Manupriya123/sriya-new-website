import React,{useState} from "react";
import "./index.css";
import ContactForm from "../contactForm";
const HomeBanner = () => {
  const [showComponent, setShowComponent] = useState(false);

  const handleButtonClick = () => {
    setShowComponent(true);
  };
  return (
    <div className="banner-container">
      <div className="banner-img-container container_wrapper">
        <h2 className="banner-heading">
          Improve Every Business Outcome With ML<sup>2</sup>
        </h2>
        <p className="banner-sub-heading">
          Sriya AI helps companies extract critical data, identify improvements
          and deploy real world solutions.
        </p>
        <p className="banner-third-heading">
          Experience the power of Sriya-ML<sup>2</sup>
        </p>
        <div className="banner-btn-container">
          <button
            onClick={handleButtonClick}
            className="btn-container contact-btn"
          >
            Contact
          </button>
          {showComponent && <ContactForm />}

          <a href="https://info.sriya.ai/discoveryapp/discoverform/">
            <button className="btn-container pilot-btn">Request Pilot</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
