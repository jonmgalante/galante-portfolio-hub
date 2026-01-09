import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Input } from "@/components/ui/input";
import { books } from "@/data/books";

const ReadingLibrary: React.FC = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return books;

    return books.filter((b) => {
      const haystack = [b.title, b.author, ...(b.tags ?? [])].join(" ").toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="container py-8">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-serif">Reading</h2>
            <Link to="/" className="text-sm underline">
              ← Home
            </Link>
          </div>

          <p className="text-muted-foreground max-w-2xl">
            A roughly accurate catalogue of my library. 
          </p>

          <div className="mt-6 max-w-md">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, author, or tag…"
              aria-label="Search books"
            />
          </div>

          <div className="mt-6">
            <ul className="divide-y">
              {filtered.map((b) => (
                <li key={`${b.title}-${b.author}`} className="py-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <a
                      href={b.amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                    >
                      {b.title}
                    </a>
                    <div className="text-sm text-muted-foreground">
                      {b.author}
                      {b.finished ? ` · ${b.finished}` : ""}
                    </div>
                  </div>
                </li>
              ))}

              {filtered.length === 0 ? (
                <li className="py-6 text-sm text-muted-foreground">
                  No matches.
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReadingLibrary;
