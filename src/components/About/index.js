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

const About = () => {
  return (
    <div className="container about">
      <Loader type="pacman" />
      <div className="text-zone">
        <h1 className='aboutMe-title'>About Me</h1>
        <p>
          I am a dedicated and highly ambitious individual hailing from Patna,
          India. Currently, I am pursuing a Masters in Computer Application from
          Birla Institute of Technology, which is renowned as one of India's
          premier educational institutions. With a strong academic foundation in
          computer science, my ultimate aspiration is to forge a highly
          successful career in this dynamic and rapidly evolving field.
        </p>
        <p>
          <small>
            <h4 style={{ padding: '2px', color: '#ffd700' }}>Skills</h4>
            <ul>
              <li>Java | JavaScript | ReactJS | HTML | CSS | Pyhton.</li>
              <li>Certification in Developer Virtual Experience Program by Accenture Nordics on the Forage Website.</li>
            </ul>
          </small>
        </p>

        <p>
          <small>
            <h4 style={{ padding: '2px', color: '#ffd700' }}>
              Interets / Hobbies
            </h4>
            I have a wide range of interests that include photography,
            traveling, music,and gaming. These passions bring joy and
            fulfillment to my life, allowing me to express creativity, explore
            new places, appreciate diverse melodies, and engage in immersive
            gaming experiences.
          </small>
        </p>
      </div>
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
