import React from "react";
 
const ReachUs = () => {
  return (
    <section className="reach-section" id="contact">
      <div className="reach-card">
        <div className="reach-left">
          <h2>Let’s Connect</h2>
          <p>
            Get expert HR consulting support tailored to your business needs.
          </p>
        </div>

        <form className="reach-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Your Message" rows="3" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ReachUs;