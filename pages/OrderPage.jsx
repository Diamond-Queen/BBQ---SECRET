import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/index.css';

export default function OrderPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    item: '',
    quantity: '',
    date: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const closeNav = () => setIsNavOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          item: formData.item,
          quantity: formData.quantity,
          date: formData.date,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send order');
      }

      setSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          item: '',
          quantity: '',
          date: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      setErrorMessage('We could not send your order. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">Big Rob's Rib Shack</Link>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isNavOpen}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            ☰
          </button>
          <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={closeNav}>Home</Link></li>
            <li><a href="/#about" onClick={closeNav}>About</a></li>
            <li><a href="/#menu" onClick={closeNav}>Menu</a></li>
            <li><a href="/#contact" onClick={closeNav}>Contact</a></li>
          </ul>
          {isNavOpen && <button className="nav-overlay" type="button" aria-label="Close navigation" onClick={closeNav} />}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" style={{ minHeight: '40vh' }}>
        <div className="hero-content">
          <h2>Place Your Order</h2>
          <p>Reserve your delicious BBQ today!</p>
        </div>
      </section>

      {/* Order Section */}
      <section className="contact-section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Order Your Favorite BBQ</h2>
          
          <div className="order-layout">
            {/* Order Form */}
            <div className="contact-form-container">
              {submitted ? (
                <div className="form-success-message show" style={{ display: 'block', textAlign: 'center', padding: '2rem' }}>
                  <h3 style={{ color: '#155724', marginBottom: '0.5rem' }}>✓ Order Received!</h3>
                  <p style={{ color: '#155724', margin: 0 }}>We'll contact you soon to confirm your order.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
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
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(229) 894-1085"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="item">What would you like? *</label>
                    <select
                      id="item"
                      name="item"
                      value={formData.item}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '0.8rem',
                        border: '2px solid #e0e0e0',
                        borderRadius: '5px',
                        fontSize: '1rem',
                        fontFamily: 'inherit'
                      }}
                    >
                      <option value="">Select an item...</option>
                      <option value="fried-turkey">Fried Turkey - $25 per whole turkey</option>
                      <option value="ribs">Ribs - $25 per full rack</option>
                      <option value="boston-butt">Boston Butt - $40 per piece</option>
                      <option value="brunswick-stew">Brunswick Stew - $15 per 16oz bowl</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="quantity">Quantity *</label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      min="1"
                      placeholder="1"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="date">Preferred Pickup/Delivery Date *</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Special Requests or Notes</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any special requests? Let us know!"
                    />
                  </div>

                  <button type="submit" className="form-submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Place Order'}
                  </button>
                </form>
              )}
            </div>

            {errorMessage && (
              <div className="form-error-message" style={{ marginTop: '1rem', color: '#b00020', textAlign: 'center' }}>
                {errorMessage}
              </div>
            )}

            {/* Contact Info & Details */}
            <div className="order-sidebar">
              <h3 style={{ marginTop: 0, marginBottom: '1.5rem', color: '#333' }}>Questions?</h3>
              
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: '#d4a574', marginBottom: '0.5rem' }}>📞 Call Us</h4>
                <p style={{ margin: 0 }}>
                  <a href="tel:+12298941085" style={{ color: '#d4a574', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    (229) 894-1085
                  </a>
                </p>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#666' }}>Mon-Sat 10am-8pm</p>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ color: '#d4a574', marginBottom: '0.5rem' }}>📧 Email Us</h4>
                <p style={{ margin: 0 }}>
                  <a href="mailto:robertlaster@yahoo.com" style={{ color: '#d4a574', textDecoration: 'none', fontWeight: 'bold' }}>
                    robertlaster@yahoo.com
                  </a>
                </p>
              </div>

              <div style={{ borderTop: '2px solid #ddd', paddingTop: '1.5rem' }}>
                <h4 style={{ color: '#333', marginBottom: '0.5rem' }}>Why Order With Us?</h4>
                <ul style={{ margin: 0, paddingLeft: '1.5rem', color: '#666' }}>
                  <li>Fresh ingredients</li>
                  <li>Family recipes since 1995</li>
                  <li>Slow-smoked to perfection</li>
                  <li>Custom orders welcome</li>
                </ul>
              </div>

              <Link to="/" style={{
                display: 'block',
                marginTop: '1.5rem',
                padding: '1rem',
                textAlign: 'center',
                color: '#fff',
                backgroundColor: '#d4a574',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold',
                transition: 'backgroundColor 0.3s ease'
              }}>
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Big Rob's Rib Shack. All rights reserved.</p>
          <p>
            <a href="mailto:robertlaster@yahoo.com" style={{ color: '#d4a574', textDecoration: 'none' }}>robertlaster@yahoo.com</a> | 
            <a href="tel:+12298941085" style={{ color: '#d4a574', textDecoration: 'none', marginLeft: '0.5rem' }}>📞 (229) 894-1085</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
