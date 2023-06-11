import React from 'react'
import './AboutUs.css'
import miya from '../../../assets/img/miya.jpg'
function AboutUs() {
  return (
    <div className='container'>
     <div className="aboutus-container">
        <div className="team-member">
            <h2>Our Team</h2>
            <div className="member-card">
                <img className='member-img' src={miya} alt="Miya Wick" />
                <h3 className='member-name'>Miya Wick</h3>
                <p className='member-role'>Founder</p>
            </div>
        </div>
        <div className="aboutus-description">
            <h1 className='aboutus-heading'>About Us</h1>
            <p>
                With a Passion for empowering learners of all ages,our mission is to make education acessible,engaging, and personalised through our cutting-edge educational technology Platform.
            </p>
        </div>
     </div>
    </div>
  )
}

export default AboutUs