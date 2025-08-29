import Container from "../../common/Container/Container";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import "./Experience.css";

import passionateIcon from "/assets/img/Home_Page/about_us/Passionate_Btn.png";
import fashionIcon from "/assets/img/Home_Page/about_us/Fashion_Btn.png";
import customerCentricIcon from "/assets/img/Home_Page/about_us/Customer-Centric_Btn.png";
import globalIcon from "/assets/img/Home_Page/about_us/Global_Btn.png";
import empoweringIcon from "/assets/img/Home_Page/about_us/Empowering_Btn.png";
import sustainableIcon from "/assets/img/Home_Page/about_us/Sustainable_Btn.png";
const KlothinkExperience = () => {
  const experiences = [
  { icon:  passionateIcon, title: 'Passionate Craftsmanship', description: 'Every garment at Klothink is crafted with passion, reflecting our commitment to quality and innovation.' },
  { icon: fashionIcon, title: 'Fashion Forward', description: 'We’re more than a brand, we’re trendsetters, curating styles that empower and inspire confidence.' },
  { icon: customerCentricIcon, title: 'Customer-Centric Approach', description: 'Our customers are at the heart of everything we do. Your satisfaction is our measure of success.' },
  { icon: globalIcon, title: 'Global Inspiration', description: 'Influenced by global trends, we bring you a diverse and dynamic collection.' },
  { icon: empoweringIcon, title: 'Empowering Your Style', description: 'Beyond clothing, Klothink is a lifestyle. Join us on a journey of self-expression.' },
  { icon: sustainableIcon, title: 'Sustainable Practices', description: 'Klothink is committed to sustainability, integrating eco-friendly practices into our production process.' },
];


  return (
    <Container>
      <section className="klothink-experience">
        <div className="">
        
         <div className="testimonials-content">
           <div className="title-group">
            <h2 className="testimonials-title">The Klothink Experience.</h2>
            <span className="testimonials-subtitle">About Us</span>
          </div>
          <p>
            At Klothink, we breathe life into fashion, blending creativity with commitment.
            Our journey is fueled by a dedication to delivering unparalleled style and quality.
            Join us in redefining fashion and embracing a community where every purchase tells a story.
          </p>

         </div>
        </div>

        {/* Cards */}
        <div className="cards">
          {experiences.map((item, idx) => (
            <ExperienceCard key={idx} {...item} />
          ))}
        </div>

        {/* Mobile Button */}
        <div className="view-all">
          <button>View All</button>
        </div>
      </section>
    </Container>
  );
};

export default KlothinkExperience;