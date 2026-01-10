import React from "react";
import { Link } from "react-router-dom";

const ReadingSection: React.FC = () => {
  return (
    <section className="section mt-8">
      <h2 className="text-xl font-serif mb-4">Reading</h2>
      <p>
        My{" "}
        <Link
          to="/reading"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          library
        </Link>
        .
      </p>
    </section>
  );
};

export default ReadingSection;
