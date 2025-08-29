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
import { Link } from "react-router-dom";

// =================== PRODUCT ARRAYS =================== //
const Menwear = [
    { id: 1, name: "Jacket", price: "$49.99", image: performanceJacket, type: "Party" },
    { id: 2, name: "Leggings", price: "$149.99", image: highPerformanceLeggings, type: "Party" },
    { id: 3, name: "Running Shoes", price: "$89.99", image: lightweightRunningShoes, type: "Party" },
    { id: 4, name: "Athletic Shorts", price: "$39.99", image: quickDryAthleticShorts, type: "Party" },
    { id: 5, name: "Jacket", price: "$49.99", image: performanceJacket, type: "Party" },
    { id: 6, name: "Leggings", price: "$149.99", image: highPerformanceLeggings, type: "Party" },
    { id: 7, name: " Running Shoes", price: "$89.99", image: lightweightRunningShoes, type: "Party" },
    { id: 8, name: " Athletic Shorts", price: "$39.99", image: quickDryAthleticShorts, type: "Party" },

    { id: 9, name: "Formal Classy", price: "$39.99", image: blackFrenchCuffShirt, type: "Formal" },
    { id: 10, name: "Formal Classy", price: "$39.99", image: blackLeatherOxfordShoes, type: "Formal" },
    { id: 11, name: "Formal Classy", price: "$59.99", image: classicBlackLeatherBelt, type: "Formal" },
    { id: 12, name: "Formal Classy", price: "$39.99", image: classicCharcoalSuit, type: "Formal" },
    { id: 13, name: "Formal Classy", price: "$9.99", image: blackFrenchCuffShirt, type: "Formal" },
    { id: 14, name: "Formal Classy", price: "$39.99", image: blackLeatherOxfordShoes, type: "Formal" },
    { id: 15, name: "Formal Classy", price: "$10.99", image: classicBlackLeatherBelt, type: "Formal" },
    { id: 16, name: "Formal Classy", price: "$39.99", image: classicCharcoalSuit, type: "Formal" },

    { id: 17, name: "Everyday Wear", price: "$39.99", image: chinoPants, type: "Casual" },
    { id: 18, name: "Everyday Wear", price: "$89.99", image: classicDenimJeans, type: "Casual" },
    { id: 19, name: "Everyday Wear", price: "$31.99", image: classicPoloShirt, type: "Casual" },
    { id: 20, name: "Everyday Wear", price: "$39", image: cozyComfortHoodie, type: "Casual" },
    { id: 21, name: "Everyday Wear", price: "$20.99", image: chinoPants, type: "Casual" },
    { id: 22, name: "Everyday Wear", price: "$39.99", image: classicDenimJeans, type: "Casual" },
    { id: 23, name: "Everyday Wear", price: "$39.99", image: classicPoloShirt, type: "Casual" },
    { id: 24, name: "Everyday Wear", price: "$39.99", image: cozyComfortHoodie, type: "Casual" },
];

const Womenwear = [
    { id: 1, name: "Classy Suit", price: "$59.99", image: womenFormal1, type: "Formal" },
    { id: 2, name: "Elegant Gown", price: "$199.99", image: womenFormal2, type: "Formal" },
    { id: 3, name: "Formal Suit", price: "$79.99", image: womenFormal3, type: "Formal" },
    { id: 4, name: "Formal Suit", price: "$79.99", image: womenFormal4, type: "Formal" },
    { id: 5, name: "Formal Suit", price: "$79.99", image: womenFormal5, type: "Formal" },
    { id: 6, name: "Formal Suit", price: "$79.99", image: womenFormal6, type: "Formal" },

    { id: 7, name: "Casual Daily", price: "$79.99", image: womenCasual1, type: "Casual" },
    { id: 8, name: "Casual Daily", price: "$79.99", image: womenCasual2, type: "Casual" },
    { id: 9, name: "Casual Daily", price: "$79.99", image: womenCasual3, type: "Casual" },
    { id: 10, name: "Casual Daily", price: "$79.99", image:womenCasual4, type: "Casual" },
    { id: 11, name: "Casual Daily", price: "$79.99", image: womenCasual5, type: "Casual" },
    { id: 12, name: "Casual Daily", price: "$79.99", image: womenCasual6, type: "Casual" },

    { id: 13, name: "Sporty", price: "$79.99", image: womenActive1, type: "Party" },
    { id: 14, name: "Sporty", price: "$79.99", image: womenActive2, type: "Party" },
    { id: 15, name: "Sporty", price: "$79.99", image: womenActive3, type: "Party" },
    { id: 16, name: "Sporty", price: "$79.99", image: womenActive4, type: "Party" },
    { id: 17, name: "Sporty", price: "$79.99", image: womenActive5, type: "Party" },
    { id: 18, name: "Sporty", price: "$79.99", image: womenActive6, type: "Party" },

];

const Kidswear = [
    { id: 1, name: "Kids T-shirt", price: "$19.99", image: kidsActive1, type: "Party" },
    { id: 2, name: "School Uniform", price: "$49.99", image: kidsActive2, type: "Party" },
    { id: 3, name: "Sporty Kids", price: "$59.99", image: kidsActive3, type: "Party" },
    { id: 4, name: "Sporty Kids", price: "$59.99", image: kidsActive4, type: "Party" },
    { id: 5, name: "Sporty Kids", price: "$59.99", image: kidsActive5, type: "Party" },
    { id: 6, name: "Sporty Kids", price: "$59.99", image: kidsActive6, type: "Party" },
    { id: 7, name: "Daily Clothes", price: "$59.99", image: kidsCasual1, type: "Casual" },
    { id: 8, name: "Daily Clothes", price: "$59.99", image: kidsCasual2, type: "Casual" },
    { id: 9, name: "Daily Clothes", price: "$59.99", image: kidsCasual3, type: "Casual" },
    { id: 10, name: "Daily Clothes", price: "$59.99", image: kidsCasual4, type: "Casual" },
    { id: 11, name: "Daily Clothes", price: "$59.99", image: kidsCasual5, type: "Casual" },
    { id: 12, name: "Daily Clothes", price: "$59.99", image: kidsCasual6, type: "Casual" },
    { id: 13, name: "Formal Kids", price: "$59.99", image: kidsFormal1, type: "Formal" },
    { id: 14, name: "Formal Kids", price: "$59.99", image: kidsFormal2, type: "Formal" },
    { id: 15, name: "Formal Kids", price: "$59.99", image: kidsFormal3, type: "Formal" },
    { id: 16, name: "Formal Kids", price: "$59.99", image:kidsFormal4, type: "Formal" },
    { id: 17, name: "Formal Kids", price: "$59.99", image: kidsFormal5, type: "Formal" },
    { id: 18, name: "Formal Kids", price: "$59.99", image: kidsFormal6, type: "Formal" },

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