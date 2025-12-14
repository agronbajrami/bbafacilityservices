import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Hauswartung',
      description: 'Facility Management',
      icon: '🏠',
      details: 'Umfassende Hauswartung und Facility Management für Ihre Liegenschaft. Von der regelmässigen Wartung bis zur Überwachung grösserer Projekte.'
    },
    {
      id: 2,
      title: 'Gebäudereinigung',
      description: 'Professionelle Reinigung',
      icon: '✨',
      details: 'Reinigung von Wohnungen, Privat- und Geschäftshäusern. Regelmässige und einmalige Reinigungen nach höchsten Standards.'
    },
    {
      id: 3,
      title: 'Baureinigung',
      description: 'Spezialreinigungen',
      icon: '🧹',
      details: 'Professionelle Baureinigungen nach Umbauten und Renovationen. Gründliche Reinigung aller Bereiche.'
    },
    {
      id: 4,
      title: 'Gartenarbeit',
      description: 'Garten- und Umgebungsarbeiten',
      icon: '🌳',
      details: 'Gartenunterhalt, Pflege und Umgebungsarbeiten. Ihre Aussenanlagen in perfektem Zustand.'
    },
    {
      id: 5,
      title: 'Umbau',
      description: 'Kleinere Umbauarbeiten',
      icon: '🔨',
      details: 'Kleinere Umbauarbeiten in Trockenbauweise. Beratung, Überwachung und Kontrolle bei grösseren Projekten.'
    },
    {
      id: 6,
      title: 'Concierge-Service',
      description: 'Premium Service',
      icon: '🎩',
      details: 'Exklusiver Concierge-Service für Ihre Liegenschaft. Wir kümmern uns um alle Ihre Anliegen.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Unsere Services</h2>
          <p className="section-subtitle">
            Alle Dienstleistungen rund um Ihr Haus aus einer Hand
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <p className="service-details">{service.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

