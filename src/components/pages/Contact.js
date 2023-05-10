import React from "react";
import "../../App.css";
import ContactForm from "../ContactForm";
import Footer from "../Footer";

export default function Contact() {
  return (
    <div className="contact">
      <h1 className="contact-heading">Contact</h1>
      <ContactForm />
      <Footer />
    </div>
  );
}
