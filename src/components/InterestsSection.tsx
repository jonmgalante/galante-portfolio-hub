
import React from 'react';
import { Grid2X2 } from 'lucide-react';

interface InterestsSectionProps {
  interests: string;
}

const InterestsSection: React.FC<InterestsSectionProps> = ({ interests }) => {
  // Sample travel photos
  const travelPhotos = [
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2Fwhistler.jpg?alt=media&token=829f7f10-1013-47df-a944-518fd03013f0", 
      alt: "", 
      location: "Whistler"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2FEllies.JPG?alt=media&token=4f544bbb-11a0-4b34-862d-b9df11264272", 
      alt: "", 
      location: "Masai Mara"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2Fcambridge.jpg?alt=media&token=0573527a-4e20-4d59-8857-c98b9ea95b5f", 
      alt: "", 
      location: "Cambridge"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2Fstaircase.jpg?alt=media&token=2d83a7d9-b48c-414f-b31b-1e91e88be760", 
      alt: "", 
      location: "Buenos Aires"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2Ffjord.jpg?alt=media&token=45555e68-93ed-4838-bcf7-a4188fd1cdf3", 
      alt: "", 
      location: "Geirangerfjord"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2Fface.jpg?alt=media&token=9654f0b3-05bf-4936-ace1-f5a08fc63517", 
      alt: "", 
      location: "Paris"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2FJordan.jpg?alt=media&token=b7dec0d5-1487-41cc-a72b-b72bbda160d8", 
      alt: "", 
      location: "Petra"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2Fdesert.jpg?alt=media&token=7dea6c1f-6378-4ce8-902b-a99155c32507", 
      alt: "", 
      location: "Atacama Desert"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2FNew%20Delhi.JPG?alt=media&token=5ede6edb-6811-4c33-8b96-4d6a45488604", 
      alt: "", 
      location: "New Delhi"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2FMalfa.JPG?alt=media&token=6f137ac5-5855-4626-b3c6-fa7b5fb6e6e7", 
      alt: "", 
      location: "Malfa"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2Fglacier.jpg?alt=media&token=d160fa5c-1db2-41cd-989b-274149b020a2", 
      alt: "", 
      location: "Perito Moreno"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2FCairo.JPG?alt=media&token=c9ae7f9f-e378-41b7-9388-703c9ea42dfc", 
      alt: "", 
      location: "Cairo"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2Fcosta%20rica.JPG?alt=media&token=9beca142-e826-46e3-a3e2-f6eab745cb8b", 
      alt: "", 
      location: "La Fortuna"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2F70%20Pine.jpg?alt=media&token=b3d6f3cf-6e82-4b3f-9f0f-6f9a8da694d1", 
      alt: "", 
      location: "70 Pine"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2FCambodia.JPG?alt=media&token=e212143b-6be0-40e4-985c-a6baed6fcd93", 
      alt: "", 
      location: "Angkor Wat"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2FHakone.JPG?alt=media&token=a73072a1-b7fa-446f-9f13-e51ceb47a5c2", 
      alt: "", 
      location: "Hakone"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2FStellenbosch.JPG?alt=media&token=f5957560-4df8-417e-a5fa-29f66f9fcbd1", 
      alt: "", 
      location: "Stellenbosch"
    },
    { 
      src: "https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/travel%2FLipari.JPG?alt=media&token=8a3ca301-2627-4c0e-913b-81f484b81f37", 
      alt: "", 
      location: "Lipari"
    },
    
  ];

  return (
    <section className="section mt-8">
      <h2 className="text-xl font-serif mb-4">Travel</h2>
      <p className="mb-4">{interests}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {travelPhotos.map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-md aspect-[4/3] relative group">
            <img 
              src={photo.src} 
              alt={photo.alt}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              {photo.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InterestsSection;
