import React from "react";
import { Button } from "./Button";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <p className="signup-form-heading">Creact a new account</p>
        <p className="signup-form-text">
          Now for the <b>Advanture</b> of a lifetime!
        </p>
        <div className="input-area">
          <form>
            <input
              type="text"
              name="text"
              placeholder="Enter Full Name"
              className="signup-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter a valid Email Address."
              className="signup-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter a Strong password."
              className="signup-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Re-enter a Strong password."
              className="signup-input"
            />
          </form>
          <Button buttonStyle="btn--outline">Sign up</Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
