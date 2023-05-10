import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Footer from "../Footer";

export default function Services() {
  return (
    <div className="services">
      <h1 className="services-heading">Services</h1>
      <div className="services-cards">
        <Cards />
      </div>
      <Footer />
    </div>
  );
}
