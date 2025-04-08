
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="pt-8 pb-4">
      <div className="container">
        <div className={`flex ${isMobile ? 'flex-col items-start' : 'justify-between items-center'}`}>
          <div className={isMobile ? 'flex flex-col items-center w-full mb-2' : ''}>
            <h1 className={`text-3xl font-serif ${isMobile ? 'text-center w-full mb-0' : 'mb-2'}`}>
              {isMobile ? (
                <>
                  <span className="block">Jon</span>
                  <span className="block">Galante</span>
                </>
              ) : (
                "Jon Galante"
              )}
            </h1>
          </div>
          <div className={`overflow-hidden ${isMobile ? 'w-full flex justify-center mt-2' : 'max-w-[16rem]'}`}>
            <img 
              src="/lovable-uploads/d18cf311-09ff-40c4-b74d-6d0fa1de54db.png" 
              alt="Jon Galante" 
              className={`${isMobile ? 'w-[85%] h-auto object-cover' : 'w-full h-auto object-contain'}`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
