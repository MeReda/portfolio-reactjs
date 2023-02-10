import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBootstrap,
  faCss3Alt,
  faFigma,
  faGitAlt,
  faGithub,
  faHtml5,
  faJs,
  faLaravel,
  faLinux,
  faPhp,
  faPython,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faKeyboard } from '@fortawesome/free-solid-svg-icons'

const IconsSkills = () => {
  return (
    <>
      <div className="row skill-container gap-5 justify-content-center w-100">
        <div className="col-md-5 m-3 text-center skills-group">
          <span className="skills-title">Front End</span>
          <FontAwesomeIcon
            className="skills-icon p-2"
            icon={faHtml5}
            color="#e34f26"
          />
          <FontAwesomeIcon
            className="skills-icon p-2"
            icon={faCss3Alt}
            color="#0099e5"
          />
          <FontAwesomeIcon
            className="skills-icon p-2"
            icon={faJs}
            color="#f7df1e"
          />
          <FontAwesomeIcon
            className="skills-icon p-2"
            icon={faBootstrap}
            color="#8310fa"
          />
          <FontAwesomeIcon
            className="skills-icon p-2"
            icon={faSass}
            color="#cc6699"
          />
          <FontAwesomeIcon
            className="skills-icon p-2"
            icon={faReact}
            color="#00d8ff"
          />
        </div>
        <div className="col-md-5 m-3 text-center skills-group">
          <span className="skills-title">Back end</span>
          <FontAwesomeIcon
            className="skills-icon p-2"
            icon={faPhp}
            color="#4f5b93"
          />
          <FontAwesomeIcon
            className="skills-icon p-2"
            icon={faLaravel}
            color="#f55247"
          />
          <FontAwesomeIcon
            className="skills-icon p-2"
            icon={faDatabase}
            color="#f29111"
          />
          <FontAwesomeIcon
            className="skills-icon p-2"
            icon={faPython}
            color="#ffde57"
          />
        </div>
        <div className="col-md-6 mt-5 text-center skills-group">
          <span className="skills-title">Others</span>
          <FontAwesomeIcon
            className="skills-icon p-2"
            icon={faGitAlt}
            color="#fc6d26"
          />
          <FontAwesomeIcon
            className="skills-icon p-2"
            icon={faGithub}
            color="#171515"
          />
          <FontAwesomeIcon
            className="skills-icon p-2"
            icon={faLinux}
            color="#ffde57"
          />
          <FontAwesomeIcon
            className="skills-icon p-2"
            icon={faKeyboard}
            color="#222"
          />
          <FontAwesomeIcon
            className="skills-icon p-2"
            icon={faFigma}
            color="#ae4dff"
          />
        </div>
      </div>
    </>
  )
}

export default IconsSkills
