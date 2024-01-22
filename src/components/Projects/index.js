import React from 'react'; // Make sure to import React
import './index.scss';

const projects = [
  {
    title: 'Project 1',
    description: 'Description for Project 1.',
  },
  {
    title: 'Project 2',
    description: 'Description for Project 2.',
  },
  {
    title: 'Project 3',
    description: 'Description for Project 3.',
  },
];

const Projects = () => (
  <div className="app">
    <h1>My Projects</h1>
    <div className="projects-container">
      {projects.map((project, index) => (
        <Projects key={index} {...project} />
      ))}
    </div>
  </div>
);

export default Projects;
