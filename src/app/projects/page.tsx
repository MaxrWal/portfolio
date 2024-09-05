// src/app/projects/page.tsx
import React from 'react';
import projects from '../../data/projects'; // Adjust the import path if necessary
import ProjectCard from '../../components/ProjectCard';

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
