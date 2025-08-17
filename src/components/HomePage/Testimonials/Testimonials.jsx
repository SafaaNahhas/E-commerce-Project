import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import './Testimonials.css'; 
import { TestimonialsCard } from '../TestimonialsCard/TestimonialsCard';
import Container from '../../common/Container/Container';

const testimonialsData = [
  {
    img: '/assets/img/Home_Page/custers_love/Sarah_Thompson_avatar.png',
    name: 'Sarah Thompson',
    rating: 5,
    text: "Klothink exceeded my expectations. The gown's quality and design made me feel like a queen. Fast shipping, too!",
  },
  {
    img: '/assets/img/Home_Page/custers_love/Rajesh_Patel_avatar.png',
    name: 'Rajesh Patel',
    rating: 5,
    text: 'Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!',
  },
  {
    img: '/assets/img/Home_Page/custers_love/Emily_Walker_avatar.png',
    name: 'Emily Walker',
    rating: 5,
    text: 'Adorable and comfortable! My daughter loves her new outfit. Thank you Klothink for dressing our little fashionista.',
  },
 
];

export const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay()]);

  return (
  <Container>
      <section className="testimonials-section">
      <div className="testimonials-header">
      <div className="testimonials-content">
          
          <div className="title-group">
            <h2 className="testimonials-title">CUSTOMERS LOVE.</h2>
            <span className="testimonials-subtitle">TESTIMONIALS</span>
          </div>
          <p className="testimonials-description">
            At Klothink, our customers are the heartbeat of our brand. Explore the heartfelt testimonials shared by those who have experienced the magic of Klothink fashion.
          </p>
        </div>
        <button className="view-all-btn">View All Testimonials</button>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {testimonialsData.map((testimonial, index) => (
            <div className="embla__slide" key={index}>
              <TestimonialsCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </Container>
  );
};
