// Services.jsx
import React from 'react';
import styles from './Services.module.css'; // Importing CSS module

const services = [
  { icon: "bi-code-slash", title: "Software Development", description: "Custom software solutions for your business." },
  { icon: "bi-display", title: "Website Design", description: "Modern, responsive, and SEO-friendly websites." },
  { icon: "bi-cpu", title: "Computer Hardware", description: "Sales and support for desktops, laptops, and accessories." },
  { icon: "bi-file-earmark-text", title: "Tax Filing", description: "Quick and accurate income tax filing services." },
  { icon: "bi-receipt", title: "GST", description: "Complete GST registration and return filing assistance." },
];

const Services = () => {
  const groupedServices = [];
  for (let i = 0; i < services.length; i += 3) {
    groupedServices.push(services.slice(i, i + 3));
  }

  return (
    <section className="py-5 bg-light" id="services">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>

        {/* Indicators */}
        <div className={`carousel-indicators mb-3 ${styles.carouselIndicators}`}>
          {groupedServices.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#serviceCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div
          id="serviceCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-inner">
            {groupedServices.map((group, index) => (
              <div
                className={`carousel-item ${index === 0 ? 'active' : ''} ${styles.carouselItem}`}
                key={index}
              >
                <div className="row">
                  {group.map((service, idx) => (
                    <div className="col-12 col-md-4 mb-3" key={idx}>
                      <div className={`card h-100 shadow-sm ${styles.serviceCard}`}>
                        <div className="card-body text-center">
                          <i className={`bi ${service.icon} fs-1 text-primary mb-3`}></i>
                          <h5 className="card-title">{service.title}</h5>
                          <p className="card-text">{service.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#serviceCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#serviceCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
