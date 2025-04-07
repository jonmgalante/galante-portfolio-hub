
import React from 'react';

interface PersonalInfoProps {
  introduction: string;
  experience: string;
  email: string;
  twitter?: string;
  github?: string;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
  introduction,
  experience,
  email,
  twitter,
  github
}) => {
  return (
    <section className="section space-y-4">
      <p>{introduction.split('\n').map((line, index) => (
          <span key={index} className="block">{line}</span>
        ))}
      </p>
      <p>
        A detailed resume is available <a 
          href="/lovable-uploads/38bd5626-770e-4b87-b22c-6b11fa1dab81.png" 
          className="text-blue-600 hover:underline" 
          target="_blank" 
          rel="noopener noreferrer"
        >here</a>.
      </p>
      <p>
        You can reach me at <a href={`mailto:${email}`}>{email}</a>. 
        {!twitter && !github && (
          <> I'm also on <a href="https://www.linkedin.com/in/jon-galante" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</>
        )}
      </p>
    </section>
  );
};

export default PersonalInfo;
