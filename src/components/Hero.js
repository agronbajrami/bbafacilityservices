import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Alle Services rund um Ihr Haus
          </h1>
          <p className="hero-subtitle">
            Professionelle Hauswartung, Gebäudereinigung, Baureinigung und mehr. 
            Ihre Liegenschaft in guten Händen.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToContact}>
              Offerte anfragen
            </button>
            <button className="btn-secondary" onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Services entdecken
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-card">
            <div className="card-icon">🏢</div>
            <h3>Professionell</h3>
            <p>Erfahrenes Team</p>
          </div>
          <div className="hero-card">
            <div className="card-icon">✨</div>
            <h3>Sauber</h3>
            <p>Höchste Standards</p>
          </div>
          <div className="hero-card">
            <div className="card-icon">⚡</div>
            <h3>Schnell</h3>
            <p>24h Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

