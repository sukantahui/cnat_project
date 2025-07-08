// src/Teachers.jsx
import React from 'react';
import teacher1 from '../assets/teacher1.jpg';
import teacher2 from '../assets/teacher2.jpg';
import teacher3 from '../assets/teacher3.jpg';
import teacher4 from '../assets/teacher4.jpg';
import teacher5 from '../assets/teacher5.jpg';
import teacher6 from '../assets/teacher6.jpg';

const teachers = [
  {
    name: "Sukanta Hui",
    title: "Senior Web Development Instructor",
    image: teacher1,
    bio: "Sukanta brings 20+ years of full-stack experience and has mentored over 500 developers worldwide.",
  },
  {
    name: "Tanusree Hui",
    title: "Data Structures & Algorithms Mentor",
    image: teacher2,
    bio: "Rahul is an ex-Google engineer who specializes in competitive programming and interview prep.",
  },
  {
    name: "Chandan Das",
    title: "Data Analitics and Taxation Expert",
    image: teacher3,
    bio: "With a PhD in AI, Dr. Neha has led cutting-edge machine learning projects in both academia and industry.",
  },
  {
    name: "Sreeparna Das",
    title: "Data Structure and Algoritham",
    image: teacher4,
    bio: "With a PhD in AI, Dr. Neha has led cutting-edge machine learning projects in both academia and industry.",
  },
  {
    name: "Mounita Bhandari",
    title: "Lab Instructor",
    image: teacher5,
    bio: "With a PhD in AI, Dr. Neha has led cutting-edge machine learning projects in both academia and industry.",
  },
  {
    name: "Ritaja Ghosh",
    title: "Lab Instructor",
    image: teacher6,
    bio: "With a PhD in AI, Dr. Neha has led cutting-edge machine learning projects in both academia and industry.",
  },
];

const Teachers = () => {
  return (
    <section id="teachers" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5">Meet Our Instructors</h2>
        <div className="row">
          {teachers.map((teacher, index) => (
            <div className="col-md-4 text-center mb-4" key={index}>
              <div className="card shadow-sm border-0 h-100">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="card-img-top"
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{teacher.name}</h5>
                  <p className="text-muted">{teacher.title}</p>
                  <p className="card-text">{teacher.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
