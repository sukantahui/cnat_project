import React from 'react';
import Navbar from './Navbar.jsx'; // or relative path like ./components/Navbar.jsx
import Header from './Header.jsx';
import About from './About.jsx';
import Courses from './Courses.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import Teachers from './Teachers.jsx';
const CodingInstitute = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <About/>
      <Courses/>
      <Teachers/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default CodingInstitute;
