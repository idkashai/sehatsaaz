import React from 'react';
import type { Language } from '../types';
import { content } from '../i18n/locales';

interface FooterProps {
    language: Language;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
    const t = content[language];

    return (
        <footer className="container mx-auto max-w-6xl mt-8 py-6 px-4 sm:px-6 md:px-8 text-center text-xs text-slate-500" dir={language === 'ur' ? 'rtl' : 'ltr'}>
            <p>&copy; {new Date().getFullYear()} SehatSaaz. {t.footerRights}</p>
            <p className="font-bold mt-1">{t.footerDisclaimer}</p>
        </footer>
    );
}

export default Footer;