import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import './index.scss'

const Home = () => {
  return (
    <div className="container homepage">
      <Loader type='pacman' />
      <div className="text-zone">
        <h1>
          <span className='hi'>Hi,</span> <br />
          <div className='intro'>I'm &nbsp;<span className="a-letter">A</span>nish</div>
        </h1>
        <p>
          A passionate programmer experienced in{' '}
          <br className="sm:block hidden" />
          ReactJS, Java, JavaScript, Python and more.{' '}
          <br className="sm:block hidden" />
          Specializing in <b>Full-Stack Development</b>, <br /> I thrive on
          continuous learning and
          <br />
          enjoy tackling diverse challenges.
        </p>
        <br/>
        <span><Link to="/projects" className="flat-button">
          PROJECTS
        </Link></span>
        <span><Link to="/about" className="flat-button">
          ABOUT ME
        </Link></span>
        <span><Link to="/contact" className="flat-button">
          CONTACT ME
        </Link></span>
        
      </div>
      <div class="solarsystem-container">
      
        <div class="sun"></div>
        <div class="earth">
          <div class="moon"></div>
        </div>
      </div>
      
    </div>
  )
}

export default Home
