import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Routes, Route, Link } from 'react-router-dom';
import '../stylesheets/index.css';
import '../stylesheets/HomeModule.css';
import logo from '../public/images/Logo.png';
import FriedTurkey from './friedturkey';
import BostonButt from './boston-butt';
import Ribs from './ribs';
import BrunswickStew from './brunswick-stew';
import ContactForm from './ContactForm';
import PricingDetails from './PricingDetails';
import OrderPage from './OrderPage';

const Router = window.location.protocol === 'file:' ? HashRouter : BrowserRouter;

function LandingPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const closeNav = () => setIsNavOpen(false);

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <span>Big Rob's Rib Shack</span>
          </div>

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
            <li><a href="#about" onClick={closeNav}>About</a></li>
            <li><a href="#menu" onClick={closeNav}>Menu</a></li>
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
          <Link to="/order" className="cta-button">Order Now</Link>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu">
        <div className="container">
          <h2>Our Specialties</h2>
          <p> <strong>*</strong> <em>Meat provided</em>  <strong>*</strong> </p>
          <div className="menu-grid">
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
          <Link to="/fried-turkey" className="menu-item">
              <h3>Fried Turkey </h3>
              <p>Tender fried turkey with a crispy golden crust</p>
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
          <Link to="/order" className="cta-button cta-button-lg">Place Your Order</Link>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="menu">
        <div className="container">
          <h2>Our Pricing</h2>
          <div className="menu-grid">
           <div className="pricing-card">
              <h3>Ribs</h3>
              <div className="price">$25<small>per full rack</small></div>
              <ul>
                <li>Fall-off-the-bone quality</li>
                <li>Signature dry rub</li>
                <li>Award-winning recipe</li>
              </ul>
              <Link to="/pricing/ribs" className="cta-button">View Details</Link>
            </div>

            <div className="pricing-card">
              <h3>Boston Butt</h3>
              <div className="price">$40<small>per Boston Butt</small></div>
              <ul>
                <li>Slow-cooked perfection</li>
                <li>Tender & juicy</li>
                <li>Special BBQ sauce</li>
              </ul>
              <Link to="/pricing/boston-butt" className="cta-button">View Details</Link>
            </div>

            <div className="pricing-card">
              <h3>Brunswick Stew</h3>
              <div className="price">$15<small>per 16oz bowl</small></div>
              <ul>
                <li>Hearty & satisfying</li>
                <li>Smoked meats blend</li>
                <li>Fresh vegetables</li>
              </ul>
              <Link to="/pricing/brunswick-stew" className="cta-button">View Details</Link>
            </div>
            <div className="pricing-card">
              <h3>Fried Turkey</h3>
              <div className="price">$25<small>per whole turkey</small></div>
              <ul>
                <li>Crispy golden crust</li>
                <li>Juicy tender meat</li>
                <li>Perfect for gatherings</li>
              </ul>
              <Link to="/pricing/fried-turkey" className="cta-button">View Details</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/fried-turkey" element={<FriedTurkey />} />
        <Route path="/boston-butt" element={<BostonButt />} />
        <Route path="/ribs" element={<Ribs />} />
        <Route path="/brunswick-stew" element={<BrunswickStew />} />
        <Route path="/pricing/:itemId" element={<PricingDetails />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
