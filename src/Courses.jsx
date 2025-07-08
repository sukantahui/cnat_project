// src/Courses.jsx
import React from 'react';

const Courses = () => {
  const courseList = [
    {
      title: "Full Stack Web Development",
      desc: "Learn HTML, CSS, JS, React, Node.js & more.",
    },
    {
      title: "Python Programming",
      desc: "Master Python for web, data science, and AI.",
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Ace technical interviews with strong DSA skills.",
    },
  ];

  return (
    <section id="courses" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Our Courses</h2>
        <div className="row g-4">
          {courseList.map((course, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100 shadow-sm border-0 text-center">
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title fw-semibold mb-3">{course.title}</h5>
                  <p className="card-text mb-4 text-muted">{course.desc}</p>
                  <a
                    href="#"
                    className="btn btn-outline-primary mt-auto"
                    style={{ transition: "0.3s" }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#0d6efd";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "";
                      e.currentTarget.style.color = "";
                    }}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
