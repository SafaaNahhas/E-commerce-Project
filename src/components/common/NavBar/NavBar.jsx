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
        // TODO
        if (window.innerWidth > 920 && isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);
    return (
        <nav className="SN-navbar-container">
            <div className="SN-navbar-links-left">
                <NavLink to="/" text="Home" />
                <NavLink to="/products" text="Products"  />
                <NavLink to="/Dashboard" text="Dashboard" />
                {/* <NavLink to="/" className="SN-nav-link">Home</NavLink>
                <NavLink to="/products" className="SN-nav-link">Products</NavLink> */}
            </div>
            <div className="SN-navbar-logo">
                <Logo />
            </div>
            <div className="SN-navbar-links-right">
                <CartAndSupportButtons />
                <div className="SN-menu-button-container">
                    <MenuButton onClick={handleMenuClick} />
                </div>
            </div>
            {isMenuOpen && (
                <div className="SN-dropdown-menu">
                    <NavLink to="/" text="Home" onClick={handleCloseMenu}/>
                    <NavLink to="/products" text="Products"  onClick={handleCloseMenu}/>
                    <NavLink to="/Dashboard" text="Dashboard" onClick={handleCloseMenu} />
                    <CartAndSupportButtons isInDropdown={true}  onClick={handleCloseMenu}/>
                </div>
            )}
        </nav>
    );
    
};

export default Navbar;