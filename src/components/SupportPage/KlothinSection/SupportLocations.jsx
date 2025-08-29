import "./SupportLocations.css";
import AS_ActionBtn from "./AS_ActionBtn";

function AS_LocationCard({ title, address }) {
    return (
        <div className="AS-loc-card">
            <div className="AS-loc-card-head">
                <h4 className="AS-loc-card-title">{title}</h4>
                <p className="AS-loc-card-addr">{address}</p>
            </div>
            <div className="AS-loc-card-actions">
                <div className="AS-loc-card-actionWrap-left">
                    <AS_ActionBtn label="Call Now" icon="phone" filled={false} />
                </div>
                <div className="AS-loc-card-actionWrap-right">
                    <AS_ActionBtn label="Get Direction" icon="arrow" filled={false} />
                </div>
            </div>
        </div>
    );
}

export default function SupportLocations() {
    return (
        <div className="AS-loc">
            <div className="AS-loc-top">
                <span className="AS-loc-subtitle">Office Locations</span>
            </div>

            <div className="AS-loc-cardsBox">
                <AS_LocationCard
                    title="New York City, USA"
                    address="123 Fashion Avenue, Suite 456, New York, NY 10001"
                />
                <AS_LocationCard
                    title="Paris, France"
                    address="789 Rue de la Mode, Paris 75001"
                />
                <AS_LocationCard
                    title="Tokyo, Japan"
                    address="456 Shibuya Fashion Street, Shibuya-ku, Tokyo"
                />
            </div>
        </div>
    );
}
