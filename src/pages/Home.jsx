// import Container from "../components/common/Container/Container"
import HeroSection from "../components/HomePage/HeroSection/HeroSection"

import { Testimonials } from '../components/common/Testimonials/Testimonials'
import KlothinkExperience from '../components/common/ExperienceSection/KlothinkExperience'
const Home = () => {
  return (
    <>
        {/* <Container> */}
            <HeroSection />
        {/* </Container> */}
        <KlothinkExperience/>
        <Testimonials/>
     </> 

  )
}

export default Home