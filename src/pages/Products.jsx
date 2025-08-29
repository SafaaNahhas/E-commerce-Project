import React, { useState } from 'react'; // Import useState
import './Products.css';
import LindaSlider from "../components/HomePage/LindaSlider/LindaSlider";


const Menwear = [
    { id: 1, name: "Performance Jacket", price: "$49.99", image: "/assets/img/Products_Page/Men’s_wear/Active_Lifestyle/Performance_Jacket.png", type: "Party" },
    { id: 2, name: "High_Performance Leggings", price: "$149.99", image: "/assets/img/Products_Page/Men’s_wear/Active_Lifestyle/High_Performance_Leggings.png", type: "Party" },
    { id: 3, name: "Lightweight Running Shoes", price: "$89.99", image: "/assets/img/Products_Page/Men’s_wear/Active_Lifestyle/Lightweight_Running_Shoes.png", type: "Party" },
    { id: 4, name: "Quick Dry Athletic Shorts", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Active_Lifestyle/Quick_Dry_Athletic_Shorts.png", type: "Party" },
    { id: 5, name: "Performance Jacket", price: "$49.99", image: "/assets/img/Products_Page/Men’s_wear/Active_Lifestyle/Performance_Jacket.png", type: "Party" },
    { id: 6, name: "High Performance Leggings", price: "$149.99", image: "/assets/img/Products_Page/Men’s_wear/Active_Lifestyle/High_Performance_Leggings.png", type: "Party" },
    { id: 7, name: "Lightweight Running Shoes", price: "$89.99", image: "/assets/img/Products_Page/Men’s_wear/Active_Lifestyle/Lightweight_Running_Shoes.png", type: "Party" },
    { id: 8, name: "Quick Dry Athletic Shorts", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Active_Lifestyle/Quick_Dry_Athletic_Shorts.png", type: "Party" },

    { id: 9, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Formal_Elegance/Black_French_Cuff Shirt.png", type: "Formal" },
    { id: 10, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Formal_Elegance/Black_Leather_Oxford_Shoes.png", type: "Formal" },
    { id: 11, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Formal_Elegance/Classic_Black_Leather_Belt.png", type: "Formal" },
    { id: 12, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Formal_Elegance/Classic_Charcoal_Suit.png", type: "Formal" },
    { id: 13, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Formal_Elegance/Black_French_Cuff Shirt.png", type: "Formal" },
    { id: 14, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Formal_Elegance/Black_Leather_Oxford_Shoes.png", type: "Formal" },
    { id: 15, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Formal_Elegance/Classic_Black_Leather_Belt.png", type: "Formal" },
    { id: 16, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Formal_Elegance/Classic_Charcoal_Suit.png", type: "Formal" },

    { id: 17, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Casual_Collection/Chino Pants.png", type: "Casual" },
    { id: 18, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Casual_Collection/Classic Denim Jeans.png", type: "Casual" },
    { id: 19, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Casual_Collection/Classic Polo Shirt.png", type: "Casual" },
    { id: 20, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Casual_Collection/Cozy Comfort Hoodie.png", type: "Casual" },
    { id: 21, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Casual_Collection/Chino Pants.png", type: "Casual" },
    { id: 22, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Casual_Collection/Classic Denim Jeans.png", type: "Casual" },
    { id: 23, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Casual_Collection/Classic Polo Shirt.png", type: "Casual" },
    { id: 24, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Products_Page/Men’s_wear/Casual_Collection/Cozy Comfort Hoodie.png", type: "Casual" },
];

const Womenwear = [
    { id: 1, name: "Summer Dress", price: "$59.99", image: "/assets/img/Products_Page/Women’s_wear/Formal1.png", type: "Formal" },
    { id: 2, name: "Elegant Gown", price: "$199.99", image: "/assets/img/Products_Page/Women’s_wear/Formal2.png", type: "Formal" },
    { id: 3, name: "Party Heels", price: "$79.99", image: "/assets/img/Products_Page/Women’s_wear/Formal3.png", type: "Formal" },
    { id: 4, name: "Party Heels", price: "$79.99", image: "/assets/img/Products_Page/Women’s_wear/Formal4.png", type: "Formal" },
    { id: 5, name: "Party Heels", price: "$79.99", image: "/assets/img/Products_Page/Women’s_wear/Formal5.png", type: "Formal" },
    { id: 6, name: "Party Heels", price: "$79.99", image: "/assets/img/Products_Page/Women’s_wear/Formal6.png", type: "Formal" },
    { id: 7, name: "Party Heels", price: "$79.99", image: "/assets/img/Products_Page/Women’s_wear/Casual1.png", type: "Casual" },
    { id: 8, name: "Party Heels", price: "$79.99", image: "/assets/img/Products_Page/Women’s_wear/Casual2.png", type: "Casual" },
    { id: 9, name: "Party Heels", price: "$79.99", image: "/assets/img/Products_Page/Women’s_wear/Casual3.png", type: "Casual" },
    { id: 10, name: "Party Heels", price: "$79.99", image: "/assets/img/Products_Page/Women’s_wear/Casual4.png", type: "Casual" },
    { id: 11, name: "Party Heels", price: "$79.99", image: "/assets/img/Products_Page/Women’s_wear/Casual5.png", type: "Casual" },
    { id: 12, name: "Party Heels", price: "$79.99", image: "/assets/img/Products_Page/Women’s_wear/Casual6.png", type: "Casual" },
    { id: 13, name: "Party Heels", price: "$79.99", image: "/assets/img/Products_Page/Women’s_wear/Active1.png", type: "Party" },
    { id: 14, name: "Party Heels", price: "$79.99", image: "/assets/img/Products_Page/Women’s_wear/Active2.png", type: "Party" },
    { id: 15, name: "Party Heels", price: "$79.99", image: "/assets/img/Products_Page/Women’s_wear/Active3.png", type: "Party" },
    { id: 16, name: "Party Heels", price: "$79.99", image: "/assets/img/Products_Page/Women’s_wear/Active4.png", type: "Party" },
    { id: 17, name: "Party Heels", price: "$79.99", image: "/assets/img/Products_Page/Women’s_wear/Active5.png", type: "Party" },
    { id: 18, name: "Party Heels", price: "$79.99", image: "/assets/img/Products_Page/Women’s_wear/Active6.png", type: "Party" },

];

const Kidswear = [
    { id: 1, name: "Kids T-shirt", price: "$19.99", image: "/assets/img/Products_Page/Kids_wear/Active1.png", type: "Party" },
    { id: 2, name: "School Uniform", price: "$49.99", image: "/assets/img/Products_Page/Kids_wear/Active2.png", type: "Party" },
    { id: 3, name: "Party Dress", price: "$59.99", image: "/assets/img/Products_Page/Kids_wear/Active3.png", type: "Party" },
    { id: 4, name: "Party Dress", price: "$59.99", image: "/assets/img/Products_Page/Kids_wear/Active4.png", type: "Party" },
    { id: 5, name: "Party Dress", price: "$59.99", image: "/assets/img/Products_Page/Kids_wear/Active5.png", type: "Party" },
    { id: 6, name: "Party Dress", price: "$59.99", image: "/assets/img/Products_Page/Kids_wear/Active6.png", type: "Party" },
    { id: 7, name: "Party Dress", price: "$59.99", image: "/assets/img/Products_Page/Kids_wear/Casual1.png", type: "Casual" },
    { id: 8, name: "Party Dress", price: "$59.99", image: "/assets/img/Products_Page/Kids_wear/Casual2.png", type: "Casual" },
    { id: 9, name: "Party Dress", price: "$59.99", image: "/assets/img/Products_Page/Kids_wear/Casual3.png", type: "Casual" },
    { id: 10, name: "Party Dress", price: "$59.99", image: "/assets/img/Products_Page/Kids_wear/Casual4.png", type: "Casual" },
    { id: 11, name: "Party Dress", price: "$59.99", image: "/assets/img/Products_Page/Kids_wear/Casual5.png", type: "Casual" },
    { id: 12, name: "Party Dress", price: "$59.99", image: "/assets/img/Products_Page/Kids_wear/Casual6.png", type: "Casual" },
    { id: 13, name: "Party Dress", price: "$59.99", image: "/assets/img/Products_Page/Kids_wear/Formal1.png", type: "Formal" },
    { id: 14, name: "Party Dress", price: "$59.99", image: "/assets/img/Products_Page/Kids_wear/Formal2.png", type: "Formal" },
    { id: 15, name: "Party Dress", price: "$59.99", image: "/assets/img/Products_Page/Kids_wear/Formal3.png", type: "Formal" },
    { id: 16, name: "Party Dress", price: "$59.99", image: "/assets/img/Products_Page/Kids_wear/Formal4.png", type: "Formal" },
    { id: 17, name: "Party Dress", price: "$59.99", image: "/assets/img/Products_Page/Kids_wear/Formal5.png", type: "Formal" },
    { id: 18, name: "Party Dress", price: "$59.99", image: "/assets/img/Products_Page/Kids_wear/Formal6.png", type: "Formal" },

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
                    <img src="/assets/img/Products_Page/Men’s_wear/Men’s_wear_Icon.png" alt="" />Men's wear
                </button>
                <button onClick={() => handleCategoryClick("Womenwear")} className={category === "Womenwear" ? "selected" : ""}>
                    <img src="/assets/img/Products_Page/Women’s_wear/Women’s_wear_Icon.png" alt="" />Women's wear
                </button>
                <button onClick={() => handleCategoryClick("Kidswear")} className={category === "Kidswear" ? "selected" : ""}>
                    <img src="/assets/img/Products_Page/Kids_wear/Kid’s_wear_Icon.png" alt="" />Kids' wear
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