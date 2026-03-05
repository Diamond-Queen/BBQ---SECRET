import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/index.css';
import '../stylesheets/brunswickstew.css';

export default function BrunswickStew() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => setIsNavOpen(false);

  return (
    <div className="landing-page page-stew">
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
            <li><Link to="/fried-turkey" onClick={closeNav}>Fried Turkey</Link></li>
            <li><Link to="/ribs" onClick={closeNav}>Ribs</Link></li>
            <li><Link to="/boston-butt" onClick={closeNav}>Boston Butt</Link></li>
            <li><a href="/#contact" onClick={closeNav}>Contact</a></li>
          </ul>
          {isNavOpen && <button className="nav-overlay" type="button" aria-label="Close navigation" onClick={closeNav} />}
        </div>
      </nav>

      {/* Brunswick Stew Page */}
      <section className="hero" id="brunswick-stew-hero">
        <div className="hero-content">
          <h2>Hearty Brunswick Stew</h2>
          <p>A rich blend of smoked meats and vegetables, perfect for any occasion</p>
        </div>
      </section>

      <section className="menu">
        <div className="container">
          <h2>Brunswick Stew</h2>
          <div className="menu-item-detail">
            <h3>Hearty Brunswick Stew with a rich blend of smoked meats and vegetables</h3>
            <p>
              Our signature Brunswick Stew is a customer favorite! We hand-select the finest ingredients
              and cook them to perfection in our special blend of seasonings. Each batch is simmered
              slowly to develop a rich, hearty flavor that will warm you from the inside out.
            </p>
            <p>
              <strong>Perfect for:</strong> Family gatherings, holidays, or just whenever you're craving
              something special.
            </p>

            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Gallery</h3>
            <div className="image-gallery">
              <div className="gallery-item">
                <img src="/images/stew.jpeg" alt="Brunswick Stew"/>
              </div>
              <div className="gallery-item">
                <img src="/images/brunswick.jpeg" alt="Brunswick Stew Close-Up"/>
              </div>
              <div className="gallery-item">
                <img src="/images/brunswick-stew.jpeg" alt="Brunswick Stew Close-Up"/>
              </div>
            </div>
            
            <div className="product-offer">
              <div className="pricing-card product-pricing-card" style={{ maxWidth: '450px', padding: '2.5rem', boxShadow: '0 8px 24px rgba(107, 142, 35, 0.2)', borderRadius: '12px', borderTop: '4px solid #6b8e23' }}>
                <h3 style={{ marginTop: 0, textAlign: 'center', color: '#3d4c2e' }}>Brunswick Stew Special</h3>
                <div className="price" style={{ textAlign: 'center' }}><span style={{ color: '#6b8e23' }}>$15</span><small>per 16oz bowl</small></div>
                <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '0.5rem 0' }}>Rich & hearty blend</li>
                  <li style={{ padding: '0.5rem 0' }}>Smoked meats combination</li>
                  <li style={{ padding: '0.5rem 0' }}>Fresh vegetables</li>
                  <li style={{ padding: '0.5rem 0' }}>Slow-cooked perfection</li>
                </ul>
              </div>
              <Link to="/order" className="cta-button" style={{ marginTop: '1.5rem', minWidth: '200px', display: 'inline-block', textAlign: 'center' }}>Order Now</Link>
            </div>

            {/* Navigation */}
            <div className="page-nav">
              <Link to="/boston-butt" style={{ color: '#6b8e23', textDecoration: 'none', fontWeight: 'bold' }}>← Previous</Link>
              <span className="page-nav-center">Brunswick Stew</span>
              <span style={{ color: '#999' }}>End</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Big Rob's Rib Shack. All rights reserved.</p>
          <p id="contact"> 
            <a href="mailto:robertlaster@yahoo.com" style={{ color: '#6b8e23', textDecoration: 'none' }}>robertlaster@yahoo.com</a> | 
            <a href="tel:+12298941085" style={{ color: '#6b8e23', textDecoration: 'none', marginLeft: '0.5rem' }}>📞 (229) 894-1085</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
