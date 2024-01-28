import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Coding has always been in the back of my mind ever since I was a student in high school, but I had never considered it as a career until I started to experience the grueling summer heat here in Texas, hahaha. As a subcontractor working for my Dad's company for nearly 7 years and seeing the amount of problems I solve on a day-to-day basis, I soon came to realize that maybe coding and web development may be the place for me.

          I decided to take an online bootcamp through Rice University here locally in Houston, and although it was fast-paced and it was something I didn't look forward to doing all the time after long hours out in the field, I stuck with it and I'm more than happy to say I did! I learned many things in a short amount of time, and now that I have completed that course, I am trying to implement the things I have learned in real-world projects and think of innovative ways to make the world an easier and better place!

          I'm excited for a full-time career in software engineering and am open to any and all criticism that might help me learn and grow as a developer.
          </p>
      
   
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About