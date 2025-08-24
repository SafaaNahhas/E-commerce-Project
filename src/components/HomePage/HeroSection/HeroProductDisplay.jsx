import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './HeroProductDisplay.css';
import { productData } from '../../../data/productData';

const HeroProductDisplay = () => {
    const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
    return (
        <div className="hero-product-display">
            {/* <div className="product-info-tags">
                {productData.tags.map((tag, index) => (
                    <span key={index} className="info-tag">{tag}</span>
                ))}
            </div>
             */}
            <div className="product-image-wrapper"> 
                <div className="product-tags-container">
                    <div className="tag-with-arrow best-seller">
                        <div className="tag-text-best">Best Seller</div>
                    </div>
                    
                    <div className="tag-with-arrow hoodie">
                        <img src="/assets/img/Home_Page/hero_section/Hoodie_Indicator.png" alt="Arrow" className="arrow-image" />
                        <div className="tag-text">Hoodie</div>

                    </div>

                    <div className="tag-with-arrow casual-jacket">
                        <div className="tag-text">Casual Jacket</div>
                        <img src="/assets/img/Home_Page/hero_section/Casual_Jacket_Indicator.png" alt="Arrow" className="arrow-image" />
                    </div>

                    <div className="tag-with-arrow full-sleeve">
                        
                        <img src="/assets/img/Home_Page/hero_section/Full_Sleeve_Indicator.png" alt="Arrow" className="arrow-image" />
                        <div className="tag-text">Full Sleeve</div>
                    </div>
                </div>
                <div className="product-slider-container">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.custom-swiper-button-next',
                            prevEl: '.custom-swiper-button-prev',
                        }}
                        slidesPerView={1}
                    >
                        {selectedColor.images.map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={`/assets/img/Home_Page/hero_section/${image}`} alt={productData.productName} className="slider-img"/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="custom-swiper-button-prev">
                            <img src="/assets/img/Home_Page/hero_section/left_arrow.svg" alt="Previous" />
                    </div>
                    <div className="custom-swiper-button-next">
                        <img src="/assets/img/Home_Page/hero_section/right_arrow.svg" alt="Next" />
                    </div>
                </div>
                <div className="product-options">
                <div className="color-options">
                    <span className="option-label">Color</span>
                    <div className="color-choices">
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

                <div className="size-options">
                    <span className="option-label">Sizes</span>
                    <div className="size-choices">
                        {productData.sizes.map((size, index) => (
                            <span key={index} className="size-pill">{size}</span>
                        ))}
                    </div>
                </div>
                <button className='view-similar-button'>
                    View Similar 
                    <span className="view-similar-arrow">→</span>
                </button>
            </div>
            </div>

            
        </div>
    );
};

export default HeroProductDisplay;