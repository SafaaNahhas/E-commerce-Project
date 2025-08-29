import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './Testimonials.css'; 
import { TestimonialsCard } from '../TestimonialsCard/TestimonialsCard';
import Container from '../../common/Container/Container';
import sarahAvatar from '/assets/img/Home_Page/custers_love/Sarah_Thompson_avatar.png';
import rajeshAvatar from '/assets/img/Home_Page/custers_love/Rajesh_Patel_avatar.png';
import emilyAvatar from '/assets/img/Home_Page/custers_love/Emily_Walker_avatar.png';

// Nour
const testimonialsData = [
  {
    img: sarahAvatar,
    name: 'Sarah Thompson',
    rating: 5,
    text: "Klothink exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
  },
  {
    img: rajeshAvatar,
    name: 'Rajesh Patel',
    rating: 5,
    text: 'Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!',
  },
  {
    img: emilyAvatar,
    name: 'Emily Walker',
    rating: 5,
    text: 'Adorable and comfortable! My daughter loves her new outfit. Thank you Klothink for dressing our little fashionista.',
  },
  {
    img: sarahAvatar,
    name: 'Sarah Thompson',
    rating: 3,
    text: "Klothink exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
  },
  {
    img: rajeshAvatar,
    name: 'Rajesh Patel',
    rating: 2,
    text: 'Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!',
  },
  {
    img: emilyAvatar,
    name: 'Emily Walker',
    rating: 1,
    text: 'Adorable and comfortable! My daughter loves her new outfit. Thank you Klothink for dressing our little fashionista.',
  },
];

export const Testimonials = ({ isDashboard }) => {


  // safaa
  const [reviews, setReviews] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState({ name: '', text: '', rating: '', img: '' });
  const [formErrors, setFormErrors] = useState({}); 
  
  useEffect(() => {
    let storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    if (storedReviews.length === 0) {
      localStorage.setItem('reviews', JSON.stringify(testimonialsData));
      storedReviews = testimonialsData;
    }
    setReviews(storedReviews);
  }, []);

  useEffect(() => {
    if (editingIndex !== null) {
      setForm(reviews[editingIndex]);
    } else {
      setForm({ name: '', text: '', rating: '', img: '' });
    }
  }, [editingIndex, reviews]);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const errors = {};
    if (form.name.length < 3) {
      errors.name = 'Name must be at least 3 characters long.';
    } else if (form.name.length > 15) {
      errors.name = 'Name must not exceed 15 characters.';
    }

    const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
      // eslint-disable-next-line no-unused-vars 
    } catch (_) {
      return false;  
    }
  };

  if (form.img && !form.img.startsWith('/') && !isValidUrl(form.img)) {
    errors.img = 'Invalid image URL. Please enter a valid link.';
  }
    if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }


  const newReview = {
    ...form,
    rating: parseFloat(form.rating), 
    img: form.img || 'https://placehold.co/100x100/D4D4D4/000000?text=NEW',
  };
    let updatedReviews;
    if (editingIndex !== null) {
      updatedReviews = [...reviews];
      updatedReviews[editingIndex] = newReview;
      setEditingIndex(null);
    } else {
      updatedReviews = [...reviews, newReview];
    }

    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    setForm({ name: '', text: '', rating: '', img: '' });
    setFormErrors({}); 
  };

  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    if (editingIndex === index) {
      setEditingIndex(null);
    }
  };
  // 
  
 // Nour
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
      }, [emblaApi]);

  return (
    <Container>
    
      {/* safaa*/}
      {isDashboard && (
        <section className="SN-dashboard-section">
          <div className="SN-dashboard-header">
            <h2 className="SN-dashboard-title">
              Manage Testimonials
            </h2>
          </div>
          <form className="SN-dashboard-form" onSubmit={handleSubmitReview}>
            <input 
              type="text" 
              name="name" 
              placeholder="Customer Name"
              required 
              minLength="3"  
              value={form.name}
                  onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                  if (formErrors.name) setFormErrors({ ...formErrors, name: null });
                }}
            />
            {formErrors.name && (
                <small style={{ color: 'red', marginTop: '-10px' }}>
                    {formErrors.name}
                </small>
            )}
            <textarea 
              name="text" 
              placeholder="Review Text"   
              required 
              value={form.text}
              onChange={(e) => setForm({ ...form, text: e.target.value })}
            />
            <input 
              type="number" 
              name="rating" 
              placeholder="Rating (1-5)"
              min="1" 
              max="5" 
              step="0.5" 
              required 
              value={form.rating}
              onChange={(e) => setForm({ ...form, rating: e.target.value })}
            />
            <input 
              // type="url" 
              type="text" 
              name="img" 
              placeholder="Customer image URL (optional)" 
              value={form.img}
              onChange={(e) => {
                setForm({ ...form, img: e.target.value });
                if (formErrors.img) setFormErrors({ ...formErrors, img: null });
            }}
            />
            {formErrors.img && (
                <small style={{ color: 'red', marginTop: '-10px' }}>
                    {formErrors.img}
                </small>
            )}
            <button type="submit">
              {editingIndex !== null ? 'Update Review' : 'Add New Review'}
            </button>
            {editingIndex !== null && (
              <button 
                type="button" 
                onClick={() => setEditingIndex(null)}
                className="cancel-SN-edit-btn"
              >
                Cancel Edit
              </button>
            )}
          </form>
        </section>
      )}
      <section className="testimonials-section">
        {!isDashboard && (
        <div className="testimonials-header">
          <div className="testimonials-content">
            <div className="title-group">
              <h2 className="testimonials-title">CUSTOMERS LOVE.</h2>
              <span className="testimonials-subtitle">TESTIMONIALS</span>
            </div>
            <p className="testimonials-description">
              At Klothink, our customers are the heartbeat of our brand. 
              Explore the heartfelt testimonials shared by those who have experienced the magic of Klothink fashion.
            </p>
          </div>
          <button
  className="view-all-btn"
  onClick={() => {
    const section = document.querySelector('.AS-seam'); 
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  View All Testimonials
</button>

        </div>
        )}
        <div className="embla-wrapper">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {/* safaa*/}
              {reviews.map((testimonial, index) => (
                <div className="embla__slide" key={index}>
                  <TestimonialsCard {...testimonial} />
              {isDashboard && (
                    <div className="SN-card-buttons">
                      <button 
                        className="SN-edit-btn" 
                        onClick={() => setEditingIndex(index)}
                      >
                        <span>✏️</span>
                      </button>
                      <button 
                        className="SN-delete-btn" 
                        onClick={() => handleDeleteReview(index)}
                      >
                        <span>🗑️</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/*  */}
        <div className="embla-buttons">
            <button
              className="embla__button embla__button--prev"
              onClick={scrollPrev}
            >
              &#10094;
            </button>
            <button
              className="embla__button embla__button--next"
              onClick={scrollNext}
            >
              &#10095;
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
};
