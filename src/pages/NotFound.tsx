import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container py-8">
          <h2 className="text-xl font-serif">Page not found</h2>
          <p className="text-muted-foreground">
            That page doesn’t exist.
          </p>
          <Link to="/" className="underline">
            ← Back home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
