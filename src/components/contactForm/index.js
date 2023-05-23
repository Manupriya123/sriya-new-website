import React, { useState } from "react";
import "./index.css";
import CloseIcon from "@mui/icons-material/Close";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const ContactForm = () => {
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [textareaError, setTextareaError] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

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

  const handleTextareaChange = (event) => {
    const { value } = event.target;
    setTextareaValue(value);
    setTextareaError("");
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

    // Validate text area field
    if (textareaValue.trim() === "") {
      setTextareaError("Text area field is required");
      return;
    }

    // Show the "Thank You" popup
    setShowThankYou(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div>
      {isFormOpen ? (
        <div className="contact-main-container">
          <div className="contact-pop-up">
            <div className="contact-formWrapper">
              <div className="contact-formHeader">
                <p className="form-heading">
                  Please Fill The Form Below to Schedule a Call
                </p>
                <span onClick={handleCloseForm} className="form-close-icon">
                  <CloseIcon />
                </span>
              </div>
              <div className="contact-formBody">
                <div className="contact-field-container">
                  {!showThankYou ? (
                    <form onSubmit={handleSubmit} autoComplete="off">
                      <div className="field-gap">
                        <div className="input-item-container">
                          <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="Full Name"
                          />
                        </div>
                        {nameError && (
                          <span className="error-msg">*{nameError}</span>
                        )}
                      </div>
                      <div className="field-gap">
                        <div className="input-item-container">
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Email Address"
                          />
                        </div>
                        {emailError && (
                          <span className="error-msg">*{emailError}</span>
                        )}
                      </div>
                      <div className="field-gap">
                        <div className="input-item-container">
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
                          <span className="error-msg">
                            *{mobileNumberError}
                          </span>
                        )}
                      </div>
                      <div className="field-gap">
                        <div className="input-item-container">
                          <textarea
                            id="textarea"
                            value={textareaValue}
                            onChange={handleTextareaChange}
                            placeholder="Write your message"
                          />
                        </div>
                        {textareaError && (
                          <span className="error-msg">*{textareaError}</span>
                        )}
                      </div>
                      <div className="field-gap">
                        <button>Submit</button>
                      </div>
                    </form>
                  ) : (
                    <div className="thank-you-form">
                      <p>Thanks For Contacting Us!!</p>
                      <div className="thank-you-image">
                        <TaskAltIcon />
                      </div>
                      <p>Our Team Will Be In Touch Shortly.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ContactForm;
