import React from "react";
import { Button } from "./Button";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <p className="contact-form-text">
          We be with you reach out to you as soon as possible.
        </p>
        <div className="input-area">
          <form>
            <input
              type="text"
              name="text"
              placeholder="Enter Full Name"
              className="contact-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address."
              className="contact-input"
            />
          </form>
          <Button buttonStyle="btn--outline">Contact us</Button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
