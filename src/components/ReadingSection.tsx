
import React from 'react';

interface BookData {
  name: string;
  author: string;
  link?: string;
}

interface ReadingSectionProps {
  books: BookData[];
}

const ReadingSection: React.FC<ReadingSectionProps> = () => {
  return (
    <section className="section mt-8">
      <h2 className="text-xl font-serif mb-4">Reading</h2>
      <p>I keep a running Google Doc with book notes available here.</p>
    </section>
  );
};

export default ReadingSection;
