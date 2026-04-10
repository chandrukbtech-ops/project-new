import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import servicesData from "../data/servicesData";

function Services() {
  const navigate = useNavigate();
  const [active, setActive] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % servicesData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="services" className="services-section">
      <h2 className="outserv">Our Services</h2>

      <div className="carousel">
        {servicesData.map((item, index) => {
          let position = index - active;

          if (position < -2) position += servicesData.length;
          if (position > 2) position -= servicesData.length;

          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className={`card position-${position}`}
              onClick={() => navigate(`/services/${item.id}`)}
            >
              <div className="icon">
                <Icon />
              </div>

              <h3>{item.title}</h3>

              {item.subtitle && (
                <p className="subtitle">{item.subtitle}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Services;