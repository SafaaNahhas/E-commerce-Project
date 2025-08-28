import { Link } from 'react-router-dom';
import cartIcon from '/assets/img/navbar/cartBtn.png'; 
import './CartAndSupportButtons.css';

const CartAndSupportButtons = ({ isInDropdown = false , onLinkClick}) => {
    return (
        <div className={`cart-and-support ${isInDropdown ? 'in-dropdown' : ''}`}>
            {!isInDropdown && (
                <Link to="/cart" className="SN-cart-button">
                    <img src={cartIcon} alt="Cart" className="SN-cart-icon" />
                </Link>
            )}
            <Link 
                to="/support" 
                className={`support-button ${isInDropdown ? 'dropdown-support-button' : ''}` }  onClick={onLinkClick}
            >
                Contact Support
            </Link>
        </div>
    );
};

export default CartAndSupportButtons;