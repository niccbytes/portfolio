import React from 'react'; // Make sure to import React
import { Link } from 'react-router-dom'; // Import Link component
import LogoTitle from '../../assets/images/logo-s.png';
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
          web Developer
        </h1>
        <h2>Frontend Developer | JavaScript Scripter | Entrepreneur </h2>
        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
      </div>
    </div>
  );
};

export default Home;
