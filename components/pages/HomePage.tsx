import React, { useState, useEffect } from 'react';
import type { Language, Page } from '../../types';
import { content } from '../../i18n/locales';
import { MapPinIcon, SearchIcon, StethoscopeIcon, MicroscopeIcon, BookHeartIcon, BrainCircuitIcon, InfoIcon, HospitalIcon, DropletIcon, HeartPulseIcon } from '../Icons';

interface HomePageProps {
    setPage: (page: Page) => void;
    language: Language;
}

const HomePage: React.FC<HomePageProps> = ({ setPage, language }) => {
    const t = content[language];
    const [specialty, setSpecialty] = useState('');
    const [location, setLocation] = useState('');
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        { img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop', ...t.heroSlides[0] },
        { img: 'https://images.unsplash.com/photo-1581056771107-24a7f7374b5e?q=80&w=2070&auto=format&fit=crop', ...t.heroSlides[1] },
        { img: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1887&auto=format&fit=crop', ...t.heroSlides[2] },
    ];
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const handleSearch = () => {
        if (specialty || location) {
            const query = encodeURIComponent(`${specialty} in ${location}`);
            window.open(`https://www.google.com/search?q=${query}`, '_blank');
        }
    };

    const handleLocationAccess = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                alert(`Location access granted! Lat: ${latitude}, Lon: ${longitude}. Map functionality would show this area.`);
            }, () => {
                alert("Location access denied. Showing default map of Lahore.");
            });
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    const trustLogos = [
        'https://seeklogo.com/images/W/world-health-organization-who-logo-3047922416-seeklogo.com.png',
        'https://logos-world.net/wp-content/uploads/2021/03/Johns-Hopkins-Logo.png',
        'https://www.pngkey.com/png/full/245-2458112_mayo-clinic-logo-png.png',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/National_Institutes_of_Health_logo.svg/1024px-National_Institutes_of_Health_logo.svg.png',
        'https://1000logos.net/wp-content/uploads/2020/09/Cleveland-Clinic-Logo.png',
        'https://cdn.freelogovectors.net/wp-content/uploads/2024/03/aga_khan_university_hospital_logo-freelogovectors.net_.png',
        'https://www.chughtailab.com/wp-content/uploads/2023/05/Chughtai-Lab-Logo-EN-01.png',
    ];

    const featureCards = [
        {
            title: t.analysisFeatureTitle,
            desc: t.analysisFeatureDesc,
            icon: <MicroscopeIcon className="h-10 w-10 text-white/90" />,
            img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop'
        },
        {
            title: t.educationFeatureTitle,
            desc: t.educationFeatureDesc,
            icon: <BookHeartIcon className="h-10 w-10 text-white/90" />,
            img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop'
        },
        {
            title: t.doctorFeatureTitle,
            desc: t.doctorFeatureDesc,
            icon: <MapPinIcon className="h-10 w-10 text-white/90" />,
            img: 'https://images.unsplash.com/photo-1612943725519-c2c62fee3896?q=80&w=1887&auto=format&fit=crop'
        }
    ];

    return (
        <div className="space-y-16 sm:space-y-24 pb-12" dir={language === 'ur' ? 'rtl' : 'ltr'}>
            
            {/* Hero Section */}
            <section className="relative w-full h-[60vh] sm:h-[70vh] overflow-hidden">
                <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="relative w-full h-full flex-shrink-0">
                            <img src={slide.img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover"/>
                            <div className="absolute inset-0 bg-black/60"></div>
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
                         <div className="max-w-xl text-white text-left rtl:text-right">
                             <div className="flex items-center gap-3">
                                <StethoscopeIcon className="h-10 w-10 text-teal-400" />
                                <h1 className="text-2xl font-bold tracking-tight">SehatSaaz</h1>
                             </div>
                            <p className="mt-4 text-3xl sm:text-5xl font-extrabold leading-tight">
                                {slides[currentSlide].title}
                            </p>
                            <p className="mt-4 text-lg text-slate-200">
                                {slides[currentSlide].subtitle}
                            </p>
                            <button
                                onClick={() => setPage('analyzer')}
                                className="mt-8 inline-block rounded-md bg-teal-500 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500 transition-all duration-200 transform hover:scale-105"
                            >
                                {t.heroCta}
                            </button>
                        </div>
                    </div>
                </div>
                 <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 w-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}></button>
                    ))}
                </div>
            </section>
            
            {/* Trust Logos Section */}
            <div className="w-full bg-slate-100 py-4">
                 <div className="relative w-full overflow-hidden">
                    <h3 className="text-center font-semibold text-slate-600 mb-4 text-sm uppercase tracking-wider">{t.trustSectionTitle}</h3>
                    <div className="flex w-max">
                        <div className="flex items-center justify-center animate-scroll space-x-20 px-10">
                            {[...trustLogos, ...trustLogos].map((logo, index) => (
                                <img key={index} src={logo} alt={`Trust logo ${index + 1}`} className="h-8 sm:h-10 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto max-w-6xl px-4 sm:px-6 md:px-8 space-y-16 sm:space-y-24">
                {/* How it Helps Section */}
                <section>
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{t.howItHelpsTitle}</h2>
                        <p className="mt-2 text-slate-600 max-w-xl mx-auto">{t.howItHelpsSubtitle}</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featureCards.map((card, index) => (
                             <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-80">
                                <img src={card.img} alt={card.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"/>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                                    {card.icon}
                                    <h3 className="mt-4 font-bold text-xl">{card.title}</h3>
                                    <p className="mt-1 text-sm text-slate-200">{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                
                {/* Educational Hub Section */}
                <section>
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{t.educationTitle}</h2>
                        <p className="mt-2 text-slate-600 max-w-xl mx-auto">{t.educationSubtitle}</p>
                        <div className="mt-6 max-w-md mx-auto relative">
                             <input type="text" placeholder={t.educationSearchPlaceholder} className="w-full px-4 py-2 border border-slate-300 rounded-full focus:ring-2 focus:ring-teal-500 focus:outline-none"/>
                             <SearchIcon className="h-5 w-5 text-slate-400 absolute top-1/2 -translate-y-1/2 right-4 rtl:left-4 rtl:right-auto"/>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <div className="flex items-center gap-4">
                               <DropletIcon className="h-8 w-8 text-blue-500"/>
                               <h3 className="font-bold text-lg text-teal-800">{t.diabetesCardTitle}</h3>
                            </div>
                            <p className="text-slate-600 text-sm flex-grow mt-3">{t.diabetesCardDesc}</p>
                            <button onClick={() => setPage('diabetes')} className="mt-4 inline-block rounded-full bg-teal-50 px-5 py-2 text-sm font-semibold text-teal-700 shadow-sm hover:bg-teal-100 transition-colors duration-200 self-start">{t.learnInDetail}</button>
                        </div>
                         <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
                             <div className="flex items-center gap-4">
                               <HeartPulseIcon className="h-8 w-8 text-red-500"/>
                               <h3 className="font-bold text-lg text-teal-800">{t.hypertensionCardTitle}</h3>
                            </div>
                            <p className="text-slate-600 text-sm flex-grow mt-3">{t.hypertensionCardDesc}</p>
                            <button onClick={() => setPage('heartHealth')} className="mt-4 inline-block rounded-full bg-teal-50 px-5 py-2 text-sm font-semibold text-teal-700 shadow-sm hover:bg-teal-100 transition-colors duration-200 self-start">{t.learnInDetail}</button>
                        </div>
                    </div>
                </section>
                
                {/* AI vs Doctor Section */}
                <section>
                     <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{t.aiVsDoctorTitle}</h2>
                        <p className="mt-2 text-slate-600 max-w-xl mx-auto">{t.aiVsDoctorSubtitle}</p>
                    </div>
                     <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        <div className="bg-white/70 border border-slate-200 p-6 rounded-lg">
                             <div className="flex items-center gap-3">
                                <BrainCircuitIcon className="h-8 w-8 text-teal-600"/>
                                <h3 className="font-bold text-xl text-slate-800">{t.aiTitle}</h3>
                            </div>
                            <ul className="mt-4 space-y-2 text-slate-600 text-sm list-inside list-disc">
                                {t.aiPoints.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                        </div>
                         <div className="bg-white border-2 border-teal-500 p-6 rounded-lg shadow-lg">
                            <div className="flex items-center gap-3">
                                <HospitalIcon className="h-8 w-8 text-teal-600"/>
                                <h3 className="font-bold text-xl text-slate-800">{t.doctorTitle}</h3>
                            </div>
                             <ul className="mt-4 space-y-2 text-slate-600 text-sm list-inside list-disc">
                                {t.doctorPoints.map((point, i) => <li key={i}>{point}</li>)}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Find a Doctor Section */}
                <section className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
                    <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{t.doctorFinderTitle}</h2>
                        <p className="mt-2 text-slate-600 max-w-xl mx-auto">{t.doctorFinderSubtitle}</p>
                    </div>
                    <div className="mt-8 max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                         <div className="w-full">
                            <label htmlFor="specialty" className="block text-sm font-medium text-slate-700">{t.doctorSpecialtyPlaceholder}</label>
                            <input type="text" id="specialty" value={specialty} onChange={(e) => setSpecialty(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"/>
                        </div>
                         <div className="w-full">
                            <label htmlFor="location" className="block text-sm font-medium text-slate-700">{t.locationPlaceholder}</label>
                            <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500"/>
                        </div>
                        <button onClick={handleSearch} className="sm:col-span-2 w-full flex items-center justify-center gap-2 rounded-md bg-teal-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-all">
                            <SearchIcon className="h-5 w-5"/>
                            {t.searchDoctorBtn}
                        </button>
                    </div>
                </section>

                 {/* Map Section */}
                <section className="text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{t.mapTitle}</h2>
                    <p className="mt-2 text-slate-600 max-w-xl mx-auto">{t.mapSubtitle}</p>
                    <div className="mt-8 max-w-3xl mx-auto bg-slate-200 rounded-lg shadow-xl relative">
                        <img src="https://i.imgur.com/8Q5pD0B.png" alt="Map of Lahore Hospitals" className="object-cover h-full w-full rounded-md"/>
                        <div className="absolute bottom-4 right-4 rtl:left-4 rtl:right-auto">
                            <button onClick={handleLocationAccess} className="flex items-center justify-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 border border-slate-300 shadow-lg hover:bg-slate-100 transition-all">
                                <MapPinIcon className="h-5 w-5 text-teal-600"/>
                                {t.mapBtn}
                            </button>
                        </div>
                    </div>
                </section>
                
                {/* Disclaimer Section */}
                <section className="bg-slate-100 rounded-2xl p-8 sm:p-12">
                    <div className="max-w-2xl mx-auto text-center">
                        <InfoIcon className="h-12 w-12 text-slate-400 mx-auto"/>
                        <h2 className="mt-4 text-2xl font-bold text-slate-800">{t.preFooterDisclaimerTitle}</h2>
                        <p className="mt-4 text-sm text-slate-600">{t.preFooterDisclaimerText}</p>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default HomePage;