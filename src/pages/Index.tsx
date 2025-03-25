
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';
import Writing from '../components/Writing';

const Index = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [writings, setWritings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch projects
        const projectsCollection = collection(db, 'projects');
        const projectSnapshot = await getDocs(projectsCollection);
        const projectList = projectSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjects(projectList);

        // Fetch writings
        const writingsCollection = collection(db, 'writings');
        const writingSnapshot = await getDocs(writingsCollection);
        const writingList = writingSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setWritings(writingList);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container py-8">
          <section className="section">
            <p>
              Hello! I'm Jon Galante. I'm a [your profession/title]. I'm interested in [your interests], 
              [another interest], and [another interest]. I [brief description of what you do or your current role].
            </p>
            
            <p>
              Previously, I [previous experience]. I studied [your education] at [institution].
            </p>
            
            <p>
              You can reach me at <a href="mailto:your-email@example.com">your-email@example.com</a>. 
              I'm also on <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a> and 
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"> GitHub</a>.
            </p>
          </section>

          <section className="section">
            <h2>Selected Projects</h2>
            {loading ? (
              <p>Loading projects...</p>
            ) : projects.length > 0 ? (
              projects.map((project) => (
                <Project
                  key={project.id}
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

          <section className="section">
            <h2>Writing</h2>
            {loading ? (
              <p>Loading writings...</p>
            ) : writings.length > 0 ? (
              writings.map((writing) => (
                <Writing
                  key={writing.id}
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

          <section className="section">
            <h2>Interests</h2>
            <p>
              I'm fascinated by [interest 1], [interest 2], and [interest 3]. In my free time, I enjoy [hobby 1], 
              [hobby 2], and [hobby 3]. I'm currently learning [something you're learning].
            </p>
          </section>

          <section className="section">
            <h2>Reading</h2>
            <p>Some books I've enjoyed recently:</p>
            <ul>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Book Title One</a> by Author Name</li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Book Title Two</a> by Author Name</li>
              <li><a href="#" className="text-blue-600 hover:text-blue-800">Book Title Three</a> by Author Name</li>
            </ul>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
