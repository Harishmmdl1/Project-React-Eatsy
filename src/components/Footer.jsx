import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h4>For better experience, download
          <br />
          the Eatsy app now</h4>
        <div className="app-links">
          <img src="/assets/item/googleplay.png" alt="Get it on Google Play" />
          <img src="/assets/item/appstore.png" alt="Download on the App Store" />
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-bottom">
          <div className="footer-section">
            <h4>Eatsy</h4>
            <p>© 2024 Eatsy Technologies Pvt. Ltd</p>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Team</li>
              <li>Eatsy One</li>
              <li>Eatsy Instantmart</li>
              <li>Eatsy Genie</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact us</h4>
            <ul>
              <li>Help & Support</li>
              <li>Partner with us</li>
              <li>Ride with us</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>Terms & Conditions</li>
              <li>Cookie Policy</li>
              <li>Privacy Policy</li>
              <li>Investor Relations</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>We deliver to:</h4>
            <ul>
              <li>Bangalore</li>
              <li>Gurgaon</li>
              <li>Hyderabad</li>
              <li>Delhi</li>
              <li>Mumbai</li>
              <li>Pune</li>
              <li>589 cities</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
