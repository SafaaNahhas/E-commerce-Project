import React from 'react';
import HeroTextContent from './HeroTextContent';
import HeroProductDisplay from './HeroProductDisplay';
import './HeroSection.css';
import { statsData } from '../../../data/productData'; 
import ProductCard from './ProductCard/ProductCard';

const HeroSection = () => {
    return (
        <div className="SN-hero-section">
            <div className="SN-hero-left-content">
                <HeroTextContent />
                <div className="SN-product-stats">
                    {statsData.map((stat, index) => (
                        <ProductCard key={index} title={stat.title} subtitle={stat.subtitle} />
                    ))}
                </div>
            </div>
            <div className="SN-hero-right-content">
                <HeroProductDisplay />
            </div>
        </div>
    );
};

export default HeroSection;