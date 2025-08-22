import React, { useState } from "react";
import "./DiscoverFashion.css";
import LindaSlider from "../LindaSlider/LindaSlider";

// =================== PRODUCT ARRAYS =================== //
const Menwear = [
{ id: 1, name: "Classic Denim Jeans", price: "$49.99", image: "/assets/img/Home_Page/discover_fashion/Pants.png", type: "Casual" },
{ id: 2, name: "Business Suit", price: "$149.99", image: "/assets/img/Home_Page/discover_fashion/ClassicDenimJeans.png", type: "Formal" },
{ id: 3, name: "Party Blazer", price: "$89.99", image: "/assets/img/Home_Page/discover_fashion/ClassicDenimJeans.png", type: "Party" },
{ id: 4, name: "Casual Hoodie", price: "$39.99", image: "/assets/img/Home_Page/discover_fashion/ClassicDenimJeans.png", type: "Casual" }
];

const Womenwear = [
{ id: 1, name: "Summer Dress", price: "$59.99", image: "/assets/img/Home_Page/discover_fashion/ClassicPoloShirt.png", type: "Casual" },
{ id: 2, name: "Elegant Gown", price: "$199.99", image: "/assets/img/Home_Page/discover_fashion/ClassicPoloShirt.png", type: "Formal" },
{ id: 3, name: "Party Heels", price: "$79.99", image: "/assets/img/Home_Page/discover_fashion/CozyComfortHoodie.png", type: "Party" }
];

const Kidswear = [
{ id: 1, name: "Kids T-shirt", price: "$19.99", image: "/assets/img/Home_Page/discover_fashion/ClassicDenimJeans.png", type: "Casual" },
{ id: 2, name: "School Uniform", price: "$49.99", image: "/assets/img/Home_Page/discover_fashion/CozyComfortHoodie.png", type: "Formal" },
{ id: 3, name: "Party Dress", price: "$59.99", image: "/assets/img/Home_Page/discover_fashion/CozyComfortHoodie.png", type: "Party" }
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
        <a href="/Products"><button>View All Products</button></a>
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
    {category && <LindaSlider products={getProducts()} />}
    </div>
);
}

export default DiscoverFashion;