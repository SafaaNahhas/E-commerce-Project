import Container from "../components/common/Container/Container"
import HeroSection from "../components/HomePage/HeroSection/HeroSection"

import { Testimonials } from '../components/HomePage/Testimonials/Testimonials'
import KlothinkExperience from '../components/HomePage/ExperienceSection/KlothinkExperience'
import FAQSection from "../components/HomePage/FAQSection/FAQSection"
import SeamlessExperience from "../components/HomePage/SeamlessExperience/SeamlessExperience"
import DiscoverFashion from "../components/HomePage/DiscoverFashion/DiscoverFashion"
const Home = () => {
  return (
    <>
        <Container>
            <HeroSection />
        </Container>
        <DiscoverFashion />
        <KlothinkExperience/>
        <Testimonials/>
        <FAQSection />
        <SeamlessExperience />

    </> 

  )
}

export default Home