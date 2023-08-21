import {
  faCss3,
  faHtml5,
  faJava,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import './index.scss'
import React, { useState } from 'react'
import cisco from '../../assets/images/certificates/cisco-certificate.png'
import accenture from '../../assets/images/certificates/accenture-certificate.png'

const About = () => {
  const [activeSection, setActiveSection] = useState('skills')
  const handleSectionClick = (section) => {
    setActiveSection(section)
  }
  return (
    <div className="container about">
      <Loader type="pacman" />
      <div className="text-zone">
        <h1 className="aboutMe-title">About Me</h1>
        <p className='aboutme-p'>
          I am a dedicated and highly ambitious individual hailing from Patna,
          India. Currently, I am pursuing a Masters in Computer Application from
          Birla Institute of Technology, which is renowned as one of India's
          premier educational institutions. With a strong academic foundation in
          computer science, my ultimate aspiration is to forge a highly
          successful career in this dynamic and rapidly evolving field.
        </p>
        <div className="section">
          <nav className="aboutMe-nav">
            <ul>
              <li
                className={activeSection === 'skills' ? 'active' : ''}
                onClick={() => handleSectionClick('skills')}
              >
                SKILLS
              </li>
              <li
                className={activeSection === 'certifications' ? 'active' : ''}
                onClick={() => handleSectionClick('certifications')}
              >
                CERTIFICATIONS
              </li>
              <li
                className={activeSection === 'interests' ? 'active' : ''}
                onClick={() => handleSectionClick('interests')}
              >
                INTERESTS | HOBBIES
              </li>
            </ul>
          </nav>
          <div className="aboutMe-main">
            {activeSection === 'skills' && (
              <div className="section-content skills">
                <h2 className="section-title">Skills</h2>
                <ul>
                  <li style={{ backgroundColor: '#f89820' }}>
                    Java &nbsp;
                    <FontAwesomeIcon icon={faJava} color="#5382a1" />
                  </li>
                  <li style={{ backgroundColor: '#5382a1' }}>
                    JavaScript &nbsp;
                    <FontAwesomeIcon
                      icon={faJsSquare}
                      color="#EFD81D"
                    ></FontAwesomeIcon>
                  </li>
                  <li style={{ backgroundColor: '#555759' }}>
                    ReactJS &nbsp;
                    <FontAwesomeIcon
                      icon={faReact}
                      color="#5ED4F4"
                    ></FontAwesomeIcon>
                  </li>
                  <li style={{ backgroundColor: '#28A4D9' }}>
                    HTML &nbsp;
                    <FontAwesomeIcon
                      icon={faHtml5}
                      color="#F06529"
                    ></FontAwesomeIcon>{' '}
                  </li>
                  <li style={{ backgroundColor: '#D5F3FE' }}>
                    CSS &nbsp;
                    <FontAwesomeIcon
                      icon={faCss3}
                      color="#28A4D9"
                    ></FontAwesomeIcon>
                  </li>
                  <li style={{ backgroundColor: '#FFD43B' }}>
                    Pyhton &nbsp;
                    <FontAwesomeIcon
                      icon={faPython}
                      color="#4584b6"
                    ></FontAwesomeIcon>
                  </li>
                </ul>
              </div>
            )}
            {activeSection === 'certifications' && (
              <div className="section-content certifications">
                <h2 className="section-title">Certifications</h2>
                <ul className='certifications-ul'>
                <a href='https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20Nordics/PxenP4rHNE6Bh4nQz_Accenture%20Nordics_CdWJpsPb78Ave2nBq_1689417065468_completion_certificate.pdf'>
                  <li>
                    <img src={cisco} alt='Accenture-Certificate'/>
                    <div className='info'>Certification in Developer Virtual Experience Program by
                    Accenture Nordics on the Forage Website.</div>
                  </li>
                  </a>
                  <a href='https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cisco/kinDTvjiZRcYbwqLo_Cisco_CdWJpsPb78Ave2nBq_1689959775317_completion_certificate.pdf'>
                  <li>
                  <img src={accenture} alt='Accenture-Certificate'/>
                    <div className='info'>Certification in Intro to Software Engineering Virtual
                    Experience Program by Cisco on the Forage Website.</div>
                  </li></a>
                </ul>
              </div>
            )}
            {activeSection === 'interests' && (
              <div className="section-content interests">
                <h2 className="section-title">Interets / Hobbies</h2>
                <div className='interests-p'>I have a
                wide range of interests that include photography, traveling,
                music,and gaming. These passions bring joy and fulfillment to my
                life, allowing me to express creativity, explore new places,
                appreciate diverse melodies, and engage in immersive gaming
                experiences.</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* cube */}
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faJava} color="#5382a1"></FontAwesomeIcon>
            <br />
            <label style={{ fontSize: '10px' }}>JAVA</label>
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529"></FontAwesomeIcon>
            <br />
            <label style={{ fontSize: '10px' }}>HTML5</label>
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9"></FontAwesomeIcon>
            <br />
            <label style={{ fontSize: '10px' }}>CSS</label>
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4"></FontAwesomeIcon>
            <br />
            <label style={{ fontSize: '10px' }}>REACT</label>
          </div>
          <div className="face5">
            <FontAwesomeIcon
              icon={faJsSquare}
              color="#EFD81D"
            ></FontAwesomeIcon>
            <br />
            <label style={{ fontSize: '10px' }}>JavaScript</label>
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faPython} color="#4584b6"></FontAwesomeIcon>
            <br />
            <label style={{ fontSize: '10px' }}>Pyhton</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
