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
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              Hello, I'm a full-stack developer eager to bring my passion and
              creativity to your projects. I am proficient in Laravel and
              ReactJS and have a strong desire to create user-friendly, visually
              appealing websites that deliver an exceptional user experience.
            </p>
            <p>
              I have strong communication and collaboration skills, which allow
              me to work effectively with clients and team members. I am a fast
              learner and have the drive to continuously improve my skills. I
              understand the importance of meeting deadlines and delivering
              high-quality work.
            </p>
            <p>
              I believe in the power of teamwork and always strive to contribute
              to a positive and productive work environment. I am committed to
              understanding the unique needs and goals of each project, and I am
              confident that my drive, passion, and creativity will bring value
              to your team. I am eager to continue growing as a developer and am
              dedicated to providing exceptional results on every project I work
              on.
            </p>
          </div>

          <div className="stage-cube-cont col-md-6"></div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
