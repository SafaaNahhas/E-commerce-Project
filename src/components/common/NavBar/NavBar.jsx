import { useState, useEffect } from 'react';
import NavLink from './NavLink';
import './Navbar.css';
import Logo from './Logo';
import MenuButton from './MenuButton';
import CartAndSupportButtons from './CartAndSupportButtons';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleCloseMenu = () => {
    setIsMenuOpen(false);
    };
    useEffect(() => {
    const handleResize = () => {
        if (window.innerWidth > 670 && isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);
    return (
        <nav className="navbar-container">
            <div className="navbar-links-left">
                <NavLink to="/" text="Home" />
                <NavLink to="/products" text="Products"  />
                {/* <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/products" className="nav-link">Products</NavLink> */}
            </div>
            <div className="navbar-logo">
                <Logo />
            </div>
            <div className="navbar-links-right">
                <CartAndSupportButtons />
                <div className="menu-button-container">
                    <MenuButton onClick={handleMenuClick} />
                </div>
            </div>
            {isMenuOpen && (
                <div className="dropdown-menu">
                    <NavLink to="/" text="Home" onClick={handleCloseMenu}/>
                    <NavLink to="/products" text="Products"  onClick={handleCloseMenu}/>
                    <CartAndSupportButtons isInDropdown={true}  onClick={handleCloseMenu}/>
                </div>
            )}
        </nav>
    );
    
};

export default Navbar;