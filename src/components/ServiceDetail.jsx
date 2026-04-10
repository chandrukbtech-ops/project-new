import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "../data/servicesData";

function ServiceDetail() {
  const { serviceId } = useParams();

  const service = servicesData.find(
    (item) => item.id === serviceId
  );

  if (!service) {
    return <h2>Service not found</h2>;
  }

  const Icon = service.icon;

  return (
    <section className="service-detail-page">

      {/* TOP HEADING */}
      <div className="top-heading">
        <h2>Our Services</h2>
        <p>Delivering expert HR & compliance solutions for your business</p>
      </div>

      {/* HERO */}
      <div className="service-hero">
        <div className="service-hero-content">
          <div className="icon-box">
            <Icon />
          </div>
          <h1>{service.title}</h1>
          {service.subtitle && <p className="subtitle">{service.subtitle}</p>}
          <p className="desc">{service.description}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="service-container">
        <h2>What We Offer</h2>

        <div className="points-grid">
          {service.points.map((point, index) => (
            <div className="point-card" key={index}>
              <span>✔</span>
              <p>{point}</p>
            </div>
          ))}
        </div>

        {/* EXTRA */}
        <div className="extra-content">
          <h2>Why Choose Us?</h2>
          <p>
            We provide end-to-end compliance support with a strong focus on
            accuracy, timeliness, and regulatory excellence.
          </p>

          <h2>Our Approach</h2>
          <p>
            From documentation to approval, we handle every stage of compliance
            with precision.
          </p>
        </div>

        {/* CTA */}
        <div className="cta-box">
          <h2>Need Help with This Service?</h2>
          <p>Get expert consultation today.</p>
          <button>Request Consultation</button>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetail;