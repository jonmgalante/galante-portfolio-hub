
import React from 'react';

interface CompanyProps {
  id?: string;
  name: string;
  role: string;
  description?: string;
  url?: string;
}

const Company: React.FC<CompanyProps> = ({ id, name, role, description, url }) => {
  return (
    <div className="mb-4 flex flex-col sm:flex-row sm:items-start" id={id}>
      <div className="min-w-[160px] sm:min-w-[200px] font-medium">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">
            {name}
          </a>
        ) : (
          <span>{name}</span>
        )}
      </div>
      <div className="flex-1">
        <span className="text-gray-700">{role}</span>
        {description && <span className="text-gray-600 ml-2">— {description}</span>}
      </div>
    </div>
  );
};

export default Company;
