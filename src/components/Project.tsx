
import React from 'react';

interface ProjectProps {
  title: string;
  description?: string;
  link?: string;
  year?: string;
  id?: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, link, year, id }) => {
  const projectDescription = description 
    ? ` -- ${description}`
    : '';

  return (
    <div className="mb-4 flex flex-col sm:flex-row sm:items-start" id={id}>
      {link ? (
        <>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline font-medium mr-1"
          >
            {title}
          </a>
          <span className="font-medium">{projectDescription}</span>
        </>
      ) : (
        <span className="font-medium">{title}{projectDescription}</span>
      )}
    </div>
  );
};

export default Project;
