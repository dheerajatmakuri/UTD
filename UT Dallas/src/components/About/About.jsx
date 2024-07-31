import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            {/* <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/> */}
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/TH1fVOr0PO8?si=kQ1j3MWHCpMAFlnD&amp;rel=0" 
                title="YouTube video player" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            </iframe>
        </div>
        <div className="about-right">
          <h1>About University</h1>
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>Embarking on tomorrow’s educational journeys. Our curriculum empowers students with essential knowledge and skills</p>
          <p>We foster creativity, critical thinking, and collaboration, preparing students for future challenges and opportunities.</p>
          <p>Join us in shaping education’s future. Inspire the next generation of leaders and innovators.</p>
        </div>
    </div>
  )
}

export default About
