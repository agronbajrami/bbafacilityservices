import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">BBA Facility Services</h2>
            <h3 className="about-subtitle">Ein starkes Team für saubere Arbeit</h3>
            <p className="about-description">
              Erleben Sie Sauberkeit, Zuverlässigkeit und Entlastung rund um Ihre Wohnung, 
              Ihre Privat- oder Geschäftsliegenschaft.
            </p>
            <p className="about-description">
              Ob regelmässige Reinigung, klassische Hauswartung, kleinere Umbauarbeiten, 
              Gartenunterhalt, oder Concierge-Service: unser zuverlässiges, professionell 
              geschultes Personal kümmert sich um Ihre Liegenschaft, abgestimmt auf Ihre Bedürfnisse.
            </p>
            <p className="about-description">
              Alle Dienstleistungen rund um Ihr Haus. Hauswartung, Gebäudereinigungen, 
              Baureinigungen, kleinere Umbauten und Reparaturen, Umgebungsarbeiten und mehr. 
              Wir haben es uns zur Aufgabe gemacht, Verantwortung für Ihre Liegenschaft zu übernehmen.
            </p>
          </div>
          <div className="about-image">
            <div className="about-card">
              <div className="about-stat">
                <div className="stat-number">100%</div>
                <div className="stat-label">Zufriedenheit</div>
              </div>
              <div className="about-stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Verfügbar</div>
              </div>
              <div className="about-stat">
                <div className="stat-number">10+</div>
                <div className="stat-label">Jahre Erfahrung</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

