import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/index.css';
import '../stylesheets/ribs.css';

export default function Ribs() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => setIsNavOpen(false);

  return (
    <div className="landing-page page-ribs">
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
              inside and out with our proprietary dry rub, ensuring every bite is bursting with flavor.
            </p>
            <p>
              <strong>Perfect for:</strong> Family gatherings, holidays, or just whenever you're craving
              something special.
            </p>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Gallery</h3>
            <div className="image-gallery">
              <div className="gallery-item">
                <img src="/images/ribs.jpg" alt="Delicious Ribs"/>
              </div>
              <div className="gallery-item">
                <img src="/images/ribs-sauced.jpg" alt="Ribs with BBQ Sauce"/>
              </div>
              <div className="gallery-item">
                <img src="/images/ribs-nice.jpeg" alt="Fresh Ribs"/>
              </div>
            </div>

            <div className="pricing-card" style={{ marginTop: '2rem', maxWidth: '400px' }}>
              <h3>Ribs Special</h3>
              <div className="price">$25<small>per full rack</small></div>
              <ul style={{ textAlign: 'left' }}>
                <li>Slow-cooked to perfection</li>
                <li>Signature dry rub seasoning</li>
                <li>Fall-off-the-bone tenderness</li>
                <li>Perfect for gatherings</li>
              </ul>
            </div>

            <button className="cta-button" style={{ marginTop: '1.5rem' }}>Order Now</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Big Rob's Rib Shack. All rights reserved.</p>
          <p id="contact"> robertlaster@yahoo.com | 📞 (229) 894-1085</p>
        </div>
      </footer>
    </div>
  );
}
