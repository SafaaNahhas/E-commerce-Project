import React, { useState } from "react";
import { useLocation } from 'react-router-dom'
import { Reviwes } from '../components/HomePage/Product_details/Reviews/Reviwes'
import './ProductDetail.css';
import FAQSection from '../components/ProductDetail/FAQSection/FAQSection';
import buyNowIcon from '/assets/img/product_detail_page/product_detail/buynow_Icon.png';
import cartIcon from '/assets/img/product_detail_page/product_detail/cart_Icon.png';
const ProductDetail = () => {
  const location = useLocation();
const product = location.state?.product;

const [selected, setSelected] = useState(null);

  const handleSelect = (btn) => setSelected(btn);

if (!product) {
  return <p>Product not found!</p>;
}
  return (
    <div>
      <div className="ProductDet">
        <div className="ImgCon"><img src={product.image} alt={product.name} /></div>
        <div className="Description">
        <div className="Top">
        <div className="TopLeft">
          <div className="FirstLine"><span>Men's Casual Outerwear</span>
          <div className="ManyLeft"><p>12 Left!</p></div>
          </div>
          <div className='ChangeD'>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
          
        </div>
        <div className="TopRight">
      <button
        className={selected === "buy" ? "active" : ""}
        onClick={() => handleSelect("buy")}
      >
        <img
        className="Sp"
          src={buyNowIcon}
          alt=""
          
        />
        Buy Now
      </button>

      <button
        className={selected === "cart" ? "active" : ""}
        onClick={() => handleSelect("cart")}
      >
        <img
          src={cartIcon}
          alt=""
        />
        Add To Cart
      </button>
    </div>
        </div>
        <div className="Middle">
          <div className="MiddleLeft">
            <h3>Material</h3>
            <p>High-Quality Denim (100% Cotton)</p>
            <h3>Color</h3>
            <div className="Colors">
              <div className='Black'></div>
              <div className='Red'></div>
              <div className='Yellow'></div>
            </div>
          </div>
          <div className="MiddleRight">
            <h3>Fit</h3>
            <p>Classic Fit</p>
            <h3>Sizes</h3>
            <div className="Sizes">
              <div className={selected === "S" ? "active" : ""}
              onClick={() => handleSelect("S")}>S</div>
              <div className={selected === "M" ? "active" : ""}
              onClick={() => handleSelect("M")}>M</div>
              <div className={selected === "L" ? "active" : ""}
              onClick={() => handleSelect("L")}>L</div>
              <div className={selected === "XL" ? "active" : ""}
              onClick={() => handleSelect("XL")}>XL</div>
              <div className={selected === "XXL" ? "active" : ""}
              onClick={() => handleSelect("XXL")}>XXL</div>
            </div>
          </div>
        </div>
        <div className="ShippingInfo">
          <h3>Shipping Information</h3>
          <ul>
            <li>Standard shipping: <span> 3-5 business days</span></li>
            <li><p>Express shipping options available at checkout</p></li>
          </ul>
        </div>
        <div className="Features">
          <h3>Features</h3>
          <ul>
            <li><p>Distressed detailing for a rugged look</p></li>
            <li><p>Button-up front closure with engraved metal buttons</p></li>
            <li><p>Two side pockets for added functionality</p></li>
            <li><p>Adjustable buttoned cuffs for a personalized fit</p></li>
            <li><p>Back waist tabs for customizable styling</p></li>
          </ul>
        </div>
      </div>
    </div>

    <Reviwes/>
    <FAQSection/>
    </div>
  )
}

export default ProductDetail