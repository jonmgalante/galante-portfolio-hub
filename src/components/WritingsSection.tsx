
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
      <p>I publish occasionally on Substack.</p>
    </section>
  );
};

export default WritingsSection;
