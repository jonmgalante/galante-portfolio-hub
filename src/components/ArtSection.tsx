
import React from 'react';
import { Grid2X2 } from 'lucide-react';

const ArtSection: React.FC = () => {
  // Sample art pieces with photos, names, and descriptions
  const artPieces = [
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/art%2FIMG_4790.JPG?alt=media&token=2cee241e-3b54-419c-8ee3-10800629fd0c", 
      name: "Tea Time", 
      description: "Vanni Morandin" 
    },
  ];

  return (
    <section className="section mt-8">
      <h2 className="text-xl font-serif mb-4">Art</h2>
      <p className="mb-4">A collection of my favorite art pieces</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {artPieces.map((art, index) => (
          <div key={index} className="overflow-hidden rounded-md relative group flex flex-col">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={art.src} 
                alt={art.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-3 bg-white border border-t-0 border-gray-200 rounded-b-md">
              <h3 className="font-medium text-base">{art.name}</h3>
              <p className="text-sm text-gray-600">{art.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArtSection;
