
import React from 'react';
import Project from './Project';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  link?: string;
  year: string;
}

interface ProjectsSectionProps {
  projects: ProjectData[];
  loading: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, loading }) => {
  return (
    <section className="section mt-8">
      <h2 className="text-xl font-serif mb-4">Projects</h2>
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
            title="SouvieShelf"
            description="your personal museum from a life well-traveled"
            link="https://souvieshelf.com/auth"
          />
          <Project
            title="Christmas Album"
            description="recorded for Juliet"
            link="https://averybearychristmas.com/"
          />
        </>
      )}
    </section>
  );
};

export default ProjectsSection;
