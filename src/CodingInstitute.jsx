import React from 'react';
import Navbar from './Navbar.jsx'; // or relative path like ./components/Navbar.jsx
import background from './assets/background.png';
const CodingInstitute = () => {
  return (
    <div>
      <Navbar /> {/* Added Navbar */}
      {/* Hero Section */}
      <header
        className="text-white text-center py-5"
        style={{
          // background: "linear-gradient(135deg, #4f46e5, #6d28d9)",
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


      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">About Us</h2>
          <p className="text-center">
            CodeCraft Academy is a premier coding institute dedicated to teaching modern web and software development using industry-leading tools and technologies. With expert instructors and hands-on projects, we prepare students for real-world challenges.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Courses</h2>
          <div className="row">
            {[
              { title: "Full Stack Web Development", desc: "Learn HTML, CSS, JS, React, Node.js & more." },
              { title: "Python Programming", desc: "Master Python for web, data science, and AI." },
              { title: "Data Structures & Algorithms", desc: "Ace technical interviews with strong DSA skills." }
            ].map((course, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.desc}</p>
                    <a href="#" className="btn btn-outline-primary">Learn More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Contact Us</h2>
          <form className="mx-auto" style={{ maxWidth: "600px" }}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <div className="container">
          <p className="mb-0">© 2025 Coder & AccoTax. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CodingInstitute;
