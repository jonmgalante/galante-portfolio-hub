
import React from 'react';
import { LinkedinIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 text-sm text-gray-500">
      <div className="container flex items-center justify-between">
        <p>© {currentYear} Jon Galante</p>
        <a 
          href="https://www.linkedin.com/in/jonmgalante/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          <LinkedinIcon size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
