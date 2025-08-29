
import { FaPhone } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import "./AS_ActionBtn.css";

export default function AS_ActionBtn({
    label = "Click Me",
    filled = false,        
    icon = null,          
    onClick,
    type = "button",
    className = "",
}) {
    const classes = [
        "As-btn",
        filled ? "As-btn--filled" : "As-btn--outline",
        className,
    ].filter(Boolean).join(" ");

    return (
        <button type={type} className={classes} onClick={onClick}>
            {icon === "phone" && <FaPhone className="As-btn-icon" aria-hidden="true" />}
            <span className="As-btn-label">{label}</span>
            {icon === "arrow" && <FaArrowRightLong className="As-btn-icon" aria-hidden="false" />}
        </button>
    );
}
