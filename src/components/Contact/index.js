import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import ContactAnimation from '../../assets/images/contact-animation.json'
import Lottie from 'lottie-web'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    console.log('Form data:', refForm.current) // Debuging

    emailjs
      .sendForm(
        'service_zz59qhc',
        'template_ntqbc7b',
        refForm.current,
        'g-c31pXbX-Qd1x3rM'
      )
      .then(
        (response) => {
          console.log('Form submitted successfully', response) // Debuging
          alert('Message successfully sent !')
          window.location.reload(false)
        },
        (error) => {
          console.error('Form submission failed', error) // Debuging
          alert('Failed to send the message, please try again')
        }
      )
  }

  // Start Animation Script

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: document.querySelector('.contact-img'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: ContactAnimation,
    })

    return () => {
      animation.destroy()
    }
  }, [])

  // End Animation Script

  return (
    <>
      <div className="container contact-page h-100">
        <div className="text-zone w-100 h-100 d-flex align-items-center">
          <div className="row gap-5 align-items-center justify-content-between">
            <div className="col-md-6 me-5">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                  idx={15}
                />
              </h1>
              <p>
                If you're interested in working together, or just want to say
                hi, feel free to send me a message. <br />
                Looking forward to connecting with you.
              </p>
              <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
                  <ul>
                    <li className="half">
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Name"
                        required
                      />
                    </li>
                    <li className="half">
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        required
                      />
                    </li>
                    <li>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </li>
                    <li>
                      <textarea
                        placeholder="Message"
                        name="message"
                        required
                      ></textarea>
                    </li>
                    <li>
                      <input
                        type="submit"
                        className="flat-button btn btn-primary"
                        value="SEND"
                      />
                    </li>
                  </ul>
                </form>
              </div>
            </div>

            <div className="col-md-4 me-5">
              <div className="contact-img"></div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact