import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about-page d-flex align-items-center justify-content-center h-100 w-100">
        <div className="row">
          <div className="text-zone col-md-6">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I'm a full-stack developer with a passion for creating
              user-friendly, visually appealing websites using Laravel and
              ReactJS.
            </p>
            <p>
              I have strong communication and collaboration skills, am a quick
              learner, and value meeting deadlines and delivering quality work.
            </p>
            <p>
              I believe in teamwork and am dedicated to understanding each
              project's goals, bringing value to your team, and delivering
              exceptional results.
            </p>
          </div>

          <div className="col-md-6"></div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
