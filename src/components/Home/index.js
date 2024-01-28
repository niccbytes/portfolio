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
        <h2>Frontend Developer | JavaScript Scripter | React </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <div className="resume-section">
        <a
          href="https://docs.google.com/document/d/17wPcZOs1kt0j2ouRBN95u1cbnqHuMCb3jJ_FA7iPEaA/edit?usp=sharing" // Replace with the URL to your hosted resume
          download="Nicc_Resume.pdf"
        >
          <img src={ResumeIcon} alt="resume" />
          <button>View Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
