import { useState } from "react";
import Container from "../../common/Container/Container";
import "./FAQSection.css";

export default function FAQSection({
    mainTitle = "Frequently asked questions",
    paragraph = "Ease into the world of Klothink with clarity. Our FAQs cover a spectrum of topics, ensuring you have the information you need for a seamless shopping experience.",
    items = [],
}) {
    const categories = Array.from(new Set(items.map((i) => i.category)));
    const tabs = ["All", ...categories];

    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [openIndex, setOpenIndex] = useState(null);

    const filtered =
        activeTab === "All" ? items : items.filter((item) => item.category === activeTab);

    const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

    return (
        <section className="AS-faq">
            <Container>
                {/* ✅ اسم الكلاس الصحيح حسب CSS */}
                <div className="AS-subcontainer">
                    <div className="AS-faq-header">
                        <h1 className="AS-faq-mainTitle">{mainTitle}</h1>
                        <div className="AS-faq-badgecontainer">
                            <span className="AS-faq-badge">FAQ</span>
                        </div>
                    </div>
                    <p className="AS-faq-paragraph">{paragraph}</p>
                </div>

                <div className="AS-faq-tabs">
                    {tabs.map((tab, idx) => (
                        <div className="AS-faq-tabWrap" key={tab}>
                            <button
                                className={"AS-faq-tab" + (activeTab === tab ? " is-active" : "")}
                                onClick={() => {
                                    setActiveTab(tab);
                                    setOpenIndex(null);
                                }}
                            >
                                {tab}
                            </button>
                            {idx < tabs.length - 1 && <span className="AS-faq-sepline" aria-hidden="true" />}
                        </div>
                    ))}
                </div>

                <div className="AS-faq-grid">
                    {filtered.map((item, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={i} className={"AS-faq-item" + (isOpen ? " is-open" : "")}>
                                <button
                                    className="AS-faq-question"
                                    onClick={() => toggle(i)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{item.q}</span>
                                    <span className="AS-faq-toggle" aria-hidden="true">
                                        {isOpen ? "×" : "+"}
                                    </span>
                                </button>
                                <div className="AS-faq-answer" style={{ maxHeight: isOpen ? "220px" : 0 }}>
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
