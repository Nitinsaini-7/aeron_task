import React from 'react'
import Hero from '../components/Hero'
import InsurancePartners from '../components/InsurancePartners'
import InsuranceServices from '../components/InsuranceServices'
import BestServices from '../components/BestServices'
import WhyDemo from '../components/WhyDemo'
import InsuranceCard from '../components/InsuranceCard'
import HowWeWorks from '../components/HowWeWorks'
import Testimonials from '../components/Testimonials'
import Faqs from '../components/Faqs'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className=''>
        <Hero/>
        <InsuranceCard/>
        <WhyDemo/>
        <BestServices/>
        <InsurancePartners/>
        <InsuranceServices/>
        <HowWeWorks/>
        <Testimonials/>
        <Banner/>
        <Faqs/>
    </div>
  )
}

export default Home