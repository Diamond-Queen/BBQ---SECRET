import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/index.css';

export default function BrunswickStew() {
  return (
    <div className="landing-page page-stew">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo"> Big Rob's Rib Shack </Link>
          <ul className="nav-links">
            <li><Link to="/pages/index.jsx">Home</Link></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Brunswick Stew Page */}
      <section className="hero">
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
            <p><strong>Pricing:</strong> $15 16oz bowl of Brunswick Stew</p>
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
