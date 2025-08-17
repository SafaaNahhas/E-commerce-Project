import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "./LindaSlider.css";

// Custom arrow components
function NextArrow({ onClick }) {
  return <div className="arrow next" onClick={onClick}>&#8250;</div>;
}
function PrevArrow({ onClick }) {
  return <div className="arrow prev" onClick={onClick}>&#8249;</div>;
}

export default function LindaSlider({ products }) {
  const [progress, setProgress] = useState(0);
  const sliderRef = useRef();

  const settings = {
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 4,
    infinite: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    beforeChange: () => setProgress(0),
    afterChange: () => animateProgress()
  };

  const animateProgress = () => {
    setProgress(0);
    setTimeout(() => setProgress(100), 50);
  };

  useEffect(() => {
    animateProgress();
  }, []);

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-img-wrapper">
              <img src={item.image} alt={item.name} />
              <button className="cart-btn">🛒</button>
            </div>
            <div className="product-name">{item.name}</div>
            <div className="product-price">{item.price}</div>
          </div>
        ))}
      </Slider>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            transitionDuration: "3s"
          }}
        ></div>
      </div>
    </div>
  );
}
