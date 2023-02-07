import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import TagCloud from 'TagCloud'

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

  // Animation settings for Skills Cloud
  useEffect(() => {
    return () => {
      const container = '.tagcloud'
      const texts = [
        'CSS3',
        'JavaScript',
        'Es6',
        'Bootstrap3',
        'JQuery',
        'Sass',
        'ReactJs',
        'Git',
        'Github',
        'Php',
        'MySQL',
        'Laravel',
        'Linux',
        'Touch Typing',
        'python',
        'tkinter',
        'MongoDB',
      ]

      const options = {
        radius: 300,
        maxSpeed: 'normal',
        initSpeed: 'normal',
        keep: true,
      }

      TagCloud(
        container,
        texts.map((text) => text.toString()),
        options
      )
    }
  }, [])

  return (
    <>
      <div className="container about-page h-100">
        <div className="text-zone w-100 h-100 d-flex align-items-center">
          <div className="row gap-5 align-items-center justify-content-between">
            <div className="col-md-6 me-5">
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
              <div className="text-shpere">
                <span className="tagcloud"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
