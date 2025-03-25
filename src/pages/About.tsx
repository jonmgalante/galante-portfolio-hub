
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container py-8">
          <h1 className="text-3xl font-serif mb-6">About</h1>
          
          <div className="prose max-w-none">
            <p>
              I'm Jon Galante, a [your profession] based in [your location]. I have [X] years of experience 
              in [your field] with a focus on [your specialization].
            </p>
            
            <h2>Background</h2>
            <p>
              I received my [degree] in [field of study] from [university/college]. After graduation, 
              I [describe your career path briefly].
            </p>
            
            <p>
              Throughout my career, I've worked with [types of companies/clients] on [types of projects/products]. 
              My approach is [describe your work philosophy or methodology].
            </p>
            
            <h2>Skills & Expertise</h2>
            <ul>
              <li>[Skill 1]</li>
              <li>[Skill 2]</li>
              <li>[Skill 3]</li>
              <li>[Skill 4]</li>
              <li>[Skill 5]</li>
            </ul>
            
            <h2>Personal</h2>
            <p>
              Outside of work, I enjoy [hobbies/interests]. I'm currently exploring [something you're learning or a current interest].
            </p>
            
            <p>
              I believe in [a personal philosophy or principle that guides your work or life].
            </p>
            
            <h2>Contact</h2>
            <p>
              The best way to reach me is via email at <a href="mailto:your-email@example.com">your-email@example.com</a>.
            </p>
            
            <p>
              You can also find me on:
            </p>
            
            <ul>
              <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
