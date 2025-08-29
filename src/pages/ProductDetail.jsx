import React from 'react'
import { useLocation } from 'react-router-dom'
import { Reviwes } from '../components/HomePage/Product_details/Reviews/Reviwes'
import './ProductDetail.css';
import FAQSection from '../components/ProductDetail/FAQSection/FAQSection';

const ProductDetail = () => {
  const location = useLocation();
const product = location.state?.product;

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
          <button><img src="/assets/img/product_detail_page/product_detail/buynow_Icon.png" alt="" />Buy Now</button>
          <button><img src="/assets/img/product_detail_page/product_detail/cart_Icon.png" alt="" />Add To Cart</button>
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
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
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