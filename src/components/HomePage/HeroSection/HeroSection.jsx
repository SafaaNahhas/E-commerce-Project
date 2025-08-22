import React from 'react';
import HeroTextContent from './HeroTextContent';
import HeroProductDisplay from './HeroProductDisplay';
import './HeroSection.css';
import { statsData } from '../../../data/productData'; 
import ProductCard from './ProductCard/ProductCard';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-left-content">
                <HeroTextContent />
                <div className="product-stats">
                    {statsData.map((stat, index) => (
                        <ProductCard key={index} title={stat.title} subtitle={stat.subtitle} />
                    ))}
                </div>
            </div>
            <div className="hero-right-content">
                <HeroProductDisplay />
            </div>
        </div>
    );
};

export default HeroSection;