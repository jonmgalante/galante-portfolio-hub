import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectsSection from '../components/ProjectsSection';
import CompaniesSection from '../components/CompaniesSection';
import WritingsSection from '../components/WritingsSection';
import InterestsSection from '../components/InterestsSection';
import ReadingSection from '../components/ReadingSection';
import ArtSection from '../components/ArtSection';
import PersonalInfo from '../components/PersonalInfo';

const Index = () => {
  const defaultInfo = {
    introduction: "Thanks for visiting! I'm Jon, nice to meet you :)",
    email: "jonmgalante@gmail.com",
    twitter: "",
    github: "",
    interests: "A few of my favorite travel photos"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <div className="container py-8">
          <PersonalInfo
            introduction={defaultInfo.introduction}
            email={defaultInfo.email}
            twitter={defaultInfo.twitter}
            github={defaultInfo.github}
          />

          {/* These components now rely on built-in fallback UI */}
          <ProjectsSection projects={[]} loading={false} />
          <CompaniesSection companies={[]} loading={false} />
          <WritingsSection writings={[]} loading={false} />

          <ReadingSection />

          {/* These two still use Firestore */}
          <InterestsSection interests={defaultInfo.interests} />
          <ArtSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
