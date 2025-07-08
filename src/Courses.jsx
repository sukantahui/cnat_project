import React, { useState } from 'react';

const Courses = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const whatsappNumber = "919432456083"; 

  const courseList = [
    {
      title: "Full Stack Web Development",
      desc: "Learn HTML, CSS, JS, React, Node.js & more.",
      more: "This course covers both front-end and back-end development using real-world projects, version control, and deployment techniques.",
    },
    {
      title: "Python Programming",
      desc: "Master Python for web, data science, and AI.",
      more: "Includes Django for web, Pandas for data analysis, and AI frameworks like TensorFlow for hands-on ML development.",
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Ace technical interviews with strong DSA skills.",
      more: "Includes time & space complexity, recursion, trees, graphs, sorting, dynamic programming, and mock interviews.",
    },
  ];

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const encodeMessage = (courseTitle) =>
    encodeURIComponent(`Hi, I'm interested in the "${courseTitle}" course. Could you please share location and fee details?`);

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
                  <p className="card-text text-muted">{course.desc}</p>

                  {expandedIndex === idx && (
                    <p className="card-text text-dark small mt-2">{course.more}</p>
                  )}

                  <div className="d-flex flex-column gap-2 mt-auto">
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="btn btn-outline-primary"
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
                      {expandedIndex === idx ? "Show Less" : "Learn More"}
                    </button>

                    {/* ✅ WhatsApp Button */}
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeMessage(course.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success"
                    >
                      📱 Ask on WhatsApp
                    </a>
                  </div>
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
