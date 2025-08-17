import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ icon, title, description }) => {
  return (
    <div className="experience-card">
      <div className="card-header">
        <img src={icon} alt={`${title} icon`} className="card-icon" />
        <h3 className="card-title">{title}</h3>
      </div>
      <p className="card-text">{description}</p>
    </div>
  );
};

export default ExperienceCard;
