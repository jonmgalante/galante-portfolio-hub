
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';
import Writing from '../components/Writing';
import { toast } from "../hooks/use-toast";
import { initializeDefaultData } from '../utils/initializeData';

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

interface PersonalInfo {
  id: string;
  introduction: string;
  experience: string;
  education: string;
  email: string;
  twitter?: string;
  github?: string;
  interests: string;
  books: {name: string, author: string, link?: string}[];
}

const Index = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [writings, setWritings] = useState<WritingData[]>([]);
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
  
  // Default personal info if none is fetched from Firebase
  const defaultInfo = {
    introduction: "Hello! I'm Jon Galante. I'm a [your profession/title]. I'm interested in [your interests], [another interest], and [another interest]. I [brief description of what you do or your current role].",
    experience: "Previously, I [previous experience]. I studied [your education] at [institution].",
    email: "your-email@example.com",
    twitter: "yourusername",
    github: "yourusername",
    interests: "I'm fascinated by [interest 1], [interest 2], and [interest 3]. In my free time, I enjoy [hobby 1], [hobby 2], and [hobby 3]. I'm currently learning [something you're learning].",
    books: [
      {name: "Book Title One", author: "Author Name"},
      {name: "Book Title Two", author: "Author Name"},
      {name: "Book Title Three", author: "Author Name"}
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container py-8">
          <section className="section">
            <p>{personalInfo?.introduction || defaultInfo.introduction}</p>
            <p>{personalInfo?.experience || defaultInfo.experience}</p>
            <p>
              You can reach me at <a href={`mailto:${personalInfo?.email || defaultInfo.email}`}>{personalInfo?.email || defaultInfo.email}</a>. 
              {personalInfo?.twitter && (
                <> I'm also on <a href={`https://twitter.com/${personalInfo.twitter}`} target="_blank" rel="noopener noreferrer">Twitter</a> and </>
              )}
              {personalInfo?.github && (
                <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer">GitHub</a>
              )}
              {!personalInfo?.twitter && !personalInfo?.github && (
                <> I'm also on <a href={`https://twitter.com/${defaultInfo.twitter}`} target="_blank" rel="noopener noreferrer">Twitter</a> and 
                <a href={`https://github.com/${defaultInfo.github}`} target="_blank" rel="noopener noreferrer"> GitHub</a>.</>
              )}
            </p>
          </section>

          <section className="section mt-8">
            <h2 className="text-xl font-serif mb-4">Selected Projects</h2>
            {loading ? (
              <p>Loading projects...</p>
            ) : projects.length > 0 ? (
              projects.map((project) => (
                <Project
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  link={project.link}
                  year={project.year}
                />
              ))
            ) : (
              <>
                <Project
                  title="Project One"
                  description="A brief description of this project"
                  link="https://example.com/project1"
                  year="2023"
                />
                <Project
                  title="Project Two"
                  description="Another interesting project I worked on"
                  link="https://example.com/project2"
                  year="2022"
                />
                <Project
                  title="Project Three"
                  description="An earlier project with significant impact"
                  link="https://example.com/project3"
                  year="2021"
                />
              </>
            )}
          </section>

          <section className="section mt-8">
            <h2 className="text-xl font-serif mb-4">Writing</h2>
            {loading ? (
              <p>Loading writings...</p>
            ) : writings.length > 0 ? (
              writings.map((writing) => (
                <Writing
                  key={writing.id}
                  id={writing.id}
                  title={writing.title}
                  date={writing.date}
                  link={writing.link}
                  description={writing.description}
                />
              ))
            ) : (
              <>
                <Writing
                  title="Article Title One"
                  date="June 2023"
                  link="https://example.com/article1"
                  description="Brief description of this article"
                />
                <Writing
                  title="Article Title Two"
                  date="March 2023"
                  link="https://example.com/article2"
                  description="What this piece is about"
                />
                <Writing
                  title="Article Title Three"
                  date="November 2022"
                  link="https://example.com/article3"
                  description="The subject matter of this writing"
                />
              </>
            )}
          </section>

          <section className="section mt-8">
            <h2 className="text-xl font-serif mb-4">Interests</h2>
            <p>
              {personalInfo?.interests || defaultInfo.interests}
            </p>
          </section>

          <section className="section mt-8">
            <h2 className="text-xl font-serif mb-4">Reading</h2>
            <p>Some books I've enjoyed recently:</p>
            <ul className="mt-2">
              {(personalInfo?.books || defaultInfo.books).map((book, index) => (
                <li key={index} className="mb-1">
                  {book.link ? (
                    <a href={book.link} className="text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                      {book.name}
                    </a>
                  ) : (
                    <span>{book.name}</span>
                  )}
                  {book.author && <span> by {book.author}</span>}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
