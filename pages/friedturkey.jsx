import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/index.css';

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
            <li><a href="#contact" onClick={closeNav}>Contact</a></li>
          </ul>
          {isNavOpen && <button className="nav-overlay" type="button" aria-label="Close navigation" onClick={closeNav} />}
        </div>
      </nav>

      {/* Fried Turkey Page */}
      <section className="hero">
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
            <p><strong>Pricing:</strong> $25 for a whole turkey </p>
            <button className="cta-button">Order Now</button>
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
