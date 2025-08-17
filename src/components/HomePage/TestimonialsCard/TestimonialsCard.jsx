import React from 'react';
import './TestimonialsCard.css'; 

const StarRating = ({ rating }) => (
  <div className="star-rating">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'star-filled' : 'star-empty'}>&#9733;</span>
    ))}
  </div>
);

export const TestimonialsCard = ({ img, name, rating, text }) => {
  return (
    <div className="testimonial-card">
      <div className="card-header">
        <img src={img} alt={name} className="avatar" />
        <div className="name-rating">
          <h3>{name}</h3>
          <StarRating rating={rating} />
        </div>
        <span className="quote-icon">”</span>
      </div>
      <p className="card-text">{text}</p>
    </div>
  );
};
