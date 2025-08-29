import React from 'react';
import './Policy.css';

const PolicySection = ({ mainTitle, subTitle, description, buttonText, buttonLink, policyDetails }) => {
  return (
    <section className="policy-section">
      <div className="policy-container">
        <div className="policy-header">
          <div className="policy-title-group">
            <h2 className="policy-main-title">{mainTitle}</h2>
            <span className="policy-sub-title">{subTitle}</span>
          </div>
          <a href={buttonLink} className="policy-button">
            {buttonText}
          </a>
        </div>
        <p className="policy-description">{description}</p>

        <div className="policy-details-grid">
          {policyDetails.map((detail, index) => (
            <div key={index} className="policy-detail-card">
              <h4>{detail.title}</h4>
              <p>{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PolicySection;


