
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from './ui/carousel';
import { Image } from 'lucide-react';

interface InterestsSectionProps {
  interests: string;
}

const InterestsSection: React.FC<InterestsSectionProps> = ({ interests }) => {
  // Sample travel photos
  const travelPhotos = [
    { 
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
      alt: "Mountain landscape with sun rays", 
      location: "Rocky Mountains"
    },
    { 
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
      alt: "River between mountains", 
      location: "Swiss Alps" 
    },
    { 
      src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
      alt: "Waterfall with bridge", 
      location: "Yosemite National Park" 
    },
    { 
      src: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
      alt: "Night sky over white buildings", 
      location: "Santorini, Greece" 
    },
    { 
      src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80", 
      alt: "Camels on desert field", 
      location: "Sahara Desert" 
    }
  ];

  return (
    <section className="section mt-8">
      <h2 className="text-xl font-serif mb-4">Travel</h2>
      <p className="mb-4">{interests}</p>
      
      <div className="mt-6 mb-6">
        <Carousel className="w-full max-w-3xl mx-auto">
          <CarouselContent>
            {travelPhotos.map((photo, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="overflow-hidden rounded-md aspect-[4/3] relative group">
                    <img 
                      src={photo.src} 
                      alt={photo.alt}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      {photo.location}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default InterestsSection;
