
import React from 'react';

interface InterestsSectionProps {
  interests: string;
}

const InterestsSection: React.FC<InterestsSectionProps> = ({ interests }) => {
  return (
    <section className="section mt-8">
      <h2 className="text-xl font-serif mb-4">Travel</h2>
      <p>{interests}</p>
      <div className="mt-4">
        <h3 className="font-medium mb-2">Ask Me About...</h3>
        <ul className="list-disc pl-5">
          <li>Wood Finishing. My first ever job in the family business</li>
          <li>Skiing. Former instructor and enthusiast born and raised in the Poconos</li>
          <li>Travel. 40+ countries and counting</li>
          <li>My Wife. The marketer extraordinaire who designed this resume</li>
        </ul>
      </div>
    </section>
  );
};

export default InterestsSection;
