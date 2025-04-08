
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Header = () => {
  return (
    <header className="pt-8 pb-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-serif mb-2">Jon Galante</h1>
          <Avatar className="h-16 w-16 border-2 border-gray-200 object-cover overflow-hidden rounded-full">
            <AvatarImage 
              src="/lovable-uploads/82feb5d2-121b-4cd0-ad7a-229af1d2fad1.png" 
              alt="Jon Galante" 
              className="object-cover w-full h-full"
            />
            <AvatarFallback>JG</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
