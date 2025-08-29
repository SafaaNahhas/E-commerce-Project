import React, { useState } from 'react'; // Import useState
import './Products.css';
import LindaSlider from "../components/HomePage/LindaSlider/LindaSlider";

// Men's Wear - Active Lifestyle
import menActive1 from "/assets/img/Products_Page/Men’s_wear/Active_Lifestyle/Performance_Jacket.png";
import menActive2 from "/assets/img/Products_Page/Men’s_wear/Active_Lifestyle/High_Performance_Leggings.png";
import menActive3 from "/assets/img/Products_Page/Men’s_wear/Active_Lifestyle/Lightweight_Running_Shoes.png";
import menActive4 from "/assets/img/Products_Page/Men’s_wear/Active_Lifestyle/Quick_Dry_Athletic_Shorts.png";

// Men's Wear - Formal Elegance
import menFormal1 from "/assets/img/Products_Page/Men’s_wear/Formal_Elegance/Black_French_Cuff Shirt.png";
import menFormal2 from "/assets/img/Products_Page/Men’s_wear/Formal_Elegance/Black_Leather_Oxford_Shoes.png";
import menFormal3 from "/assets/img/Products_Page/Men’s_wear/Formal_Elegance/Classic_Black_Leather_Belt.png";
import menFormal4 from "/assets/img/Products_Page/Men’s_wear/Formal_Elegance/Classic_Charcoal_Suit.png";

// Men's Wear - Casual Collection
import menCasual1 from "/assets/img/Products_Page/Men’s_wear/Casual_Collection/Chino Pants.png";
import menCasual2 from "/assets/img/Products_Page/Men’s_wear/Casual_Collection/Classic Denim Jeans.png";
import menCasual3 from "/assets/img/Products_Page/Men’s_wear/Casual_Collection/Classic Polo Shirt.png";
import menCasual4 from "/assets/img/Products_Page/Men’s_wear/Casual_Collection/Cozy Comfort Hoodie.png";

// Women's Wear
import womenFormal1 from "/assets/img/Products_Page/Women’s_wear/Formal1.png";
import womenFormal2 from "/assets/img/Products_Page/Women’s_wear/Formal2.png";
import womenFormal3 from "/assets/img/Products_Page/Women’s_wear/Formal3.png";
import womenFormal4 from "/assets/img/Products_Page/Women’s_wear/Formal4.png";
import womenFormal5 from "/assets/img/Products_Page/Women’s_wear/Formal5.png";
import womenFormal6 from "/assets/img/Products_Page/Women’s_wear/Formal6.png";

import womenCasual1 from "/assets/img/Products_Page/Women’s_wear/Casual1.png";
import womenCasual2 from "/assets/img/Products_Page/Women’s_wear/Casual2.png";
import womenCasual3 from "/assets/img/Products_Page/Women’s_wear/Casual3.png";
import womenCasual4 from "/assets/img/Products_Page/Women’s_wear/Casual4.png";
import womenCasual5 from "/assets/img/Products_Page/Women’s_wear/Casual5.png";
import womenCasual6 from "/assets/img/Products_Page/Women’s_wear/Casual6.png";

import womenActive1 from "/assets/img/Products_Page/Women’s_wear/Active1.png";
import womenActive2 from "/assets/img/Products_Page/Women’s_wear/Active2.png";
import womenActive3 from "/assets/img/Products_Page/Women’s_wear/Active3.png";
import womenActive4 from "/assets/img/Products_Page/Women’s_wear/Active4.png";
import womenActive5 from "/assets/img/Products_Page/Women’s_wear/Active5.png";
import womenActive6 from "/assets/img/Products_Page/Women’s_wear/Active6.png";

// Kid's Wear
import kidsActive1 from "/assets/img/Products_Page/Kids_wear/Active1.png";
import kidsActive2 from "/assets/img/Products_Page/Kids_wear/Active2.png";
import kidsActive3 from "/assets/img/Products_Page/Kids_wear/Active3.png";
import kidsActive4 from "/assets/img/Products_Page/Kids_wear/Active4.png";
import kidsActive5 from "/assets/img/Products_Page/Kids_wear/Active5.png";
import kidsActive6 from "/assets/img/Products_Page/Kids_wear/Active6.png";
import kidsCasual1 from "/assets/img/Products_Page/Kids_wear/Casual1.png";
import kidsCasual2 from "/assets/img/Products_Page/Kids_wear/Casual2.png";
import kidsCasual3 from "/assets/img/Products_Page/Kids_wear/Casual3.png";
import kidsCasual4 from "/assets/img/Products_Page/Kids_wear/Casual4.png";
import kidsCasual5 from "/assets/img/Products_Page/Kids_wear/Casual5.png";
import kidsCasual6 from "/assets/img/Products_Page/Kids_wear/Casual6.png";
import kidsFormal1 from "/assets/img/Products_Page/Kids_wear/Formal1.png";
import kidsFormal2 from "/assets/img/Products_Page/Kids_wear/Formal2.png";
import kidsFormal3 from "/assets/img/Products_Page/Kids_wear/Formal3.png";
import kidsFormal4 from "/assets/img/Products_Page/Kids_wear/Formal4.png";
import kidsFormal5 from "/assets/img/Products_Page/Kids_wear/Formal5.png";
import kidsFormal6 from "/assets/img/Products_Page/Kids_wear/Formal6.png";

// Category Icons
import menIcon from "/assets/img/Products_Page/Men’s_wear/Men’s_wear_Icon.png";
import womenIcon from "/assets/img/Products_Page/Women’s_wear/Women’s_wear_Icon.png";
import kidsIcon from "/assets/img/Products_Page/Kids_wear/Kid’s_wear_Icon.png";
const Menwear = [
    { id: 1, name: "Performance Jacket", price: "$49.99", image:menActive1, type: "Party" },
    { id: 2, name: "High_Performance Leggings", price: "$149.99", image: menActive2, type: "Party" },
    { id: 3, name: "Lightweight Running Shoes", price: "$89.99", image: menActive3, type: "Party" },
    { id: 4, name: "Quick Dry Athletic Shorts", price: "$39.99", image: menActive4, type: "Party" },
    { id: 5, name: "Performance Jacket", price: "$49.99", image: menActive1, type: "Party" },
    { id: 6, name: "High Performance Leggings", price: "$149.99", image: menActive2, type: "Party" },
    { id: 7, name: "Lightweight Running Shoes", price: "$89.99", image: menActive3, type: "Party" },
    { id: 8, name: "Quick Dry Athletic Shorts", price: "$39.99", image: menActive4, type: "Party" },

    { id: 9, name: "Casual Hoodie", price: "$39.99", image: menFormal1, type: "Formal" },
    { id: 10, name: "Casual Hoodie", price: "$39.99", image: menFormal2, type: "Formal" },
    { id: 11, name: "Casual Hoodie", price: "$39.99", image: menFormal3, type: "Formal" },
    { id: 12, name: "Casual Hoodie", price: "$39.99", image: menFormal4, type: "Formal" },
    { id: 13, name: "Casual Hoodie", price: "$39.99", image: menFormal1, type: "Formal" },
    { id: 14, name: "Casual Hoodie", price: "$39.99", image: menFormal2, type: "Formal" },
    { id: 15, name: "Casual Hoodie", price: "$39.99", image: menFormal3, type: "Formal" },
    { id: 16, name: "Casual Hoodie", price: "$39.99", image: menFormal4, type: "Formal" },

    { id: 17, name: "Casual Hoodie", price: "$39.99", image: menCasual1, type: "Casual" },
    { id: 18, name: "Casual Hoodie", price: "$39.99", image: menCasual2, type: "Casual" },
    { id: 19, name: "Casual Hoodie", price: "$39.99", image: menCasual3, type: "Casual" },
    { id: 20, name: "Casual Hoodie", price: "$39.99", image: menCasual4, type: "Casual" },
    { id: 21, name: "Casual Hoodie", price: "$39.99", image: menCasual1, type: "Casual" },
    { id: 22, name: "Casual Hoodie", price: "$39.99", image: menCasual2, type: "Casual" },
    { id: 23, name: "Casual Hoodie", price: "$39.99", image: menCasual3, type: "Casual" },
    { id: 24, name: "Casual Hoodie", price: "$39.99", image: menCasual4, type: "Casual" },
];

const Womenwear = [
    { id: 1, name: "Summer Dress", price: "$59.99", image: womenFormal1, type: "Formal" },
    { id: 2, name: "Elegant Gown", price: "$199.99", image: womenFormal2, type: "Formal" },
    { id: 3, name: "Party Heels", price: "$79.99", image: womenFormal3, type: "Formal" },
    { id: 4, name: "Party Heels", price: "$79.99", image: womenFormal4, type: "Formal" },
    { id: 5, name: "Party Heels", price: "$79.99", image: womenFormal5, type: "Formal" },
    { id: 6, name: "Party Heels", price: "$79.99", image: womenFormal6, type: "Formal" },

    { id: 7, name: "Party Heels", price: "$79.99", image: womenCasual1, type: "Casual" },
    { id: 8, name: "Party Heels", price: "$79.99", image: womenCasual2, type: "Casual" },
    { id: 9, name: "Party Heels", price: "$79.99", image: womenCasual3, type: "Casual" },
    { id: 10, name: "Party Heels", price: "$79.99", image:womenCasual4, type: "Casual" },
    { id: 11, name: "Party Heels", price: "$79.99", image: womenCasual5, type: "Casual" },
    { id: 12, name: "Party Heels", price: "$79.99", image: womenCasual6, type: "Casual" },

    { id: 13, name: "Party Heels", price: "$79.99", image: womenActive1, type: "Party" },
    { id: 14, name: "Party Heels", price: "$79.99", image: womenActive2, type: "Party" },
    { id: 15, name: "Party Heels", price: "$79.99", image: womenActive3, type: "Party" },
    { id: 16, name: "Party Heels", price: "$79.99", image: womenActive4, type: "Party" },
    { id: 17, name: "Party Heels", price: "$79.99", image: womenActive5, type: "Party" },
    { id: 18, name: "Party Heels", price: "$79.99", image: womenActive6, type: "Party" },

];

const Kidswear = [
    { id: 1, name: "Kids T-shirt", price: "$19.99", image: kidsActive1, type: "Party" },
    { id: 2, name: "School Uniform", price: "$49.99", image: kidsActive2, type: "Party" },
    { id: 3, name: "Party Dress", price: "$59.99", image: kidsActive3, type: "Party" },
    { id: 4, name: "Party Dress", price: "$59.99", image: kidsActive4, type: "Party" },
    { id: 5, name: "Party Dress", price: "$59.99", image: kidsActive5, type: "Party" },
    { id: 6, name: "Party Dress", price: "$59.99", image: kidsActive6, type: "Party" },
    { id: 7, name: "Party Dress", price: "$59.99", image: kidsCasual1, type: "Casual" },
    { id: 8, name: "Party Dress", price: "$59.99", image: kidsCasual2, type: "Casual" },
    { id: 9, name: "Party Dress", price: "$59.99", image: kidsCasual3, type: "Casual" },
    { id: 10, name: "Party Dress", price: "$59.99", image: kidsCasual4, type: "Casual" },
    { id: 11, name: "Party Dress", price: "$59.99", image: kidsCasual5, type: "Casual" },
    { id: 12, name: "Party Dress", price: "$59.99", image: kidsCasual6, type: "Casual" },
    { id: 13, name: "Party Dress", price: "$59.99", image: kidsFormal1, type: "Formal" },
    { id: 14, name: "Party Dress", price: "$59.99", image: kidsFormal2, type: "Formal" },
    { id: 15, name: "Party Dress", price: "$59.99", image: kidsFormal3, type: "Formal" },
    { id: 16, name: "Party Dress", price: "$59.99", image:kidsFormal4, type: "Formal" },
    { id: 17, name: "Party Dress", price: "$59.99", image: kidsFormal5, type: "Formal" },
    { id: 18, name: "Party Dress", price: "$59.99", image: kidsFormal6, type: "Formal" },

];

const All = [...Menwear, ...Womenwear, ...Kidswear]; // Merge everything

// =================== MAIN COMPONENT =================== //
function ProductsPage() {
    const [category, setCategory] = useState("All");

    const handleCategoryClick = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    const getProducts = () => {
        if (category === "Menwear") return Menwear;
        if (category === "Womenwear") return Womenwear;
        if (category === "Kidswear") return Kidswear;
        return All; // Default is All
    };

    const products = getProducts(); // Get products based on selected category
    return (
        <div>
            <div className="DiscoverFashion">
                <div className="left">
                    <div className="Title">
                        <h1>Discover Now.</h1>
                        <span>Products</span>
                    </div>
                    <p>
                        Dive into a world of fashion innovation at Klothink. Our carefully
                        curated collections bring together the latest trends and timeless
                        classics, ensuring you find the perfect pieces for every occasion.
                    </p>
                </div>
                <div className="Right">
                    <div className='Line'>
                        <h3>Exclusive Offers</h3>
                        <p>30% off on select items</p>
                    </div>
                    <div className='Line'>
                        <h3>New Arrivals</h3>
                        <p>50+ new arrivals Daily</p>
                    </div>
                    <div>
                        <h3>Over 1,500 +</h3>
                        <p>curated fashion products.</p>
                    </div>
                </div>
            </div>
            <div className="categoriesP">
                <button onClick={() => handleCategoryClick("All")} className={category === "All" ? "selected" : ""}>
                    All
                </button>
                <button onClick={() => handleCategoryClick("Menwear")} className={category === "Menwear" ? "selected" : ""}>
                    <img src={menIcon} alt="" />Men's wear
                </button>
                <button onClick={() => handleCategoryClick("Womenwear")} className={category === "Womenwear" ? "selected" : ""}>
                    <img src={womenIcon}  alt="" />Women's wear
                </button>
                <button onClick={() => handleCategoryClick("Kidswear")} className={category === "Kidswear" ? "selected" : ""}>
                    <img src={kidsIcon} alt="" />Kids' wear
                </button>
            </div>

<div className="Display">
<div className="Des">
    <h3>Casual Collection</h3>
    <p>Discover our versatile men's casual wear collection, where comfort meets contemporary fashion.</p>
    {category && <LindaSlider products={getProducts().filter(item => item.type === "Casual")} cartColor='white' />}
    </div>

<div className="Des">
    <h3>Formal Elegance</h3>
    <p>Explore timeless elegance with our Formal Elegance collection, featuring refined pieces for a polished look.</p>
    {category && <LindaSlider products={getProducts().filter(item => item.type === "Formal")} cartColor='white' />}
    </div>


<div className="Des">
    <h3>Active Lifestyle</h3>
    <p>Embrace an active lifestyle with our performance-driven men's wear, designed for comfort and flexibility.</p>
    {category && <LindaSlider products={getProducts().filter(item => item.type === "Party")} cartColor='white' />}
    </div>

        </div>
        </div>
    );
}

export default ProductsPage;