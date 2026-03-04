import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/index.css';
import '../stylesheets/friedturkey.css';

export default function FriedTurkey() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => setIsNavOpen(false);

  return (
    <div className="landing-page page-turkey">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo"> Big Rob's Rib Shack </Link>
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
            <li><Link to="/ribs" onClick={closeNav}>Ribs</Link></li>
            <li><Link to="/boston-butt" onClick={closeNav}>Boston Butt</Link></li>
            <li><Link to="/brunswick-stew" onClick={closeNav}>Brunswick Stew</Link></li>
            <li><a href="/#contact" onClick={closeNav}>Contact</a></li>
          </ul>
          {isNavOpen && <button className="nav-overlay" type="button" aria-label="Close navigation" onClick={closeNav} />}
        </div>
      </nav>

      {/* Fried Turkey Page */}
      <section className="hero" id="fried-turkey-hero">
        <div className="hero-content">
          <h2>Tender Fried Turkey</h2>
          <p>Crispy golden crust with juicy, tender meat inside</p>
        </div>
      </section>

      <section className="menu">
        <div className="container">
          <h2>Fried Turkey</h2>
          <div className="menu-item-detail">
            <h3>Tender fried turkey with a crispy golden crust</h3>
            <p>
              Our signature fried turkey is a customer favorite! We hand-select the finest turkeys
              and fry them to perfection in our special blend of seasonings. Each bird is seasoned
              inside and out with our proprietary dry rub, ensuring every bite is bursting with flavor.
            </p>
            <p>
              <strong>Perfect for:</strong> Family gatherings, holidays, or just whenever you're craving
              something special.
            </p>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Gallery</h3>
            <div className="image-gallery">
              <div className="gallery-item">
                <img src="/images/DeepFriedTurkey.jpeg" alt="Deep Fried Turkey"/>
              </div>
              <div className="gallery-item">
                <img src="/images/deep-fry-turkey.jpg" alt="Golden Fried Turkey"/>
              </div>
              <div className="gallery-item">
                <img src="/images/friedturkey.jpeg" alt="Crispy Fried Turkey"/>
              </div>
            </div>

            <div className="product-offer">
              <div className="pricing-card product-pricing-card" style={{ maxWidth: '450px', padding: '2.5rem', boxShadow: '0 8px 24px rgba(212, 165, 116, 0.2)', borderRadius: '12px', borderTop: '4px solid #d4a574' }}>
                <h3 style={{ marginTop: 0, textAlign: 'center', color: '#8b6f47' }}>Fried Turkey Special</h3>
                <div className="price" style={{ textAlign: 'center' }}><span style={{ color: '#d4a574' }}>$25</span><small>per whole turkey</small></div>
                <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '0.5rem 0' }}>Crispy golden crust</li>
                  <li style={{ padding: '0.5rem 0' }}>Tender juicy meat</li>
                  <li style={{ padding: '0.5rem 0' }}>Signature seasonings</li>
                  <li style={{ padding: '0.5rem 0' }}>Perfect for celebrations</li>
                </ul>
              </div>
              <Link to="/order" className="cta-button" style={{ marginTop: '1.5rem', minWidth: '200px', display: 'inline-block', textAlign: 'center' }}>Order Now</Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="page-nav">
            <span style={{ color: '#999' }}>Start</span>
            <span className="page-nav-center">Fried Turkey</span>
            <Link to="/ribs" style={{ color: '#d4a574', textDecoration: 'none', fontWeight: 'bold' }}>Next →</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Big Rob's Rib Shack. All rights reserved.</p>
          <p id="contact"> 
            <a href="mailto:robertlaster@yahoo.com" style={{ color: '#d4a574', textDecoration: 'none' }}>robertlaster@yahoo.com</a> | 
            <a href="tel:+12298941085" style={{ color: '#d4a574', textDecoration: 'none', marginLeft: '0.5rem' }}>📞 (229) 894-1085</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
