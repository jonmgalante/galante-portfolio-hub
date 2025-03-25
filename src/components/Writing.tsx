
import React from 'react';

interface WritingProps {
  title: string;
  date: string;
  link?: string;
  description?: string;
}

const Writing: React.FC<WritingProps> = ({ title, date, link, description }) => {
  return (
    <div className="mb-4">
      <span className="text-gray-500 mr-2">{date}</span>
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

export default Writing;
