import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/index.css';
import '../stylesheets/ribs.css';
import logo from '../public/images/Logo.png';

export default function Ribs() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => setIsNavOpen(false);

  return (
    <div className="landing-page page-ribs">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
            <span>Big Rob's Rib Shack</span>
          </Link>
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
            <li><Link to="/boston-butt" onClick={closeNav}>Boston Butt</Link></li>
            <li><Link to="/brunswick-stew" onClick={closeNav}>Brunswick Stew</Link></li>
            <li><a href="/#contact" onClick={closeNav}>Contact</a></li>
          </ul>
          {isNavOpen && <button className="nav-overlay" type="button" aria-label="Close navigation" onClick={closeNav} />}
        </div>
      </nav>

      {/* Ribs Page */}
      <section className="hero" id="ribs-hero">
        <div className="hero-content">
          <h2>Fall-Off-The-Bone Ribs</h2>
          <p>Succulent ribs with our signature dry rub</p>
        </div>
      </section>

      <section className="menu">
        <div className="container">
          <h2>Ribs</h2>
          <div className="menu-item-detail">
            <h3>Fall-Off-The-Bone Ribs with our signature dry rub</h3>
            <p>
              Our signature ribs are a customer favorite! We hand-select the finest cuts of meat
              and slow-cook them to perfection in our special blend of seasonings. Each rack is seasoned
              inside and out with our proprietary dry rub, and injected with a flavorful concoction.
            </p>
            <p>
          <strong>Perfect for:</strong> Family gatherings, holidays, or just whenever you're craving
          something special.
          </p>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Gallery</h3>
            <div className="image-gallery">
              <div className="gallery-item">
                <img src="/images/ribs.jpeg" alt="Delicious Ribs"/>
              </div>
              <div className="gallery-item">
                <img src="/images/ribs-sauced.jpeg" alt="Ribs with BBQ Sauce"/>
              </div>
              <div className="gallery-item">
                <img src="/images/ribs-nice.jpg" alt="Fresh Ribs"/>
              </div>
            </div>

            <div className="product-offer">
              <div className="pricing-card product-pricing-card" style={{ maxWidth: '450px', padding: '2.5rem', boxShadow: '0 8px 24px rgba(204, 68, 68, 0.2)', borderRadius: '12px', borderTop: '4px solid #cc4444' }}>
                <h3 style={{ marginTop: 0, textAlign: 'center', color: '#4a1a1a' }}>Ribs Special</h3>
                <div className="price" style={{ textAlign: 'center' }}><span style={{ color: '#cc4444' }}>$25</span><small>per full rack</small></div>
                <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '0.5rem 0' }}>Slow-cooked to perfection</li>
                  <li style={{ padding: '0.5rem 0' }}>Signature dry rub seasoning</li>
                  <li style={{ padding: '0.5rem 0' }}>Fall-off-the-bone tenderness</li>
                  <li style={{ padding: '0.5rem 0' }}>Perfect for gatherings</li>
                </ul>
              </div>
              <Link to="/order" className="cta-button" style={{ marginTop: '1.5rem', minWidth: '200px', display: 'inline-block', textAlign: 'center' }}>Order Now</Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="page-nav">
            <Link to="/fried-turkey" style={{ color: '#d4a574', textDecoration: 'none', fontWeight: 'bold' }}>← Previous</Link>
            <span className="page-nav-center">Ribs</span>
            <Link to="/boston-butt" style={{ color: '#d4a574', textDecoration: 'none', fontWeight: 'bold' }}>Next →</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Big Rob's Rib Shack. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
