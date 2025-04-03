
import React from 'react';
import Writing from './Writing';

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

const WritingsSection: React.FC<WritingsSectionProps> = ({ writings, loading }) => {
  return (
    <section className="section mt-8">
      <h2 className="text-xl font-serif mb-4">Writing</h2>
      {loading ? (
        <p>Loading writings...</p>
      ) : writings.length > 0 ? (
        writings.map((writing) => (
          <Writing
            key={writing.id}
            id={writing.id}
            title={writing.title}
            date={writing.date}
            link={writing.link}
            description={writing.description}
          />
        ))
      ) : (
        <>
          <Writing
            title="Article Title One"
            date="June 2023"
            link="https://example.com/article1"
            description="Brief description of this article"
          />
          <Writing
            title="Article Title Two"
            date="March 2023"
            link="https://example.com/article2"
            description="What this piece is about"
          />
          <Writing
            title="Article Title Three"
            date="November 2022"
            link="https://example.com/article3"
            description="The subject matter of this writing"
          />
        </>
      )}
    </section>
  );
};

export default WritingsSection;
