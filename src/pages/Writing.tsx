
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WritingItem from '../components/Writing';

const Writing = () => {
  const [writings, setWritings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWritings = async () => {
      try {
        const writingsCollection = collection(db, 'writings');
        const writingSnapshot = await getDocs(writingsCollection);
        const writingList = writingSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setWritings(writingList);
      } catch (error) {
        console.error("Error fetching writings: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWritings();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="container py-8">
          <h1 className="text-3xl font-serif mb-6">Writing</h1>
          
          {loading ? (
            <p>Loading articles...</p>
          ) : writings.length > 0 ? (
            <div className="space-y-6">
              {writings.map((writing) => (
                <div key={writing.id} className="border-b border-gray-200 pb-6">
                  <h2 className="text-xl font-serif mb-2">{writing.title}</h2>
                  <p className="text-gray-500 mb-2">{writing.date}</p>
                  <p className="mb-3">{writing.description}</p>
                  {writing.link && (
                    <a 
                      href={writing.link} 
                      className="text-blue-600 hover:text-blue-800"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Read Article →
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-serif mb-2">Article Title One</h2>
                <p className="text-gray-500 mb-2">June 2023</p>
                <p className="mb-3">A summary of this article that explains its main points and the insights it provides. This gives readers a preview of what they can expect when they click through.</p>
                <a 
                  href="https://example.com/article1" 
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Read Article →
                </a>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-serif mb-2">Article Title Two</h2>
                <p className="text-gray-500 mb-2">March 2023</p>
                <p className="mb-3">Another interesting piece that explores a different topic. This summary gives potential readers an idea of the subject matter and why it might be relevant to them.</p>
                <a 
                  href="https://example.com/article2" 
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Read Article →
                </a>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h2 className="text-xl font-serif mb-2">Article Title Three</h2>
                <p className="text-gray-500 mb-2">November 2022</p>
                <p className="mb-3">An earlier piece that demonstrates your thinking on a particular subject. This summary highlights the key insights and conclusions drawn in the article.</p>
                <a 
                  href="https://example.com/article3" 
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Read Article →
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

export default Writing;
