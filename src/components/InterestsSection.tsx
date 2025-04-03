
import React from 'react';

interface InterestsSectionProps {
  interests: string;
}

const InterestsSection: React.FC<InterestsSectionProps> = ({ interests }) => {
  return (
    <section className="section mt-8">
      <h2 className="text-xl font-serif mb-4">Interests</h2>
      <p>{interests}</p>
    </section>
  );
};

export default InterestsSection;
