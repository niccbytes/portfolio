
import './index.scss';

const projectsData = [
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

const projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      {projectsData.map((project, index) => (
        <div key={index} className="project-item">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};



export default projects;
