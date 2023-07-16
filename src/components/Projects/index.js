import Loader from 'react-loaders'
import './index.scss'
import data from './projects.js'

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
              ? project.keyskills.map((skill) => <span>{skill}</span>)
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
      <h1 className='projects-title'>Projects</h1>
      <div className="projects">
        <ProjectList />
      </div>
    </div>
  )
}

export default Projects
