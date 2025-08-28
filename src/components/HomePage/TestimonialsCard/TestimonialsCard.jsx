import React from 'react';
import './TestimonialsCard.css'; 
import { ExpandableText } from '../../common/ExpandableText/ExpandableText'; 

const StarRating = ({ rating }) => (
  <div className="star-rating">
    {/* {[...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? 'star-filled' : 'star-empty'}>&#9733;</span>
    ))} */}
    {/* safaa */}
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        let starClass = 'star-empty'; 

        if (rating >= starValue) {
          starClass = 'star-filled'; 
        } else if (rating >= starValue - 0.5) {
          starClass = 'star-half'; 
        }

        return (
          <span key={index} className={`star ${starClass}`}>&#9733;</span>
        );
      })}
      {/*  */}
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
        <img src="/assets/img/Home_Page/customers_love/double_cotation.png" alt="quote" className="quote-icon" />

      </div>
      {/* <p className="card-text">{text}</p> */}
      {/* safaa */}
      <ExpandableText text={text} maxHeight={75} />
    </div>
  );
};
