import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would normally send the form data to a backend
    // For now, we'll just show a success message and reset the form
    console.log('Form submitted:', formData);

    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '' });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-form-container">
          <div className={`form-success-message ${showSuccess ? 'show' : ''}`}>
            ✓ Thanks for reaching out! We'll get back to you soon.
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(229) 894-1085"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your order or special request..."
              />
            </div>

            <button type="submit" className="form-submit">
              Send Message
            </button>
          </form>

          <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: '#666' }}>
            <p>Or reach us directly:</p>
            <p>📧 <a href="mailto:robertlaster@yahoo.com" style={{ color: 'var(--primary-orange)' }}>robertlaster@yahoo.com</a></p>
            <p>📞 <a href="tel:+12298941085" style={{ color: 'var(--primary-orange)' }}>(229) 894-1085</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}
