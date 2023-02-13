import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import IconsSkills from './IconsSkills'

const Skills = () => {
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
      <div className="container about-page h-100">
        <div className="text-zone w-100 h-100 d-flex align-items-center">
          <div className="row gap-5 align-items-center justify-content-between">
            <div className="col-md-5 ms-5">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']}
                  idx={15}
                />
              </h1>
              <p>
                I am proficient in various programming languages such as HTML,
                CSS, JavaScript, PHP, and Python. I have expertise in popular
                frameworks and libraries such as Laravel, ReactJS, and NodeJS.
                Additionally, I have experience with databases such as MySQL,
                MongoDB
              </p>
              <p>
                I am able to break down complex requirements into smaller,
                manageable tasks, and have a strong focus on delivering
                high-quality, scalable, and maintainable code.
              </p>
              <p>
                Experienced in touch typing and proficient in using different
                operating systems such as Linux and its various distributions. I
                have the ability to adapt to new technologies quickly and have a
                strong focus on efficiency and productivity.
              </p>
            </div>

            <div className="col-md-4">
              <IconsSkills />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
