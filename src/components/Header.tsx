
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Header = () => {
  return (
    <header className="pt-8 pb-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-serif mb-2">Jon Galante</h1>
          <div className="max-w-[12rem] overflow-hidden">
            <img 
              src="/lovable-uploads/d18cf311-09ff-40c4-b74d-6d0fa1de54db.png" 
              alt="Jon Galante" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
