import React from 'react'
import { Testimonials } from '../components/HomePage/Testimonials/Testimonials'
import Support from '../components/SupportPage/FAQSection/FAQSection'

const DashboardPage = () => {
  return (
    <div>
        <Testimonials isDashboard={true} />
        <Support isDashboard={true} />
    </div>
  )
}

export default DashboardPage
