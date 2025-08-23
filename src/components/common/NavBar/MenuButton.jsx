// import './CartAndSupportButtons.css';
import './MenuButton.css'; 
import menuIcon from '/assets/img/navbar/navIcon.png'; 

const MenuButton = ({ onClick }) => {
    return (
        <button className="menu-button" onClick={onClick}>
        <img src={menuIcon} alt="Menu" className="menu-icon" />
        </button>
    );
};

export default MenuButton;