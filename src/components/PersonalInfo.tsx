
import React from 'react';

interface PersonalInfoProps {
  introduction: string;
  email: string;
  twitter?: string;
  github?: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  introduction,
  email,
  twitter,
  github
}) => {
  return (
    <section className="section space-y-4">
      <p>{introduction.split('\n').map((line, index) => (
          <span key={index} className="block">{line}</span>
        ))}
        <span className="block mt-2">
          My wife Juliet and I live in NYC. Hit me up for coffee at {email} or <a 
            href="https://calendly.com/jonmgalante/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline text-blue-600"
          >
            book time here
          </a>.
        </span>
      </p>
    </section>
  );
};

export default PersonalInfo;

