import React, { useState } from 'react';
import type { Language, Page } from '../../types';
import { content } from '../../i18n/locales';
import { VideoPlayerModal } from '../VideoPlayerModal';
import { DropletIcon, ListChecksIcon, UsersIcon, HeartCrackIcon, ShieldCheckIcon, ActivityIcon, CookingPotIcon, FootIcon, BookHeartIcon } from '../Icons';

interface DiabetesPageProps {
    setPage: (page: Page) => void;
    language: Language;
}

const DiabetesPage: React.FC<DiabetesPageProps> = ({ setPage, language }) => {
    const t = content[language];
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const YOUTUBE_VIDEO_ID = "jJ6h8224LfA"; 

    const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
            <div className="flex items-center gap-4">
                <div className="bg-teal-50 p-3 rounded-full">
                    {icon}
                </div>
                <h3 className="font-bold text-xl text-slate-800">{title}</h3>
            </div>
            <div className="mt-4 text-slate-600 space-y-3 prose prose-sm max-w-none">{children}</div>
        </div>
    );

    const TypeCard: React.FC<{title: string, desc: string}> = ({title, desc}) => (
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-teal-800">{title}</h4>
            <p className="mt-1 text-sm">{desc}</p>
        </div>
    );

    return (
        <div dir={language === 'ur' ? 'rtl' : 'ltr'}>
             {/* Hero Section */}
            <section className="relative w-full h-64 bg-slate-800">
                <img src="https://images.unsplash.com/photo-1523473827555-5345b58936ec?q=80&w=2070&auto=format&fit=crop" alt="Healthy food for diabetes" className="w-full h-full object-cover opacity-30"/>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                        <h1 className="text-3xl sm:text-5xl font-extrabold">{t.diabetesTitle}</h1>
                        <p className="mt-2 text-lg text-slate-200 max-w-2xl mx-auto">{t.diabetesIntro}</p>
                    </div>
                </div>
            </section>
        
            <div className="container mx-auto max-w-5xl p-4 sm:p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    
                    {/* Main Content */}
                    <main className="lg:col-span-2 space-y-8">
                        <InfoCard icon={<DropletIcon className="h-6 w-6 text-teal-600"/>} title={t.diabetesWhatIsTitle}>
                           <p>{t.diabetesWhatIsDesc}</p>
                        </InfoCard>

                        <InfoCard icon={<ListChecksIcon className="h-6 w-6 text-teal-600"/>} title={t.symptoms}>
                           <ul className="list-disc list-inside grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                                {t.diabetesSymptomsList.map((s, i) => <li key={i}>{s}</li>)}
                           </ul>
                        </InfoCard>

                        <InfoCard icon={<UsersIcon className="h-6 w-6 text-teal-600"/>} title={t.riskFactors}>
                            <p>Several factors can increase your risk of developing diabetes. While some, like genetics, can't be changed, many are related to lifestyle and can be managed.</p>
                            <ul className="list-disc list-inside">
                                {t.diabetesRiskFactorsList.map((rf, i) => <li key={i}>{rf}</li>)}
                            </ul>
                        </InfoCard>

                        <InfoCard icon={<HeartCrackIcon className="h-6 w-6 text-teal-600"/>} title={t.complications}>
                           <p>Uncontrolled high blood sugar can lead to serious long-term health problems. Proper management is key to prevention.</p>
                           <div className="space-y-3">
                               {t.diabetesComplicationsList.map((c, i) => <TypeCard key={i} title={c.title} desc={c.desc} />)}
                           </div>
                        </InfoCard>

                        <InfoCard icon={<ShieldCheckIcon className="h-6 w-6 text-teal-600"/>} title={t.management}>
                            <p>Managing diabetes is a lifelong commitment to healthy habits. Here are the key areas to focus on:</p>
                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop" alt="Healthy Diet" className="w-full sm:w-1/3 h-auto object-cover rounded-lg"/>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg flex items-center gap-2"><CookingPotIcon className="h-5 w-5 text-teal-700"/>{t.diabetesManagementDietTitle}</h4>
                                    <ul className="list-disc list-inside mt-2">{t.diabetesManagementDietPoints.map((p, i) => <li key={i}>{p}</li>)}</ul>
                                </div>
                            </div>
                             <div className="flex flex-col sm:flex-row-reverse gap-4 mt-6">
                                <img src="https://images.unsplash.com/photo-1477332552946-cfb384ae22f6?q=80&w=1887&auto=format&fit=crop" alt="Person Exercising" className="w-full sm:w-1/3 h-auto object-cover rounded-lg"/>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg flex items-center gap-2"><ActivityIcon className="h-5 w-5 text-teal-700"/>{t.diabetesManagementExerciseTitle}</h4>
                                    <ul className="list-disc list-inside mt-2">{t.diabetesManagementExercisePoints.map((p, i) => <li key={i}>{p}</li>)}</ul>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h4 className="font-bold text-lg mt-4 flex items-center gap-2"><DropletIcon className="h-5 w-5 text-teal-700"/>{t.diabetesManagementMonitoringTitle}</h4>
                                <ul className="list-disc list-inside mt-2">{t.diabetesManagementMonitoringPoints.map((p, i) => <li key={i}>{p}</li>)}</ul>
                                <h4 className="font-bold text-lg mt-4">{t.diabetesManagementMedsTitle}</h4>
                                <ul className="list-disc list-inside mt-2">{t.diabetesManagementMedsPoints.map((p, i) => <li key={i}>{p}</li>)}</ul>
                                <h4 className="font-bold text-lg mt-4 flex items-center gap-2"><FootIcon className="h-5 w-5 text-teal-700"/>{t.diabetesManagementFootCareTitle}</h4>
                                <ul className="list-disc list-inside mt-2">{t.diabetesManagementFootCarePoints.map((p, i) => <li key={i}>{p}</li>)}</ul>
                            </div>
                        </InfoCard>

                        <InfoCard icon={<BookHeartIcon className="h-6 w-6 text-teal-600"/>} title={t.references}>
                            <p className="text-xs">The information provided is for educational purposes and is based on guidelines from reputable organizations. Always consult a healthcare professional for medical advice.</p>
                            <ul className="text-xs list-disc list-inside">
                                <li>World Health Organization (WHO)</li>
                                <li>American Diabetes Association (ADA)</li>
                                <li>International Diabetes Federation (IDF)</li>
                            </ul>
                        </InfoCard>
                    </main>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1 space-y-6 sticky top-20">
                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                           <h3 className="font-bold text-xl text-slate-800 mb-4">{t.diabetesTypesTitle}</h3>
                           <div className="space-y-4">
                               <TypeCard title={t.diabetesType1Title} desc={t.diabetesType1Desc}/>
                               <TypeCard title={t.diabetesType2Title} desc={t.diabetesType2Desc}/>
                               <TypeCard title={t.diabetesGestationalTitle} desc={t.diabetesGestationalDesc}/>
                           </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
                           <h3 className="font-bold text-xl text-slate-800 mb-2">{t.diagnosis}</h3>
                            <p className="text-slate-600 text-sm mb-4">Diagnosis involves blood tests like fasting blood sugar, A1C, and glucose tolerance tests. Our AI can help you understand your lab reports, but a doctor must provide the final diagnosis.</p>
                            <button
                                onClick={() => setPage('analyzer')}
                                className="w-full text-center rounded-md bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline transition-all"
                            >
                                {t.goToAnalyzer}
                            </button>
                             <button
                                onClick={() => setIsVideoOpen(true)}
                                className="w-full text-center mt-2 text-sm font-semibold text-teal-600 hover:text-teal-800"
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

export default DiabetesPage;