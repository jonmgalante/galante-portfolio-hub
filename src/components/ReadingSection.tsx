
import React from 'react';

const ReadingSection: React.FC = () => {
  return (
    <section className="section mt-8">
      <h2 className="text-xl font-serif mb-4">Reading</h2>
      <p>I keep a running Google Doc with book notes available <a 
        href="https://docs.google.com/document/d/1RvKbNU5XghYzoVPLrRQl57a4t4yunfApmUOAYmyqPCg/edit?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 hover:text-blue-800 underline"
      >here</a>.</p>
    </section>
  );
};

export default ReadingSection;
