import React from 'react';

const LatestContentItem = () => {
  return (
    <article className="c-latest-content__item box-sizing u-flex__item">
      <a
        className="c-latest-content__link"
        href="https://www.nature.com/articles/d41586-024-01312-0"
        data-track="click"
        data-track-label="latest magazine (tag:0) (rank:0)"
      >
        <img
          className="c-latest-content__image"
          src="https://images.nature.com/w140h79/magazine-assets/d41586-024-01312-0/d41586-024-01312-0_27039232.jpg"
          alt="Plagiarism in peer-review reports could be the ‘tip of the iceberg’"
          loading="lazy"
        />
        <p className="c-latest-content__title u-h3">
          Plagiarism in peer-review reports could be the ‘tip of the iceberg’
        </p>
        <p>
          <span className="c-latest-content__content-type u-sans-serif">Nature Index</span>{' '}
          <span className="c-latest-content__date u-sans-serif">
            <time dateTime="2024-05-01">01 MAY 24</time>
          </span>
        </p>
      </a>
    </article>
  );
};

export default LatestContentItem;
