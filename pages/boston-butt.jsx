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

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
              <div className="pricing-card" style={{ maxWidth: '450px', padding: '2.5rem', boxShadow: '0 8px 24px rgba(212, 165, 116, 0.2)', borderRadius: '12px', borderTop: '4px solid #d4a574' }}>
                <h3 style={{ marginTop: 0, textAlign: 'center', color: '#5c3d2e' }}>Boston Butt Special</h3>
                <div className="price" style={{ textAlign: 'center' }}><span style={{ color: '#d4a574' }}>$40</span><small>per Boston Butt</small></div>
                <ul style={{ textAlign: 'left', listStyle: 'none', padding: 0 }}>
                  <li style={{ padding: '0.5rem 0' }}>Slow-cooked to perfection</li>
                  <li style={{ padding: '0.5rem 0' }}>Tender & juicy meat</li>
                  <li style={{ padding: '0.5rem 0' }}>Special BBQ sauce</li>
                  <li style={{ padding: '0.5rem 0' }}>Perfect for large gatherings</li>
                </ul>
              </div>
              <Link to="/order" className="cta-button" style={{ marginTop: '1.5rem', minWidth: '200px', display: 'inline-block', textAlign: 'center' }}>Order Now</Link>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #eee' }}>
            <Link to="/ribs" style={{ color: '#d4a574', textDecoration: 'none', fontWeight: 'bold' }}>← Previous</Link>
            <span style={{ color: '#999' }}>Boston Butt</span>
            <Link to="/brunswick-stew" style={{ color: '#d4a574', textDecoration: 'none', fontWeight: 'bold' }}>Next →</Link>
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
