import React from 'react';
import Project from './Project';
import useProjects from '../../hooks/useProjects';

const Projects = () => {
  const projects = useProjects();
  return (
    <div className="p-4">
      <h3 className="font-bold text-2xl text-indigo-600 border-b inline-block border-dashed border-gray-500">
        Projects
      </h3>
      <div>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
