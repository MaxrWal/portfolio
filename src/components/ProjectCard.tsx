// src/components/ProjectCard.tsx
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  techStack: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, techStack }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <a href={link} className="text-blue-500 mt-4 inline-block" target="_blank" rel="noopener noreferrer">
        View Project
      </a>
      <ul className="flex gap-2 mt-2">
        {techStack.map((tech, index) => (
          <li key={index} className="text-sm text-gray-500">{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
