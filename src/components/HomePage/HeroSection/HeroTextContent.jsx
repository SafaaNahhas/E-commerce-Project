import React from 'react';
import './HeroTextContent.css';
import { productData } from '../../../data/productData';
import { Link } from 'react-router-dom';
import shopNowIcon from '/assets/img/Home_Page/hero_section/shop_now_icon.png';


const HeroTextContent = () => {
    return (
        <div className="SN-hero-text-content">
            {/* <h1>{productData.title}</h1> */}
            <div className="SN-title-and-tag">
                <h1>{productData.title}</h1>
                <span className="SN-style-redefined-tag">STYLE REDEFINED.</span>
            </div>
            <p>{productData.subtitle}</p>
            <div className="SN-hero-buttons">
                    <Link to="/products" className="SN-primary-button">
                    {/* <img src="/assets/img/Home_Page/hero_section/shop_now_icon.png" alt="Shopping Bag" className="SN-button-icon" /> */}
                    <img src={shopNowIcon} alt="Shopping Bag" className="SN-button-icon" />
                    {productData.button1}
                </Link>
                <Link to="/support" className="SN-secondary-button">{productData.button2}</Link>

            </div>
        </div>
    );
};

export default HeroTextContent;