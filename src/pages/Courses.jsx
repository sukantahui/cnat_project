import React, { useState } from 'react';
import './Courses.css';
import javaImg from '../assets/java-logo.svg';
import reactImg from '../assets/react-logo.svg';
import pythonImg from '../assets/python-logo.svg';
import coursesData from '../data/courses.json'; // Import JSON data

const imageMap = {
  javaImg,
  reactImg,
  pythonImg,
};

const Courses = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const whatsappNumber = "919432456083";

  const courseList = coursesData.map(course => ({
    ...course,
    image: imageMap[course.image] || null
  }));

  const groupedCourses = courseList.reduce((groups, course) => {
    if (!groups[course.category]) {
      groups[course.category] = [];
    }
    groups[course.category].push(course);
    return groups;
  }, {});

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const encodeMessage = (courseTitle) =>
    encodeURIComponent(`Hi, I'm interested in the "${courseTitle}" course. Could you please share location and fee details?`);

  return (
    <section id="courses" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">🎓 Our Courses</h2>
        {Object.entries(groupedCourses).map(([category, courses]) => (
          <div key={category} className="mb-5">
            <h3 className="text-secondary border-bottom pb-2 mb-4">{category}</h3>
            <div className="row g-4">
              {courses.map((course, idx) => (
                <div className="col-12 col-md-6 col-lg-4" key={course.courseID}>
                  <div className="card course-card h-100 shadow-sm border-0">
                    {course.image && (
                      <img
                        src={course.image}
                        alt={course.title}
                        className="card-img-top img-fluid p-3"
                        style={{ height: '180px', objectFit: 'contain' }}
                      />
                    )}
                    <div className="card-body d-flex flex-column text-center">
                      <h5 className="card-title fw-semibold mb-2 text-dark border-bottom pb-2">{course.title}</h5>
                      <p className="card-text text-muted">{course.desc}</p>

                      {expandedIndex === course.courseID && (
                        <p className="card-text text-dark small mt-2">{course.more}</p>
                      )}

                      <div className="d-flex flex-column gap-2 mt-auto">
                        <button
                          onClick={() => toggleExpand(course.courseID)}
                          className="btn btn-outline-primary fw-semibold"
                        >
                          {expandedIndex === course.courseID ? "⬆ Show Less" : "⬇ Learn More"}
                        </button>

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
        ))}
      </div>
    </section>
  );
};

export default Courses;
