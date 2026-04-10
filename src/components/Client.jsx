import React from "react";

import company1 from "/Users/chandruk/Desktop/Abhijit Hr Compliance 2/Abhijit/src/assets/company1.png";
import company2 from "/Users/chandruk/Desktop/Abhijit Hr Compliance 2/Abhijit/src/assets/company2.png";

const brandList = [
  { id: 1, logo: company1, name: "Company One" },
  { id: 2, logo: company2, name: "Company Two" },
];

const Client = () => {
  return (
    <section id="brand-zone" className="brand-wrapper">
      <div className="brand-container">
        <h2 className="brand-heading">Our Clients</h2>
        <p className="brand-subtext">
          Trusted by amazing companies we proudly work with
        </p>

        <div className="brand-grid">
          {brandList.map((item) => (
            <div key={item.id} className="brand-card">
              <img src={item.logo} alt={item.name} className="brand-logo" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .brand-wrapper {
          background-color: #ffffff;
          padding: 80px 20px;
        }

        .brand-container {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .brand-heading {
          font-size: 40px;
          font-weight: 700;
          color: #065f46;
          margin-bottom: 10px;
        }

        .brand-subtext {
          font-size: 15px;
          color: #6b7280;
          margin-bottom: 50px;
        }

        .brand-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }

        .brand-card {
          position: relative;
          padding: 40px;
          border-radius: 18px;
          background: linear-gradient(145deg, #ffffff, #eef7f5);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
          overflow: hidden;
        }

        /* Gold border effect */
        .brand-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 18px;
          padding: 2px;
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .brand-card:hover {
          transform: translateY(-10px) scale(1.04);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
        }

        .brand-logo {
          height: 65px;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .brand-card:hover .brand-logo {
          transform: scale(1.1);
        }

        /* Gold shine animation */
        .brand-card::after {
          content: "";
          position: absolute;
          top: -120%;
          left: -120%;
          width: 250%;
          height: 250%;
          background: linear-gradient(
            120deg,
            transparent,
            rgba(255, 215, 0, 0.2),
            transparent
          );
          transform: rotate(25deg);
          transition: 0.7s;
        }

        .brand-card:hover::after {
          top: 100%;
          left: 100%;
        }

      `}</style>
    </section>
  );
};

export default Client;