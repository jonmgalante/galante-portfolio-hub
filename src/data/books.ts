export type Book = {
  title: string;
  author: string;
  amazonUrl: string;
  /** ISO date (YYYY-MM-DD). Optional for now. */
  finished?: string;
  /** Optional tags (e.g., "history", "fiction"). */
  tags?: string[];
  /** Notes are optional—keep empty until you want a "detail pane" v2. */
  notes?: string;
};

// v1: keep this as a simple, hand-edited list.
// Tip: add new books at the top so “most recent” is always first.
export const books: Book[] = [
  // Example entries — replace with your real list
  {
    title: "The Name of the Rose",
    author: "Umberto Eco",
    amazonUrl: "https://www.amazon.com/dp/0156001314",
    finished: "2026-01-02",
    tags: ["fiction"],
    notes: "",
  },
  {
    title: "The Secret History",
    author: "Donna Tartt",
    amazonUrl: "https://www.amazon.com/dp/1400031702",
    tags: ["fiction"],
    notes: "",
  },
];
