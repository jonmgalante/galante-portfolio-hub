
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast } from "../hooks/use-toast";
import { initializeDefaultData } from '../utils/initializeData';
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

interface PersonalInfo {
  id: string;
  introduction: string;
  experience: string;
  email: string;
  twitter?: string;
  github?: string;
  interests: string;
  books: BookData[];
}

const Index = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [writings, setWritings] = useState<WritingData[]>([]);
  const [companies, setCompanies] = useState<CompanyData[]>([]);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [dataInitialized, setDataInitialized] = useState(false);

  // Default personal info if none is fetched from Firebase
  const defaultInfo = {
    introduction: "Hello! I'm Jon Galante. I'm a [your profession/title]. I'm interested in [your interests], [another interest], and [another interest]. I [brief description of what you do or your current role].",
    experience: "Previously, I [previous experience]. I studied [your education] at [institution].",
    email: "your-email@example.com",
    twitter: "yourusername",
    github: "yourusername",
    interests: "I'm fascinated by [interest 1], [interest 2], and [interest 3]. In my free time, I enjoy [hobby 1], [hobby 2], and [hobby 3]. I'm currently learning [something you're learning].",
    books: [
      {name: "Book Title One", author: "Author Name", link: "https://example.com/book1"},
      {name: "Book Title Two", author: "Author Name", link: "https://example.com/book2"},
      {name: "Book Title Three", author: "Author Name", link: "https://example.com/book3"}
    ]
  };

  useEffect(() => {
    const initData = async () => {
      try {
        await initializeDefaultData();
        setDataInitialized(true);
      } catch (error) {
        console.error("Error initializing data: ", error);
      }
    };

    initData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!dataInitialized) return;
      
      try {
        // Fetch projects
        const projectsCollection = collection(db, 'projects');
        const projectSnapshot = await getDocs(projectsCollection);
        const projectList = projectSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as ProjectData[];
        setProjects(projectList);

        // Fetch writings
        const writingsCollection = collection(db, 'writings');
        const writingSnapshot = await getDocs(writingsCollection);
        const writingList = writingSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as WritingData[];
        setWritings(writingList);
        
        // Fetch companies
        const companiesCollection = collection(db, 'companies');
        const companiesSnapshot = await getDocs(companiesCollection);
        const companiesList = companiesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as CompanyData[];
        setCompanies(companiesList);
        
        // Fetch personal info
        const personalInfoCollection = collection(db, 'personalInfo');
        const personalInfoSnapshot = await getDocs(personalInfoCollection);
        if (!personalInfoSnapshot.empty) {
          const personalInfoData = {
            id: personalInfoSnapshot.docs[0].id,
            ...personalInfoSnapshot.docs[0].data()
          } as PersonalInfo;
          setPersonalInfo(personalInfoData);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
        toast({
          title: "Error",
          description: "Failed to load data. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dataInitialized]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container py-8">
          <PersonalInfo
            introduction={personalInfo?.introduction || defaultInfo.introduction}
            experience={personalInfo?.experience || defaultInfo.experience}
            email={personalInfo?.email || defaultInfo.email}
            twitter={personalInfo?.twitter || defaultInfo.twitter}
            github={personalInfo?.github || defaultInfo.github}
          />

          <ProjectsSection projects={projects} loading={loading} />
          
          <CompaniesSection companies={companies} loading={loading} />

          <WritingsSection writings={writings} loading={loading} />

          <InterestsSection 
            interests={personalInfo?.interests || defaultInfo.interests} 
          />

          <ReadingSection 
            books={personalInfo?.books || defaultInfo.books} 
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
