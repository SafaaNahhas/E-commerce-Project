import React from 'react'
import FAQSection from "../components/HomePage/FAQSection/FAQSection"

import { Policys } from '../components/HomePage/SupportPage/PolicySection/ReturnPolicy'
import SupportLocations from '../components/SupportPage/KlothinSection/SupportLocations'
import Supportsection from '../components/SupportPage/KlothinSection/Supportsection'
// import AS_support from '../components/SupportPage/KlothinSection/support'

const Support = () => {
  return (
    <div>
        <Supportsection/>
        <Policys/>
        <FAQSection />
    </div>
  )
}

export default Support
