import React from 'react';
import './HeroTextContent.css';
import { productData } from '../../../data/productData';

const HeroTextContent = () => {
    return (
        <div className="hero-text-content">
            {/* <h1>{productData.title}</h1> */}
            <div className="title-and-tag">
                <h1>{productData.title}</h1>
                <span className="style-redefined-tag">STYLE REDEFINED.</span>
            </div>
            <p>{productData.subtitle}</p>
            <div className="hero-buttons">
                <button className="primary-button">
                    <img src="/assets/img/Home_Page/hero_section/shop_now_icon.png" alt="Shopping Bag" className="button-icon" />
                    {productData.button1}
                    </button>
                <button className="secondary-button">{productData.button2}</button>
            </div>
        </div>
    );
};

export default HeroTextContent;