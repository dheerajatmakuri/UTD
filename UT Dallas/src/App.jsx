import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Programs' title='What We Offer'/>
        <Programs/>
        <About/>
        <Title subTitle='A Glimpse into Our World' title='Campus Gallery' />
        <Campus/>
        <Title subTitle='Hear from Our Community' title='Student Testimonials' />
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
