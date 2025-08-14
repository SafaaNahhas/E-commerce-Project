import './Footer.css';
function Footer() {
    return (
        <div className='Footer'>
            <div className="FooterTop">
                <div className="FooterForm">
                    <div className="SmallScreens">
                    <img className='Logo' src="/public/assets/img/footer/logo.svg" alt="" />
                    <div className="Icons">
                    <img src="/public/assets/img/footer/FB_Btn.png" alt="FacebookIcon" />
                    <img src="/public/assets/img/footer/TW_Btn.png" alt="TwitterIcon" />
                    <img src="/public/assets/img/footer/Li_Btn.png" alt="LinkedInIcon" />
                </div>
                </div>
                <div>
                    <form action="">
                        <input type="text" placeholder='Enter Your Email'/>
                        <button type="submit">Subscribe</button>
                    </form>
                    </div>
                </div>
                <div className="FooterRight">
                    <div>
                        <p>Home</p>
                        <p>Products</p>
                        <p>Contact</p>
                    </div>
                    <ul>
                        <li><h6>Home</h6></li>
                        <li><p>Features</p></li>
                        <li><p>Popular Products</p></li>
                        <li><p>Testimonials</p></li>
                        <li><p>FAQ</p></li>
                    </ul>
                    <ul>
                        <li><h6>Menswear</h6></li>
                        <li><p>Casual</p></li>
                        <li><p>Formal</p></li>
                        <li><p>Party</p></li>
                        <li><p>Business</p></li>
                    </ul>
                    <ul>
                        <li><h6>Womenswear</h6></li>
                        <li><p>Casual</p></li>
                        <li><p>Formal</p></li>
                        <li><p>Party</p></li>
                        <li><p>Business</p></li>
                    </ul>
                    <ul>
                        <li><h6>Kidswear</h6></li>
                        <li><p>Casual</p></li>
                        <li><p>Formal</p></li>
                        <li><p>Party</p></li>
                    </ul>
                </div>
            </div>
            <div className="FooterBottom">
                <div className="left">
                    <p>Terms & Conditions</p>
                    <span>Privacy Policy</span>
                </div>
                <div className="middle">
                    <img src="/public/assets/img/footer/FB_Btn.png" alt="FacebookIcon" />
                    <img src="/public/assets/img/footer/TW_Btn.png" alt="TwitterIcon" />
                    <img src="/public/assets/img/footer/Li_Btn.png" alt="LinkedInIcon" />
                </div>
                <p className='right'>© 2024 Klothink. All rights reserved.</p>
            </div>
        </div>
    )
    
}

export default Footer;