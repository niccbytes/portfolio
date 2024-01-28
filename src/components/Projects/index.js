import React from 'react';
import './index.scss';
import GrocerEZImage from '../../assets/images/grocerEZ.png';
import BictorfyImage from '../../assets/images/bictorfylogo.JPG';
import SnakeGameImage from '../../assets/images/snakegame.png';
import WeatherAppImage from '../../assets/images/weatherapp.png';
import JsQuizImage from '../../assets/images/jsquiz.png';
import RoadSideImage from '../../assets/images/roadside.png'

const projectsData = [
  {
    title: 'grocerEZ',
    description: 'a grocery application that makes going to the grocery store a breeze! with grocerEZ your indecisiveness disappears and worries about the trip there!',
    image: GrocerEZImage,
    link: 'https://kristin611.github.io/GrocerEZ/',
  },
  {
    title: 'Bictorfy',
    description: 'simple spotify clone',
    image: BictorfyImage,
    link: 'https://github.com/gracecatk/bictorfy?tab=readme-ov-file',
  },
  {
    title: 'snake game',
    description: 'simple snake game',
    image: SnakeGameImage,
    link: 'https://niccbytes.github.io/snakegame/',
  },
  {
    title: 'weather app',
    description: 'weather application that uses RESTFUL apis to pull weather from around the world',
    image: WeatherAppImage,
    link: 'https://niccbytes.github.io/weather-app/',
  },
  {
    title: 'JS Quiz',
    description: 'java script quiz that uses local storage and a timer functionality',
    image: JsQuizImage,
    link: 'https://niccbytes.github.io/JS-Quiz/',
  },
  {
    title: 'Roadside Racks Website',
    description: 'Website in the works for my personal business! not fully deployed or near finished but excited for this one!',
    image: RoadSideImage,
    link: 'https://github.com/niccbytes/roadsideracks',
  },
];

const projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      {projectsData.map((project, index) => (
        <div key={index} className="project-item">
          <img src={project.image} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default projects;
