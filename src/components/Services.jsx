import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import servicesData from "../data/servicesData";


function Services() {
  const navigate = useNavigate();
  const [active, setActive] = useState(2);
  const [startX, setStartX] = useState(0);
const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
  if (isDragging) return; // ⛔ stop auto slide while dragging

  const interval = setInterval(() => {
    setActive((prev) => (prev + 1) % servicesData.length);
  }, 2000);

  return () => clearInterval(interval);
}, [isDragging]);

  const handleStart = (x) => {
  setStartX(x);
  setIsDragging(true);
};

const handleEnd = (x) => {
  if (!isDragging) return;

  const diff = x - startX;

  if (diff > 50) {
    // 👉 swipe right
    setActive((prev) =>
      prev === 0 ? servicesData.length - 1 : prev - 1
    );
  } else if (diff < -50) {
    // 👉 swipe left
    setActive((prev) => (prev + 1) % servicesData.length);
  }

  setIsDragging(false);
};

  return (
    <section id="services" className="services-section">
      <h2 className="outserv">Our Services</h2>

      <div
  className="carousel"
  onMouseDown={(e) => handleStart(e.clientX)}
  onMouseUp={(e) => handleEnd(e.clientX)}
  onMouseLeave={() => setIsDragging(false)}
  onTouchStart={(e) => handleStart(e.touches[0].clientX)}
  onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
>
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