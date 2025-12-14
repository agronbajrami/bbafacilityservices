import React from 'react';
import './Benefits.css';

const Benefits = () => {
  const benefits = [
    {
      icon: '🤝',
      title: 'Alles aus einer Hand',
      description: 'Von der Reinigung über Reparaturen bis zum Winterdienst'
    },
    {
      icon: '👨‍💼',
      title: 'Beratung & Überwachung',
      description: 'Beratung, Überwachung und Kontrolle bei grösseren Umbauten oder Heizungsersatz'
    },
    {
      icon: '📦',
      title: 'Massgeschneiderte Pakete',
      description: 'Dienstleistungspakete individuell auf Ihre Bedürfnisse zugeschnitten'
    },
    {
      icon: '💰',
      title: 'Faire Preise',
      description: 'Faire und transparente Preisgestaltung ohne versteckte Kosten'
    },
    {
      icon: '⏰',
      title: '24h-Pikett-Service',
      description: 'Rund um die Uhr erreichbar für Notfälle und dringende Anliegen'
    }
  ];

  return (
    <section className="benefits">
      <div className="benefits-container">
        <div className="section-header">
          <h2 className="section-title">Ihre Vorteile</h2>
          <p className="section-subtitle">
            Warum Sie sich für BBA Facility Services entscheiden sollten
          </p>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <div className="benefit-icon">{benefit.icon}</div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

