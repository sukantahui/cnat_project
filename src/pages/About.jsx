// src/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 display-5 fw-bold">About Us</h2>
        <p className="text-justify mx-auto" style={{ maxWidth: "900px", textAlign: "justify" }}>
        
          <strong>Coder & AccoTax</strong> is a premier coding and professional training institute dedicated to teaching modern web and software development using industry-leading tools and technologies. With expert instructors, real-world projects, and a strong emphasis on hands-on learning, we empower students with the skills they need to thrive in the ever-evolving tech industry.
        </p>
        <p className="text-justify mx-auto mt-3" style={{ maxWidth: "900px", textAlign: "justify" }}>
          We have been proudly serving in this field for the past <strong>27 years</strong>, offering quality education and training in programming, accounting, taxation, and data analysis. Our institute is <strong>ISO Certified</strong>, ensuring high standards in teaching methodology and infrastructure.
        </p>
        <p className="text-justify mx-auto mt-3" style={{ maxWidth: "900px", textAlign: "justify" }}>
          Our team comprises <strong>well-trained and highly educated teachers</strong> who specialize in various subjects and class levels. Whether it's school-level programming or advanced professional courses, we cater to a wide range of learners.
        </p>
        <p className="text-justify mx-auto mt-3" style={{ maxWidth: "900px", textAlign: "justify" }}>
          Over the years, our students have gone on to build successful careers and are now <strong>well established across different parts of the world</strong>. Their achievements are a testament to the quality and commitment we bring to every classroom.
        </p>
      </div>
    </section>
  );
};

export default About;
