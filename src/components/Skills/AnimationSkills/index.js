import './index.scss'
import TagCloud from 'TagCloud'
import { useEffect } from 'react'

const AnimationSkills = () => {
  useEffect(() => {
    return () => {
      const container = '.skills-animaiton'
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
      <span className="skills-animaiton"></span>
    </>
  )
}

export default AnimationSkills
