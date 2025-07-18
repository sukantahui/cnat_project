// src/Header.jsx
import React from 'react';
import { Helmet } from 'react-helmet'; // ✅ Make sure Helmet is imported
// import background from '../assets/background.png';
import background from '../assets/background.jpg';

const Header = () => {
  return (
    <>
      <Helmet>
        <title>Coder & AccoTax | Learn Coding Online</title>
        <meta
          name="description"
          content="Join Coder & AccoTax to learn full stack web development, Python, React, and more. Get career-ready with practical training."
        />
        <meta
          name="keywords"
          content="coding courses, web development, react, nodejs, full stack, learn coding"
        />
        <meta name="author" content="Coder & AccoTax" />

        {/* Optional: Social sharing meta */}
        <meta property="og:title" content="Coder & AccoTax" />
        <meta
          property="og:description"
          content="Learn to Code. Build the Future. Get Job-Ready with our expert-led courses."
        />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <header
        className="text-white text-center py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold mb-3">Coder & AccoTax</h1>
          <p className="lead fs-4 mb-4">
            Shaping Futures with Code and Compliance.
          </p>
          <a href="#courses" className="btn btn-outline-light btn-lg px-4">
            🚀 Explore Courses
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
