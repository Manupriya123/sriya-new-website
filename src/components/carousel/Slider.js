import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Slider.css";

const Slider = () => {
  return (
    <>
      <Carousel className="slider-main">
        <div className="row mt-4">
          <div className="col col-lg-6 col-md-6 col-sm-12">
            <h1 className="slider-title">Problem</h1>
            <p className="slider-content">
              Business cases too complex with too many features and over-fitting
            </p>
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12">
            <h1 className="slider-title">Solution</h1>
            <p className="slider-content">
              Super feature (SXI) converts complex multi-variate problems into
              simple bi-variate solutions
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col col-lg-6 col-md-6 col-sm-12">
            <h1 className="slider-title">Problem</h1>
            <p className="slider-content">
              Business cases too complex with too many features and over-fitting
            </p>
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12">
            <h1 className="slider-title">Solution</h1>
            <p className="slider-content">
              Super feature (SXI) converts complex multi-variate problems into
              simple bi-variate solutions
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col col-lg-6 col-md-6 col-sm-12">
            <h1 className="slider-title">Problem</h1>
            <p className="slider-content">
              Business cases too complex with too many features and over-fitting
            </p>
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12">
            <h1 className="slider-title">Solution</h1>
            <p className="slider-content">
              Super feature (SXI) converts complex multi-variate problems into
              simple bi-variate solutions
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col col-lg-6 col-md-6 col-sm-12">
            <h1 className="slider-title">Problem</h1>
            <p className="slider-content">
              Business cases too complex with too many features and over-fitting
            </p>
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12">
            <h1 className="slider-title">Solution</h1>
            <p className="slider-content">
              Super feature (SXI) converts complex multi-variate problems into
              simple bi-variate solutions
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
