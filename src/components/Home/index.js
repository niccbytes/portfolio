import React from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import ResumeIcon from '../../assets/images/resume1.png'; // Add the correct path to your resume image
import './index.scss';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoTitle} alt="developer" />
          Nicc
          <br />
          Web Developer
        </h1>
        <h2>Frontend Developer | JavaScript Scripter | Entrepreneur </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div className="resume-section">
        <a
          href="../../assets/images/resume1.png" // Replace with the correct path or URL for your resume
          download="Nicc_Resume"
        >
          <img src={ResumeIcon} alt="resume" />
          <button>Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
