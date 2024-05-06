import React from 'react';
import './Hero.css'; // Importing the CSS file for styling
import image from './images/pic1.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-heading">Early Detection Saves Lives:</h1>
        <h2 className="hero-subheading">Detect Skin Cancer Before It's Too Late!</h2>
        <button className="hero-button">Detect Now</button>
      </div>
      <div className="hero-image">
        <img src={image} alt="pic1" />
      </div>
    </section>
  );
}

export default Hero;
