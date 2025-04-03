
import React from 'react';

interface BookData {
  name: string;
  author: string;
  link?: string;
}

interface ReadingSectionProps {
  books: BookData[];
}

const ReadingSection: React.FC<ReadingSectionProps> = ({ books }) => {
  return (
    <section className="section mt-8">
      <h2 className="text-xl font-serif mb-4">Reading</h2>
      <p>Some books I've enjoyed recently:</p>
      <ul className="mt-2">
        {books.map((book, index) => (
          <li key={index} className="mb-1">
            {book.link ? (
              <a href={book.link} className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                {book.name}
              </a>
            ) : (
              <span>{book.name}</span>
            )}
            {book.author && <span> by {book.author}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReadingSection;
