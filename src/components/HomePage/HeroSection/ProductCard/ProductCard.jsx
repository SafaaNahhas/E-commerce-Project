import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, subtitle }) => {
    return (
        <div className="SN-product-card">
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
    );
};

export default ProductCard;