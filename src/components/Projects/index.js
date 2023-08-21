import Loader from 'react-loaders'
import './index.scss'
import data from './projects.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faHtml5,
  faJava,
  faJs,
  faPython,
  faReact,  
} from '@fortawesome/free-brands-svg-icons'
import { faFire, faGears } from '@fortawesome/free-solid-svg-icons'

const getSkillIcon = (skill) => {
  if (skill === 'ReactJS') return faReact
  else if (skill === 'API') return faGears
  else if (skill === 'JavaScript') return faJs
  else if (skill === 'HTML') return faHtml5
  else if (skill === 'CSS') return faCss3
  else if (skill === 'Firebase') return faFire
  else if (skill === 'Java' || skill === 'JavaSwing' || skill === 'JavaAWT') return faJava;
  else if (skill === 'Python') return faPython
}

const ProjectList = () => {
  return data.map((project, index) => {
    return (
      <div key={index} className="project">
        <a
          href={project.deploy ? project.deploy : project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="projectImg" src={project.img} alt="cover"></img>
          <h3>{project.title}</h3>
          <p className="projectDesc">{project.desc}</p>
          <div className="keySkills">
            {project.keyskills
              ? project.keyskills.map((skill,index) => (
                  <span key={index} className={skill}>
                    {
                      <FontAwesomeIcon
                        icon={getSkillIcon(skill)}
                        color="#4d4d43"
                      />
                    } 
                    <div
                      className="SkillName"
                      style={{
                        fontSize: '8px',
                        fontFamily:"Poppins",
                        fontWeight:600,
                        textTransform: 'uppercase',
                        padding:"2px",
                      }}
                    >
                      {skill}
                    </div>
                  </span>
                ))
              : ''}
          </div>
        </a>
        <small>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GITHUB REPO
          </a>
          <br />
          {project.deploy ? (
            <a href={project.deploy} target="_blank" rel="noopener noreferrer">
              DEPLOYED SITE
            </a>
          ) : (
            ''
          )}
        </small>
      </div>
    )
  })
}

const Projects = () => {
  console.log(ProjectList)
  return (
    <div className="container projects-cont">
      <Loader type="pacman" />
      <h1 className="projects-title">Projects</h1>
      <div className="projects">
        <ProjectList />
      </div>
    </div>
  )
}

export default Projects
