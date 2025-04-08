
import React from 'react';
import { Grid2X2 } from 'lucide-react';

const ArtSection: React.FC = () => {
  // Sample art pieces with photos, names, and descriptions
  const artPieces = [
    { 
      src: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      name: "Abstract Harmony", 
      description: "A vibrant exploration of color and form" 
    },
    { 
      src: "https://images.unsplash.com/photo-1549887534-1541e9326642?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      name: "Urban Reflection", 
      description: "Street art capturing city life" 
    },
    { 
      src: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      name: "Tranquil Waters", 
      description: "Mixed media piece inspired by ocean movements" 
    },
    { 
      src: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      name: "Colorful Chaos", 
      description: "Experimental canvas with layered acrylics" 
    },
    { 
      src: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      name: "Geometric Dreams", 
      description: "Precision and balance in modern design" 
    }
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
