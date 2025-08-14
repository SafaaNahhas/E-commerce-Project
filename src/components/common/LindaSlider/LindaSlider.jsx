import React, { useState, useEffect } from 'react';
import './LindaSlider.css'; // Import the CSS file for styling

const LindaSlider = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesToShow = 4; // Number of slides to show at once

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % (slides.length - slidesToShow + 1));
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [slides.length]);

    const changeSlide = (direction) => {
        setCurrentSlide((prev) => {
            if (direction === 'next') {
                return Math.min(prev + 1, slides.length - slidesToShow);
            } else {
                return Math.max(prev - 1, 0);
            }
        });
    };

    return (
        <div className="slider-container">
            <button className="prev" onClick={() => changeSlide('prev')}>&#10094;</button>
            <div className="slider">
                <div className="slides" style={{transform: `translateX(-${currentSlide * (100 / slidesToShow)}%) `}}>
                    {slides.map((slide, index) => (
                        <div key={index} className="slide">
                            <img src={slide.image} alt={`Slide ${index + 1}`} />
                            <div className="overlay">
                                <i className="icon">{slide.icon}</i>
                                <p>{slide.description}</p>
                                <p className="price">{slide.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="next" onClick={() => changeSlide('next')}>&#10095;</button>
            <div className="indicator">
                {slides.map((_, index) => (
                    <span key={index} className={`dot ${index >= currentSlide && index < currentSlide + slidesToShow ? 'active' : ''}`}></span>
                ))}
            </div>
        </div>
    );
};

export default LindaSlider;
