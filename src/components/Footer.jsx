import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container" >

        {/* Company Info */}
        <div className="footer-col">
          <h3>Abhijit HR Compliance Services</h3>
          <p>
            Abhijit HR Compliance Services provides reliable, professional, 
            and excellence-driven HR consulting solutions. We focus on 
            delivering measurable results while maintaining transparency, 
            integrity, and strict confidentiality standards.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/elearning">E-Library</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>Establishment Compliance Services</li>
            <li>Factory Compliance Services</li>
            <li>Payroll Management Support</li>
            <li>Post Payroll Services – EPF / ESI / PT</li>
            <li>HR Shared Services</li>
            <li>HR Due Diligence Audit</li>
            <li>Labour Law Updates & Legal Consultation</li>
            <li>Management Consultancy Services</li>
          </ul>
        </div>

        {/* Reach Us */}
        <div className="footer-col">
          <h4>Reach Us</h4>
          <p>
            <FaMapMarkerAlt className="footer-icon" />
            <a href="https://www.google.com/maps/place/MRP+Green+Homes/@12.9501488,80.033323,1107m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a52f58c7200a6f3:0xfbc353fbecd52210!8m2!3d12.9501488!4d80.0358979!16s%2Fg%2F11g4fllp79?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              MRP Green Homes Somangalam Kundrathur,Kancheepuram-600069
            </a>
          </p>

          <p>
            <FaPhoneAlt className="footer-icon" />
            +91  7550025543
          </p>

        

          <p>
            <FaEnvelope className="footer-icon" />
            info@abhijithr.com
          </p>

          <p>
            <FaEnvelope className="footer-icon" />
            support@abhijithr.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Abhijit HR Compliance Services. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;