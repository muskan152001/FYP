import React from 'react';
import './AboutUs.css'; // Importing the CSS file for styling

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="section-heading">
        <h2>About Us</h2>
      </div>
      <div className="section-content">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>At Skin Cancer Detection, our mission is to provide early detection of skin cancer to save lives and promote skin health.</p>
        </div>
        <div className="why-us">
          <h3>Why Us</h3>
          <p>We are experts in dermatology and technology, utilizing cutting-edge tools and techniques to ensure accurate and timely detection of skin cancer. Our commitment to fighting skin cancer drives our passion and dedication.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
