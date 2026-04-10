import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenu(false);
    }
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo-section" onClick={() => scrollToSection("home")}>
        <img src={logo} alt="Logo" className="logo" />
        <h4>Abhijit HR Compliance Services</h4>
      </div>

      {/* Hamburger */}
      <button 
        className="hamburger"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        ☰
      </button>

      {/* Links */}
      <ul className={`nav-links ${mobileMenu ? "active" : ""}`}>
        
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>

        {/* Dropdown */}
        <li 
          className="dropdown"
          onMouseEnter={() => setDropdown(true)}
          onMouseLeave={() => setDropdown(false)}
        >
          <span>Services ▾</span>

          <ul className={`dropdown-menu ${dropdown ? "show" : ""}`}>
            <li onClick={() => scrollToSection("services")}>
              Labour Law Compliance
            </li>
            <li onClick={() => scrollToSection("services")}>
              Payroll Management
            </li>
            <li onClick={() => scrollToSection("services")}>
              Statutory Audit
            </li>
            <li onClick={() => scrollToSection("services")}>
              HR Consulting
            </li>
          </ul>
        </li>

        <li onClick={() => scrollToSection("uses")}>E-Learning</li>
        <li onClick={() => scrollToSection("uses")}>FAQs</li>
        <li onClick={() => scrollToSection("uses")}>Careers</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>

      </ul>
    </nav>
  );
}

export default Navbar;