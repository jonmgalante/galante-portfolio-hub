
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
      </p>
    </section>
  );
};

export default PersonalInfo;

