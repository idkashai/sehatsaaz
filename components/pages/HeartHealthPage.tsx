import React, { useState } from 'react';
import type { Language, Page } from '../../types';
import { content } from '../../i18n/locales';
import { VideoPlayerModal } from '../VideoPlayerModal';
// FIX: Imported the missing `StethoscopeIcon` component.
import { HeartPulseIcon, ListChecksIcon, UsersIcon, HeartCrackIcon, ShieldCheckIcon, ActivityIcon, CookingPotIcon, CigaretteIcon, WindIcon, BookHeartIcon, StethoscopeIcon } from '../Icons';

interface HeartHealthPageProps {
    setPage: (page: Page) => void;
    language: Language;
}

const HeartHealthPage: React.FC<HeartHealthPageProps> = ({ setPage, language }) => {
    const t = content[language];
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const YOUTUBE_VIDEO_ID = "qKUG_Bth3s4";

    const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
            <div className="flex items-center gap-4">
                <div className="bg-red-50 p-3 rounded-full">
                    {icon}
                </div>
                <h3 className="font-bold text-xl text-slate-800">{title}</h3>
            </div>
            <div className="mt-4 text-slate-600 space-y-3 prose prose-sm max-w-none">{children}</div>
        </div>
    );

    const ConditionCard: React.FC<{title: string, desc: string}> = ({title, desc}) => (
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-red-800">{title}</h4>
            <p className="mt-1">{desc}</p>
        </div>
    );

    return (
        <div dir={language === 'ur' ? 'rtl' : 'ltr'}>
             {/* Hero Section */}
            <section className="relative w-full h-64 bg-slate-800">
                <img src="https://images.unsplash.com/photo-1599323238813-4370d38a0a9d?q=80&w=1932&auto=format&fit=crop" alt="Heart health concept" className="w-full h-full object-cover opacity-30"/>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                        <h1 className="text-3xl sm:text-5xl font-extrabold">{t.heartHealthTitle}</h1>
                        <p className="mt-2 text-lg text-slate-200 max-w-2xl mx-auto">{t.heartHealthIntro}</p>
                    </div>
                </div>
            </section>
        
            <div className="container mx-auto max-w-5xl p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    
                    {/* Main Content */}
                    <main className="lg:col-span-2 space-y-8">
                        <InfoCard icon={<HeartPulseIcon className="h-6 w-6 text-red-600"/>} title={t.heartHealthWhatIsTitle}>
                           <p>{t.heartHealthWhatIsDesc}</p>
                        </InfoCard>

                        <InfoCard icon={<ListChecksIcon className="h-6 w-6 text-red-600"/>} title={t.symptoms}>
                           <p className="font-semibold text-yellow-800 bg-yellow-100 p-2 rounded-md">Warning: High blood pressure often has no symptoms. Regular checkups are vital. Seek immediate medical help if you experience sudden chest pain or shortness of breath.</p>
                           <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                                {t.heartHealthSymptomsList.map((s, i) => <li key={i}>{s}</li>)}
                           </ul>
                        </InfoCard>

                        <InfoCard icon={<HeartCrackIcon className="h-6 w-6 text-red-600"/>} title={t.complications}>
                           <p>Ignoring heart health risks can lead to severe, life-threatening events. Prevention is the best medicine.</p>
                           <div className="space-y-3">
                               {t.heartHealthComplicationsList.map((c, i) => <ConditionCard key={i} title={c.title} desc={c.desc} />)}
                           </div>
                        </InfoCard>

                        <InfoCard icon={<ShieldCheckIcon className="h-6 w-6 text-red-600"/>} title={t.management}>
                            <p>A heart-healthy lifestyle is your best defense against cardiovascular disease. Focus on these key areas:</p>
                             <div className="flex flex-col sm:flex-row gap-4">
                                <img src="https://images.unsplash.com/photo-1540420773420-2850a26b685a?q=80&w=1887&auto=format&fit=crop" alt="Heart Healthy Diet" className="w-full sm:w-1/3 h-auto object-cover rounded-lg"/>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg flex items-center gap-2"><CookingPotIcon className="h-5 w-5 text-red-700"/>{t.heartHealthManagementDietTitle}</h4>
                                    <ul className="list-disc list-inside mt-2">{t.heartHealthManagementDietPoints.map((p, i) => <li key={i}>{p}</li>)}</ul>
                                </div>
                            </div>
                             <div className="flex flex-col sm:flex-row-reverse gap-4 mt-4">
                                <img src="https://images.unsplash.com/photo-1552674605-db6ffd402907?q=80&w=1887&auto=format&fit=crop" alt="Person Exercising" className="w-full sm:w-1/3 h-auto object-cover rounded-lg"/>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg flex items-center gap-2"><ActivityIcon className="h-5 w-5 text-red-700"/>{t.heartHealthManagementExerciseTitle}</h4>
                                    <ul className="list-disc list-inside mt-2">{t.heartHealthManagementExercisePoints.map((p, i) => <li key={i}>{p}</li>)}</ul>
                                </div>
                            </div>
                            <h4 className="font-bold text-lg mt-4 flex items-center gap-2"><WindIcon className="h-5 w-5 text-red-700"/>{t.heartHealthManagementStressTitle}</h4>
                            <ul className="list-disc list-inside mt-2">{t.heartHealthManagementStressPoints.map((p, i) => <li key={i}>{p}</li>)}</ul>
                            <h4 className="font-bold text-lg mt-4 flex items-center gap-2"><CigaretteIcon className="h-5 w-5 text-red-700"/>{t.heartHealthManagementSmokingTitle}</h4>
                            <ul className="list-disc list-inside mt-2">{t.heartHealthManagementSmokingPoints.map((p, i) => <li key={i}>{p}</li>)}</ul>
                            <h4 className="font-bold text-lg mt-4 flex items-center gap-2"><StethoscopeIcon className="h-5 w-5 text-red-700"/>{t.heartHealthManagementCheckupsTitle}</h4>
                            <ul className="list-disc list-inside mt-2">{t.heartHealthManagementCheckupsPoints.map((p, i) => <li key={i}>{p}</li>)}</ul>
                        </InfoCard>

                        <InfoCard icon={<BookHeartIcon className="h-6 w-6 text-red-600"/>} title={t.references}>
                            <p className="text-xs">This information is for educational purposes, guided by recommendations from leading health organizations. Always seek advice from a qualified doctor for your health concerns.</p>
                            <ul className="text-xs list-disc list-inside">
                                <li>World Health Organization (WHO)</li>
                                <li>American Heart Association (AHA)</li>
                                <li>National Heart, Lung, and Blood Institute (NHLBI)</li>
                            </ul>
                        </InfoCard>
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-6 sticky top-20">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                           <h3 className="font-bold text-xl text-slate-800 mb-4">{t.heartHealthConditionsTitle}</h3>
                           <div className="space-y-4">
                               <ConditionCard title={t.heartHealthHypertensionTitle} desc={t.heartHealthHypertensionDesc}/>
                               <ConditionCard title={t.heartHealthCholesterolTitle} desc={t.heartHealthCholesterolDesc}/>
                               <ConditionCard title={t.heartHealthCadTitle} desc={t.heartHealthCadDesc}/>
                           </div>
                        </div>
                        
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                           <h3 className="font-bold text-xl text-slate-800 mb-4">{t.riskFactors}</h3>
                           <ul className="space-y-2 text-sm">
                            {t.heartHealthRiskFactorsList.map((rf, i) => (
                                <li key={i}><span className="font-semibold text-slate-700">{rf.title}:</span> <span className="text-slate-600">{rf.desc}</span></li>
                            ))}
                           </ul>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                           <h3 className="font-bold text-xl text-slate-800 mb-2">{t.diagnosis}</h3>
                            <p className="text-slate-600 text-sm mb-4">Diagnosis may involve blood pressure checks, blood tests, or an ECG. Our AI can help you understand your reports.</p>
                            <button
                                onClick={() => setPage('analyzer')}
                                className="w-full text-center rounded-md bg-red-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline transition-all"
                            >
                                {t.goToAnalyzer}
                            </button>
                             <button
                                onClick={() => setIsVideoOpen(true)}
                                className="w-full text-center mt-2 text-sm font-semibold text-red-600 hover:text-red-800"
                            >
                                {t.watchVideo}
                            </button>
                        </div>
                    </aside>
                </div>
            </div>

            {isVideoOpen && <VideoPlayerModal videoId={YOUTUBE_VIDEO_ID} onClose={() => setIsVideoOpen(false)} />}
        </div>
    );
};

export default HeartHealthPage;