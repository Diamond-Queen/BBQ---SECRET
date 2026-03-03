import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../stylesheets/index.css';
import FriedTurkey from './friedturkey';
import BostonButt from './boston-butt';
import Ribs from './ribs';
import BrunswickStew from './brunswick-stew';

function LandingPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => setIsNavOpen(false);

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <h1 className="logo"> Big Rob's Rib Shack </h1>

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
            <li><a href="#menu" onClick={closeNav}>Menu</a></li>
            <li><a href="#about" onClick={closeNav}>About</a></li>
            <li><a href="#contact" onClick={closeNav}>Contact</a></li>
          </ul>

          {isNavOpen && <button className="nav-overlay" type="button" aria-label="Close navigation" onClick={closeNav} />}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2><em>Smoky.</em> <em> Delicious. </em> <em>Unforgettable.</em></h2>
          <p>Experience the <strong>best</strong> BBQ in town, slow-smoked to perfection</p>
          <button className="cta-button">Order Now</button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu">
        <div className="container">
          <h2>Our Specialties</h2>
          <div className="menu-grid">
            <Link to="/fried-turkey" className="menu-item">
              <h3>Fried Turkey </h3>
              <p>Tender fried turkey with a crispy golden crust</p>
            </Link>
            <Link to="/ribs" className="menu-item">
              <h3> Slab of Ribs</h3>
              <p>Fall-off-the-bone ribs with our signature dry rub</p>
            </Link>
            <Link to="/boston-butt" className="menu-item">
              <h3> Boston Butt</h3>
              <p>Slow-cooked Boston Butt with our special BBQ sauce</p>
            </Link>
            <Link to="/brunswick-stew" className="menu-item">
              <h3> Brunswick Stew (When Available) </h3>
              <p>Hearty Brunswick Stew with a blend of smoked meats and vegetables</p>
            </Link>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="features">
            <div className="feature">
              <span className="feature-icon">✓</span>
              <h3>Premium Quality</h3>
              <p>Only the finest cuts of meat</p>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <h3>Slow Smoked</h3>
              <p>12-24 hours of authentic smoking</p>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <h3>Secret Recipes</h3>
              <p>Family-passed recipes since 1995</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to taste the magic?</h2>
          <p>Visit us today or order online for delivery</p>
          <button className="cta-button cta-button-lg">Place Your Order</button>
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/fried-turkey" element={<FriedTurkey />} />
        <Route path="/boston-butt" element={<BostonButt />} />
        <Route path="/ribs" element={<Ribs />} />
        <Route path="/brunswick-stew" element={<BrunswickStew />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
