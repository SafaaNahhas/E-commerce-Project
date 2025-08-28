import './TopBanner.css';
import arrowIcon from '/assets/img/TopBanner/arrowIcon.png';

const TopBanner = () => {
    return (
        <div className="SN-top-banner-container">
        <p className="SN-top-banner-text">
            Subscribe to our Newsletter For Latest Collections
        </p>
        <div className="SN-top-banner-arrow">
                <img src={arrowIcon} alt="Arrow" className="SN-arrow-icon" />
        </div>
        </div>
    );
};

export default TopBanner;