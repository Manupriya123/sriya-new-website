import React, { useState } from "react";
import "./index.css";
import DownloadIcon from '@mui/icons-material/Download';

const DownloadBrochure = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");

  const handleNameChange = (event) => {
    const { value } = event.target;
    if (/\d/.test(value)) {
      setNameError("Name cannot contain numbers");
      return;
    }
    setName(value);
    setNameError("");
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError("Invalid email format");
    }
    setEmail(value);
    setEmailError("");
  };

  const handleMobileNumberChange = (event) => {
    const { value } = event.target;
    if (/[a-zA-Z]/.test(value)) {
      setMobileNumberError("Mobile number cannot contain alphabets");
      return;
    }
    setMobileNumber(value);
    setMobileNumberError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate name field
    if (name.trim() === "") {
      setNameError("Name is required");
      return;
    }

    // Validate email field
    if (email.trim() === "") {
      setEmailError("Email field is required");
      return;
    }

    // Validate Mobile Number
    const mobileNumberRegex = /^\d{10}$/; // Assuming 10-digit mobile numbers
    if (!mobileNumberRegex.test(mobileNumber)) {
      setMobileNumberError("Invalid mobile number format");
      return;
    }
  };

  return (
    <div className="download-main-container">
      <div className="container_wrapper">
        <div className="download-heading">
          <p className="download-first-heading">DOWNLOAD OUR FREE GUIDE</p>
          <p className="download-sec-heading">
            AI AND MACHINE LEARNING DEMYSTIFIED
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="download-container">
            <div className="download-field-gap">
              <div className="download-item-container">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Full Name"
                />
              </div>
              {nameError && (
                <span className="download-error-msg">*{nameError}</span>
              )}
            </div>
            <div className="download-field-gap">
              <div className="download-item-container">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email Address"
                />
              </div>
              {emailError && (
                <span className="download-error-msg">*{emailError}</span>
              )}
            </div>
            <div className="download-field-gap">
              <div className="download-item-container">
                <input
                  type="tel"
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                  placeholder="Mobile Number"
                  maxLength={10}
                />
              </div>
              {mobileNumberError && (
                <span className="download-error-msg">*{mobileNumberError}</span>
              )}
            </div>
            <div className="download-btn">
                <DownloadIcon/>
              <button>Download</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DownloadBrochure;
