
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface ProjectData {
  title: string;
  description: string;
  link?: string;
  year: string;
}

interface WritingData {
  title: string;
  date: string;
  link?: string;
  description?: string;
}

const defaultProjects: ProjectData[] = [
  {
    title: "Project One",
    description: "A brief description of this project",
    link: "https://example.com/project1",
    year: "2023"
  },
  {
    title: "Project Two",
    description: "Another interesting project I worked on",
    link: "https://example.com/project2",
    year: "2022"
  },
  {
    title: "Project Three",
    description: "An earlier project with significant impact",
    link: "https://example.com/project3",
    year: "2021"
  }
];

const defaultWritings: WritingData[] = [
  {
    title: "Article Title One",
    date: "June 2023",
    link: "https://example.com/article1",
    description: "Brief description of this article"
  },
  {
    title: "Article Title Two",
    date: "March 2023",
    link: "https://example.com/article2",
    description: "What this piece is about"
  },
  {
    title: "Article Title Three",
    date: "November 2022",
    link: "https://example.com/article3",
    description: "The subject matter of this writing"
  }
];

const defaultPersonalInfo = {
  introduction: "Hello! I'm Jon Galante. I'm a software developer and researcher. I'm interested in technology, science, and education. I build tools that help people learn and create.",
  experience: "Previously, I worked at tech companies building products used by millions of people. I studied Computer Science at a leading university.",
  email: "jon@example.com",
  twitter: "jongalante",
  github: "jongalante",
  interests: "I'm fascinated by artificial intelligence, quantum computing, and space exploration. In my free time, I enjoy hiking, reading, and playing chess. I'm currently learning about climate science and sustainable technologies.",
  books: [
    {name: "Thinking, Fast and Slow", author: "Daniel Kahneman", link: "https://example.com/book1"},
    {name: "Sapiens", author: "Yuval Noah Harari", link: "https://example.com/book2"},
    {name: "The Code Book", author: "Simon Singh", link: "https://example.com/book3"}
  ]
};

export const initializeDefaultData = async () => {
  try {
    // Check if projects exist
    const projectsCollection = collection(db, 'projects');
    const projectSnapshot = await getDocs(projectsCollection);
    
    // If no projects exist, add the default ones
    if (projectSnapshot.empty) {
      console.log("Adding default projects to Firebase...");
      for (const project of defaultProjects) {
        await addDoc(projectsCollection, project);
      }
      console.log("Default projects added successfully!");
    }

    // Check if writings exist
    const writingsCollection = collection(db, 'writings');
    const writingSnapshot = await getDocs(writingsCollection);
    
    // If no writings exist, add the default ones
    if (writingSnapshot.empty) {
      console.log("Adding default writings to Firebase...");
      for (const writing of defaultWritings) {
        await addDoc(writingsCollection, writing);
      }
      console.log("Default writings added successfully!");
    }

    // Check if personal info exists
    const personalInfoCollection = collection(db, 'personalInfo');
    const personalInfoSnapshot = await getDocs(personalInfoCollection);
    
    // If no personal info exists, add the default one
    if (personalInfoSnapshot.empty) {
      console.log("Adding default personal info to Firebase...");
      await addDoc(personalInfoCollection, defaultPersonalInfo);
      console.log("Default personal info added successfully!");
    }

  } catch (error) {
    console.error("Error initializing default data: ", error);
  }
};
