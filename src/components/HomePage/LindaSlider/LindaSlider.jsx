import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./LindaSlider.css";
import cartButton from '/assets/img/navbar/cartBtn.png';
import viewMoreIcon from '/assets/img/Home_Page/discover_fashion/Icon.svg';

export default function LindaSlider({ products, cartColor = "yellow" }) {
const navigate = useNavigate();

const handleClick = (product) => {
  navigate(`/product/${product.id}`, { state: { product } });
};

const [activeArrow, setActiveArrow] = useState(null);

const handlePrevs = () => {
  sliderRef.current.slickPrev();
  setActiveArrow("prev"); // mark prev as active
};

const handleNexts = () => {
  sliderRef.current.slickNext();
  setActiveArrow("next"); // mark next as active
};

  const [progress, setProgress] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 920);
  const sliderRef = useRef();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 920);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    centerMode: false,
    slidesToShow: 4,
    infinite: true,
    arrows: false, // disable Slick arrows
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToScroll: 1,
    beforeChange: () => setProgress(0),
    afterChange: () => animateProgress(),
    responsive: [
      {
        breakpoint: 920,
        settings: "unslick",
      },
    ],
  };

  const animateProgress = () => {
    setProgress(0);
    setTimeout(() => setProgress(100), 50);
  };

  useEffect(() => {
    animateProgress();
  }, []);

  const handlePrev = () => sliderRef.current.slickPrev();
  const handleNext = () => sliderRef.current.slickNext();

  return (
    <div className="slider-container">
      {!isMobile ? (
        <>
          <Slider ref={sliderRef} {...settings} className="main-slider">
            {products.map((item) => (
  <div
    key={item.id}
    className="product-card"
    onClick={() => handleClick(item)}
  >
    <div className="product-img-container">
      <div className="product-img-wrapper">
        <img src={item.image} alt={item.name} />
      </div>
      <button className={`cart-btn ${cartColor === "white" ? "white" : ""}`}>
        {/* <img src="/assets/img/navbar/cartBtn.png" alt="" /> */}
        <img src={cartButton} alt="" />
      </button>
    </div>
    <div className="product-name">{item.name}</div>
    <div className="product-price">{item.price}</div>
  </div>
))}
          </Slider>

          {/* Progress bar with two arrows on the right */}
          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width:  `${progress}%`, transitionDuration: "3s" }}
              />
            </div>
          <div className="progress-arrows-right">
  <div
    className={`arrow prev ${activeArrow === "prev" ? "active" : ""}`}
    onClick={handlePrevs}
  >
    &#8249;
  </div>
  <div
    className={`arrow next ${activeArrow === "next" ? "active" : ""}`}
    onClick={handleNexts}
  >
    &#8250;
  </div>
</div>
          </div>
        </>
      ) : (
        <>
          {/* Mobile vertical view */}
          <div className={`vertical-list ${showAll ? "show-all" : ""}`}>
           {products.slice(0, showAll ? products.length : 2).map((item) => (
  <div
    key={item.id}
    className="product-card"
    onClick={() => handleClick(item)} 
  >
    <div className="product-img-wrapper">
      <img src={item.image} alt={item.name} />
      <button
        className={`cart-btn ${cartColor === "white" ? "white" : ""}`}
        onClick={(e) => e.stopPropagation()} // ← Prevent navigation when cart is clicked
      >
        {/* <img src="/assets/img/navbar/cartBtn.png" alt="" /> */}
         <img src={cartButton} alt="" />
      </button>
    </div>
    <div className="product-name">{item.name}</div>
    <div className="product-price">{item.price}</div>
  </div>
))}
          </div>

          <button className="view-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? "View Less" : "View More"}
            {/* <img src="public/assets/img/Home_Page/discover_fashion/Icon.svg" className={`arrow-icon ${showAll ? "up" : "down"}`}/> */}
            <img src={viewMoreIcon} className={`arrow-icon ${showAll ? "up" : "down"}`}/>
          </button>
        </>
      )}
    </div>
  );
}