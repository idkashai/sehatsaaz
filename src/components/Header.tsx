import React from 'react';
import { StethoscopeIcon, LanguageIcon } from './Icons';
import type { Language, Page } from '../types';
import { content } from '../i18n/locales';

interface HeaderProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    setPage: (page: Page) => void;
    currentPage: Page;
}

export const Header: React.FC<HeaderProps> = ({ language, setLanguage, setPage, currentPage }) => {
  const t = content[language];

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'ur' : 'en');
  };

  const NavLink: React.FC<{pageName: Page, text: string}> = ({ pageName, text }) => (
     <button 
        onClick={() => setPage(pageName)}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${currentPage === pageName ? 'bg-teal-50 text-teal-700' : 'text-slate-600 hover:bg-slate-100'}`}
    >
        {text}
    </button>
  );

  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setPage('home')}>
            <StethoscopeIcon className="h-8 w-8 text-teal-600" />
            <span className="text-xl font-bold text-slate-800 tracking-tight">
              SehatSaaz
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
             <nav className="hidden sm:flex items-center space-x-2" dir={language === 'ur' ? 'rtl' : 'ltr'}>
                <NavLink pageName="home" text={t.navHome} />
                <NavLink pageName="analyzer" text={t.navAnalyzer} />
                <NavLink pageName="healthLog" text={t.navHealthLog} />
             </nav>
            <button
              onClick={handleLanguageToggle}
              className="flex items-center justify-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-all duration-200"
              aria-label="Toggle language"
            >
              <LanguageIcon className="h-5 w-5 text-slate-500" />
              <span className={language === 'ur' ? '' : 'font-urdu'}>{t.languageToggle}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};