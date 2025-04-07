
import React from 'react';

interface CompanyProps {
  id?: string;
  name: string;
  role: string;
  description?: string;
  url?: string;
}

const Company: React.FC<CompanyProps> = ({ id, name, role, description, url }) => {
  const companyDescription = description 
    ? ` -- ${role} -- ${description}`
    : ` -- ${role}`;

  return (
    <div className="mb-4 flex flex-col sm:flex-row sm:items-start" id={id}>
      {url ? (
        <>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline font-medium mr-1"
          >
            {name}
          </a>
          <span className="font-medium">{companyDescription}</span>
        </>
      ) : (
        <span className="font-medium">{name}{companyDescription}</span>
      )}
    </div>
  );
};

export default Company;
