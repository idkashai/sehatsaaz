import type { Language } from '../types';

type Content = {
    [key in Language]: {
        // Header
        navHome: string;
        navAnalyzer: string;
        navHealthLog: string;
        languageToggle: string;
        
        // Home Page Hero
        heroSlides: { title: string; subtitle: string; }[];
        heroCta: string;
        
        // Home Page Trust Section
        trustSectionTitle: string;

        // Home Page How it Helps
        howItHelpsTitle: string;
        howItHelpsSubtitle: string;
        analysisFeatureTitle: string;
        analysisFeatureDesc: string;
        educationFeatureTitle: string;
        educationFeatureDesc: string;
        doctorFeatureTitle: string;
        doctorFeatureDesc: string;

        // Home Page Education Section
        educationTitle: string;
        educationSubtitle: string;
        educationSearchPlaceholder: string;
        diabetesCardTitle: string;
        diabetesCardDesc: string;
        hypertensionCardTitle: string;
        hypertensionCardDesc: string;
        learnInDetail: string;

        // Home Page: AI vs Doctor
        aiVsDoctorTitle: string;
        aiVsDoctorSubtitle: string;
        aiTitle: string;
        aiPoints: string[];
        doctorTitle: string;
        doctorPoints: string[];
        
        // Home Page Doctor Finder
        doctorFinderTitle: string;
        doctorFinderSubtitle: string;
        doctorSpecialtyPlaceholder: string;
        locationPlaceholder: string;
        searchDoctorBtn: string;

        // Home Page Map
        mapTitle: string;
        mapSubtitle: string;
        mapBtn: string;

        // Home Page Disclaimer
        preFooterDisclaimerTitle: string;
        preFooterDisclaimerText: string;

        // Footer
        footerDisclaimer: string;
        footerRights: string;

        // Disease Pages (General)
        symptoms: string;
        diagnosis: string;
        precautions: string;
        lifestyle: string;
        chatWithAssistant: string;
        watchVideo: string;
        riskFactors: string;
        complications: string;
        management: string;
        references: string;

        // Diabetes Page
        diabetesTitle: string;
        diabetesIntro: string;
        diabetesWhatIsTitle: string;
        diabetesWhatIsDesc: string;
        diabetesTypesTitle: string;
        diabetesType1Title: string;
        diabetesType1Desc: string;
        diabetesType2Title: string;
        diabetesType2Desc: string;
        diabetesGestationalTitle: string;
        diabetesGestationalDesc: string;
        diabetesSymptomsList: string[];
        diabetesRiskFactorsList: string[];
        diabetesComplicationsList: { title: string; desc: string; }[];
        diabetesManagementDietTitle: string;
        diabetesManagementDietPoints: string[];
        diabetesManagementExerciseTitle: string;
        diabetesManagementExercisePoints: string[];
        diabetesManagementMonitoringTitle: string;
        diabetesManagementMonitoringPoints: string[];
        diabetesManagementMedsTitle: string;
        diabetesManagementMedsPoints: string[];
        diabetesManagementFootCareTitle: string;
        diabetesManagementFootCarePoints: string[];
        
        // Heart Health Page
        heartHealthTitle: string;
        heartHealthIntro: string;
        heartHealthWhatIsTitle: string;
        heartHealthWhatIsDesc: string;
        heartHealthConditionsTitle: string;
        heartHealthHypertensionTitle: string;
        heartHealthHypertensionDesc: string;
        heartHealthCholesterolTitle: string;
        heartHealthCholesterolDesc: string;
        heartHealthCadTitle: string;
        heartHealthCadDesc: string;
        heartHealthSymptomsList: string[];
        heartHealthRiskFactorsList: { title: string; desc: string; }[];
        heartHealthComplicationsList: { title: string; desc: string; }[];
        heartHealthManagementDietTitle: string;
        heartHealthManagementDietPoints: string[];
        heartHealthManagementExerciseTitle: string;
        heartHealthManagementExercisePoints: string[];
        heartHealthManagementStressTitle: string;
        heartHealthManagementStressPoints: string[];
        heartHealthManagementSmokingTitle: string;
        heartHealthManagementSmokingPoints: string[];
        heartHealthManagementCheckupsTitle: string;
        heartHealthManagementCheckupsPoints: string[];

        // Health Log Page
        healthLogTitle: string;
        healthLogSubtitle: string;
        bpLogTitle: string;
        bsLogTitle: string;
        logDisclaimer: string;
        systolic: string;
        diastolic: string;
        pulse: string;
        addBpReading: string;
        bloodSugarLevel: string;
        measured: string;
        beforeMeal: string;
        afterMeal: string;
        addBsReading: string;
        noReadings: string;

        // Voice Assistant Page
        voiceAssistantTitle: string;
        voiceAssistantWelcome: string;
        voiceAssistantGuide: string;
        voiceAssistantReportPrompt: string;
        goToAnalyzer: string;
        inputPlaceholder: string;
    }
}

export const content: Content = {
  en: {
    navHome: "Home",
    navAnalyzer: "Lab Analyzer",
    navHealthLog: "Health Log",
    languageToggle: "اردو",
    heroSlides: [
      { title: "Your Personal AI Health Assistant", subtitle: "Understand your lab reports and health topics in simple language." },
      { title: "Empowering Health Decisions", subtitle: "Get clear, AI-powered insights to discuss with your doctor." },
      { title: "Accessible Health Information For All", subtitle: "Designed for Pakistan, with voice and multi-language support." },
    ],
    heroCta: "Analyze Your Lab Report",
    trustSectionTitle: "A Commitment to Reliable Information",
    howItHelpsTitle: "How SehatSaaz Helps You",
    howItHelpsSubtitle: "Your journey to better health understanding starts here.",
    analysisFeatureTitle: "AI Report Analysis",
    analysisFeatureDesc: "Upload a lab report image to get a simple, line-by-line explanation of your results.",
    educationFeatureTitle: "Health Education",
    educationFeatureDesc: "Learn about common conditions like Diabetes and Hypertension in easy-to-understand language.",
    doctorFeatureTitle: "Find Local Doctors",
    doctorFeatureDesc: "Search for specialist doctors and hospitals in your city to get the care you need.",
    educationTitle: "Health Education Hub",
    educationSubtitle: "Learn about common health issues in Pakistan to take better care of yourself and your family.",
    educationSearchPlaceholder: "Search for a disease...",
    diabetesCardTitle: "Diabetes (Sugar)",
    diabetesCardDesc: "Information on managing blood sugar levels, dietary advice, and recognizing the signs of diabetes.",
    hypertensionCardTitle: "Heart Health (Blood Pressure)",
    hypertensionCardDesc: "Guidance on controlling high blood pressure and maintaining a healthy heart through lifestyle changes.",
    learnInDetail: "Learn in Detail",
    aiVsDoctorTitle: "Making an Informed Choice",
    aiVsDoctorSubtitle: "Understand when to use our AI assistant and when to consult a professional doctor.",
    aiTitle: "Use the AI Assistant For:",
    aiPoints: [
        "Understanding complex terms on a lab report.",
        "Learning general information about a disease.",
        "Getting a preliminary assessment of your symptoms.",
        "Preparing questions to ask your doctor."
    ],
    doctorTitle: "Consult a Doctor For:",
    doctorPoints: [
        "Getting a final diagnosis or medical advice.",
        "Receiving prescriptions for medication.",
        "Urgent medical emergencies or severe symptoms.",
        "Creating a personalized treatment plan."
    ],
    doctorFinderTitle: "Find a Doctor Near You",
    doctorFinderSubtitle: "Search for specialists and hospitals in your area.",
    doctorSpecialtyPlaceholder: "e.g., Cardiologist, Child Specialist",
    locationPlaceholder: "e.g., Johar Town, Lahore",
    searchDoctorBtn: "Search",
    mapTitle: "Your Local Health Map",
    mapSubtitle: "Find healthcare facilities in Lahore. Allow location access to see your current area.",
    mapBtn: "Access My Location",
    preFooterDisclaimerTitle: "For Educational Purposes Only",
    preFooterDisclaimerText: "SehatSaaz is an AI-powered informational tool and does not provide medical advice, diagnosis, or treatment. The information provided is for educational purposes and should not be used as a substitute for consultation with a qualified healthcare professional. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.",
    footerDisclaimer: "Disclaimer: This is an AI assistant, not a doctor. Consult a healthcare professional for medical advice.",
    footerRights: "All rights reserved.",
    symptoms: "Symptoms",
    diagnosis: "Diagnosis",
    precautions: "Precautions",
    lifestyle: "Lifestyle & Management",
    chatWithAssistant: "Chat with Voice Assistant for Diagnosis",
    watchVideo: "Watch an Informative Video",
    riskFactors: "Risk Factors",
    complications: "Potential Complications",
    management: "Management & Prevention",
    references: "Sources & References",
    diabetesTitle: "Understanding Diabetes (Sugar)",
    diabetesIntro: "A comprehensive guide to understanding and managing diabetes for a healthier life in Pakistan.",
    diabetesWhatIsTitle: "What is Diabetes?",
    diabetesWhatIsDesc: "Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy. Your body breaks down most of the food you eat into sugar (glucose) and releases it into your bloodstream. When your blood sugar goes up, it signals your pancreas to release insulin. Insulin acts like a key to let the blood sugar into your body’s cells for use as energy. With diabetes, your body either doesn’t make enough insulin or can’t effectively use the insulin it does make. This leads to high blood sugar levels, which can cause serious health problems over time.",
    diabetesTypesTitle: "Types of Diabetes",
    diabetesType1Title: "Type 1 Diabetes",
    diabetesType1Desc: "An autoimmune reaction where the body attacks itself by mistake, stopping it from making insulin. It's usually diagnosed in children and young adults and requires daily insulin injections to survive.",
    diabetesType2Title: "Type 2 Diabetes",
    diabetesType2Desc: "The most common type. The body doesn't use insulin well and can't keep blood sugar at normal levels. It develops over many years and is usually diagnosed in adults, often linked to lifestyle factors like obesity and inactivity.",
    diabetesGestationalTitle: "Gestational Diabetes",
    diabetesGestationalDesc: "Develops in pregnant women who have never had diabetes. It usually goes away after the baby is born but increases the mother's and child's risk for type 2 diabetes later in life.",
    diabetesSymptomsList: [
        "Frequent urination, especially at night", "Increased thirst", "Unexplained weight loss", "Increased hunger", "Blurred vision", "Numb or tingling hands or feet", "Feeling very tired", "Very dry skin", "Sores that heal slowly", "More infections than usual"
    ],
    diabetesRiskFactorsList: [
        "Having a parent or sibling with diabetes.", "Being overweight or obese.", "Physical inactivity (exercising less than 3 times a week).", "Age (45 years or older).", "History of gestational diabetes.", "Having Polycystic Ovary Syndrome (PCOS).", "High blood pressure or high cholesterol."
    ],
    diabetesComplicationsList: [
        { title: "Heart Disease", desc: "Diabetes significantly increases the risk of heart attacks, strokes, and high blood pressure." },
        { title: "Kidney Disease (Nephropathy)", desc: "High blood sugar can damage the kidneys, potentially leading to kidney failure." },
        { title: "Nerve Damage (Neuropathy)", desc: "Can cause tingling, numbness, burning, or pain, usually starting in the feet." },
        { title: "Eye Damage (Retinopathy)", desc: "Can damage the blood vessels of the retina, potentially leading to blindness." },
        { title: "Foot Problems", desc: "Nerve damage and poor blood flow can lead to serious infections and even amputations." }
    ],
    diabetesManagementDietTitle: "Healthy Diet (صحت مند غذا)",
    diabetesManagementDietPoints: [
        "Focus on non-starchy vegetables like leafy greens, broccoli, and carrots.", "Choose whole grains (whole wheat roti, brown rice) over refined grains (white bread, naan).", "Include lean proteins like chicken, fish, daal (lentils), and beans.", "Limit sugary drinks, sweets, and processed foods.", "Control portion sizes to manage weight and blood sugar."
    ],
    diabetesManagementExerciseTitle: "Regular Exercise (باقاعدہ ورزش)",
    diabetesManagementExercisePoints: [
        "Aim for at least 150 minutes of moderate-intensity aerobic activity per week, like a brisk 30-minute walk 5 days a week.", "Include strength training (lifting weights) 2 or more days a week.", "Avoid sitting for long periods. Get up and move every 30 minutes."
    ],
    diabetesManagementMonitoringTitle: "Blood Sugar Monitoring (بلڈ شوگر کی نگرانی)",
    diabetesManagementMonitoringPoints: [
        "Regularly check your blood sugar levels as advised by your doctor.", "Keep a log of your readings to see how food, exercise, and medicine affect your levels.", "Get an A1C test at least twice a year to check your average blood sugar over the past 3 months."
    ],
    diabetesManagementMedsTitle: "Medication (ادویات)",
    diabetesManagementMedsPoints: [
        "Take all medications (pills or insulin) as prescribed by your doctor.", "Do not stop or change your medication without consulting your doctor.", "Understand how your medication works and its possible side effects."
    ],
    diabetesManagementFootCareTitle: "Foot Care (پاؤں کی دیکھ بھال)",
    diabetesManagementFootCarePoints: [
        "Check your feet every day for cuts, sores, or blisters.", "Wash your feet daily with lukewarm water and dry them carefully.", "Always wear shoes and socks to protect your feet.", "See your doctor immediately if you have a foot injury that doesn't heal."
    ],
    heartHealthTitle: "Maintaining Heart Health",
    heartHealthIntro: "A detailed guide to understanding cardiovascular health and managing blood pressure in Pakistan.",
    heartHealthWhatIsTitle: "What is Heart Disease?",
    heartHealthWhatIsDesc: "Cardiovascular disease (heart disease) is a general term for conditions affecting the heart or blood vessels. It's usually associated with atherosclerosis, a condition where plaque builds up inside your arteries, causing them to narrow and making it harder for blood to flow through. If a blood clot forms, it can block the blood flow, potentially causing a heart attack or stroke. Managing risk factors like high blood pressure, high cholesterol, and smoking is the most important way to keep your heart healthy and prevent serious problems.",
    heartHealthConditionsTitle: "Common Heart Conditions",
    heartHealthHypertensionTitle: "High Blood Pressure (Hypertension)",
    heartHealthHypertensionDesc: "Often called the 'silent killer' because it has no symptoms. It's when the force of blood against your artery walls is consistently too high, which can damage your heart and blood vessels over time.",
    heartHealthCholesterolTitle: "High Cholesterol",
    heartHealthCholesterolDesc: "High levels of 'bad' (LDL) cholesterol can lead to plaque buildup in your arteries. 'Good' (HDL) cholesterol helps remove bad cholesterol from your body. A balance is crucial for heart health.",
    heartHealthCadTitle: "Coronary Artery Disease (CAD)",
    heartHealthCadDesc: "The most common type of heart disease. It occurs when the major blood vessels that supply the heart with blood, oxygen, and nutrients become damaged or diseased, usually due to plaque buildup.",
    heartHealthSymptomsList: [
        "Chest pain, tightness, pressure, or discomfort (angina)", "Shortness of breath", "Pain, numbness, weakness, or coldness in your legs or arms", "Pain in the neck, jaw, throat, upper abdomen, or back", "Dizziness or fainting", "Irregular heartbeat"
    ],
    heartHealthRiskFactorsList: [
        { title: "High Blood Pressure", desc: "The leading risk factor for heart disease." },
        { title: "High Cholesterol", desc: "Contributes to plaque in arteries." },
        { title: "Diabetes", desc: "High blood sugar damages blood vessels." },
        { title: "Smoking", desc: "Damages the lining of your arteries." },
        { title: "Obesity", desc: "Linked to high blood pressure, high cholesterol, and diabetes." },
        { title: "Poor Diet", desc: "High in salt, sugar, and unhealthy fats." },
        { title: "Physical Inactivity", desc: "Weakens the heart and contributes to other risk factors." },
        { title: "Family History", desc: "A genetic predisposition increases your risk." }
    ],
    heartHealthComplicationsList: [
        { title: "Heart Attack", desc: "Occurs when blood flow to a part of the heart is blocked by a blood clot." },
// FIX: Corrected typo from `title:g:` to `title:`.
        { title: "Stroke", desc: "Happens when the blood supply to part of your brain is interrupted or reduced." },
        { title: "Heart Failure", desc: "A chronic condition where the heart doesn't pump blood as well as it should." },
        { title: "Aneurysm", desc: "A bulge in the wall of an artery that can be life-threatening if it bursts." }
    ],
    heartHealthManagementDietTitle: "Heart-Healthy Diet (صحت مند غذا)",
    heartHealthManagementDietPoints: [
        "Reduce your salt (sodium) intake to help lower blood pressure.", "Eat more fruits, vegetables, and whole grains.", "Choose lean protein sources and healthy fats like those in fish, nuts, and olive oil.", "Limit processed foods, sugary drinks, and red meat."
    ],
    heartHealthManagementExerciseTitle: "Regular Physical Activity (باقاعدہ ورزش)",
    heartHealthManagementExercisePoints: [
        "Aim for at least 150 minutes of moderate-intensity aerobic exercise (like brisk walking or cycling) each week.", "Even small amounts of activity are better than none. Start slow and gradually increase your duration and intensity.", "Regular exercise strengthens your heart and improves circulation."
    ],
    heartHealthManagementStressTitle: "Stress Management (تناؤ کا انتظام)",
    heartHealthManagementStressPoints: [
        "Chronic stress can contribute to high blood pressure and other heart risks.", "Practice relaxation techniques like deep breathing, meditation, or yoga.", "Make time for hobbies and activities you enjoy.", "Ensure you get 7-8 hours of quality sleep per night."
    ],
    heartHealthManagementSmokingTitle: "Quit Smoking (تمباکو نوشی چھوڑنا)",
    heartHealthManagementSmokingPoints: [
        "Smoking is one of the most significant risk factors for heart disease.", "Quitting is the single best thing you can do for your heart health.", "Seek support from family, friends, or a doctor to help you quit."
    ],
    heartHealthManagementCheckupsTitle: "Regular Checkups (باقاعدہ چیک اپ)",
    heartHealthManagementCheckupsPoints: [
        "Visit your doctor regularly to monitor your blood pressure, cholesterol, and blood sugar.", "Take any prescribed medications exactly as directed.", "Discuss your family history and personal risk factors with your doctor."
    ],
    healthLogTitle: "The Health App",
    healthLogSubtitle: "A simple app for diabetic and heart patients to log their measurements.",
    bpLogTitle: "Blood Pressure Log",
    bsLogTitle: "Blood Sugar Log",
    logDisclaimer: "Note: Data is saved only for your current session and will be lost when you close this page.",
    systolic: "Systolic (SYS)",
    diastolic: "Diastolic (DIA)",
    pulse: "Pulse",
    addBpReading: "Add BP Reading",
    bloodSugarLevel: "Sugar Level (mg/dL)",
    measured: "Measured",
    beforeMeal: "Before Meal",
    afterMeal: "After Meal",
    addBsReading: "Add Sugar Reading",
    noReadings: "No readings logged yet.",
    voiceAssistantTitle: "AI Voice Assistant",
    voiceAssistantWelcome: "Dear user, welcome. How can I help with your diagnosis today? Please tell me about your symptoms.",
    voiceAssistantGuide: "You can describe your symptoms, or upload a photo of your current prescription or medicine bottle. I will guide you through the process.",
    voiceAssistantReportPrompt: "For a complete diagnosis based on a lab test, please use our dedicated Lab Analyzer.",
    goToAnalyzer: "Go to Lab Analyzer",
    inputPlaceholder: "Type your symptoms here or use the mic...",
  },
  ur: {
    navHome: "گھر",
    navAnalyzer: "لیب تجزیہ کار",
    navHealthLog: "ہیلتھ لاگ",
    languageToggle: "English",
    heroSlides: [
        { title: "آپ کا ذاتی AI ہیلتھ اسسٹنٹ", subtitle: "اپنی لیب رپورٹس اور صحت کے موضوعات کو سادہ زبان میں سمجھیں۔" },
        { title: "صحت کے فیصلوں کو بااختیار بنانا", subtitle: "اپنے ڈاکٹر سے بات کرنے کے لیے واضح، AI سے چلنے والی بصیرت حاصل کریں۔" },
        { title: "سب کے لیے قابل رسائی صحت کی معلومات", subtitle: "پاکستان کے لیے ڈیزائن کیا گیا، آواز اور کثیر لسانی مدد کے ساتھ۔" },
    ],
    heroCta: "اپنی لیب رپورٹ کا تجزیہ کریں",
    trustSectionTitle: "قابل اعتماد معلومات کا عزم",
    howItHelpsTitle: "صحت ساز آپ کی مدد کیسے کرتا ہے",
    howItHelpsSubtitle: "بہتر صحت کی تفہیم کا آپ کا سفر یہاں سے شروع ہوتا ہے۔",
    analysisFeatureTitle: "AI رپورٹ کا تجزیہ",
    analysisFeatureDesc: "اپنے نتائج کی سادہ، ہر سطر کی وضاحت حاصل کرنے کے لیے لیب رپورٹ کی تصویر اپ لوڈ کریں۔",
    educationFeatureTitle: "صحت کی تعلیم",
    educationFeatureDesc: "ذیابیطس اور ہائی بلڈ پریشر جیسی عام بیماریوں کے بارے میں سمجھنے میں آسان زبان میں جانیں۔",
    doctorFeatureTitle: "مقامی ڈاکٹر تلاش کریں",
    doctorFeatureDesc: "اپنی ضرورت کی دیکھ بھال حاصل کرنے کے لیے اپنے شہر میں ماہر ڈاکٹروں اور اسپتالوں کو تلاش کریں۔",
    educationTitle: "صحت کا تعلیمی مرکز",
    educationSubtitle: "پاکستان میں صحت کے عام مسائل کے بارے میں جانیں تاکہ آپ اپنا اور اپنے خاندان کا بہتر خیال رکھ سکیں۔",
    educationSearchPlaceholder: "بیماری تلاش کریں...",
    diabetesCardTitle: "ذیابیطس (شوگر)",
    diabetesCardDesc: "بلڈ شوگر کی سطح کو منظم کرنے، غذائی مشورے، اور ذیابیطس کی علامات کو پہچاننے کے بارے میں معلومات۔",
    hypertensionCardTitle: "دل کی صحت (بلڈ پریشر)",
    hypertensionCardDesc: "طرز زندگی میں تبدیلیوں کے ذریعے ہائی بلڈ پریشر کو کنٹرول کرنے اور صحت مند دل کو برقرار رکھنے کے بارے میں رہنمائی۔",
    learnInDetail: "تفصیل سے جانیں",
    aiVsDoctorTitle: "ایک باخبر انتخاب کرنا",
    aiVsDoctorSubtitle: "سمجھیں کہ ہمارے AI اسسٹنٹ کا استعمال کب کرنا ہے اور کب کسی پیشہ ور ڈاکٹر سے رجوع کرنا ہے۔",
    aiTitle: "AI اسسٹنٹ کا استعمال کریں:",
    aiPoints: [
        "لیب رپورٹ پر پیچیدہ اصطلاحات کو سمجھنے کے لیے۔",
        "کسی بیماری کے بارے میں عمومی معلومات حاصل کرنے کے لیے۔",
        "اپنی علامات کا ابتدائی جائزہ لینے کے لیے۔",
        "اپنے ڈاکٹر سے پوچھنے کے لیے سوالات تیار کرنے کے لیے۔"
    ],
    doctorTitle: "ڈاکٹر سے رجوع کریں:",
    doctorPoints: [
        "حتمی تشخیص یا طبی مشورہ حاصل کرنے کے لیے۔",
        "ادویات کے لیے نسخے حاصل کرنے کے لیے۔",
        "فوری طبی ہنگامی صورتحال یا شدید علامات کے لیے۔",
        "ایک ذاتی علاج کا منصوبہ بنانے کے لیے۔"
    ],
    doctorFinderTitle: "اپنے قریب ڈاکٹر تلاش کریں",
    doctorFinderSubtitle: "اپنے علاقے میں ماہرین اور ہسپتال تلاش کریں۔",
    doctorSpecialtyPlaceholder: "مثال کے طور پر، ماہر امراض قلب، بچوں کے ماہر",
    locationPlaceholder: "مثال کے طور پر، جوہر ٹاؤن، لاہور",
    searchDoctorBtn: "تلاش کریں",
    mapTitle: "آپ کا مقامی صحت کا نقشہ",
    mapSubtitle: "لاہور میں صحت کی سہولیات تلاش کریں۔ اپنے موجودہ علاقے کو دیکھنے کے لیے لوکیشن تک رسائی کی اجازت دیں۔",
    mapBtn: "میری لوکیشن تک رسائی حاصل کریں",
    preFooterDisclaimerTitle: "صرف تعلیمی مقاصد کے لیے",
    preFooterDisclaimerText: "صحت ساز ایک AI سے چلنے والا معلوماتی ٹول ہے اور یہ طبی مشورہ، تشخیص، یا علاج فراہم نہیں کرتا۔ فراہم کردہ معلومات تعلیمی مقاصد کے لیے ہے اور اسے کسی مستند ہیلتھ کیئر پروفیشنل سے مشاورت کے متبادل کے طور پر استعمال نہیں کیا جانا چاہیے۔ کسی بھی طبی حالت کے بارے میں اپنے سوالات کے لیے ہمیشہ اپنے معالج یا دیگر مستند صحت فراہم کنندہ سے مشورہ لیں۔",
    footerDisclaimer: "اعلان دستبرداری: یہ ایک AI اسسٹنٹ ہے، ڈاکٹر نہیں۔ طبی مشورے کے لیے کسی ہیلتھ کیئر پروفیشنل سے رجوع کریں۔",
    footerRights: "جملہ حقوق محفوظ ہیں.",
    symptoms: "علامات",
    diagnosis: "تشخیص",
    precautions: "احتیاطی تدابیر",
    lifestyle: "طرز زندگی اور انتظام",
    chatWithAssistant: "تشخیص کے لیے وائس اسسٹنٹ سے بات کریں",
    watchVideo: "ایک معلوماتی ویڈیو دیکھیں",
    riskFactors: "خطرے کے عوامل",
    complications: "ممکنہ پیچیدگیاں",
    management: "انتظام اور روک تھام",
    references: "ذرائع اور حوالہ جات",
    diabetesTitle: "ذیابیطس کو سمجھنا (شوگر)",
    diabetesIntro: "پاکستان میں صحت مند زندگی کے لیے ذیابیطس کو سمجھنے اور اس کا انتظام کرنے کے لیے ایک جامع رہنما۔",
    diabetesWhatIsTitle: "ذیابیطس کیا ہے؟",
    diabetesWhatIsDesc: "ذیابیطس ایک دائمی (دیرپا) صحت کی حالت ہے جو آپ کے جسم کے کھانے کو توانائی میں تبدیل کرنے کے طریقے کو متاثر کرتی ہے۔ آپ کا جسم آپ کے کھانے کا زیادہ تر حصہ شکر (گلوکوز) میں توڑ دیتا ہے اور اسے آپ کے خون میں چھوڑ دیتا ہے۔ جب آپ کے خون میں شوگر بڑھ جاتی ہے، تو یہ آپ کے لبلبے کو انسولین چھوڑنے کا اشارہ دیتا ہے۔ انسولین توانائی کے طور پر استعمال کے لیے خون کی شکر کو آپ کے جسم کے خلیوں میں جانے دینے کے لیے ایک کلید کی طرح کام کرتی ہے۔ ذیابیطس کے ساتھ، آپ کا جسم یا تو کافی انسولین نہیں بناتا یا وہ جو انسولین بناتا ہے اسے مؤثر طریقے سے استعمال نہیں کرسکتا۔ اس سے خون میں شوگر کی سطح بلند ہوجاتی ہے، جو وقت کے ساتھ صحت کے سنگین مسائل کا سبب بن سکتی ہے۔",
    diabetesTypesTitle: "ذیابیطس کی اقسام",
    diabetesType1Title: "ٹائپ 1 ذیابیطس",
    diabetesType1Desc: "ایک خود کار مدافعتی ردعمل جہاں جسم غلطی سے خود پر حملہ کرتا ہے، اسے انسولین بنانے سے روکتا ہے۔ یہ عام طور پر بچوں اور نوجوانوں میں تشخیص ہوتا ہے اور زندہ رہنے کے لیے روزانہ انسولین کے انجیکشن کی ضرورت ہوتی ہے۔",
    diabetesType2Title: "ٹائپ 2 ذیابیطس",
    diabetesType2Desc: "سب سے عام قسم۔ جسم انسولین کو اچھی طرح سے استعمال نہیں کرتا اور خون میں شوگر کو معمول کی سطح پر نہیں رکھ سکتا۔ یہ کئی سالوں میں تیار ہوتا ہے اور عام طور پر بالغوں میں تشخیص ہوتا ہے، جو اکثر طرز زندگی کے عوامل جیسے موٹاپا اور غیرفعالیت سے منسلک ہوتا ہے۔",
    diabetesGestationalTitle: "حمل کی ذیابیطس",
    diabetesGestationalDesc: "حاملہ خواتین میں پیدا ہوتا ہے جنہیں کبھی ذیابیطس نہیں ہوا تھا۔ یہ عام طور پر بچے کی پیدائش کے بعد ختم ہوجاتا ہے لیکن ماں اور بچے کے لیے بعد کی زندگی میں ٹائپ 2 ذیابیطس کا خطرہ بڑھاتا ہے۔",
    diabetesSymptomsList: [
        "بار بار پیشاب آنا، خاص طور پر رات کو", "پیاس میں اضافہ", "بلا وجہ وزن میں کمی", "بھوک میں اضافہ", "دھندلا نظر آنا", "ہاتھوں یا پیروں میں بے حسی یا جھنجھناہٹ", "بہت تھکاوٹ محسوس کرنا", "بہت خشک جلد", "زخم جو آہستہ آہستہ بھرتے ہیں", "معمول سے زیادہ انفیکشن"
    ],
    diabetesRiskFactorsList: [
        "والدین یا بہن بھائی کو ذیابیطس ہونا۔", "زیادہ وزن یا موٹاپا۔", "جسمانی غیرفعالیت (ہفتے میں 3 بار سے کم ورزش کرنا)۔", "عمر (45 سال یا اس سے زیادہ)۔", "حمل کی ذیابیطس کی تاریخ۔", "پولی سسٹک اووری سنڈروم (PCOS) ہونا۔", "ہائی بلڈ پریشر یا ہائی کولیسٹرول۔"
    ],
    diabetesComplicationsList: [
        { title: "دل کی بیماری", desc: "ذیابیطس دل کے دورے، فالج اور ہائی بلڈ پریشر کے خطرے کو نمایاں طور پر بڑھاتا ہے۔" },
        { title: "گردے کی بیماری (نیفروپیتھی)", desc: "ہائی بلڈ شوگر گردوں کو نقصان پہنچا سکتا ہے، جو ممکنہ طور پر گردے کی ناکامی کا باعث بن سکتا ہے۔" },
        { title: "اعصابی نقصان (نیوروپیتھی)", desc: "جھنجھناہٹ، بے حسی، جلن یا درد کا سبب بن سکتا ہے، جو عام طور پر پیروں سے شروع ہوتا ہے۔" },
        { title: "آنکھوں کا نقصان (ریٹینوپیتھی)", desc: "ریٹنا کی خون کی نالیوں کو نقصان پہنچا سکتا ہے، جو ممکنہ طور پر اندھے پن کا باعث بن سکتا ہے۔" },
        { title: "پاؤں کے مسائل", desc: "اعصابی نقصان اور خون کے بہاؤ میں کمی سنگین انفیکشن اور یہاں تک کہ اعضاء کاٹنے کا باعث بن سکتی ہے۔" }
    ],
    diabetesManagementDietTitle: "صحت مند غذا",
    diabetesManagementDietPoints: [
        "غیر نشاستہ دار سبزیوں جیسے پتوں والی سبزیاں، بروکولی اور گاجر پر توجہ دیں۔", "ریفائنڈ اناج (سفید ڈبل روٹی، نان) کے بجائے साबुत اناج (گندم کی روٹی، بھورے چاول) کا انتخاب کریں۔", "مرغی، مچھلی، دال اور پھلیاں جیسے کم چکنائی والے پروٹین شامل کریں۔", "میٹھے مشروبات، مٹھائیاں اور پراسیسڈ فوڈز کو محدود کریں۔", "وزن اور بلڈ شوگر کو منظم کرنے کے لیے حصے کے سائز کو کنٹرول کریں۔"
    ],
    diabetesManagementExerciseTitle: "باقاعدہ ورزش",
    diabetesManagementExercisePoints: [
        "ہفتے میں کم از کم 150 منٹ کی درمیانی شدت کی ایروبک سرگرمی کا ہدف رکھیں، جیسے ہفتے میں 5 دن 30 منٹ کی تیز چہل قدمی۔", "ہفتے میں 2 یا زیادہ دن طاقت کی تربیت (وزن اٹھانا) شامل کریں۔", "لمبے عرصے تک بیٹھنے سے گریز کریں۔ ہر 30 منٹ بعد اٹھیں اور حرکت کریں۔"
    ],
    diabetesManagementMonitoringTitle: "بلڈ شوگر کی نگرانی",
    diabetesManagementMonitoringPoints: [
        "اپنے ڈاکٹر کے مشورے کے مطابق باقاعدگی سے اپنے بلڈ شوگر کی سطح چیک کریں۔", "اپنی ریڈنگز کا ایک لاگ رکھیں تاکہ یہ دیکھا جاسکے کہ کھانا، ورزش اور دوا آپ کی سطح کو کیسے متاثر کرتی ہے۔", "گزشتہ 3 مہینوں میں اپنے اوسط بلڈ شوگر کو چیک کرنے کے لیے سال میں کم از کم دو بار A1C ٹیسٹ کروائیں۔"
    ],
    diabetesManagementMedsTitle: "ادویات",
    diabetesManagementMedsPoints: [
        "تمام ادویات (گولیاں یا انسولین) اپنے ڈاکٹر کے تجویز کردہ مطابق لیں۔", "اپنے ڈاکٹر سے مشورہ کیے بغیر اپنی دوا بند یا تبدیل نہ کریں۔", "سمجھیں کہ آپ کی دوا کیسے کام کرتی ہے اور اس کے ممکنہ ضمنی اثرات کیا ہیں۔"
    ],
    diabetesManagementFootCareTitle: "پاؤں کی دیکھ بھال",
    diabetesManagementFootCarePoints: [
        "اپنے پیروں کو روزانہ کٹ، زخم یا چھالوں کے لیے چیک کریں۔", "اپنے پیروں کو روزانہ نیم گرم پانی سے دھوئیں اور انہیں احتیاط سے خشک کریں۔", "اپنے پیروں کی حفاظت کے لیے ہمیشہ جوتے اور موزے پہنیں۔", "اگر آپ کو پاؤں میں کوئی چوٹ ہے جو ٹھیک نہیں ہوتی تو فوری طور پر اپنے ڈاکٹر سے ملیں۔"
    ],
    heartHealthTitle: "دل کی صحت کو برقرار رکھنا",
    heartHealthIntro: "پاکستان میں قلبی صحت کو سمجھنے اور بلڈ پریشر کو منظم کرنے کے لیے ایک تفصیلی رہنما۔",
    heartHealthWhatIsTitle: "دل کی بیماری کیا ہے؟",
    heartHealthWhatIsDesc: "قلبی بیماری (دل کی بیماری) دل یا خون کی نالیوں کو متاثر کرنے والے حالات کے لیے ایک عمومی اصطلاح ہے۔ یہ عام طور پر ایتھروسکلروسیس سے وابستہ ہے، ایک ایسی حالت جہاں آپ کی شریانوں کے اندر تختی بنتی ہے، جس کی وجہ سے وہ تنگ ہوجاتی ہیں اور خون کا بہاؤ مشکل ہوجاتا ہے۔ اگر خون کا جمنا بنتا ہے، تو یہ خون کے بہاؤ کو روک سکتا ہے، جو ممکنہ طور پر دل کا دورہ یا فالج کا سبب بن سکتا ہے۔ ہائی بلڈ پریشر، ہائی کولیسٹرول اور تمباکو نوشی جیسے خطرے والے عوامل کا انتظام اپنے دل کو صحت مند رکھنے اور سنگین مسائل سے بچنے کا سب سے اہم طریقہ ہے۔",
    heartHealthConditionsTitle: "دل کی عام بیماریاں",
    heartHealthHypertensionTitle: "ہائی بلڈ پریشر (ہائپر ٹینشن)",
    heartHealthHypertensionDesc: "اکثر 'خاموش قاتل' کہا جاتا ہے کیونکہ اس کی کوئی علامت نہیں ہوتی۔ یہ اس وقت ہوتا ہے جب آپ کی شریانوں کی دیواروں کے خلاف خون کا دباؤ مسلسل بہت زیادہ ہوتا ہے، جو وقت کے ساتھ آپ کے دل اور خون کی نالیوں کو نقصان پہنچا سکتا ہے۔",
    heartHealthCholesterolTitle: "ہائی کولیسٹرول",
    heartHealthCholesterolDesc: "'خراب' (LDL) کولیسٹرول کی اعلی سطح آپ کی شریانوں میں تختی کے جمع ہونے کا باعث بن سکتی ہے۔ 'اچھا' (HDL) کولیسٹرول آپ کے جسم سے خراب کولیسٹرول کو ہٹانے میں مدد کرتا ہے۔ دل کی صحت کے لیے توازن بہت ضروری ہے۔",
    heartHealthCadTitle: "کورونری آرٹری ڈیزیز (CAD)",
    heartHealthCadDesc: "دل کی بیماری کی سب سے عام قسم۔ یہ اس وقت ہوتی ہے جب دل کو خون، آکسیجن اور غذائی اجزاء فراہم کرنے والی بڑی خون کی نالیاں خراب یا بیمار ہوجاتی ہیں، عام طور پر تختی کے جمع ہونے کی وجہ سے۔",
    heartHealthSymptomsList: [
        "سینے میں درد، جکڑن، دباؤ یا تکلیف (انجائنا)", "سانس کی قلت", "آپ کی ٹانگوں یا بازوؤں میں درد، بے حسی، کمزوری یا سردی", "گردن، جبڑے، گلے، اوپری پیٹ یا کمر میں درد", "چکر آنا یا بیہوش ہونا", "دل کی دھڑکن کا بے قاعدہ ہونا"
    ],
    heartHealthRiskFactorsList: [
        { title: "ہائی بلڈ پریشر", desc: "دل کی بیماری کے لیے سب سے بڑا خطرے کا عنصر۔" },
        { title: "ہائی کولیسٹرول", desc: "شریانوں میں تختی کا باعث بنتا ہے۔" },
        { title: "ذیابیطس", desc: "ہائی بلڈ شوگر خون کی نالیوں کو نقصان پہنچاتا ہے۔" },
        { title: "تمباکو نوشی", desc: "آپ کی شریانوں کی پرت کو نقصان پہنچاتا ہے۔" },
        { title: "موٹاپا", desc: "ہائی بلڈ پریشر، ہائی کولیسٹرول اور ذیابیطس سے منسلک۔" },
        { title: "ناقص غذا", desc: "نمک، چینی اور غیر صحت بخش چکنائی میں زیادہ۔" },
        { title: "جسمانی غیرفعالیت", desc: "دل کو کمزور کرتا ہے اور دیگر خطرے والے عوامل میں حصہ ڈالتا ہے۔" },
        { title: "خاندانی تاریخ", desc: "ایک جینیاتی predisposition آپ کے خطرے کو بڑھاتا ہے۔" }
    ],
    heartHealthComplicationsList: [
        { title: "دل کا دورہ", desc: "اس وقت ہوتا ہے جب خون کے جمنے سے دل کے کسی حصے میں خون کا بہاؤ رک جاتا ہے۔" },
        { title: "فالج", desc: "اس وقت ہوتا ہے جب آپ کے دماغ کے کسی حصے میں خون کی فراہمی میں خلل پڑتا ہے یا کم ہوجاتا ہے۔" },
        { title: "دل کا ناکام ہونا", desc: "ایک دائمی حالت جہاں دل اتنی اچھی طرح سے خون پمپ نہیں کرتا جتنا اسے کرنا چاہئے۔" },
        { title: "اینوریزم", desc: "ایک شریان کی دیوار میں ایک ابھار جو پھٹنے کی صورت میں جان لیوا ہوسکتا ہے۔" }
    ],
    heartHealthManagementDietTitle: "دل کے لیے صحت مند غذا",
    heartHealthManagementDietPoints: [
        "بلڈ پریشر کو کم کرنے میں مدد کے لیے اپنے نمک (سوڈیم) کی مقدار کو کم کریں۔", "زیادہ پھل، سبزیاں اور साबुत اناج کھائیں۔", "کم چکنائی والے پروٹین کے ذرائع اور صحت مند چکنائی جیسے مچھلی، گری دار میوے اور زیتون کے تیل کا انتخاب کریں۔", "پراسیسڈ فوڈز، میٹھے مشروبات اور سرخ گوشت کو محدود کریں۔"
    ],
    heartHealthManagementExerciseTitle: "باقاعدہ جسمانی سرگرمی",
    heartHealthManagementExercisePoints: [
        "ہر ہفتے کم از کم 150 منٹ کی درمیانی شدت کی ایروبک ورزش (جیسے تیز چہل قدمی یا سائیکلنگ) کا ہدف رکھیں۔", "تھوڑی سی سرگرمی بھی کچھ نہ کرنے سے بہتر ہے۔ آہستہ شروع کریں اور آہستہ آہستہ اپنی مدت اور شدت میں اضافہ کریں۔", "باقاعدہ ورزش آپ کے دل کو مضبوط کرتی ہے اور گردش کو بہتر بناتی ہے۔"
    ],
    heartHealthManagementStressTitle: "تناؤ کا انتظام",
    heartHealthManagementStressPoints: [
        "دائمی تناؤ ہائی بلڈ پریشر اور دیگر دل کے خطرات میں حصہ ڈال سکتا ہے۔", "گہری سانس لینے، مراقبہ یا یوگا جیسی آرام کی تکنیکوں پر عمل کریں۔", "اپنے مشاغل اور سرگرمیوں کے لیے وقت نکالیں جن سے آپ لطف اندوز ہوں۔", "یقینی بنائیں کہ آپ کو رات میں 7-8 گھنٹے کی معیاری نیند آتی ہے۔"
    ],
    heartHealthManagementSmokingTitle: "تمباکو نوشی چھوڑنا",
    heartHealthManagementSmokingPoints: [
        "تمباکو نوشی دل کی بیماری کے لیے سب سے اہم خطرے والے عوامل میں سے ایک ہے۔", "چھوڑنا آپ کے دل کی صحت کے لیے سب سے اچھی چیز ہے جو آپ کر سکتے ہیں۔", "چھوڑنے میں مدد کے لیے خاندان، دوستوں یا ڈاکٹر سے مدد لیں۔"
    ],
    heartHealthManagementCheckupsTitle: "باقاعدہ چیک اپ",
    heartHealthManagementCheckupsPoints: [
        "اپنے بلڈ پریشر، کولیسٹرول اور بلڈ شوگر کی نگرانی کے لیے باقاعدگی سے اپنے ڈاکٹر سے ملیں۔", "کوئی بھی تجویز کردہ دوا بالکل ہدایت کے مطابق لیں۔", "اپنے ڈاکٹر سے اپنی خاندانی تاریخ اور ذاتی خطرے والے عوامل پر بات کریں۔"
    ],
    healthLogTitle: "ہیلتھ ایپ",
    healthLogSubtitle: "ذیابیطس اور دل کے مریضوں کے لیے اپنی پیمائش لاگ کرنے کے لیے ایک سادہ ایپ۔",
    bpLogTitle: "بلڈ پریشر لاگ",
    bsLogTitle: "بلڈ شوگر لاگ",
    logDisclaimer: "نوٹ: ڈیٹا صرف آپ کے موجودہ سیشن کے لیے محفوظ کیا جاتا ہے اور جب آپ یہ صفحہ بند کریں گے تو یہ ضائع ہو جائے گا۔",
    systolic: "سسٹولک (SYS)",
    diastolic: "ڈائیسٹولک (DIA)",
    pulse: "پلس",
    addBpReading: "بی پی ریڈنگ شامل کریں",
    bloodSugarLevel: "شوگر لیول (mg/dL)",
    measured: "پیمائش",
    beforeMeal: "کھانے سے پہلے",
    afterMeal: "کھانے کے بعد",
    addBsReading: "شوگر ریڈنگ شامل کریں",
    noReadings: "ابھی تک کوئی ریڈنگ لاگ نہیں ہوئی۔",
    voiceAssistantTitle: "اے آئی وائس اسسٹنٹ",
    voiceAssistantWelcome: "محترم، خوش آمدید۔ آج میں آپ کی تشخیص میں کیا مدد کر سکتا ہوں؟ براہ کرم مجھے اپنی علامات کے بارے میں بتائیں۔",
    voiceAssistantGuide: "آپ اپنی علامات بیان کر سکتے ہیں، یا اپنے موجودہ نسخے یا دوا کی بوتل کی تصویر اپ لوڈ کر سکتے ہیں۔ میں اس عمل میں آپ کی رہنمائی کروں گا۔",
    voiceAssistantReportPrompt: "لیب ٹیسٹ پر مبنی مکمل تشخیص کے لیے، براہ کرم ہمارا وقف شدہ لیب تجزیہ کار استعمال کریں۔",
    goToAnalyzer: "لیب تجزیہ کار پر جائیں",
    inputPlaceholder: "اپنی علامات یہاں ٹائپ کریں یا مائیک استعمال کریں...",
  }
};