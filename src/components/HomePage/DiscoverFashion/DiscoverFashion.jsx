import React, { useState } from "react";
import "./DiscoverFashion.css";
import LindaSlider from "../LindaSlider/LindaSlider";

import performanceJacket from "/assets/img/Products_Page/Men’s_wear/Active_Lifestyle/Performance_Jacket.png";
import highPerformanceLeggings from "/assets/img/Products_Page/Men’s_wear/Active_Lifestyle/High_Performance_Leggings.png";
import lightweightRunningShoes from "/assets/img/Products_Page/Men’s_wear/Active_Lifestyle/Lightweight_Running_Shoes.png";
import quickDryAthleticShorts from "/assets/img/Products_Page/Men’s_wear/Active_Lifestyle/Quick_Dry_Athletic_Shorts.png";

// Men's Wear - Formal Elegance
import blackFrenchCuffShirt from "/assets/img/Products_Page/Men’s_wear/Formal_Elegance/Black_French_Cuff Shirt.png";
import blackLeatherOxfordShoes from "/assets/img/Products_Page/Men’s_wear/Formal_Elegance/Black_Leather_Oxford_Shoes.png";
import classicBlackLeatherBelt from "/assets/img/Products_Page/Men’s_wear/Formal_Elegance/Classic_Black_Leather_Belt.png";
import classicCharcoalSuit from "/assets/img/Products_Page/Men’s_wear/Formal_Elegance/Classic_Charcoal_Suit.png";

// Men's Wear - Casual Collection
import chinoPants from "/assets/img/Products_Page/Men’s_wear/Casual_Collection/Chino Pants.png";
import classicDenimJeans from "/assets/img/Products_Page/Men’s_wear/Casual_Collection/Classic Denim Jeans.png";
import classicPoloShirt from "/assets/img/Products_Page/Men’s_wear/Casual_Collection/Classic Polo Shirt.png";
import cozyComfortHoodie from "/assets/img/Products_Page/Men’s_wear/Casual_Collection/Cozy Comfort Hoodie.png";

// Women's Wear & Kid's Wear
import summerDress from "/assets/img/Home_Page/discover_fashion/ClassicPoloShirt.png";
import elegantGown from "/assets/img/Home_Page/discover_fashion/ClassicPoloShirt.png";
import partyHeels from "/assets/img/Home_Page/discover_fashion/CozyComfortHoodie.png";
import kidsTshirt from "/assets/img/Home_Page/discover_fashion/ClassicDenimJeans.png";
import schoolUniform from "/assets/img/Home_Page/discover_fashion/CozyComfortHoodie.png";
import partyDress from "/assets/img/Home_Page/discover_fashion/CozyComfortHoodie.png";
import { Link } from "react-router-dom";

// =================== PRODUCT ARRAYS =================== //
const Menwear = [
    { id: 1, name: "Performance Jacket", price: "$49.99", image: performanceJacket, type: "Party" },
    { id: 2, name: "High_Performance Leggings", price: "$149.99", image: highPerformanceLeggings, type: "Party" },
    { id: 3, name: "Lightweight Running Shoes", price: "$89.99", image: lightweightRunningShoes, type: "Party" },
    { id: 4, name: "Quick Dry Athletic Shorts", price: "$39.99", image: quickDryAthleticShorts, type: "Party" },
    { id: 5, name: "Performance Jacket", price: "$49.99", image: performanceJacket, type: "Party" },
    { id: 6, name: "High Performance Leggings", price: "$149.99", image: highPerformanceLeggings, type: "Party" },
    { id: 7, name: "Lightweight Running Shoes", price: "$89.99", image: lightweightRunningShoes, type: "Party" },
    { id: 8, name: "Quick Dry Athletic Shorts", price: "$39.99", image: quickDryAthleticShorts, type: "Party" },

    { id: 9, name: "Casual Hoodie", price: "$39.99", image: blackFrenchCuffShirt, type: "Formal" },
    { id: 10, name: "Casual Hoodie", price: "$39.99", image: blackLeatherOxfordShoes, type: "Formal" },
    { id: 11, name: "Casual Hoodie", price: "$39.99", image: classicBlackLeatherBelt, type: "Formal" },
    { id: 12, name: "Casual Hoodie", price: "$39.99", image: classicCharcoalSuit, type: "Formal" },
    { id: 13, name: "Casual Hoodie", price: "$39.99", image: blackFrenchCuffShirt, type: "Formal" },
    { id: 14, name: "Casual Hoodie", price: "$39.99", image: blackLeatherOxfordShoes, type: "Formal" },
    { id: 15, name: "Casual Hoodie", price: "$39.99", image: classicBlackLeatherBelt, type: "Formal" },
    { id: 16, name: "Casual Hoodie", price: "$39.99", image: classicCharcoalSuit, type: "Formal" },

    { id: 17, name: "Casual Hoodie", price: "$39.99", image: chinoPants, type: "Casual" },
    { id: 18, name: "Casual Hoodie", price: "$39.99", image: classicDenimJeans, type: "Casual" },
    { id: 19, name: "Casual Hoodie", price: "$39.99", image: classicPoloShirt, type: "Casual" },
    { id: 20, name: "Casual Hoodie", price: "$39.99", image: cozyComfortHoodie, type: "Casual" },
    { id: 21, name: "Casual Hoodie", price: "$39.99", image: chinoPants, type: "Casual" },
    { id: 22, name: "Casual Hoodie", price: "$39.99", image: classicDenimJeans, type: "Casual" },
    { id: 23, name: "Casual Hoodie", price: "$39.99", image: classicPoloShirt, type: "Casual" },
    { id: 24, name: "Casual Hoodie", price: "$39.99", image: cozyComfortHoodie, type: "Casual" },
];

const Womenwear = [
{ id: 1, name: "Summer Dress", price: "$59.99", image: summerDress, type: "Casual" },
{ id: 2, name: "Elegant Gown", price: "$199.99", image: elegantGown, type: "Formal" },
{ id: 3, name: "Party Heels", price: "$79.99", image: partyHeels, type: "Party" }
];

const Kidswear = [
{ id: 1, name: "Kids T-shirt", price: "$19.99", image: kidsTshirt, type: "Casual" },
{ id: 2, name: "School Uniform", price: "$49.99", image: schoolUniform, type: "Formal" },
{ id: 3, name: "Party Dress", price: "$59.99", image: partyDress, type: "Party" }
];

const All = [...Menwear, ...Womenwear, ...Kidswear]; // merge everything

// =================== MAIN COMPONENT =================== //
function DiscoverFashion() {
const [category, setCategory] = useState("All");
const [subCategory, setSubCategory] = useState("");

const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory);
    setSubCategory(""); // reset subCategory when switching category
};

const handleSubCategoryClick = (selectedSubCategory) => {
    setSubCategory(selectedSubCategory);
};

  // =================== PRODUCT FILTER =================== //
const getProducts = () => {
    let products = [];

    if (category === "Menwear") products = Menwear;
    else if (category === "Womenwear") products = Womenwear;
    else if (category === "Kidswear") products = Kidswear;
    else if (category === "All") products = All;
    else return []; // nothing selected yet

    // If subCategory is chosen → filter by it
    if (subCategory) {
    return products.filter((item) => item.type === subCategory);
    }

    // If no subCategory → return all for that category
    return products;
};

return (
    <div className="section">
        <div className="DiscoverFashionHeader">
        <div className="left">
            <div className="Title">
            <h1>Discover Fashion.</h1>
            <span>Products</span>
            </div>
        <p>
            Dive into a world of fashion innovation at Klothink. Our carefully
            curated collections bring together the latest trends and timeless
            classics, ensuring you find the perfect pieces for every occasion.
        </p>
        </div>
        <Link to="/Products">
            <button>View All Products</button>
        </Link>
    </div>

      {/* CATEGORY & SUBCATEGORY BUTTONS */}
    <div className="Choose">
        <div className="button-group">
            <div className="categories">
            <button onClick={() => handleCategoryClick("All")} className={category === "All" ? "selected" : ""}>
            All
            </button>
            <button onClick={() => handleCategoryClick("Menwear")} className={category === "Menwear" ? "selected" : ""}>
            Menwear
            </button>
            <button onClick={() => handleCategoryClick("Womenwear")} className={category === "Womenwear" ? "selected" : ""}>
            Womenwear
            </button>
            <button onClick={() => handleCategoryClick("Kidswear")} className={category === "Kidswear" ? "selected" : ""}>
            Kidswear
            </button>
        </div>
        <div className="sub-categories">
            {category && (
            <>
                <button onClick={() => handleSubCategoryClick("Casual")} className={subCategory === "Casual" ? "select" : ""}>
                Casual
                </button>
                <button onClick={() => handleSubCategoryClick("Formal")} className={subCategory === "Formal" ? "select" : ""}>
                Formal
                </button>
                <button onClick={() => handleSubCategoryClick("Party")} className={subCategory === "Party" ? "select" : ""}>
                Party
                </button>
            </>
            )}
        </div>
        </div>
    </div>

      {/* SLIDER */}
    {category && <LindaSlider products={getProducts()} cartColor='' />}
    </div>
);
}

export default DiscoverFashion;