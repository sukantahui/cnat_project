import React, { useState } from 'react';
import javaImg from '../assets/java-logo.svg';
import reactImg from '../assets/react-logo.svg';
import './Courses.css'; // Optional if using custom styles
import pythonImg from '../assets/python-logo.webp';


const Courses = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const whatsappNumber = "919432456083";

  const courseList = [
   
    {
      title: "Full Stack Web Development",
      desc: "Learn HTML, CSS, JS, React, Node.js & more.",
      more: "Covers front-end and back-end development with real-world projects, Git/GitHub, APIs, and deployment practices.",
      image: reactImg,
    },
    {
      title: "Python Programming",
      desc: "Master Python for web, data science, and AI.",
      more: "Includes Django for web development, Pandas for analysis, and frameworks like TensorFlow for machine learning.",
      image: pythonImg,
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Ace technical interviews with strong DSA skills.",
      more: "Covers arrays, linked lists, trees, graphs, sorting, recursion, and dynamic programming with mock interview practice.",
      image: javaImg,
    },
    {
      title: "Java Programming",
      desc: "Build solid OOP foundations with Java.",
      more: "Covers Java syntax, OOP concepts, file handling, multithreading, and JDBC integration with mini-projects.",
      image: javaImg,
    },
    {
      title: "C Programming",
      desc: "Learn low-level programming with C.",
      more: "Includes memory management, pointers, structures, file I/O, and algorithmic problem solving using C.",
      image: javaImg,
    },
    {
      title: "C++ Programming",
      desc: "Deep dive into OOP using C++.",
      more: "Covers C++ basics to advanced topics like classes, inheritance, polymorphism, STL, and file handling.",
      image: javaImg,
    },
    {
      title: "Basic Microsoft Office",
      desc: "Master Word, Excel, and PowerPoint basics.",
      more: "Learn document creation, spreadsheets, data analysis, and presentations—perfect for office or academic use.",
      image: javaImg,
    },
    {
      title: "Advanced DSA for B.Tech/BCA",
      desc: "Master DSA with a focus on technical placements.",
      more: "Tailored for B.Tech/BCA students—covers complexity analysis, competitive coding, and advanced data structures.",
      image: javaImg,
    },
    {
      title: "Computer Architecture",
      desc: "Understand the hardware-software interface.",
      more: "Learn digital logic, processor design, memory hierarchy, instruction cycles, and microarchitecture concepts.",
      image: javaImg,
    },
    {
      title: "Modern JavaScript Frameworks",
      desc: "Get hands-on with React, Angular, and Laravel.",
      more: "Learn modern front-end and back-end development with SPA, REST APIs, state management, and MVC architecture.",
      image: reactImg,
    },
    {
      title: "Database Management Systems (DBMS)",
      desc: "Master the backbone of data-driven apps.",
      more: "Covers relational databases, SQL, normalization, transactions, indexing, joins, and hands-on with MySQL/PostgreSQL.",
      image: javaImg,
    },
    {
      title: "Artificial Intelligence & Robotics for Children",
      desc: "Introduce young minds to AI and robotics.",
      more: "Fun and engaging lessons on basic robotics, visual programming, and introductory AI logic for school kids.",
      image: javaImg,
    },
    {
      title: "School-Level Computer Science (CBSE/ICSE/WBCHSE)",
      desc: "Class XI & XII curriculum-aligned courses.",
      more: "Covers computer applications, basic programming (Python/Java), logic building, DBMS, and exam-focused guidance.",
      image: javaImg,
    },
    {
      title: "Data Analytics with Excel & Power BI",
      desc: "Analyze and visualize data like a pro.",
      more: "Learn Excel functions, pivot tables, charts, dashboards, and Power BI for professional data storytelling.",
      image: javaImg,
    },
    {
      title: "Cybersecurity Essentials",
      desc: "Understand key concepts of cyber safety.",
      more: "Explore network security, cryptography, malware analysis, ethical hacking basics, and secure coding principles.",
      image: javaImg,
    },
    {
      title: "Mobile App Development",
      desc: "Create Android apps using Flutter.",
      more: "Covers Dart language, UI design, navigation, Firebase integration, and publishing apps to the Play Store.",
      image: javaImg,
    },
    {
      title: "Machine Learning with Python",
      desc: "Start your journey into AI and ML.",
      more: "Includes supervised/unsupervised learning, scikit-learn, data preprocessing, model evaluation, and mini projects.",
      image: javaImg,
    },
    {
      title: "Tally & GST Accounting",
      desc: "Become job-ready in financial accounting.",
      more: "Covers TallyPrime, GST filing, invoice management, tax calculation, and payroll processing in practical sessions.",
      image: javaImg,
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
        <h2 className="text-center mb-5 fw-bold text-primary">🎓 Our Courses</h2>
        <div className="row g-4">
          {courseList.map((course, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={idx}>
              <div className="card h-100 shadow-sm border-0">
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

                  {expandedIndex === idx && (
                    <p className="card-text text-dark small mt-2">{course.more}</p>
                  )}

                  <div className="d-flex flex-column gap-2 mt-auto">
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="btn btn-outline-primary rounded-3 fw-semibold"
                    >
                      {expandedIndex === idx ? "⬆ Show Less" : "⬇ Learn More"}
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
    </section>
  );
};

export default Courses;
