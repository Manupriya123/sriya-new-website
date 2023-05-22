import React, { useState } from "react";
import "./index.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
const MainFooter = () => {
  return (
    <div className="main-footer-container">
      <div className=" footer-container ">
        <div className="footer-top-container container_wrapper">
          <div className="top-left-container">
            <div>
              <img src="https://ml1ygrea7hcj.i.optimole.com/w:94/h:36/q:mauto/f:avif/https://sriya.ai/wp-content/uploads/2023/04/White-logo-no-background-1.png" />
            </div>
            <div class="footer-btn-container">
              <a href="https://info.sriya.ai/discoveryapp/discoverform/">
                <button className="footer-btn">Request Pilot</button>
              </a>
              <a href="https://info.sriya.ai/sale/saleform/">
                <button className="footer-btn">Quote Me</button>
              </a>
            </div>
          </div>
          <div className="footer-resource-container">
            <p className="footer-resource-heading">Resources</p>
            <p className="footer-resource-text">
              AI Experts/Data Scientists for Hire
            </p>
            <p className="footer-resource-text">
              Pre-Built Models for Purchase
            </p>
            <p className="footer-resource-text">
              Algorithm Tutorials for Purchase
            </p>
          </div>
          <div className="footer-right-container">
            <div className="footer-quick-links">
              <a href="">
                <p className="foot-head">Platform</p>
              </a>
            </div>
            <div className="footer-quick-links">
              <p className="foot-head">Use-Case</p>
              <a className="sub-quick-links" href="">
                <p>Markets</p>
              </a>
              <a href="">
                <p className="sub-quick-links">Use-Case Builder</p>
              </a>
            </div>
            <div className="footer-quick-links">
              <p className="foot-head">About Us</p>
              <a href="">
                <p className="sub-quick-links">Our History</p>
              </a>
              <a href="">
                <p className="sub-quick-links">Our Team</p>
              </a>
              <a href="">
                <p className="sub-quick-links">Our Marketplace</p>
              </a>
              <a href="">
                <p className="sub-quick-links">Our Vision</p>
              </a>
            </div>
            <div className="footer-quick-links">
              <p className="foot-head">Resources</p>
              <a href="">
                <p className="sub-quick-links">Case Studies</p>
              </a>
              <a href="">
                <p className="sub-quick-links">Articles</p>
              </a>
              <a href="">
                <p className="sub-quick-links">Events</p>
              </a>
              <a href="">
                <p className="sub-quick-links">Academy</p>
              </a>
            </div>
          </div>
        </div>
        <hr className="horizontal-line" />
        <div className="footer-bottom-container container_wrapper">
          <div className="bottom-left-container">
            <a href="mailto: contact@sriya.ai">Contact Us: contact@sriya.ai</a>
          </div>
          <div className="bottom-middle-container">
            <p>Copyright © 2023 Sriya AI LLC | Powered by Sriya AI LLC</p>
          </div>
          <div className="bottom-right-container">
            <a href="https://www.youtube.com/channel/UCvnH31XiWzc4pt1OHoWsQYg">
              <YouTubeIcon />
            </a>
            <a href="https://www.linkedin.com/company/sriya-dxi-llc/mycompany/">
              <LinkedInIcon />
            </a>
            <a href="/">
              <InstagramIcon />
            </a>
            <a href="/">
              <FacebookIcon />
            </a>
            <a href="/">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
