import Container from "../../common/Container/Container";
import "./SeamlessExperience.css";

const AS_ITEMS = [
  {
    n: "01",
    title: "Discover Trends",
    text: "Explore our curated collection of over 1000 styles.",
  },
  {
    n: "02",
    title: "Secure Checkout",
    text: "Add your items to the cart and proceed to our secure checkout.",
  },
  {
    n: "03",
    title: "Swift Dispatch",
    text: "Experience 95% same-day dispatch on orders.",
  },
  {
    n: "04",
    title: "Unbox Happiness",
    text: "Receive your carefully packaged Klothink order.",
  },
];

export default function SeamlessExperience() {
  return (
    <section className="AS-seam">
      <Container>
        <div className="AS-seam-subcontainer">
          <div className="AS-seam-head">
            <h1 className="AS-seam-title">SEAMLESS EXPERIENCE.</h1>
            <div className="AS-seam-badgecontainer">
              <span className="AS-seam-badge">HOW IT WORKS ?</span>
            </div>
          </div>

          <p className="AS-seam-paragraph">
            At Klothink, we've designed a straightforward shopping experience to make fashion accessible. Explore the journey from discovering the latest trends to receiving your handpicked styles with ease.
          </p>
        </div>
        <div className="AS-seam-grid">
          {AS_ITEMS.map((it) => (
            <div key={it.n} className="AS-seam-card">
              <p className="AS-seam-num">{it.n}</p>
              <div className="AS-seam-textcontainer">
                <h2 className="AS-seam-cardTitle">{it.title}</h2>
                <p className="AS-seam-cardText">{it.text}</p>
              </div>
            </div>

          ))}
        </div>
      </Container>
    </section>
  );
}
