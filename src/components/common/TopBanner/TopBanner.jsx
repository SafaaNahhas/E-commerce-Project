import './TopBanner.css';
import arrowIcon from '/assets/img/TopBanner/arrowIcon.png';

const TopBanner = () => {
    return (
        <div className="top-banner-container">
        <p className="top-banner-text">
            Subscribe to our Newsletter For Latest Collections
        </p>
        <div className="top-banner-arrow">
                <img src={arrowIcon} alt="Arrow" className="arrow-icon" />
        </div>
        </div>
    );
};

export default TopBanner;