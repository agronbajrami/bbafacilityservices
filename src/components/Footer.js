import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>BBA Facility Services</h3>
            <p>
              Alle Dienstleistungen rund um Ihr Haus. Hauswartung, Gebäudereinigungen, 
              Baureinigungen, kleinere Umbauten und Reparaturen, Umgebungsarbeiten und mehr.
            </p>
          </div>

          <div className="footer-section">
            <h4>Informationen</h4>
            <ul>
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Über uns</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Kontakt</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontakt</h4>
            <p>
              BBA Facility Services GmbH<br />
              Zürich, Schweiz
            </p>
            <p>
              <a href="tel:+41438173838">+41 43 817 38 38</a><br />
              <a href="mailto:info@bbafacilityservices.ch">info@bbafacilityservices.ch</a>
            </p>
          </div>

          <div className="footer-section">
            <h4>Follow us</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright 2024 © BBA Facility Services GmbH</p>
          <div className="footer-links">
            <a href="/datenschutz">Datenschutzerklärung</a>
            <span>|</span>
            <a href="/impressum">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

