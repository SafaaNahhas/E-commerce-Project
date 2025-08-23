import { NavLink as RouterNavLink } from 'react-router-dom';
import './NavLink.css';

const NavLink = ({ to, text , onClick }) => {
    return (
        <RouterNavLink to={to} className="nav-link" onClick={onClick}>
        {text}
        </RouterNavLink>
    );
};

export default NavLink;