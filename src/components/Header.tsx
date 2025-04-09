
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Header = () => {
  return (
    <header className="pt-8 pb-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-serif mb-2">Jon Galante</h1>
          <div className="max-w-[16rem] overflow-hidden">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/galante-portfolio.firebasestorage.app/o/headshot%2FScreenshot%202025-04-08%20at%202.32.00%E2%80%AFPM.png?alt=media&token=253221c9-f94c-4b29-a4bd-985658cfb569" 
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

