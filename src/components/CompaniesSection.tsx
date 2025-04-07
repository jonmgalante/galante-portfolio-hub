
import React from 'react';
import Company from './Company';

interface CompanyData {
  id?: string;
  name: string;
  role: string;
  description?: string;
  url?: string;
}

interface CompaniesSectionProps {
  companies: CompanyData[];
  loading: boolean;
}

const CompaniesSection: React.FC<CompaniesSectionProps> = ({ companies, loading }) => {
  // Default companies with the format from the resume
  const defaultCompanies = [
    { name: "Pathstream", role: "frontline workforce training", url: "https://pathstream.com" },
    { name: "Octane", role: "usage-based billing", description: "acquired by Stripe", url: "https://octane.so" },
    { name: "CRS", role: "credit data API", url: "https://crs.com" },
    { name: "Aikito", role: "CRE financing", url: "https://aikito.com" },
    { name: "Sharebite", role: "employee meals", url: "https://sharebite.com" },
    { name: "Upflex", role: "flex office SaaS", url: "https://upflex.com" },
    { name: "Feedback Loop", role: "user research", description: "acquired by DISQO", url: "https://feedbackloop.com" },
    { name: "Sidewalk Labs", role: "smart cities", url: "https://sidewalklabs.com" },
    { name: "Knotel", role: "flex office for enterprise", description: "acquired by Newmark", url: "https://knotel.com" },
    { name: "F1 Health IT", role: "IT staffing", url: "https://f1healthit.com" },
    { name: "Epic", role: "EHR for largest healthcare orgs", url: "https://epic.com" }
  ];

  const displayCompanies = companies.length > 0 ? companies : defaultCompanies;

  return (
    <section className="section mt-8">
      <h2 className="text-xl font-serif mb-4">Companies</h2>
      {loading ? (
        <p>Loading companies...</p>
      ) : (
        <div className="space-y-3">
          {displayCompanies.map((company, index) => (
            <Company
              key={company.id || index}
              id={company.id}
              name={company.name}
              role={company.role}
              description={company.description}
              url={company.url}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CompaniesSection;
