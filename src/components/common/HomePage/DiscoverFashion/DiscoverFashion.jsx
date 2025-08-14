import './DiscoverFashion.css';
import React, { useState } from 'react';
function DiscoverFashion(params) {

    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [message, setMessage] = useState('');

    const handleCategoryClick = (selectedCategory) => {
        setCategory(selectedCategory);
        setSubCategory(''); // Reset sub-category when changing category
        setMessage('You selected ${selectedCategory}');
    };

    const handleSubCategoryClick = (selectedSubCategory) => {
        setSubCategory(selectedSubCategory);
        setMessage('${category} is here ${selectedSubCategory}');
    };


    return(
        <div>
            <div className="DiscoverFashionHeader">
                <div className="left">
                <div className="Title">
                <h1>Discover Fashion.</h1>
                <span>Products</span>
                </div>
                <p>Dive into a world of fashion innovation at Klothink. Our carefully curated collections bring together the latest trends and timeless classics, ensuring you find the perfect pieces for every occasion.</p>
                </div>
                <button>View All Products</button>
            </div>

            
        <div className='Choose'>
            <div className="button-group">
                <div className="categories">
                    <button onClick={() => handleCategoryClick('All')}
                    className={category === 'All' ? 'selected' : ''}>All</button>
                    <button onClick={() => handleCategoryClick('Menwear')}
                        className={category === 'Menwear' ? 'selected' : ''}>Menwear</button>
                    <button onClick={() => handleCategoryClick('Womenwear')}
                        className={category === 'Womenwear' ? 'selected' : ''}>Womenwear</button>
                    <button onClick={() => handleCategoryClick('Kidswear')}
                        className={category === 'Kidswear' ? 'selected' : ''}>Kidswear</button>
                </div>

                <div className="sub-categories">
                    {category && (
                        <>
                            <button onClick={() => handleSubCategoryClick('Casual')}
                                className={subCategory === 'Casual' ? 'select' : ''}>Casual</button>
                            <button onClick={() => handleSubCategoryClick('Formal')}
                                className={subCategory === 'Formal' ? 'select' : ''}>Formal</button>
                            <button onClick={() => handleSubCategoryClick('Party')}
                                className={subCategory === 'Party' ? 'select' : ''}>Party</button>
                        </>
                    )}
                </div>
            </div>
            <h2>{message}</h2>
        </div>
    
        </div>
    )
}

export default DiscoverFashion;