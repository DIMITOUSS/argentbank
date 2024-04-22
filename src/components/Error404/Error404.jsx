import React from "react";
import "../Error404/Error404.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom"; 

const Error404 = () => {
  return (
    <div>
      <Navbar />
      <div className="error-container">
        <h2 className="error-message">404  Page Not Found </h2>
        <p>Oops! It seems like the page you're searching for doesn't exist.</p>
        <Link to="/" className="home-link">Go to Home</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
