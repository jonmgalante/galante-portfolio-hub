
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PersonalInfo from '../components/PersonalInfo';
import ProjectsSection from '../components/ProjectsSection';
import CompaniesSection from '../components/CompaniesSection';
import WritingsSection from '../components/WritingsSection';
import InterestsSection from '../components/InterestsSection';
import ReadingSection from '../components/ReadingSection';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  link?: string;
  year: string;
}

interface WritingData {
  id: string;
  title: string;
  date: string;
  link?: string;
  description?: string;
}

interface CompanyData {
  id: string;
  name: string;
  role: string;
  description?: string;
}

interface BookData {
  name: string;
  author: string;
  link?: string;
}

const Index = () => {
  // Static default data
  const defaultInfo = {
    introduction: "Thanks for visiting! \n\nI'm Jon, nice to meet you :) \n\nI've helped build some b2b startups, and along the way had lots of fun building sales teams, closing big deals with enterprises like Microsoft and Amazon, and helping some great founders build out GTM. \n\nMy wife Juliet and I live in NYC. Hit me up for coffee at jongalante@gmail.com or book time here.",
    email: "jongalante@gmail.com",
    twitter: "",
    github: "",
    interests: "When I'm not driving revenue growth or building high-performing sales teams, I enjoy exploring my personal interests and hobbies.",
    books: [
      {name: "Book Title One", author: "Author Name", link: "https://example.com/book1"},
      {name: "Book Title Two", author: "Author Name", link: "https://example.com/book2"},
      {name: "Book Title Three", author: "Author Name", link: "https://example.com/book3"}
    ]
  };

  const defaultProjects: ProjectData[] = [
    {
      id: "1",
      title: "Project One",
      description: "A brief description of this project",
      link: "https://example.com/project1",
      year: "2023"
    },
    {
      id: "2",
      title: "Project Two",
      description: "Another interesting project I worked on",
      link: "https://example.com/project2",
      year: "2022"
    },
    {
      id: "3",
      title: "Project Three",
      description: "An earlier project with significant impact",
      link: "https://example.com/project3",
      year: "2021"
    }
  ];

  const defaultWritings: WritingData[] = [
    {
      id: "1",
      title: "Article Title One",
      date: "June 2023",
      link: "https://example.com/article1",
      description: "Brief description of this article"
    },
    {
      id: "2",
      title: "Article Title Two",
      date: "March 2023",
      link: "https://example.com/article2",
      description: "What this piece is about"
    },
    {
      id: "3",
      title: "Article Title Three",
      date: "November 2022",
      link: "https://example.com/article3",
      description: "The subject matter of this writing"
    }
  ];

  const defaultCompanies: CompanyData[] = [
    {
      id: "1",
      name: "Tech Innovators Inc.",
      role: "Senior Developer",
      description: "Led development of key products and mentored junior team members"
    },
    {
      id: "2",
      name: "Digital Solutions Ltd.",
      role: "Software Engineer",
      description: "Built scalable web applications and improved system architecture"
    },
    {
      id: "3",
      name: "Future Systems",
      role: "Junior Developer",
      description: "Contributed to front-end development and participated in agile teams"
    }
  ];

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

          <ProjectsSection projects={defaultProjects} loading={false} />
          
          <CompaniesSection companies={defaultCompanies} loading={false} />

          <WritingsSection writings={defaultWritings} loading={false} />

          <InterestsSection 
            interests={defaultInfo.interests} 
          />

          <ReadingSection 
            books={defaultInfo.books} 
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
