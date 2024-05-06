import React from 'react';
import './Footer.css'; // Importing the CSS file for styling

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-nav">
        <ul>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
          <li><a href="#terms-of-service">Terms of Service</a></li>
          {/* Add more additional navigation links as needed */}
        </ul>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Skin Cancer Detection. All rights reserved.</p>
      </div>
      <button className="back-to-top-button" onClick={handleScrollToTop}>Back to Top</button>
    </footer>
  );
}

export default Footer;
