import React from 'react';
import cnat from '../assets/cnat.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src={cnat} alt="Logo" width="30" height="30" />
          <span>Coder & AccoTax</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#courses">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
