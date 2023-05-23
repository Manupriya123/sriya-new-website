import React, { useState } from "react";
import "./index.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import OffcanvasExample from "../hamburger";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="header-main-container">
      <div className="header-container">
        <div className="logo-container">
          <a href="https://sriya.ai/">
            <img
              height="43"
              width="130"
              src="https://ml1ygrea7hcj.i.optimole.com/w:300/h:116/q:mauto/f:avif/https://sriya.ai/wp-content/uploads/2023/04/cropped-Color-logo-no-background-1.png"
              alt="ariya.ai"
            />
          </a>
        </div>
        <div className="header-heading desktop-header">
          <div>Platform</div>
          <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropdown-button">
              <p>UseCase</p>
              <ArrowDropDownIcon />
            </div>
            {isOpen && (
              <div className="dropdown-content">
                <p>Markets</p>
                <p>Use Case Builder</p>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropdown-button">
              <p>About Us</p>
              <ArrowDropDownIcon />
            </div>
            {isOpen && (
              <div className="dropdown-content">
                <p>Our History</p>
                <p>Our Team</p>
                <p>Our Marketplace</p>
                <p>Our Vision</p>
              </div>
            )}
          </div>
          <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="dropdown-button">
              <p>Resources</p>
              <ArrowDropDownIcon />
            </div>
            {isOpen && (
              <div className="dropdown-content">
                <p>Case Study</p>
                <p>Article</p>
                <p>Events</p>
                <p>Academy</p>
              </div>
            )}
          </div>
          <div>Contact</div>
        </div>
        <div className="header-right desktop-header">
          <div>Demo</div>
          <div>Login</div>
        </div>
        <div className="mobile-header">
          <OffcanvasExample />
        </div>
      </div>
    </div>
  );
};

export default Header;
