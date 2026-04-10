import React from "react";
import { FaShieldAlt, FaClock, FaFileAlt, FaChartLine, FaUserTie, FaHandshake } from "react-icons/fa";
import { FaBalanceScale, FaClipboardList } from "react-icons/fa";
function UsesofUs() {
  const reasons = [
    {
      icon: <FaShieldAlt />,
      title: "Avoid Legal Penalties",
      desc: "Non-compliance can result in heavy fines and legal action. We ensure your organization stays fully compliant with labour laws."
    },
    {
      icon: <FaClock />,
      title: "Save Valuable Time",
      desc: "Managing statutory documentation consumes time. We handle compliance while you focus on business growth."
    },
    {
      icon: <FaFileAlt />,
      title: "Accurate Documentation",
      desc: "We maintain precise and updated records, ensuring zero compliance gaps."
    },
    {
      icon: <FaChartLine />,
      title: "Business Growth Support",
      desc: "Strong compliance systems create a stable foundation for sustainable business expansion."
    },
    {
      icon: <FaUserTie />,
      title: "Expert HR Guidance",
      desc: "Get professional HR advisory services tailored to your workforce and industry needs."
    },
    {
      icon: <FaHandshake />,
      title: "Trusted Partnership",
      desc: "We build long-term relationships based on transparency, ethics, and reliability."
    },
    {
      icon: <FaBalanceScale />,
      title: "Regulatory Risk Management",
      desc: "Identify, assess, and mitigate compliance risks before they become costly legal or operational issues."
    },
    {
      icon: <FaClipboardList />,
      title: "Streamlined Compliance Processes",
      desc: "We design structured compliance systems that improve efficiency, reduce errors, and ensure smooth statutory operations."
    }
  ];

  return (
    <section className="uses-section" id="uses">
      <div className="uses-container" data-aos="slide-up">

        <div className="uses-header">
          <h5>WHY YOU NEED US</h5>
          <h2>Compliance Is Not Optional — It’s Essential</h2>
          <p>
            Partner with us to protect your organization, strengthen operations, 
            and ensure smooth statutory management without stress.
          </p>
        </div>

        <div className="uses-grid">
          {reasons.map((item, index) => (
            <div key={index} className="uses-card">
              <div className="uses-icon">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default UsesofUs;