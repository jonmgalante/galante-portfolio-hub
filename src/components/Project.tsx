
import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  link?: string;
  year: string;
  id?: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, link, year, id }) => {
  return (
    <div className="mb-4" key={id}>
      <span className="text-gray-500 mr-2">{year}</span>
      {link ? (
        <a href={link} className="font-medium" target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      ) : (
        <span className="font-medium">{title}</span>
      )}
      {description && <span className="text-gray-700"> — {description}</span>}
    </div>
  );
};

export default Project;
