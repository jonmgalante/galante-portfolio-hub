
import React from 'react';

interface CompanyProps {
  id?: string;
  name: string;
  role: string;
  period: string;
  description?: string;
}

const Company: React.FC<CompanyProps> = ({ id, name, role, period, description }) => {
  return (
    <div className="mb-4" id={id}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
        <div>
          <span className="font-medium">{name}</span>
          <span className="text-gray-700"> — {role}</span>
          {description && <p className="text-gray-600 mt-1">{description}</p>}
        </div>
        <span className="text-gray-500 mt-1 md:mt-0 md:ml-4 shrink-0">{period}</span>
      </div>
    </div>
  );
};

export default Company;
