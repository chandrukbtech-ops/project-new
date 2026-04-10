import React from "react";

function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-container" data-aos="slide-up">

        {/* Left Content */}
        <div className="about-left">
          <h5 className="about-subtitle">ABOUT US</h5>
          <h2>
            Empowering Businesses Through <br />
            Reliable HR & Labour Compliance
          </h2>

          <p>
            At Abhijit HR Compliance Services, we specialize in guiding 
            organizations through complex statutory regulations with clarity 
            and precision. Our mission is to simplify compliance while 
            enabling businesses to focus on growth and operational success.
          </p>

          <p>
            With deep industry expertise and a commitment to transparency, 
            we ensure every client receives tailored solutions that align 
            with legal standards and business goals.
          </p>

          <button className="about-btn">Learn More</button>
        </div>

        {/* Right Cards */}
        <div className="about-right">
          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To become the most trusted HR compliance partner 
              by delivering ethical, accurate, and timely services 
              that drive business excellence.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To simplify statutory compliance through innovative 
              solutions, expert guidance, and continuous support 
              for organizations of all sizes.
            </p>
          </div>

          <div className="about-card highlight">
            <h3>Why Choose Us?</h3>
            <ul>
              <li>✔ 100% Statutory Compliance Support</li>
              <li>✔ Transparent & Ethical Practices</li>
              <li>✔ Expert HR & Labour Law Guidance</li>
              <li>✔ Timely Reporting & Documentation</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutUs;