import React, { useEffect, useState } from 'react';
import type { Language, Page } from '../../types';
import { content } from '../../i18n/locales';
import { MicIcon } from '../Icons';

interface VoiceAssistantPageProps {
    setPage: (page: Page) => void;
    language: Language;
}

const VoiceAssistantPage: React.FC<VoiceAssistantPageProps> = ({ setPage, language }) => {
    const t = content[language];
    const [messages, setMessages] = useState<any[]>([]);

    useEffect(() => {
        // Automatically speak the welcome message in Urdu when the component loads
        if ('speechSynthesis' in window) {
            const welcomeText = "محترم، خوش آمدید۔ آج میں آپ کی تشخیص میں کیا مدد کر سکتا ہوں؟ براہ کرم مجھے اپنی علامات کے بارے میں بتائیں۔";
            const utterance = new SpeechSynthesisUtterance(welcomeText);
            utterance.lang = 'ur-PK';
            utterance.rate = 0.9;
            window.speechSynthesis.speak(utterance);

            setMessages([{id: 1, text: welcomeText, sender: 'ai'}]);
        }
    }, []);

    return (
        <div className="container mx-auto max-w-3xl p-4 sm:p-6 md:p-8" dir={language === 'ur' ? 'rtl' : 'ltr'}>
            <div className="bg-white rounded-2xl shadow-lg flex flex-col h-[70vh]">
                <header className="p-4 border-b text-center">
                    <h1 className="text-xl font-bold text-slate-900">{t.voiceAssistantTitle}</h1>
                </header>

                <div className="flex-grow p-4 space-y-4 overflow-y-auto">
                    {/* Placeholder for chat messages */}
                     {messages.map(msg => (
                         <div key={msg.id} className={`flex ${msg.sender === 'ai' ? 'justify-start' : 'justify-end'}`}>
                            <p className={`max-w-xs md:max-w-md p-3 rounded-lg ${msg.sender === 'ai' ? 'bg-slate-100 text-slate-800' + (language === 'ur' ? ' text-right' : '') : 'bg-teal-600 text-white'}`}>
                                {msg.text}
                            </p>
                        </div>
                     ))}
                     <div className="flex justify-start">
                         <div className="max-w-xs md:max-w-md p-3 rounded-lg bg-slate-100 text-slate-800">
                            <p className={language === 'ur' ? 'text-right' : ''}>{t.voiceAssistantGuide}</p>
                            <p className="mt-2 font-semibold text-sm text-yellow-800 bg-yellow-100 p-2 rounded-md">{t.voiceAssistantReportPrompt}</p>
                            <button onClick={() => setPage('analyzer')} className="mt-2 text-sm font-semibold text-teal-600 hover:text-teal-800">{t.goToAnalyzer} &rarr;</button>
                         </div>
                     </div>
                </div>

                <div className="p-4 border-t bg-slate-50">
                    <div className="flex items-center gap-2">
                        <input 
                            type="text"
                            placeholder={t.inputPlaceholder}
                            className="flex-grow w-full px-3 py-2 bg-white border border-slate-300 rounded-full shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                        />
                        <button className="bg-teal-600 text-white p-3 rounded-full hover:bg-teal-700 transition-colors">
                            <MicIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoiceAssistantPage;
