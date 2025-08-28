import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './HeroProductDisplay.css';
import { productData } from '../../../data/productData';
import { Link } from 'react-router-dom';

const HeroProductDisplay = () => {
    const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
     
     const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
       const slides = selectedColor.images;
     const lastSlideIndex = slides.length - 1;

    return (
        <div className="SN-hero-product-display">
            {/* <div className="product-info-tags">
                {productData.tags.map((tag, index) => (
                    <span key={index} className="info-tag">{tag}</span>
                ))}
            </div>
             */}
            <div className="SN-product-image-wrapper"> 
                <div className="SN-product-tags-container">
                    <div className="SN-tag-with-arrow SN-best-seller">
                        <div className="SN-tag-text-best">Best Seller</div>
                    </div>
                    
                    <div className="SN-tag-with-arrow SN-hoodie">
                        <img src="/assets/img/Home_Page/hero_section/Hoodie_Indicator.png" alt="Arrow" className="SN-arrow-image" />
                        <div className="SN-tag-text">Hoodie</div>

                    </div>

                    <div className="SN-tag-with-arrow SN-casual-jacket">
                        <div className="SN-tag-text">Casual Jacket</div>
                        <img src="/assets/img/Home_Page/hero_section/Casual_Jacket_Indicator.png" alt="Arrow" className="SN-arrow-image" />
                    </div>

                    <div className="SN-tag-with-arrow SN-full-sleeve">
                        
                        <img src="/assets/img/Home_Page/hero_section/Full_Sleeve_Indicator.png" alt="Arrow" className="SN-arrow-image" />
                        <div className="SN-tag-text">Full Sleeve</div>
                    </div>
                </div>
                <div className="SN-product-slider-container">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.SN-custom-swiper-button-next',
                            prevEl: '.SN-custom-swiper-button-prev',
                        }}
                     
                        slidesPerView={1}

                      // Start the slider on the last slide
                    initialSlide={lastSlideIndex}
                    
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    onInit={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    >
                        {selectedColor.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={`/assets/img/Home_Page/hero_section/${image}`} alt={productData.productName} className="SN-slider-img"/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                        <div className={`SN-custom-swiper-button-prev ${isBeginning ? 'SN-swiper-button-inactive' : ''}`}>
                         &#8249;
                    </div>
                        <div className={`SN-custom-swiper-button-next ${isEnd ? 'SN-swiper-button-inactive' : ''}`}>
                        &#8250;
                    </div>
                </div>
                <div className="SN-product-options">
                <div className="SN-color-options">
                    <span className="SN-option-label">Color</span>
                    <div className="SN-color-choices">
                        {productData.colors.map((color, index) => (
                            <div
                                key={index}
                                className={`color-box ${selectedColor.name === color.name ? 'active' : ''}`}
                                style={{ backgroundColor: color.code }}
                                onClick={() => setSelectedColor(color)}
                            ></div>
                        ))}
                    </div>
                </div>

                <div className="SN-size-options">
                    <span className="SN-option-label">Sizes</span>
                    <div className="SN-size-choices">
                        {productData.sizes.map((size, index) => (
                            <span key={index} className="SN-size-pill">{size}</span>
                        ))}
                    </div>
                </div>
                <Link to="/products" className='SN-view-similar-button'>
                    View Similar 
                    <span className="SN-view-similar-arrow">
                        {/* → */}
                        &#8594;
                        </span>
                </Link>
            </div>
            </div>

            
        </div>
    );
};

export default HeroProductDisplay;