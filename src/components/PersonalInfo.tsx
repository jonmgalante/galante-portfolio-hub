
import React from 'react';

interface BookData {
  name: string;
  author: string;
  link?: string;
}

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
    <section className="section">
      <p>{introduction}</p>
      <p>{experience}</p>
      <p>
        You can reach me at <a href={`mailto:${email}`}>{email}</a>. 
        {twitter && (
          <> I'm also on <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">Twitter</a> and </>
        )}
        {github && (
          <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
        )}
        {!twitter && !github && (
          <> I'm also on <a href={`https://twitter.com/example`} target="_blank" rel="noopener noreferrer">Twitter</a> and 
          <a href={`https://github.com/example`} target="_blank" rel="noopener noreferrer"> GitHub</a>.</>
        )}
      </p>
    </section>
  );
};

export default PersonalInfo;
