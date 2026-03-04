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
    description: 'Slow-cooked Boston Butt with our special BBQ sauce for authentic, melt-in-your-mouth tenderness.',
    highlights: [
      'Hand-pulled to perfection',
      'Special BBQ sauce included',
      'Smoke-infused flavor',
      'Ideal for sandwiches or platters'
    ],
    details: 'Smoked low and slow for 16-20 hours, then hand-pulled and tossed with our signature BBQ sauce. Perfect for parties, events, or family dinners.',
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

export default function PricingDetails() {
  const { itemId } = useParams();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const item = itemDetails[itemId];
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
      <section className="menu" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <Link to="/" style={{ color: '#d4a574', textDecoration: 'none', marginBottom: '1rem', display: 'inline-block' }}>
            ← Back to Menu
          </Link>

          <div className="menu-item-detail">
            <h2>{item.name}</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>{item.description}</p>

            {/* Main Pricing Card */}
            <div className="pricing-card" style={{ maxWidth: '500px', marginBottom: '2rem' }}>
              <h3>{item.name}</h3>
              <div className="price">{item.price}<small>{item.unit}</small></div>
              <ul style={{ textAlign: 'left', marginBottom: '1rem' }}>
                {item.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              <button className="cta-button" style={{ width: '100%' }}>Order Now</button>
            </div>

            {/* Additional Details */}
            <div style={{ marginTop: '2rem', maxWidth: '600px' }}>
              <h3>About This Item</h3>
              <p>{item.details}</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                  <h4 style={{ marginTop: 0 }}>Cook Time</h4>
                  <p>{item.cookTime}</p>
                </div>
                <div style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                  <h4 style={{ marginTop: 0 }}>Servings</h4>
                  <p>{item.servings}</p>
                </div>
              </div>

              <h3>Why Choose This?</h3>
              <ul>
                {item.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Big Rob's Rib Shack. All rights reserved.</p>
          <p id="contact">robertlaster@yahoo.com | 📞 (229) 894-1085</p>
        </div>
      </footer>
    </div>
  );
}
