
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, 'projects');
        const projectSnapshot = await getDocs(projectsCollection);
        const projectList = projectSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProjects(projectList);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container py-8">
          <h1 className="text-3xl font-serif mb-6">Projects</h1>
          
          {loading ? (
            <p>Loading projects...</p>
          ) : projects.length > 0 ? (
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id} className="border-b border-gray-200 pb-6">
                  <h2 className="text-xl font-serif mb-2">{project.title}</h2>
                  <p className="text-gray-500 mb-2">{project.year}</p>
                  <p className="mb-3">{project.description}</p>
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="text-blue-600 hover:text-blue-800"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-serif mb-2">Project One</h2>
                <p className="text-gray-500 mb-2">2023</p>
                <p className="mb-3">A detailed description of this project. What it does, what technologies were used, and what challenges were overcome during its development.</p>
                <a 
                  href="https://example.com/project1" 
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-serif mb-2">Project Two</h2>
                <p className="text-gray-500 mb-2">2022</p>
                <p className="mb-3">Another interesting project with its own unique challenges and solutions. This includes information about the problem it solves and the impact it has had.</p>
                <a 
                  href="https://example.com/project2" 
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-serif mb-2">Project Three</h2>
                <p className="text-gray-500 mb-2">2021</p>
                <p className="mb-3">An earlier project that demonstrates a different set of skills. This project was significant because of its innovative approach to solving a common problem.</p>
                <a 
                  href="https://example.com/project3" 
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Project →
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
