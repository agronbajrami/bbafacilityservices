import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    company: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    zip: '',
    city: '',
    service: '',
    size: '',
    rooms: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    alert('Vielen Dank für Ihre Anfrage! Wir werden uns bald bei Ihnen melden.');
    // Reset form
    setFormData({
      company: '',
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      zip: '',
      city: '',
      service: '',
      size: '',
      rooms: '',
      additionalInfo: ''
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Unverbindliche Offerte beantragen</h2>
          <p className="section-subtitle">
            Füllen Sie das Formular aus und wir melden uns bei Ihnen
          </p>
        </div>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Firma</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Vorname</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Nachname</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="address">Adresse</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="zip">PLZ</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">Ort</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title">Informationen zu gewünschtem Serviceangebot</h3>
              
              <div className="form-group">
                <label htmlFor="service">Gewünschter Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Bitte wählen</option>
                  <option value="hauswartung">Hauswartung</option>
                  <option value="gebaudereinigungen">Gebäudereinigungen</option>
                  <option value="umbauarbeiten">Kleinere Umbauarbeiten</option>
                  <option value="gartenarbeiten">Gartenarbeiten</option>
                  <option value="spezialreinigungen">Spezialreinigungen</option>
                  <option value="concierge">Concierge-Service</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="size">Gesamtgrösse m²</label>
                  <input
                    type="number"
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rooms">Anzahl Räume</label>
                  <select
                    id="rooms"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleChange}
                  >
                    <option value="">Bitte wählen</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6+">mehr als 6</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="additionalInfo">Weitere Informationen</label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows="5"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Bitte geben Sie hier weitere Details zu Ihrem Anliegen an..."
                ></textarea>
              </div>
            </div>

            <button type="submit" className="submit-button">
              Offerte anfragen
            </button>
          </form>

          <div className="contact-info">
            <h3>Kontaktinformationen</h3>
            <div className="info-item">
              <strong>Telefon:</strong>
              <a href="tel:+41438173838">+41 43 817 38 38</a>
            </div>
            <div className="info-item">
              <strong>E-Mail:</strong>
              <a href="mailto:info@bbafacilityservices.ch">info@bbafacilityservices.ch</a>
            </div>
            <div className="info-item">
              <strong>Adresse:</strong>
              <p>BBA Facility Services GmbH<br />
              Zürich, Schweiz</p>
            </div>
            <div className="info-item">
              <strong>Öffnungszeiten:</strong>
              <p>Montag - Freitag: 8:00 - 18:00<br />
              24h Notfallservice verfügbar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

