import logoImage from '/assets/img/navbar/Logo.svg'; 
import './Logo.css';

const Logo = () => {
    return (
        <img src={logoImage} alt="Klothink Logo" className="logo" />
    );
};

export default Logo;