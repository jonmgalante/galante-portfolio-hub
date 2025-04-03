
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
  );
};

export default ProjectsSection;
