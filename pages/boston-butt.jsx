import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/index.css';

export default function BostonButt() {
  return (
    <div className="landing-page page-boston-butt">
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

      {/* Boston Butt Page */}
      <section className="hero">
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
            <p><strong>Pricing:</strong> $40 per Boston Butt</p>
            <button className="cta-button">Order Now</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Big Rob's Rib Shack. All rights reserved.</p>
          <p id="contact">📧 robertlaster@yahoo.com | 📞 (229) 894-1085</p>
        </div>
      </footer>
    </div>
  );
}
