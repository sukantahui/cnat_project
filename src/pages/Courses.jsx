// src/Courses.jsx
import React, { useEffect, useRef, useState } from 'react';
import './Courses.css';

// Course images
import javaImg from '../assets/course-images/java-logo.svg';
import reactImg from '../assets/course-images/react-logo.svg';
import pythonImg from '../assets/course-images/python-logo.svg';
import defaultImg from '../assets/course-images/default-logo.svg';

// Group images
import webDevImg from '../assets/group-images/webdev.logo.svg';
import codeImg from '../assets/group-images/code.logo.svg';
import excelImg from '../assets/group-images/excel.logo.svg';
import taxImg from '../assets/group-images/tax.logo.svg';
import hardwareImg from '../assets/group-images/hardware.logo.svg';
import programmingImg from '../assets/group-images/programming.logo.svg';
import accountsImg from '../assets/group-images/accounts.logo.svg';
import dataanalysisImg from '../assets/group-images/dataanalysis.logo.svg';
import studentImg from '../assets/group-images/student.logo.svg';

import coursesData from '../data/courses.json';

const imageMap = {
  javaImg,
  reactImg,
  pythonImg,
  defaultImg,
  webDevImg,
  codeImg,
  excelImg,
  taxImg,
  hardwareImg,
  programmingImg,
  accountsImg,
  dataanalysisImg,
  studentImg
};

const Courses = () => {
  const [expandedGroups, setExpandedGroups] = useState({});
  const [courseDescExpanded, setCourseDescExpanded] = useState({});
  const whatsappNumber = "919432456083";

  const courseRefs = useRef({});

  const toggleGroup = (category) => {
    setExpandedGroups((prev) => {
      const isSameGroup = prev[category];
      return isSameGroup ? {} : { [category]: true };
    });
    setCourseDescExpanded({});
  };

  const toggleCourseDescription = (courseID) => {
    setCourseDescExpanded((prev) => ({
      ...prev,
      [courseID]: !prev[courseID],
    }));
  };

  const encodeMessage = (title) =>
    encodeURIComponent(`Hi, I'm interested in the "${title}" course. Could you please share location and fee details?`);

  useEffect(() => {
    const expandedCategory = Object.keys(expandedGroups)[0];
    if (expandedCategory) {
      const ref = courseRefs.current[`${expandedCategory}_1`];
      if (ref) {
        ref.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [expandedGroups]);

  return (
    <section id="courses" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-primary">🎓 Our Courses</h2>

        <div className="row g-4">
          {coursesData.map((group) => {
            const isExpanded = expandedGroups[group.category];

            return (
              <div
                className={`${isExpanded ? 'col-12' : 'col-12 col-md-6'}`}
                key={group.category}
              >
                <div
                  className="card shadow-sm border-0 h-100 group-card"
                  onClick={() => toggleGroup(group.category)}
                  style={{ cursor: 'pointer' }}
                  aria-expanded={isExpanded ? 'true' : 'false'}
                >
                  <div className="card-body">
                    <div className={`d-flex flex-column flex-md-row justify-content-center align-items-center text-center mb-3 group-header-responsive ${isExpanded ? 'w-100 w-md-60' : 'w-100'}`}>
                      {/* for left adjustment */}
                      {isExpanded && (
                        <div className="col-3 d-flex justify-content-center mb-2 mb-md-0">
                         
                        </div>
                      )}

                      <img
                        src={imageMap[group.groupImage] || imageMap.defaultImg}
                        alt={group.category}
                        className="me-3"
                        style={{ height: 50, width: 50, objectFit: 'contain' }}
                      />
                      <div>
                        <h4 className="card-title text-primary mb-0">
                          {group.category} ({group.courses.length})
                        </h4>
                        <p className="text-muted small" style={{ textAlign: 'justify' }}>
                          {group.groupDesc}
                        </p>
                      </div>
                      {/* for right adjustment */}
                      {isExpanded && (
                        <div className="col-3 d-flex justify-content-center mb-2 mb-md-0">
                        
                        </div>
                      )}
                    </div>

                    {isExpanded && (
                      <div className="row g-3 mt-3 fade-in justify-content-center text-center" onClick={(e) => e.stopPropagation()}>
                        {group.courses.map((course, index) => (
                          <div
                            className="col-12 col-md-6"
                            key={course.courseID}
                            ref={(el) =>
                              (courseRefs.current[`${group.category}_${index}`] = el)
                            }
                          >
                            <div className="card course-card border h-100">
                              <div className="row g-0 align-items-center justify-content-center text-center">
                                <div className="col-4 p-2 d-flex justify-content-center">
                                  <img
                                    src={imageMap[course.image] || imageMap.defaultImg}
                                    alt={course.title}
                                    className="img-fluid"
                                    style={{ maxHeight: '100px', objectFit: 'contain' }}
                                  />
                                </div>
                                <div className="col-8 p-2 d-flex flex-column align-items-center">
                                  <h6 className="fw-semibold mb-1">{course.title}</h6>
                                  <p className="text-muted small mb-2">{course.desc}</p>

                                  {courseDescExpanded[course.courseID] && (
                                    <p className="text-dark small mb-2">{course.more}</p>
                                  )}

                                  <div className="d-flex flex-column gap-2 w-100 align-items-center">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleCourseDescription(course.courseID);
                                      }}
                                      className="btn btn-sm btn-outline-primary w-100"
                                      style={{ maxWidth: 180 }}
                                    >
                                      {courseDescExpanded[course.courseID]
                                        ? '⬆ Hide Description'
                                        : '⬇ Show Description'}
                                    </button>

                                    <a
                                      title="Contact us on WhatsApp"
                                      href={`https://wa.me/${whatsappNumber}?text=${encodeMessage(course.title)}`}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="btn btn-sm btn-success w-100"
                                      style={{ maxWidth: 180 }}
                                    >
                                      📱 Ask on WhatsApp
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {!isExpanded && (
                      <div className="text-end mt-3">
                        <span className="view-more-link">Click to view courses ⬇</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
