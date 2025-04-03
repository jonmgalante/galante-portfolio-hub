
import React from 'react';
import Company from './Company';

interface CompanyData {
  id: string;
  name: string;
  role: string;
  description?: string;
}

interface CompaniesSectionProps {
  companies: CompanyData[];
  loading: boolean;
}

const CompaniesSection: React.FC<CompaniesSectionProps> = ({ companies, loading }) => {
  return (
    <section className="section mt-8">
      <h2 className="text-xl font-serif mb-4">Companies</h2>
      {loading ? (
        <p>Loading companies...</p>
      ) : companies.length > 0 ? (
        companies.map((company) => (
          <Company
            key={company.id}
            id={company.id}
            name={company.name}
            role={company.role}
            description={company.description}
          />
        ))
      ) : (
        <>
          <Company
            name="Tech Innovators Inc."
            role="Senior Developer"
            description="Led development of key products and mentored junior team members"
          />
          <Company
            name="Digital Solutions Ltd."
            role="Software Engineer"
            description="Built scalable web applications and improved system architecture"
          />
          <Company
            name="Future Systems"
            role="Junior Developer"
            description="Contributed to front-end development and participated in agile teams"
          />
        </>
      )}
    </section>
  );
};

export default CompaniesSection;
