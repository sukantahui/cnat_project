// src/Contact.jsx
import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with form submission logic (e.g., API call)
    alert("Thank you for contacting us!");
  };

  return (
    <section id="contact" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form className="mx-auto" style={{ maxWidth: "600px" }} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="3" placeholder="Your message..." required></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
