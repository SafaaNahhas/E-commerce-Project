<<<<<<< HEAD
import React from 'react'
import { useLocation } from 'react-router-dom'
import './ProductDetail.css';

const ProductDetail = () => {
  const location = useLocation();
const product = location.state?.product;

if (!product) {
  return <p>Product not found!</p>;
}
  return (
    <div>
      <div className="ProductDet">
        <img src={product.image} alt="" />
        <div className="Description">
        <div className="Top">
        <div className="TopLeft">
          <span>Men's Casual Outerwear</span>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
        <div className="TopRight">
          <button><img src="/assets/img/product_detail_page/product_detail/buynow_Icon.png" alt="" />Buy Now</button>
          <button><img src="/assets/img/product_detail_page/product_detail/cart_Icon.png" alt="" />Add To Cart</button>
        </div>
        </div>
        <div className="Middle">
          <div className="MiddleLeft">
            <h3>Material</h3>
            <p>High Quality</p>
            <h3>Color</h3>
            <div className="Colors">
              <div></div>
              <div></div>
              <div></div>
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
            <li>Standard shipping: <span>3-5 business days</span></li>
            <li>Express shipping options available at checkout</li>
          </ul>
        </div>
        <div className="Features">
          <h3>Features</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductDetail
=======
import React from 'react'
import { useLocation } from 'react-router-dom'
import './ProductDetail.css';

const ProductDetail = () => {
  const location = useLocation();
const product = location.state?.product;

if (!product) {
  return <p>Product not found!</p>;
}
  return (
    <div>
      <div className="ProductDet">
        <img src={product.image} alt="" />
        <div className="Description">
        <div className="Top">
        <div className="TopLeft">
          <span>Men's Casual Outerwear</span>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
        <div className="TopRight">
          <button><img src="/assets/img/product_detail_page/product_detail/buynow_Icon.png" alt="" />Buy Now</button>
          <button><img src="/assets/img/product_detail_page/product_detail/cart_Icon.png" alt="" />Add To Cart</button>
        </div>
        </div>
        <div className="Middle">
          <div className="MiddleLeft">
            <h3>Material</h3>
            <p>High Quality</p>
            <h3>Color</h3>
            <div className="Colors">
              <div></div>
              <div></div>
              <div></div>
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
            <li>Standard shipping: <span>3-5 business days</span></li>
            <li>Express shipping options available at checkout</li>
          </ul>
        </div>
        <div className="Features">
          <h3>Features</h3>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductDetail
>>>>>>> main
