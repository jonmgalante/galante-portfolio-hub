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

interface BookData {
  name: string;
  author: string;
  link?: string;
}

interface CompanyData {
  name: string;
  role: string;
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

const defaultCompanies: CompanyData[] = [
  {
    name: "Tech Innovators Inc.",
    role: "Senior Developer",
    description: "Led development of key products and mentored junior team members"
  },
  {
    name: "Digital Solutions Ltd.",
    role: "Software Engineer",
    description: "Built scalable web applications and improved system architecture"
  },
  {
    name: "Future Systems",
    role: "Junior Developer",
    description: "Contributed to front-end development and participated in agile teams"
  }
];

const defaultPersonalInfo = {
  introduction: "Thanks for visiting! \nI'm Jon, nice to meet you :) \nI've helped build some b2b startups, and along the way had lots of fun building sales teams, closing big deals with enterprises like Microsoft and Amazon, and helping some great founders build out GTM.   \nMy wife Juliet and I live in NYC. Hit me up for coffee at jonmgalante@gmail.com or book time here.",
  email: "jongalante@gmail.com",
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
    
    // Check if companies exist
    const companiesCollection = collection(db, 'companies');
    const companiesSnapshot = await getDocs(companiesCollection);
    
    // If no companies exist, add the default ones
    if (companiesSnapshot.empty) {
      console.log("Adding default companies to Firebase...");
      for (const company of defaultCompanies) {
        await addDoc(companiesCollection, company);
      }
      console.log("Default companies added successfully!");
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
