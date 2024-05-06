// ContactUs.jsx
import React from 'react';
import './ContactUs.css'; // Importing the CSS file for styling

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission here
  };

  return (
    <section className="contact-us">
      <div className="section-heading">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          {/* Add physical address if applicable */}
        </div>
        <div className="social-media">
        <h3>Connect with Us</h3>
        <ul>
          <li><a href="https://www.facebook.com"><i className="fab fa-facebook"></i> Facebook</a></li>
          <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i> Twitter</a></li>
          <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i> Instagram</a></li>
          {/* Add more social media links as needed */}
        </ul>
        </div>
      </div>
     
    </section>
  );
}

export default ContactUs;
