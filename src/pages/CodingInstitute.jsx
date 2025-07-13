import React from 'react';
import Navbar from './Navbar.jsx'; // or relative path like ./components/Navbar.jsx
import Header from './Header.jsx';
import About from './About.jsx';
import Courses from './Courses.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import Teachers from './Teachers.jsx';
import Services from './Services.jsx';
const CodingInstitute = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <About/>
      <Courses/>
      <section id="teachers" className="py-5 bg-white">
        <Teachers/>
      </section>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default CodingInstitute;
