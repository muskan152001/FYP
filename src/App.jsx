import React from 'react';
import Header from './Header'; // Assuming Header.js is in the same directory
import Hero from './Hero';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Blog from './Blog';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <AboutUs/>
      <ContactUs/>
      <Blog/>
      <Footer/>

      {/* Rest of your application content */}
    </div>
  );
}

export default App;
