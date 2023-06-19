import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import logo from '../../assets/images/logo.png'
import sublogo from '../../assets/images/sublogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faLaptopCode, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={logo} alt="Logo" />
        <img className="sub-logo" src={sublogo} alt="Anish Sinha" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          <FontAwesomeIcon icon={faLaptopCode} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul>
        <div className="socials">Socials</div>
        <li>
          <a target="_black" className="linkedin" rel='moreferrer' href="https://www.linkedin.com/in/anish-sinha-751025236/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d43" />
          </a>
        </li>
        <li>
          <a target="_black" className="github" rel='moreferrer' href="https://github.com/anishsinhaa">
            <FontAwesomeIcon icon={faGithub} color="#4d4d43" />
          </a>
        </li>
        <li>
          <a target="_black" className="youtube" rel='moreferrer' href="https://www.youtube.com/channel/UCyMGvIh9gGYQo3EqVSKg48A">
            <FontAwesomeIcon icon={faYoutube} color="#4d4d43" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
