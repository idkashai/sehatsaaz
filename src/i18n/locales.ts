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
    diagnosis: "Diagnosis & When to See a Doctor",
    precautions: "Precautions",
    lifestyle: "Lifestyle & Management",
    chatWithAssistant: "Chat with Voice Assistant for Diagnosis",
    watchVideo: "Watch an Informative Video",
    riskFactors: "Risk Factors",
    complications: "Potential Complications",
    management: "Management & Prevention",
    references: "Sources & References",
    diabetesTitle: "Understanding Diabetes (Sugar)",
    diabetesIntro: "A comprehensive guide to understanding and managing diabetes for a healthier life in Pakistan. Learn about types, symptoms, risks, and crucial lifestyle changes.",
    diabetesWhatIsTitle: "What is Diabetes?",
    diabetesWhatIsDesc: "Diabetes mellitus, commonly known as diabetes or 'sugar' in Pakistan, is a chronic (long-lasting) health condition that affects how your body turns food into energy. Your body breaks down most of the food you eat into sugar (glucose) and releases it into your bloodstream. When your blood sugar goes up, it signals your pancreas to release a hormone called insulin. Insulin acts like a key to let the blood sugar into your body’s cells for use as energy. With diabetes, your body either doesn’t make enough insulin or can’t effectively use the insulin it does make. When there isn’t enough insulin or cells stop responding to insulin, too much blood sugar stays in your bloodstream. Over time, that can cause serious health problems, such as heart disease, vision loss, and kidney disease. While there isn't a cure for diabetes, learning about it and taking steps to manage it can help you live a long, healthy life.",
    diabetesTypesTitle: "Types of Diabetes",
    diabetesType1Title: "Type 1 Diabetes",
    diabetesType1Desc: "This type is thought to be an autoimmune reaction where the body's immune system attacks and destroys the insulin-producing cells in the pancreas by mistake. It's usually diagnosed in children and young adults, which is why it was previously known as juvenile diabetes. People with Type 1 diabetes must take insulin every day to survive.",
    diabetesType2Title: "Type 2 Diabetes",
    diabetesType2Desc: "This is the most common type of diabetes, accounting for about 90-95% of all cases. With Type 2, the body doesn't use insulin well and is unable to keep blood sugar at normal levels. This is called insulin resistance. It develops over many years and is usually diagnosed in adults, though it's increasingly seen in children, teens, and young adults. It is often linked to lifestyle factors like being overweight, physical inactivity, and genetics.",
    diabetesGestationalTitle: "Gestational Diabetes",
    diabetesGestationalDesc: "This type develops in pregnant women who have never had diabetes. It is caused by hormonal changes during pregnancy that make the body less sensitive to the effects of insulin. It usually goes away after the baby is born but increases the mother's and child's risk for developing type 2 diabetes later in life. Managing it is crucial for the health of both mother and baby.",
    diabetesSymptomsList: [
        "Frequent urination, especially at night", "Increased thirst and dry mouth", "Unexplained weight loss", "Increased hunger (polyphagia)", "Blurred vision", "Numbness, tingling, or pain in hands or feet", "Feeling very tired or fatigued", "Very dry, itchy skin", "Sores that heal slowly", "More infections than usual (e.g., gum, skin, or vaginal infections)"
    ],
    diabetesRiskFactorsList: [
        "Family History: Having a parent or sibling with Type 2 diabetes.", "Weight: Being overweight or obese is a main risk factor.", "Inactivity: Lack of physical activity (exercising less than 3 times a week).", "Age: Being 45 years or older increases your risk.", "Ethnicity: South Asian heritage is associated with a higher risk.", "Gestational Diabetes: Having a history of gestational diabetes.", "PCOS: Having Polycystic Ovary Syndrome increases the risk for women.", "High Blood Pressure: Blood pressure over 140/90 mmHg is a risk factor.", "Abnormal Cholesterol: Low levels of 'good' (HDL) cholesterol and high levels of triglycerides."
    ],
    diabetesComplicationsList: [
        { title: "Heart and Blood Vessel Disease", desc: "Diabetes dramatically increases the risk of various cardiovascular problems, including coronary artery disease with chest pain (angina), heart attack, stroke, and narrowing of arteries (atherosclerosis)." },
        { title: "Kidney Disease (Nephropathy)", desc: "The kidneys contain millions of tiny blood vessel clusters (glomeruli) that filter waste from your blood. High blood sugar can damage this delicate filtering system, leading to kidney damage and potentially irreversible kidney failure, requiring dialysis or a kidney transplant." },
        { title: "Nerve Damage (Neuropathy)", desc: "Excess sugar can injure the walls of the tiny blood vessels (capillaries) that nourish your nerves, especially in your legs. This can cause tingling, numbness, burning, or pain that usually begins at the tips of the toes or fingers and gradually spreads upward." },
        { title: "Eye Damage (Retinopathy)", desc: "Diabetes can damage the blood vessels of the retina (the light-sensitive tissue at the back of the eye), potentially leading to blindness. It also increases the risk of other serious vision conditions, such as cataracts and glaucoma." },
        { title: "Foot Problems", desc: "Nerve damage in the feet or poor blood flow to the feet increases the risk of various foot complications. Left untreated, cuts and blisters can become serious infections, which might ultimately require toe, foot, or even leg amputation." },
        { title: "Skin Conditions", desc: "Diabetes may leave you more susceptible to skin problems, including bacterial and fungal infections. High blood sugar can also cause a condition called diabetic dermopathy, which appears as brown patches on the skin." }
    ],
    diabetesManagementDietTitle: "Healthy Diet (صحت مند غذا)",
    diabetesManagementDietPoints: [
        "Focus on non-starchy vegetables like leafy greens (spinach, saag), broccoli, carrots, and salad.", "Choose whole grains (whole wheat roti, brown rice, barley) over refined grains (white bread, naan, polished white rice).", "Include lean proteins like skinless chicken, fish, daal (lentils), chickpeas, and beans.", "Limit sugary drinks, mithai (sweets), bakery items, and processed foods like chips and biscuits.", "Control portion sizes. Use smaller plates to manage how much you eat and prevent high blood sugar.", "Opt for healthy fats found in nuts, seeds, and mustard or canola oil, and limit ghee and butter."
    ],
    diabetesManagementExerciseTitle: "Regular Exercise (باقاعدہ ورزش)",
    diabetesManagementExercisePoints: [
        "Aim for at least 150 minutes of moderate-intensity aerobic activity per week. This can be a brisk 30-minute walk 5 days a week.", "Include strength training (lifting light weights, using resistance bands) 2 or more days a week to build muscle, which helps use blood sugar.", "Avoid sitting for long periods. Get up, stretch, and move around for a few minutes every 30 minutes to improve blood flow.", "Choose activities you enjoy, such as walking, cycling, swimming, or even gardening, to stay motivated."
    ],
    diabetesManagementMonitoringTitle: "Blood Sugar Monitoring (بلڈ شوگر کی نگرانی)",
    diabetesManagementMonitoringPoints: [
        "Regularly check your blood sugar levels with a glucometer as advised by your doctor. This helps you understand how your body reacts to food, exercise, and medicine.", "Keep a detailed log of your readings and share it with your doctor during checkups.", "Get an A1C (HbA1c) test at least twice a year. This test measures your average blood sugar level over the past 2 to 3 months and is a key indicator of how well your diabetes is being managed."
    ],
    diabetesManagementMedsTitle: "Medication & Insulin (ادویات)",
    diabetesManagementMedsPoints: [
        "Take all medications (pills like metformin or insulin injections) exactly as prescribed by your healthcare provider.", "Do not stop, skip, or change your medication dosage without consulting your doctor first, even if you feel better.", "Understand the purpose of your medication, how it works, and be aware of any potential side effects. Discuss any concerns with your doctor or pharmacist.", "If you take insulin, learn the correct technique for injection and how to properly store it."
    ],
    diabetesManagementFootCareTitle: "Diligent Foot Care (پاؤں کی دیکھ بھال)",
    diabetesManagementFootCarePoints: [
        "Check your feet every single day for any cuts, sores, blisters, redness, or swelling. Use a mirror if you can't see the bottom of your feet.", "Wash your feet daily with lukewarm water and mild soap. Dry them carefully, especially between the toes.", "Always wear comfortable, well-fitting shoes and socks to protect your feet from injury. Never walk barefoot.", "See your doctor or a specialist immediately if you have a foot injury that doesn't seem to be healing or looks infected."
    ],
    heartHealthTitle: "Maintaining Heart Health & Managing Blood Pressure",
    heartHealthIntro: "A detailed guide to understanding cardiovascular health, managing high blood pressure (hypertension), and making heart-healthy choices to thrive in Pakistan.",
    heartHealthWhatIsTitle: "What is Heart Disease?",
    heartHealthWhatIsDesc: "Cardiovascular disease (CVD), commonly known as heart disease, is a general term for a range of conditions affecting the heart and blood vessels. It is the leading cause of death globally. Most heart diseases are associated with atherosclerosis, a condition where a waxy substance called plaque builds up inside your arteries. This plaque buildup causes the arteries to harden and narrow, which restricts blood flow and makes it harder for oxygen-rich blood to reach your heart and other parts of your body. If a blood clot forms on the plaque, it can completely block the blood flow, which can cause a life-threatening heart attack or stroke. The good news is that up to 80% of premature heart disease and stroke can be prevented. Managing key risk factors like high blood pressure, high cholesterol, and smoking through lifestyle changes and medical treatment is the most important way to keep your heart healthy and prevent serious problems.",
    heartHealthConditionsTitle: "Common Heart Conditions",
    heartHealthHypertensionTitle: "High Blood Pressure (Hypertension)",
    heartHealthHypertensionDesc: "Often called the 'silent killer' because it usually has no warning signs or symptoms. It is a condition where the long-term force of the blood against your artery walls is consistently too high. This high pressure can damage your heart and blood vessels over time, leading to serious complications like heart attack, stroke, and kidney failure. Regular blood pressure checks are essential for everyone.",
    heartHealthCholesterolTitle: "High Cholesterol",
    heartHealthCholesterolDesc: "Cholesterol is a waxy substance found in your blood that your body needs to build healthy cells. However, high levels of 'bad' (LDL) cholesterol can lead to plaque buildup in your arteries, a process known as atherosclerosis. 'Good' (HDL) cholesterol helps transport and remove bad cholesterol from your body. A healthy balance between LDL and HDL is crucial for good heart health. High cholesterol can be inherited, but it's often the result of unhealthy lifestyle choices.",
    heartHealthCadTitle: "Coronary Artery Disease (CAD)",
    heartHealthCadDesc: "This is the most common type of heart disease. It occurs when the major blood vessels (coronary arteries) that supply the heart muscle with blood, oxygen, and nutrients become damaged or diseased. Plaque buildup and inflammation are the usual causes. When blood flow to the heart is reduced, it can cause chest pain (angina). A complete blockage can cause a heart attack.",
    heartHealthSymptomsList: [
        "Chest pain, chest tightness, pressure, or discomfort (angina)", "Shortness of breath, especially with activity", "Pain, numbness, weakness, or coldness in your legs or arms if the blood vessels in those parts of your body are narrowed", "Pain in the neck, jaw, throat, upper abdomen, or back", "Dizziness, lightheadedness, or fainting (syncope)", "Irregular, fast, or fluttering heartbeat (palpitations)"
    ],
    heartHealthRiskFactorsList: [
        { title: "High Blood Pressure (Hypertension)", desc: "The single most significant risk factor for heart disease. It damages arteries and makes them more prone to plaque buildup." },
        { title: "High Cholesterol", desc: "High levels of 'bad' LDL cholesterol contribute directly to the formation of plaque in arteries." },
        { title: "Diabetes", desc: "Uncontrolled high blood sugar damages blood vessels and nerves that control your heart, significantly increasing risk." },
        { title: "Smoking & Tobacco Use", desc: "Chemicals in tobacco can damage the lining of your arteries, leading to atherosclerosis. It also raises blood pressure." },
        { title: "Obesity or Being Overweight", desc: "Excess weight is linked to other risk factors, including high blood pressure, high cholesterol, and type 2 diabetes." },
        { title: "Poor Diet", desc: "A diet high in salt (sodium), sugar, saturated fats (ghee, butter), and processed foods contributes to most risk factors." },
        { title: "Physical Inactivity", desc: "A sedentary lifestyle weakens the heart muscle and contributes to obesity, high blood pressure, and high cholesterol." },
        { title: "Family History", desc: "A genetic predisposition increases your risk, especially if a close male relative had heart disease before age 55, or a female relative before age 65." },
        { title: "Chronic Stress", desc: "Unmanaged stress can lead to behaviors and factors that increase heart disease risk, such as high blood pressure and overeating." }
    ],
    heartHealthComplicationsList: [
        { title: "Heart Attack", desc: "This is a medical emergency that occurs when the blood flow to a part of the heart is blocked, usually by a blood clot. Without blood, the heart muscle begins to die." },
        { title: "Stroke", desc: "A stroke happens when the blood supply to part of your brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Brain cells begin to die in minutes." },
        { title: "Heart Failure", desc: "This is a chronic, progressive condition in which the heart muscle can't pump blood as well as it should. It does not mean the heart has stopped working, but that it is weakened and needs support." },
        { title: "Aneurysm", desc: "A bulge or 'ballooning' in the wall of an artery. If an aneurysm grows large, it may burst and cause dangerous bleeding, which can be life-threatening." },
        { title: "Peripheral Artery Disease (PAD)", desc: "This is a circulatory problem in which narrowed arteries reduce blood flow to your limbs, usually the legs, causing pain and other symptoms." }
    ],
    heartHealthManagementDietTitle: "Heart-Healthy Diet (صحت مند غذا)",
    heartHealthManagementDietPoints: [
        "Reduce your salt (sodium) intake significantly to help lower blood pressure. Avoid adding extra salt at the table and limit processed/packaged foods.", "Eat more fruits, vegetables, and whole grains like whole-wheat roti and brown rice. They are rich in vitamins, minerals, and fiber.", "Choose lean protein sources (skinless chicken, fish, lentils/daal) and healthy fats like those in fish, nuts, seeds, and olive/canola oil.", "Limit processed foods, sugary drinks, red meat (beef, mutton), and foods high in saturated fat like ghee, butter, and full-fat dairy.", "Practice portion control to maintain a healthy weight."
    ],
    heartHealthManagementExerciseTitle: "Regular Physical Activity (باقاعدہ ورزش)",
    heartHealthManagementExercisePoints: [
        "Aim for at least 150 minutes of moderate-intensity aerobic exercise (like brisk walking, cycling, or swimming) each week. This strengthens your heart.", "Incorporate at least 2 days of muscle-strengthening activities per week.", "Even small amounts of activity are better than none. Start slow and gradually increase your duration and intensity over time.", "Regular exercise strengthens your heart, improves circulation, helps control weight, and can lower blood pressure and cholesterol."
    ],
    heartHealthManagementStressTitle: "Stress Management (تناؤ کا انتظام)",
    heartHealthManagementStressPoints: [
        "Chronic stress can contribute to high blood pressure and other unhealthy behaviors.", "Practice relaxation techniques such as deep breathing exercises, meditation, or yoga for a few minutes each day.", "Make time for hobbies and activities you enjoy, like spending time with family and friends.", "Ensure you get 7-8 hours of quality sleep per night, as poor sleep can negatively affect heart health."
    ],
    heartHealthManagementSmokingTitle: "Quit Smoking (تمباکو نوشی چھوڑنا)",
    heartHealthManagementSmokingPoints: [
        "Smoking is one of the most significant and preventable risk factors for heart disease. There is no safe amount of smoking.", "Quitting is the single best thing you can do for your heart health, and the benefits start almost immediately.", "Seek support from your family, friends, or a doctor to help you quit. There are many resources available to help you succeed."
    ],
    heartHealthManagementCheckupsTitle: "Regular Checkups & Medication (باقاعدہ چیک اپ)",
    heartHealthManagementCheckupsPoints: [
        "Visit your doctor regularly for checkups to monitor your blood pressure, cholesterol, and blood sugar levels.", "If you are prescribed medications for blood pressure or cholesterol, take them exactly as directed by your doctor. Do not stop taking them without consultation.", "Be open with your doctor about your lifestyle, family history, and any symptoms you may be experiencing."
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
    diagnosis: "تشخیص اور ڈاکٹر سے کب رجوع کریں",
    precautions: "احتیاطی تدابیر",
    lifestyle: "طرز زندگی اور انتظام",
    chatWithAssistant: "تشخیص کے لیے وائس اسسٹنٹ سے بات کریں",
    watchVideo: "ایک معلوماتی ویڈیو دیکھیں",
    riskFactors: "خطرے کے عوامل",
    complications: "ممکنہ پیچیدگیاں",
    management: "انتظام اور روک تھام",
    references: "ذرائع اور حوالہ جات",
    diabetesTitle: "ذیابیطس کو سمجھنا (شوگر)",
    diabetesIntro: "پاکستان میں صحت مند زندگی کے لیے ذیابیطس کو سمجھنے اور اس کا انتظام کرنے کے لیے ایک جامع رہنما۔ اقسام، علامات، خطرات، اور اہم طرز زندگی کی تبدیلیوں کے بارے میں جانیں۔",
    diabetesWhatIsTitle: "ذیابیطس کیا ہے؟",
    diabetesWhatIsDesc: "ذیابیطس میلیٹس، جسے عام طور پر پاکستان میں ذیابیطس یا 'شوگر' کہا جاتا ہے، ایک دائمی (دیرپا) صحت کی حالت ہے جو آپ کے جسم کے کھانے کو توانائی میں تبدیل کرنے کے طریقے کو متاثر کرتی ہے۔ آپ کا جسم آپ کے کھانے کا زیادہ تر حصہ شکر (گلوکوز) میں توڑ دیتا ہے اور اسے آپ کے خون میں چھوڑ دیتا ہے۔ جب آپ کے خون میں شوگر بڑھ جاتی ہے، تو یہ آپ کے لبلبے کو انسولین نامی ہارمون چھوڑنے کا اشارہ دیتا ہے۔ انسولین توانائی کے طور پر استعمال کے لیے خون کی شکر کو آپ کے جسم کے خلیوں میں جانے دینے کے لیے ایک کلید کی طرح کام کرتی ہے۔ ذیابیطس کے ساتھ، آپ کا جسم یا تو کافی انسولین نہیں بناتا یا وہ جو انسولین بناتا ہے اسے مؤثر طریقے سے استعمال نہیں کرسکتا۔ جب کافی انسولین نہیں ہوتی یا خلیے انسولین کا جواب دینا بند کر دیتے ہیں، تو بہت زیادہ بلڈ شوگر آپ کے خون میں رہ جاتا ہے۔ وقت کے ساتھ، یہ صحت کے سنگین مسائل جیسے دل کی بیماری، بینائی کا نقصان، اور گردے کی بیماری کا سبب بن سکتا ہے۔ اگرچہ ذیابیطس کا کوئی علاج نہیں ہے، لیکن اس کے بارے میں سیکھنا اور اس کا انتظام کرنے کے لیے اقدامات کرنا آپ کو ایک لمبی، صحت مند زندگی گزارنے میں مدد دے سکتا ہے۔",
    diabetesTypesTitle: "ذیابیطس کی اقسام",
    diabetesType1Title: "ٹائپ 1 ذیابیطس",
    diabetesType1Desc: "اس قسم کو ایک خود کار مدافعتی ردعمل سمجھا جاتا ہے جہاں جسم کا مدافعتی نظام غلطی سے لبلبے میں انسولین پیدا کرنے والے خلیوں پر حملہ کرکے انہیں تباہ کر دیتا ہے۔ یہ عام طور پر بچوں اور نوجوانوں میں تشخیص ہوتا ہے، اسی لیے اسے پہلے جوینائل ذیابیطس کے نام سے جانا جاتا تھا۔ ٹائپ 1 ذیابیطس والے لوگوں کو زندہ رہنے کے لیے روزانہ انسولین لینا ضروری ہے۔",
    diabetesType2Title: "ٹائپ 2 ذیابیطس",
    diabetesType2Desc: "یہ ذیابیطس کی سب سے عام قسم ہے، جو تمام کیسز کا تقریباً 90-95% ہے۔ ٹائپ 2 کے ساتھ، جسم انسولین کو اچھی طرح سے استعمال نہیں کرتا اور خون میں شوگر کو معمول کی سطح پر نہیں رکھ سکتا۔ اسے انسولین مزاحمت کہتے ہیں۔ یہ کئی سالوں میں تیار ہوتا ہے اور عام طور پر بالغوں میں تشخیص ہوتا ہے، حالانکہ یہ بچوں، نوعمروں اور نوجوانوں میں تیزی سے دیکھا جا رہا ہے۔ یہ اکثر طرز زندگی کے عوامل جیسے زیادہ وزن، جسمانی غیرفعالیت، اور جینیات سے منسلک ہوتا ہے۔",
    diabetesGestationalTitle: "حمل کی ذیابیطس",
    diabetesGestationalDesc: "یہ قسم حاملہ خواتین میں پیدا ہوتی ہے جنہیں کبھی ذیابیطس نہیں ہوا تھا۔ یہ حمل کے دوران ہارمونل تبدیلیوں کی وجہ سے ہوتا ہے جو جسم کو انسولین کے اثرات کے لیے کم حساس بناتی ہیں۔ یہ عام طور پر بچے کی پیدائش کے بعد ختم ہوجاتا ہے لیکن ماں اور بچے کے لیے بعد کی زندگی میں ٹائپ 2 ذیابیطس پیدا ہونے کا خطرہ بڑھاتا ہے۔ ماں اور بچے دونوں کی صحت کے لیے اس کا انتظام بہت ضروری ہے۔",
    diabetesSymptomsList: [
        "بار بار پیشاب آنا، خاص طور پر رات کو", "پیاس میں اضافہ اور خشک منہ", "بلا وجہ وزن میں کمی", "بھوک میں اضافہ (پولیفیجیا)", "دھندلا نظر آنا", "ہاتھوں یا پیروں میں بے حسی، جھنجھناہٹ یا درد", "بہت تھکاوٹ محسوس کرنا", "بہت خشک، خارش والی جلد", "زخم جو آہستہ آہستہ بھرتے ہیں", "معمول سے زیادہ انفیکشن (مثلاً، مسوڑھوں، جلد، یا اندام نہانی کے انفیکشن)"
    ],
    diabetesRiskFactorsList: [
        "خاندانی تاریخ: والدین یا بہن بھائی کو ٹائپ 2 ذیابیطس ہونا۔", "وزن: زیادہ وزن یا موٹاپا ایک اہم خطرے کا عنصر ہے۔", "غیرفعالیت: جسمانی سرگرمی کی کمی (ہفتے میں 3 بار سے کم ورزش کرنا)۔", "عمر: 45 سال یا اس سے زیادہ عمر کا ہونا آپ کے خطرے کو بڑھاتا ہے۔", "نسل: جنوبی ایشیائی ورثہ زیادہ خطرے سے وابستہ ہے۔", "حمل کی ذیابیطس: حمل کی ذیابیطس کی تاریخ ہونا۔", "PCOS: پولی سسٹک اووری سنڈروم ہونا خواتین کے لیے خطرہ بڑھاتا ہے۔", "ہائی بلڈ پریشر: 140/90 mmHg سے زیادہ بلڈ پریشر ایک خطرے کا عنصر ہے۔", "غیر معمولی کولیسٹرول: 'اچھے' (HDL) کولیسٹرول کی کم سطح اور ٹرائگلیسرائڈز کی اعلی سطح۔"
    ],
    diabetesComplicationsList: [
        { title: "دل اور خون کی نالیوں کی بیماری", desc: "ذیابیطس مختلف قلبی مسائل کے خطرے کو ڈرامائی طور پر بڑھاتا ہے، بشمول سینے میں درد (انجائنا) کے ساتھ کورونری آرٹری ڈیزیز، دل کا دورہ، فالج، اور شریانوں کا تنگ ہونا (ایتھروسکلروسیس)۔" },
        { title: "گردے کی بیماری (نیفروپیتھی)", desc: "گردوں میں لاکھوں چھوٹے خون کی نالیوں کے جھرمٹ (گلومیرولی) ہوتے ہیں جو آپ کے خون سے فضلہ فلٹر کرتے ہیں۔ ہائی بلڈ شوگر اس نازک فلٹرنگ سسٹم کو نقصان پہنچا سکتا ہے، جو گردے کو نقصان پہنچاتا ہے اور ممکنہ طور پر ناقابل واپسی گردے کی ناکامی کا باعث بنتا ہے، جس کے لیے ڈائلیسس یا گردے کی پیوند کاری کی ضرورت ہوتی ہے۔" },
        { title: "اعصابی نقصان (نیوروپیتھی)", desc: "اضافی شوگر ان چھوٹی خون کی نالیوں (کیپلیریوں) کی دیواروں کو نقصان پہنچا سکتی ہے جو آپ کے اعصاب کو पोषण देती ہیں، خاص طور پر آپ کی ٹانگوں میں۔ اس سے جھنجھناہٹ، بے حسی، جلن یا درد ہوسکتا ہے جو عام طور پر پیر کی انگلیوں یا انگلیوں کے سروں سے شروع ہوتا ہے اور آہستہ آہستہ اوپر کی طرف پھیلتا ہے۔" },
        { title: "آنکھوں کا نقصان (ریٹینوپیتھی)", desc: "ذیابیطس ریٹنا (آنکھ کے پچھلے حصے میں روشنی کے لیے حساس ٹشو) کی خون کی نالیوں کو نقصان پہنچا سکتا ہے، جو ممکنہ طور پر اندھے پن کا باعث بن سکتا ہے۔ یہ دیگر سنگین بصری حالات جیسے موتیابند اور گلوکوما کا خطرہ بھی بڑھاتا ہے۔" },
        { title: "پاؤں کے مسائل", desc: "پیروں میں اعصابی نقصان یا پیروں میں خون کے بہاؤ میں کمی پاؤں کی مختلف پیچیدگیوں کا خطرہ بڑھاتی ہے۔ علاج نہ کیے جانے پر، کٹ اور چھالے سنگین انفیکشن بن سکتے ہیں، جن کے لیے بالآخر پیر، پاؤں یا یہاں تک کہ ٹانگ کاٹنے کی ضرورت پڑسکتی ہے۔" },
        { title: "جلد کے حالات", desc: "ذیابیطس آپ کو جلد کے مسائل، بشمول بیکٹیریل اور فنگل انفیکشنز کے لیے زیادہ حساس بنا سکتا ہے۔ ہائی بلڈ شوگر ایک حالت کا سبب بھی بن سکتا ہے جسے ذیابیطس ڈرموپیتھی کہتے ہیں، جو جلد پر بھورے دھبوں کے طور پر ظاہر ہوتا ہے۔" }
    ],
    diabetesManagementDietTitle: "صحت مند غذا",
    diabetesManagementDietPoints: [
        "غیر نشاستہ دار سبزیوں جیسے پتوں والی سبزیاں (پالک، ساگ)، بروکولی، گاجر اور سلاد پر توجہ دیں۔", "ریفائنڈ اناج (سفید ڈبل روٹی، نان، پالش شدہ سفید چاول) کے بجائے साबुत اناج (گندم کی روٹی، بھورے چاول، جو) کا انتخاب کریں۔", "کم چکنائی والے پروٹین جیسے بغیر جلد کے مرغی، مچھلی، دال، چنے اور پھلیاں شامل کریں۔", "میٹھے مشروبات، مٹھائیاں، بیکری آئٹمز اور پراسیسڈ فوڈز جیسے چپس اور بسکٹ کو محدود کریں۔", "حصے کے سائز کو کنٹرول کریں۔ آپ کتنا کھاتے ہیں اسے منظم کرنے اور ہائی بلڈ شوگر کو روکنے کے لیے چھوٹی پلیٹیں استعمال کریں۔", "گری دار میوے، بیجوں، اور سرسوں یا کینولا کے تیل میں پائے جانے والے صحت مند چکنائی کا انتخاب کریں، اور گھی اور مکھن کو محدود کریں۔"
    ],
    diabetesManagementExerciseTitle: "باقاعدہ ورزش",
    diabetesManagementExercisePoints: [
        "ہفتے میں کم از کم 150 منٹ کی درمیانی شدت کی ایروبک سرگرمی کا ہدف رکھیں۔ یہ ہفتے میں 5 دن 30 منٹ کی تیز چہل قدمی ہوسکتی ہے۔", "پٹھوں کی تعمیر کے لیے ہفتے میں 2 یا زیادہ دن طاقت کی تربیت (ہلکے وزن اٹھانا، مزاحمتی بینڈ استعمال کرنا) شامل کریں، جو بلڈ شوگر کو استعمال کرنے میں مدد کرتا ہے۔", "لمبے عرصے تک بیٹھنے سے گریز کریں۔ خون کے بہاؤ کو بہتر بنانے کے لیے ہر 30 منٹ بعد اٹھیں، کھینچیں اور چند منٹ حرکت کریں۔", "اپنی حوصلہ افزائی کے لیے ایسی سرگرمیوں کا انتخاب کریں جن سے آپ لطف اندوز ہوں، جیسے چہل قدمی، سائیکلنگ، تیراکی، یا یہاں تک کہ باغبانی۔"
    ],
    diabetesManagementMonitoringTitle: "بلڈ شوگر کی نگرانی",
    diabetesManagementMonitoringPoints: [
        "اپنے ڈاکٹر کے مشورے کے مطابق گلوکومیٹر سے باقاعدگی سے اپنے بلڈ شوگر کی سطح چیک کریں۔ یہ آپ کو یہ سمجھنے میں مدد کرتا ہے کہ آپ کا جسم خوراک، ورزش اور دوا پر کیسے ردعمل ظاہر کرتا ہے۔", "اپنی ریڈنگز کا ایک تفصیلی لاگ رکھیں اور اسے چیک اپ کے دوران اپنے ڈاکٹر کے ساتھ شیئر کریں۔", "سال میں کم از کم دو بار A1C (HbA1c) ٹیسٹ کروائیں۔ یہ ٹیسٹ گزشتہ 2 سے 3 مہینوں میں آپ کے اوسط بلڈ شوگر کی سطح کو ماپتا ہے اور یہ اس بات کا ایک اہم اشارہ ہے کہ آپ کی ذیابیطس کا انتظام کتنی اچھی طرح سے ہو رہا ہے۔"
    ],
    diabetesManagementMedsTitle: "ادویات اور انسولین",
    diabetesManagementMedsPoints: [
        "تمام ادویات (گولیاں جیسے میٹفارمین یا انسولین کے انجیکشن) بالکل اپنے ہیلتھ کیئر فراہم کنندہ کے تجویز کردہ مطابق لیں۔", "اپنے ڈاکٹر سے پہلے مشورہ کیے بغیر اپنی دوا کی خوراک بند، چھوڑیں یا تبدیل نہ کریں، چاہے آپ بہتر محسوس کریں۔", "اپنی دوا کا مقصد سمجھیں، یہ کیسے کام کرتی ہے، اور کسی بھی ممکنہ ضمنی اثرات سے آگاہ رہیں۔ کسی بھی تشویش کے بارے میں اپنے ڈاکٹر یا فارماسسٹ سے بات کریں۔", "اگر آپ انسولین لیتے ہیں، تو انجیکشن کی صحیح تکنیک اور اسے صحیح طریقے سے ذخیرہ کرنے کا طریقہ سیکھیں۔"
    ],
    diabetesManagementFootCareTitle: "مستعد پاؤں کی دیکھ بھال",
    diabetesManagementFootCarePoints: [
        "کسی بھی کٹ، زخم، چھالے، لالی یا سوجن کے لیے روزانہ اپنے پیروں کو چیک کریں۔ اگر آپ اپنے پیروں کے نیچے نہیں دیکھ سکتے تو آئینہ استعمال کریں۔", "اپنے پیروں کو روزانہ نیم گرم پانی اور ہلکے صابن سے دھوئیں. انہیں احتیاط سے خشک کریں، خاص طور پر انگلیوں کے درمیان۔", "اپنے پیروں کو چوٹ سے بچانے کے لیے ہمیشہ آرام دہ، اچھی طرح سے فٹ ہونے والے جوتے اور موزے پہنیں۔ کبھی بھی ننگے پاؤں نہ چلیں۔", "اگر آپ کو پاؤں میں کوئی چوٹ ہے جو ٹھیک ہوتی نظر نہیں آرہی ہے یا متاثرہ لگ رہی ہے تو فوری طور پر اپنے ڈاکٹر یا ماہر سے ملیں۔"
    ],
    heartHealthTitle: "دل کی صحت کو برقرار رکھنا اور بلڈ پریشر کا انتظام",
    heartHealthIntro: "پاکستان میں قلبی صحت کو سمجھنے، ہائی بلڈ پریشر (ہائپر ٹینشن) کا انتظام کرنے، اور دل کے لیے صحت مند انتخاب کرنے کے لیے ایک تفصیلی رہنما۔",
    heartHealthWhatIsTitle: "دل کی بیماری کیا ہے؟",
    heartHealthWhatIsDesc: "قلبی بیماری (CVD)، جسے عام طور پر دل کی بیماری کہا جاتا ہے، دل اور خون کی نالیوں کو متاثر کرنے والے حالات کی ایک حد کے لیے ایک عمومی اصطلاح ہے۔ یہ عالمی سطح پر موت کی سب سے بڑی وجہ ہے۔ زیادہ تر دل کی بیماریاں ایتھروسکلروسیس سے وابستہ ہیں، ایک ایسی حالت جہاں آپ کی شریانوں کے اندر پلاک نامی ایک مومی مادہ بنتا ہے۔ یہ پلاک جمع ہونے سے شریانیں سخت اور تنگ ہوجاتی ہیں، جو خون کے بہاؤ کو محدود کرتی ہیں اور آکسیجن سے بھرپور خون کو آپ کے دل اور جسم کے دیگر حصوں تک پہنچنا مشکل بناتی ہیں۔ اگر پلاک پر خون کا جمنا بنتا ہے، تو یہ خون کے بہاؤ کو مکمل طور پر روک سکتا ہے، جو جان لیوا دل کا دورہ یا فالج کا سبب بن سکتا ہے۔ اچھی خبر یہ ہے کہ 80% تک قبل از وقت دل کی بیماری اور فالج کو روکا جاسکتا ہے۔ طرز زندگی میں تبدیلیوں اور طبی علاج کے ذریعے ہائی بلڈ پریشر، ہائی کولیسٹرول اور تمباکو نوشی جیسے اہم خطرے والے عوامل کا انتظام اپنے دل کو صحت مند رکھنے اور سنگین مسائل سے بچنے کا سب سے اہم طریقہ ہے۔",
    heartHealthConditionsTitle: "دل کی عام بیماریاں",
    heartHealthHypertensionTitle: "ہائی بلڈ پریشر (ہائپر ٹینشن)",
    heartHealthHypertensionDesc: "اکثر 'خاموش قاتل' کہا جاتا ہے کیونکہ اس کی عام طور پر کوئی انتباہی علامات یا نشانیاں نہیں ہوتیں۔ یہ ایک ایسی حالت ہے جہاں آپ کی شریانوں کی دیواروں کے خلاف خون کا طویل مدتی دباؤ مسلسل بہت زیادہ ہوتا ہے۔ یہ ہائی پریشر وقت کے ساتھ آپ کے دل اور خون کی نالیوں کو نقصان پہنچا سکتا ہے، جو دل کے دورے، فالج اور گردے کی ناکامی جیسی سنگین پیچیدگیوں کا باعث بنتا ہے۔ باقاعدہ بلڈ پریشر کی جانچ ہر ایک کے لیے ضروری ہے۔",
    heartHealthCholesterolTitle: "ہائی کولیسٹرول",
    heartHealthCholesterolDesc: "کولیسٹرول آپ کے خون میں پایا جانے والا ایک مومی مادہ ہے جس کی آپ کے جسم کو صحت مند خلیے بنانے کی ضرورت ہوتی ہے۔ تاہم، 'خراب' (LDL) کولیسٹرول کی اعلی سطح آپ کی شریانوں میں پلاک کے جمع ہونے کا باعث بن سکتی ہے، ایک عمل جسے ایتھروسکلروسیس کہا جاتا ہے۔ 'اچھا' (HDL) کولیسٹرول آپ کے جسم سے خراب کولیسٹرول کو منتقل کرنے اور ہٹانے میں مدد کرتا ہے۔ اچھی دل کی صحت کے لیے LDL اور HDL کے درمیان ایک صحت مند توازن بہت ضروری ہے۔ ہائی کولیسٹرول موروثی ہوسکتا ہے، لیکن یہ اکثر غیر صحت بخش طرز زندگی کے انتخاب کا نتیجہ ہوتا ہے۔",
    heartHealthCadTitle: "کورونری آرٹری ڈیزیز (CAD)",
    heartHealthCadDesc: "یہ دل کی بیماری کی سب سے عام قسم ہے۔ یہ اس وقت ہوتی ہے جب دل کے پٹھوں کو خون، آکسیجن اور غذائی اجزاء فراہم کرنے والی بڑی خون کی نالیاں (کورونری شریانیں) خراب یا بیمار ہوجاتی ہیں۔ پلاک جمع ہونا اور سوزش اس کی عام وجوہات ہیں۔ جب دل میں خون کا بہاؤ کم ہوجاتا ہے، تو یہ سینے میں درد (انجائنا) کا سبب بن سکتا ہے۔ مکمل رکاوٹ دل کا دورہ پڑنے کا سبب بن سکتی ہے۔",
    heartHealthSymptomsList: [
        "سینے میں درد، جکڑن، دباؤ یا تکلیف (انجائنا)", "سانس کی قلت، خاص طور پر سرگرمی کے ساتھ", "آپ کی ٹانگوں یا بازوؤں میں درد، بے حسی، کمزوری یا سردی اگر آپ کے جسم کے ان حصوں میں خون کی نالیاں تنگ ہوں", "گردن، جبڑے، گلے، اوپری پیٹ یا کمر میں درد", "چکر آنا، ہلکا سر درد، یا بیہوش ہونا (سنکوپ)", "بے قاعدہ، تیز، یا پھڑپھڑاتی دل کی دھڑکن (دھڑکن)"
    ],
    heartHealthRiskFactorsList: [
        { title: "ہائی بلڈ پریشر (ہائپر ٹینشن)", desc: "دل کی بیماری کے لیے سب سے اہم خطرے کا عنصر۔ یہ شریانوں کو نقصان پہنچاتا ہے اور انہیں پلاک جمع ہونے کا زیادہ خطرہ بناتا ہے۔" },
        { title: "ہائی کولیسٹرول", desc: " 'خراب' LDL کولیسٹرول کی اعلی سطح براہ راست شریانوں میں پلاک کی تشکیل میں حصہ ڈالتی ہے۔" },
        { title: "ذیابیطس", desc: "بے قابو ہائی بلڈ شوگر خون کی نالیوں اور آپ کے دل کو کنٹرول کرنے والے اعصاب کو نقصان پہنچاتا ہے، جس سے خطرہ نمایاں طور پر بڑھ جاتا ہے۔" },
        { title: "تمباکو نوشی اور تمباکو کا استعمال", desc: "تمباکو میں موجود کیمیکلز آپ کی شریانوں کی پرت کو نقصان پہنچا سکتے ہیں، جو ایتھروسکلروسیس کا باعث بنتے ہیں۔ یہ بلڈ پریشر بھی بڑھاتا ہے۔" },
        { title: "موٹاپا یا زیادہ وزن ہونا", desc: "اضافی وزن دیگر خطرے والے عوامل سے منسلک ہے، بشمول ہائی بلڈ پریشر، ہائی کولیسٹرول، اور ٹائپ 2 ذیابیطس۔" },
        { title: "ناقص غذا", desc: "نمک (سوڈیم)، چینی، سیر شدہ چکنائی (گھی، مکھن) اور پراسیسڈ فوڈز میں زیادہ غذا زیادہ تر خطرے والے عوامل میں حصہ ڈالتی ہے۔" },
        { title: "جسمانی غیرفعالیت", desc: "ایک بیٹھا ہوا طرز زندگی دل کے پٹھوں کو کمزور کرتا ہے اور موٹاپا، ہائی بلڈ پریشر اور ہائی کولیسٹرول میں حصہ ڈالتا ہے۔" },
        { title: "خاندانی تاریخ", desc: "ایک جینیاتی predisposition آپ کے خطرے کو بڑھاتا ہے، خاص طور پر اگر کسی قریبی مرد رشتہ دار کو 55 سال کی عمر سے پہلے، یا کسی خاتون رشتہ دار کو 65 سال سے پہلے دل کی بیماری ہوئی ہو۔" },
        { title: "دائمی تناؤ", desc: "بے قابو تناؤ ایسے رویوں اور عوامل کا باعث بن سکتا ہے جو دل کی بیماری کا خطرہ بڑھاتے ہیں، جیسے ہائی بلڈ پریشر اور زیادہ کھانا۔" }
    ],
    heartHealthComplicationsList: [
        { title: "دل کا دورہ", desc: "یہ ایک طبی ایمرجنسی ہے جو اس وقت ہوتی ہے جب دل کے کسی حصے میں خون کا بہاؤ رک جاتا ہے، عام طور پر خون کے جمنے سے۔ خون کے بغیر، دل کا پٹھا مرنا شروع ہوجاتا ہے۔" },
        { title: "فالج", desc: "فالج اس وقت ہوتا ہے جب آپ کے دماغ کے کسی حصے میں خون کی فراہمی میں خلل پڑتا ہے یا کم ہوجاتا ہے، جس سے دماغی بافتوں کو آکسیجن اور غذائی اجزاء ملنے سے روک دیا جاتا ہے۔ دماغی خلیے منٹوں میں مرنا شروع ہوجاتے ہیں۔" },
        { title: "دل کا ناکام ہونا", desc: "یہ ایک دائمی، ترقی پسند حالت ہے جس میں دل کا پٹھا اتنی اچھی طرح سے خون پمپ نہیں کرسکتا جتنا اسے کرنا چاہئے۔ اس کا مطلب یہ نہیں ہے کہ دل نے کام کرنا چھوڑ دیا ہے، بلکہ یہ کہ یہ کمزور ہے اور اسے مدد کی ضرورت ہے۔" },
        { title: "اینوریزم", desc: "ایک شریان کی دیوار میں ایک ابھار یا 'غبارہ'۔ اگر اینوریزم بڑا ہوجاتا ہے، تو یہ پھٹ سکتا ہے اور خطرناک خون بہنے کا سبب بن سکتا ہے، جو جان لیوا ہوسکتا ہے۔" },
        { title: "پیریفرل آرٹری ڈیزیز (PAD)", desc: "یہ ایک گردشی مسئلہ ہے جس میں تنگ شریانیں آپ کے اعضاء، عام طور پر ٹانگوں میں خون کے بہاؤ کو کم کرتی ہیں، جس سے درد اور دیگر علامات پیدا ہوتی ہیں۔" }
    ],
    heartHealthManagementDietTitle: "دل کے لیے صحت مند غذا",
    heartHealthManagementDietPoints: [
        "بلڈ پریشر کو کم کرنے میں مدد کے لیے اپنے نمک (سوڈیم) کی مقدار کو نمایاں طور پر کم کریں۔ میز پر اضافی نمک ڈالنے سے گریز کریں اور پراسیسڈ/پیک شدہ کھانوں کو محدود کریں۔", "زیادہ پھل، سبزیاں اور साबुत اناج جیسے گندم کی روٹی اور بھورے چاول کھائیں۔ وہ وٹامنز، معدنیات اور فائبر سے بھرپور ہوتے ہیں۔", "کم چکنائی والے پروٹین کے ذرائع (بغیر جلد کے مرغی، مچھلی، دال) اور صحت مند چکنائی جیسے مچھلی، گری دار میوے، بیجوں، اور زیتون/کینولا کے تیل کا انتخاب کریں۔", "پراسیسڈ فوڈز، میٹھے مشروبات، سرخ گوشت (گائے کا گوشت، مٹن) اور سیر شدہ چکنائی سے بھرپور کھانے جیسے گھی، مکھن اور فل فیٹ ڈیری کو محدود کریں۔", "صحت مند وزن برقرار رکھنے کے لیے حصے پر قابو پانے کی مشق کریں۔"
    ],
    heartHealthManagementExerciseTitle: "باقاعدہ جسمانی سرگرمی",
    heartHealthManagementExercisePoints: [
        "ہر ہفتے کم از کم 150 منٹ کی درمیانی شدت کی ایروبک ورزش (جیسے تیز چہل قدمی، سائیکلنگ، یا تیراکی) کا ہدف رکھیں۔ یہ آپ کے دل کو مضبوط کرتا ہے۔", "ہفتے میں کم از کم 2 دن پٹھوں کو مضبوط کرنے والی سرگرمیاں شامل کریں۔", "تھوڑی سی سرگرمی بھی کچھ نہ کرنے سے بہتر ہے۔ آہستہ شروع کریں اور آہستہ آہستہ اپنی مدت اور شدت میں اضافہ کریں۔", "باقاعدہ ورزش آپ کے دل کو مضبوط کرتی ہے، گردش کو بہتر بناتی ہے، وزن کو کنٹرول کرنے میں مدد کرتی ہے، اور بلڈ پریشر اور کولیسٹرول کو کم کرسکتی ہے۔"
    ],
    heartHealthManagementStressTitle: "تناؤ کا انتظام",
    heartHealthManagementStressPoints: [
        "دائمی تناؤ ہائی بلڈ پریشر اور دیگر غیر صحت بخش رویوں میں حصہ ڈال سکتا ہے۔", "ہر روز چند منٹ کے لیے گہری سانس لینے کی مشقیں، مراقبہ یا یوگا جیسی آرام کی تکنیکوں پر عمل کریں۔", "اپنے مشاغل اور سرگرمیوں کے لیے وقت نکالیں جن سے آپ لطف اندوز ہوں، جیسے خاندان اور دوستوں کے ساتھ وقت گزارنا۔", "یقینی بنائیں کہ آپ کو رات میں 7-8 گھنٹے کی معیاری نیند آتی ہے، کیونکہ خراب نیند دل کی صحت پر منفی اثر ڈال سکتی ہے۔"
    ],
    heartHealthManagementSmokingTitle: "تمباکو نوشی چھوڑنا",
    heartHealthManagementSmokingPoints: [
        "تمباکو نوشی دل کی بیماری کے لیے سب سے اہم اور قابل روک تھام خطرے والے عوامل میں سے ایک ہے۔ تمباکو نوشی کی کوئی محفوظ مقدار نہیں ہے۔", "چھوڑنا آپ کے دل کی صحت کے لیے سب سے اچھی چیز ہے جو آپ کر سکتے ہیں، اور فوائد تقریباً فوری طور پر شروع ہوجاتے ہیں۔", "چھوڑنے میں مدد کے لیے اپنے خاندان، دوستوں یا ڈاکٹر سے مدد لیں۔ آپ کو کامیاب ہونے میں مدد کے لیے بہت سے وسائل دستیاب ہیں۔"
    ],
    heartHealthManagementCheckupsTitle: "باقاعدہ چیک اپ اور ادویات",
    heartHealthManagementCheckupsPoints: [
        "اپنے بلڈ پریشر، کولیسٹرول اور بلڈ شوگر کی سطح کی نگرانی کے لیے باقاعدگی سے اپنے ڈاکٹر سے چیک اپ کے لیے ملیں۔", "اگر آپ کو بلڈ پریشر یا کولیسٹرول کے لیے دوائیں تجویز کی گئی ہیں، تو انہیں بالکل اپنے ڈاکٹر کی ہدایت کے مطابق لیں۔ مشاورت کے بغیر انہیں لینا بند نہ کریں۔", "اپنے طرز زندگی، خاندانی تاریخ، اور کسی بھی علامات کے بارے میں اپنے ڈاکٹر سے کھلے رہیں۔"
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