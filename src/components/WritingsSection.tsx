
import React from 'react';

interface WritingData {
  id: string;
  title: string;
  date: string;
  link?: string;
  description?: string;
}

interface WritingsSectionProps {
  writings: WritingData[];
  loading: boolean;
}

const WritingsSection: React.FC<WritingsSectionProps> = () => {
  return (
    <section className="section mt-8">
      <h2 className="text-xl font-serif mb-4">Writing</h2>
      <p>I publish occasionally on <a 
        href="https://substack.com/@jongalante" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 underline"
      >Substack</a>.</p>
    </section>
  );
};

export default WritingsSection;
