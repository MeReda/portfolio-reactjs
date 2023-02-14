import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import ContactAnimation from '../../assets/images/about-animation.json'
import Lottie from 'lottie-web'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

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

  // Animation Script

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: document.querySelector('.about-img'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: ContactAnimation,
    })

    return () => {
      animation.destroy()
    }
  }, [])

  // Download CV

  const [fileName, setFileName] = useState('cv.pdf')
  const [url, setUrl] = useState('/cv.pdf')

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    link.click()
  }

  return (
    <>
      <div className="container about-page d-flex align-items-center justify-content-center h-100 w-100">
        <div className="text-zone w-100 h-100 d-flex align-items-center">
          <div className="row gap-5 align-items-center justify-content-between">
            <div className="col-md-5 ms-5">
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
                learner, and value meeting deadlines and delivering quality
                work.
              </p>
              <p>
                I believe in teamwork and am dedicated to understanding each
                project's goals, bringing value to your team, and delivering
                exceptional results.
              </p>
              <button className="flat-button mt-5" onClick={handleDownload}>
                <FontAwesomeIcon icon={faDownload} />
                <input type="submit" value="Curriculum Vitae" />
              </button>
            </div>
            <div className="col-md-4">
              <div className="about-img"></div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
