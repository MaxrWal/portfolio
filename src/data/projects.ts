// src/data/projects.ts
export interface Project {
    title: string;
    description: string;
    link: string;
    techStack: string[];
  }
  
  const projects: Project[] = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with Next.js and TypeScript.',
      link: 'https://github.com/yourusername/portfolio',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'E-commerce Platform',
      description: 'An e-commerce platform with product listings and cart functionality.',
      link: 'https://github.com/yourusername/e-commerce',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    // Add more projects as needed
  ];
  
  export default projects;
  