// Blog.jsx
import React from 'react';
import './Blog.css'; // Importing the CSS file for styling
import image from './images/pic2.png'; // Importing the image
import image3 from './images/pic3.jpg'; // Importing image 3
import image4 from './images/pic4.jpeg'; // Importing image 4
import image5 from './images/pic5.jpeg'; // Importing image 5

const Blog = () => {
  return (
    <section className="blog">
      <div className="section-heading">
        <h2>Recent Articles</h2>
      </div>
      <div className="blog-content">
        <article className="blog-article">
          <a href="https://www.mdpi.com/2296-3529/11/1/9" className="blog-article-link">
            <img src={image} alt="" className="blog-article-image" loading="lazy" /> {/* Use the imported image */}
            <p className="blog-article-title">Skin and Syntax: Large Language Models in Dermatopathologyv</p>
            <p className="blog-article-info">Dermatopathology 2024 | <span className="blog-article-date"> 8 February 2024</span></p>
          </a>
        </article>
        {/* Add more articles */}
        <article className="blog-article">
          <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/ski2.313" className="blog-article-link">
            <img src={image3} alt="" className="blog-article-image" loading="lazy" />
            <p className="blog-article-title">Comparison of large language models in management advice for melanoma</p>
            <p className="blog-article-info">Google's AI BARD, BingAI and ChatGPT | <span className="blog-article-date">28 November 2023</span></p>
          </a>
        </article>
        <article className="blog-article">
          <a href="https://www.spiedigitallibrary.org/conference-proceedings-of-spie/12079/120792G/Automatic-skin-cancer-detection-and-classification-based-on-convolutional-neural/10.1117/12.2623079.full" className="blog-article-link">
            <img src={image4} alt="" className="blog-article-image" loading="lazy" />
            <p className="blog-article-title">Automatic skin cancer detection and classification based on convolutional neural network and natural language processing</p>
            <p className="blog-article-info">Conference Proceedings | <span className="blog-article-date">1 December 2021</span></p>
          </a>
        </article>
        <article className="blog-article">
          <a href="https://www.nature.com/articles/s41591-023-02448-8" className="blog-article-link">
            <img src={image5} alt="" className="blog-article-image" loading="lazy" />
            <p className="blog-article-title">Large language models in medicine</p>
            <p className="blog-article-info">Nature Medicine | <span className="blog-article-date">17 July 2023</span></p>
          </a>
        </article>
      </div>
      <div className="cta">
        <button className="cta-button">Explore More</button>
      </div>
    </section>
  );
}

export default Blog;
