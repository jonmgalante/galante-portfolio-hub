
import React from "react";
import { Link } from "react-router-dom";

const ReadingSection: React.FC = () => {
  return (
    <section className="section mt-8">
      <h2 className="text-xl font-serif mb-4">Reading</h2>
      <p>
        I keep a running list of books I’ve read. Browse the library{" "}
        <Link to="/reading" className="underline">
          here
        </Link>
        .
      </p>
    </section>
  );
};

export default ReadingSection;
