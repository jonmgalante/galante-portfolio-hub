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
import ArtSection from '../components/ArtSection';

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
  email: string;
  twitter?: string;
  github?: string;
  interests: string;
  books: BookData[];
}

const defaultInfo = {
  introduction: "Thanks for visiting! I'm Jon, nice to meet you :)",
  email: "jonmgalante@gmail.com",
  twitter: "",
  github: "",
  interests: "A few of my favorite travel photos",
  books: [
    {name: "Book Title One", author: "Author Name", link: "https://example.com/book1"},
    {name: "Book Title Two", author: "Author Name", link: "https://example.com/book2"},
    {name: "Book Title Three", author: "Author Name", link: "https://example.com/book3"}
  ]
};

const Index = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [writings, setWritings] = useState<WritingData[]>([]);
  const [companies, setCompanies] = useState<CompanyData[]>([]);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [dataInitialized, setDataInitialized] = useState(false);

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
        const projectsCollection = collection(db, 'projects');
        const projectSnapshot = await getDocs(projectsCollection);
        const projectList = projectSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as ProjectData[];
        setProjects(projectList);

        const writingsCollection = collection(db, 'writings');
        const writingSnapshot = await getDocs(writingsCollection);
        const writingList = writingSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as WritingData[];
        setWritings(writingList);
        
        const companiesCollection = collection(db, 'companies');
        const companiesSnapshot = await getDocs(companiesCollection);
        const companiesList = companiesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as CompanyData[];
        setCompanies(companiesList);
        
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
            email={personalInfo?.email || defaultInfo.email}
            twitter={personalInfo?.twitter || defaultInfo.twitter}
            github={personalInfo?.github || defaultInfo.github}
          />

          <ProjectsSection projects={projects} loading={loading} />
          
          <CompaniesSection companies={companies} loading={loading} />

          <WritingsSection writings={writings} loading={loading} />

          <ReadingSection />

          <InterestsSection 
            interests={personalInfo?.interests || defaultInfo.interests} 
          />
          
          <ArtSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
