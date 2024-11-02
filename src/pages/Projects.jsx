import { useState, useEffect } from 'react';
import projectsPage from '../data/projects';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsPage);
  }, []);

  return (
    <div>
      <h1>Proyectos</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <img src={project.image} alt={project.name} />
            <p>{project.description}</p>
            <a href={project.url}>Ver proyecto</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
