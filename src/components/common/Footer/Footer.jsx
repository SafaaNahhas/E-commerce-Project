import './Footer.css';
function Footer() {
    return (
        <div className='Footer'>
            <div className="FooterTop">
                <div className="FooterForm">
                    <img src="/public/assets/img/footer/logo.svg" alt="" />
                    <form action="">
                        <input type="text" placeholder='Enter Your Email'/>
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                <div className="FooterRight">
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
        </div>
    )
    
}

export default Footer;