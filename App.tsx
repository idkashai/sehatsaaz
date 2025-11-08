import React, { useState } from 'react';
import { Header } from './components/Header';
import HomePage from './components/pages/HomePage';
import LabAnalyzerPage from './components/pages/LabAnalyzerPage';
import DiabetesPage from './components/pages/DiabetesPage';
import HeartHealthPage from './components/pages/HeartHealthPage';
import HealthLogPage from './components/pages/HealthLogPage';
import VoiceAssistantPage from './components/pages/VoiceAssistantPage';
import Footer from './components/Footer';
import type { Language, Page } from './types';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [page, setPage] = useState<Page>('home');

  return (
    <div className={`min-h-screen bg-slate-50 font-sans text-slate-800 ${language === 'ur' ? 'font-urdu' : ''}`}>
      <Header 
        language={language} 
        setLanguage={setLanguage} 
        setPage={setPage}
        currentPage={page}
      />
      <main>
        {page === 'home' && <HomePage setPage={setPage} language={language} />}
        {page === 'analyzer' && <LabAnalyzerPage language={language} />}
        {page === 'diabetes' && <DiabetesPage setPage={setPage} language={language} />}
        {page === 'heartHealth' && <HeartHealthPage setPage={setPage} language={language} />}
        {page === 'healthLog' && <HealthLogPage language={language} />}
        {page === 'voiceAssistant' && <VoiceAssistantPage setPage={setPage} language={language} />}
      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;
