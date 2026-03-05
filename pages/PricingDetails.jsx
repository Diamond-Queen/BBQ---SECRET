import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../stylesheets/index.css';

const itemDetails = {
  ribs: {
    name: 'Fall-Off-The-Bone Ribs',
    price: '$25',
    unit: 'per full rack',
    description: 'Our signature ribs are a customer favorite! We hand-select the finest cuts of meat and slow-cook them to perfection in our special blend of seasonings.',
    highlights: [
      'Slow-cooked to perfection',
      'Signature dry rub seasoning',
      'Fall-off-the-bone tenderness',
      'Perfect for gatherings'
    ],
    details: 'Each rack is seasoned inside and out with our proprietary dry rub, ensuring every bite is bursting with flavor. Perfect for family gatherings, holidays, or just whenever you\'re craving something special.',
    cookTime: '12-16 hours',
    servings: '2-3 people per rack'
  },
  'fried-turkey': {
    name: 'Fried Turkey',
    price: '$35',
    unit: 'per whole turkey',
    weight: '14lb max',
    description: 'Tender fried turkey with a crispy golden crust that seals in the juices.',
    highlights: [
      'Crispy golden exterior',
      'Juicy, tender meat',
      'Perfectly seasoned',
      'Great for holiday feasts'
    ],
    details: 'Our fried turkeys are prepared fresh and cooked in small batches for maximum quality. Each bird is hand-prepared with our special seasoning blend.',
    cookTime: '3-4 hours',
    servings: '8-10 people'
  },
  'boston-butt': {
    name: 'Slow-Cooked Boston Butt',
    price: '$28',
    unit: 'per pound',
    weight: '10lb max',
    description: 'Slow-cooked Boston Butt with our special seasoning blend for authentic, melt-in-your-mouth tenderness.',
    highlights: [
      'Hand-pulled to perfection',
      'Special seasoning blend included',
      'Smoke-infused flavor',
      'Ideal for sandwiches or platters'
    ],
    details: 'Smoked low and slow for 16-20 hours, then hand-pulled and tossed with our special seasoning blend. Perfect for parties, events, or family dinners.',
    cookTime: '16-20 hours',
    servings: '4-5 servings per pound'
  },
  'brunswick-stew': {
    name: 'Brunswick Stew',
    price: '$12',
    unit: 'per quart',
    description: 'Hearty Brunswick Stew with a blend of smoked meats and vegetables (when available).',
    highlights: [
      'Blend of smoked meats',
      'Fresh vegetables',
      'Homemade recipe',
      'Perfect comfort food'
    ],
    details: 'Our traditional Brunswick Stew is made with a carefully selected blend of smoked meats, fresh vegetables, and secret spices. A true Southern classic.',
    cookTime: '4-6 hours',
    servings: '4 servings per quart'
  }
};

const itemOrder = ['fried-turkey', 'ribs', 'boston-butt', 'brunswick-stew'];

export default function PricingDetails() {
  const { itemId } = useParams();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const item = itemDetails[itemId];
  const currentIndex = itemOrder.indexOf(itemId);
  const prevItem = currentIndex > 0 ? itemOrder[currentIndex - 1] : null;
  const nextItem = currentIndex < itemOrder.length - 1 ? itemOrder[currentIndex + 1] : null;
  
  const closeNav = () => setIsNavOpen(false);

  if (!item) {
    return (
      <div className="landing-page">
        <nav className="navbar">
          <div className="container">
            <Link to="/" className="logo">Big Rob's Rib Shack</Link>
          </div>
        </nav>
        <section className="menu">
          <div className="container">
            <h2>Item Not Found</h2>
            <p>Sorry, we couldn't find that item.</p>
            <Link to="/" className="cta-button">Back to Home</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">Big Rob's Rib Shack</Link>
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
            <li><a href="/#menu" onClick={closeNav}>Menu</a></li>
            <li><a href="/#contact" onClick={closeNav}>Contact</a></li>
          </ul>
          {isNavOpen && <button className="nav-overlay" type="button" aria-label="Close navigation" onClick={closeNav} />}
        </div>
      </nav>

      {/* Details Section */}
      <section className="menu" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
        <div className="container">
          <Link to="/" style={{ color: '#d4a574', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block', fontSize: '1.1rem' }}>
            ← Back to Menu
          </Link>

          <div className="detail-shell">
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#333' }}>{item.name}</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: '#666', lineHeight: '1.6' }}>{item.description}</p>

            {/* Main Pricing Card - Centered */}
            <div className="pricing-card" style={{ 
              maxWidth: '500px', 
              marginBottom: '3rem',
              margin: '0 auto 3rem',
              padding: '2.5rem',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              borderRadius: '12px',
              backgroundColor: '#fff'
            }}>
              <h3 style={{ marginTop: 0, fontSize: '1.8rem', marginBottom: '1rem' }}>{item.name}</h3>
              <div className="price" style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#d4a574' }}>{item.price}</span>
                <small style={{ display: 'block', fontSize: '1rem', color: '#999', marginTop: '0.5rem' }}>{item.unit}</small>
                {item.weight && <small style={{ display: 'block', fontSize: '0.95rem', color: '#d4a574', marginTop: '0.5rem', fontWeight: '600' }}>Max Weight: {item.weight}</small>}
              </div>
              <ul style={{ textAlign: 'left', marginBottom: '2rem', listStyle: 'none', padding: 0 }}>
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} style={{ padding: '0.5rem 0', color: '#555', borderBottom: '1px solid #eee' }}>
                    <span style={{ color: '#d4a574', marginRight: '0.5rem' }}>✓</span> {highlight}
                  </li>
                ))}
              </ul>
              <Link to="/order" className="cta-button" style={{ width: '100%', marginTop: '1.5rem', display: 'block', textAlign: 'center', padding: '1rem' }}>Order Now</Link>
            </div>

            {/* Additional Details */}
            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#333' }}>About This Item</h3>
              <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8', marginBottom: '2rem' }}>{item.details}</p>

              <div className="detail-stats-grid">
                <div style={{ 
                  padding: '2rem', 
                  backgroundColor: '#f9f4f0', 
                  borderRadius: '12px',
                  border: '2px solid #d4a574',
                  textAlign: 'center'
                }}>
                  <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#333', fontSize: '1.3rem' }}>⏱ Cook Time</h4>
                  <p style={{ marginBottom: 0, color: '#d4a574', fontSize: '1.3rem', fontWeight: 'bold' }}>{item.cookTime}</p>
                </div>
                <div style={{ 
                  padding: '2rem', 
                  backgroundColor: '#f9f4f0', 
                  borderRadius: '12px',
                  border: '2px solid #d4a574',
                  textAlign: 'center'
                }}>
                  <h4 style={{ marginTop: 0, marginBottom: '0.5rem', color: '#333', fontSize: '1.3rem' }}>👥 Servings</h4>
                  <p style={{ marginBottom: 0, color: '#d4a574', fontSize: '1.3rem', fontWeight: 'bold' }}>{item.servings}</p>
                </div>
              </div>

              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#333' }}>Why Choose This?</h3>
              <ul className="detail-highlights-grid">
                {item.highlights.map((highlight, idx) => (
                  <li key={idx} style={{ 
                    padding: '1rem',
                    backgroundColor: '#f9f4f0',
                    borderRadius: '8px',
                    textAlign: 'center',
                    color: '#555'
                  }}>
                    <span style={{ color: '#d4a574', fontSize: '1.5rem' }}>★</span> {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="page-nav" style={{ maxWidth: '900px', margin: '3rem auto 0' }}>
          {prevItem ? (
            <Link to={`/pricing/${prevItem}`} style={{ color: '#d4a574', textDecoration: 'none', fontWeight: 'bold' }}>← Previous</Link>
          ) : (
            <span style={{ color: '#ccc' }}>← Previous</span>
          )}
          <span className="page-nav-center">{item.name}</span>
          {nextItem ? (
            <Link to={`/pricing/${nextItem}`} style={{ color: '#d4a574', textDecoration: 'none', fontWeight: 'bold' }}>Next →</Link>
          ) : (
            <span style={{ color: '#ccc' }}>Next →</span>
          )}
        </div>
      </section>

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
