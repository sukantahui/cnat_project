// src/Header.jsx
import React from 'react';
import background from '../assets/background.png';

const Header = () => {
  return (
    <header
      className="text-white text-center py-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <h1 className="display-3 fw-bold mb-3">Coder & AccoTax</h1>
        <p className="lead fs-4 mb-4">
          Learn to Code. Build the Future. Get Job-Ready.
        </p>
        <a href="#courses" className="btn btn-outline-light btn-lg px-4">
          🚀 Explore Courses
        </a>
      </div>
    </header>
  );
};

export default Header;
