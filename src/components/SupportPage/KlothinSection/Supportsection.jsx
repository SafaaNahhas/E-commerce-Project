
import Container from "../../common/Container/Container";
import "./Supportsection.css";
import SupportLocations from "./SupportLocations";

export default function Supportsection() {
    return (
        <section className="AS-support">
            <Container>
                <div className="AS-support-header">
                    <div className="AS-support-upper">
                        <div className="AS-support-intro">
                            <div className="AS-support-titleRow">
                                <div className="AS-maintitle-container">
                                    <h1 className="AS-support-maintitle">KLOTHINK SUPPORT.</h1>
                                </div>
                                <div className="As-badge-container">
                                    <span className="AS-support-badge">YOUR FASHION ALLY</span>
                                </div>
                            </div>
                            <p className="AS-support-desc">
                                24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction.
                            </p>
                        </div>

                        <div className="AS-support-infoCard">
                            <div className="AS-support-infoCol">
                                <div className="AS-support-infoLabel">
                                    <span >Email</span>
                                </div>
                                <div className="AS-support-infoValue">
                                    <span >support@klothink.com</span>
                                </div>
                            </div>

                            <span className="AS-support-sep" aria-hidden="true"></span>

                            <div className="AS-support-infoCol">
                                <div className="AS-support-infoLabel">
                                    <span >Call Us On</span>
                                </div>
                                <div className="AS-support-infoValue">
                                    <span >+1 (555) 123-4567</span>
                                </div>    
                            </div>

                            <span className="AS-support-sep" aria-hidden="true"></span>

                            <div className="AS-support-infoCol">
                                <div className="AS-support-infoLabel">
                                    <span >Working Hours</span>
                                </div>
                                <div className="AS-support-infoValue">
                                    <span >Available 24/7</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="AS-support-lower">
                        <SupportLocations />

                    </div>

                </div>
            </Container>
        </section>
    );
}
