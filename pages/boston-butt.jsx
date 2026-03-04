import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/index.css';
import '../stylesheets/bostonbutt.css';

export default function BostonButt() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => setIsNavOpen(false);

  return (
    <div className="landing-page page-boston-butt">
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
            <li><Link to="/brunswick-stew" onClick={closeNav}>Brunswick Stew</Link></li>
            <li><a href="/#contact" onClick={closeNav}>Contact</a></li>
          </ul>
          {isNavOpen && <button className="nav-overlay" type="button" aria-label="Close navigation" onClick={closeNav} />}
        </div>
      </nav>

      {/* Boston Butt Page */}
      <section className="hero" id="boston-butt-hero">
        <div className="hero-content">
          <h2>Slow-Cooked Boston Butt</h2>
          <p>Juicy, tender Boston Butt with our special BBQ sauce</p>
        </div>
      </section>

      <section className="menu">
        <div className="container">
          <h2>Boston Butt</h2>
          <div className="menu-item-detail">
            <h3>Juicy, tender Boston Butt with our special BBQ sauce</h3>
            <p>
              Our signature Boston Butt is a customer favorite! We hand-select the finest cuts of meat
              and slow-cook them to perfection in our special blend of seasonings. Each piece is seasoned
              inside and out with our proprietary dry rub, ensuring every bite is bursting with flavor.
            </p>
            <p>
              <strong>Perfect for:</strong> Family gatherings, holidays, or just whenever you're craving
              something special.
            </p>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Gallery</h3>
            <div className="image-gallery">
              <div className="gallery-item">
                <img src="/images/bostonbutt.jpeg" alt="Boston Butt"/>
              </div>
              <div className="gallery-item">
                <img src="/images/bostonbutt2.jpeg" alt="Boston Butt Close-up"/>
              </div>
              <div className="gallery-item">
                <img src="/images/boston-butt.jpeg" alt="Boston Butt Preparation"/>
              </div>
            </div>

            <div className="pricing-card" style={{ marginTop: '2rem', maxWidth: '400px' }}>
              <h3>Boston Butt Special</h3>
              <div className="price">$40<small>per Boston Butt</small></div>
              <ul style={{ textAlign: 'left' }}>
                <li>Slow-cooked to perfection</li>
                <li>Tender & juicy meat</li>
                <li>Special BBQ sauce</li>
                <li>Perfect for large gatherings</li>
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
