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
  const feIcons = [
    { icon: faHtml5, text: 'HTML 5', iconColor: '#e34f26' },
    { icon: faCss3Alt, text: 'CSS 3', iconColor: '#0099e5' },
    { icon: faJs, text: 'JavaScript ES6', iconColor: '#f7df1e' },
    { icon: faBootstrap, text: 'Bootstrap5', iconColor: '#8310fa' },
    { icon: faSass, text: 'Sass', iconColor: '#cc6699' },
    { icon: faReact, text: 'ReactJs', iconColor: '#00d8ff' },
  ]

  const beIcons = [
    { icon: faPhp, text: 'Php', iconColor: '#4f5b93' },
    { icon: faLaravel, text: 'Laravel', iconColor: '#f55247' },
    { icon: faDatabase, text: 'MySQL & MongoDB', iconColor: '#f29111' },
    { icon: faPython, text: 'Python', iconColor: '#ffde57' },
  ]

  const aIcons = [
    { icon: faGitAlt, text: 'Git', iconColor: '#fc6d26' },
    { icon: faGithub, text: 'GitHub', iconColor: '#171515' },
    { icon: faLinux, text: 'Linux', iconColor: '#ffde57' },
    { icon: faKeyboard, text: 'Touch Typing', iconColor: '#555' },
    { icon: faFigma, text: 'Figma', iconColor: '#ae4dff' },
  ]

  return (
    <>
      <div className="row skill-container gap-5 justify-content-center w-100">
        <div className="col-md-5 m-3 text-center skills-group">
          <span className="skills-title">Front End</span>
          {feIcons.map(({ icon, text, iconColor }, index) => (
            <FontAwesomeIcon
              key={index}
              icon={icon}
              className="skills-icon p-2"
              title={text}
              color={iconColor}
            />
          ))}
        </div>
        <div className="col-md-5 m-3 text-center skills-group">
          <span className="skills-title">Back end</span>
          {beIcons.map(({ icon, text, iconColor }, index) => (
            <FontAwesomeIcon
              key={index}
              icon={icon}
              className="skills-icon p-2"
              title={text}
              color={iconColor}
            />
          ))}
        </div>
        <div className="col-md-6 mt-5 text-center skills-group">
          <span className="skills-title">Others</span>
          {aIcons.map(({ icon, text, iconColor }, index) => (
            <FontAwesomeIcon
              key={index}
              icon={icon}
              className="skills-icon p-2"
              title={text}
              color={iconColor}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default IconsSkills
