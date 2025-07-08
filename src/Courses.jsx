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
    <section id="courses" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Our Courses</h2>
        <div className="row">
          {courseList.map((course, idx) => (
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
  );
};

export default Courses;
