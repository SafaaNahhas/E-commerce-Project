import Container from "../components/common/Container/Container"
import HeroSection from "../components/HomePage/HeroSection/HeroSection"

import { Testimonials } from '../components/HomePage/Testimonials/Testimonials'
import KlothinkExperience from '../components/HomePage/ExperienceSection/KlothinkExperience'
import SeamlessExperience from "../components/HomePage/SeamlessExperience/SeamlessExperience"
import DiscoverFashion from "../components/HomePage/DiscoverFashion/DiscoverFashion"
// import { Reviwes } from '../components/HomePage/Product_details/Reviews/Reviwes'


const Home = () => {
  return (
    <>
        <Container>
            <HeroSection />
        </Container>
        <DiscoverFashion />
        <KlothinkExperience/>
        <Testimonials/>
        <Reviwes/>
        
        <SeamlessExperience />

    </> 

  )
}

export default Home