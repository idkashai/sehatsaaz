import React, { useState } from 'react';
import type { Language, BloodPressureLog, BloodSugarLog } from '../../types';
import { content } from '../../i18n/locales';
import { HeartPulseIcon, DropletIcon } from '../Icons';

const HealthLogPage: React.FC<{ language: Language }> = ({ language }) => {
    const t = content[language];
    const [bpLogs, setBpLogs] = useState<BloodPressureLog[]>([]);
    const [bsLogs, setBsLogs] = useState<BloodSugarLog[]>([]);

    const handleAddBp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newLog: BloodPressureLog = {
            id: Date.now(),
            systolic: Number(formData.get('systolic')),
            diastolic: Number(formData.get('diastolic')),
            pulse: Number(formData.get('pulse')),
            date: new Date().toLocaleString(),
        };
        setBpLogs([newLog, ...bpLogs]);
        e.currentTarget.reset();
    };

    const handleAddBs = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newLog: BloodSugarLog = {
            id: Date.now(),
            level: Number(formData.get('level')),
            measured: formData.get('measured') as 'before' | 'after',
            date: new Date().toLocaleString(),
        };
        setBsLogs([newLog, ...bsLogs]);
        e.currentTarget.reset();
    };

    return (
        <div className="container mx-auto max-w-6xl p-4 sm:p-6 md:p-8" dir={language === 'ur' ? 'rtl' : 'ltr'}>
             <header className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">{t.healthLogTitle}</h1>
                <p className="mt-2 text-slate-600 max-w-2xl mx-auto">{t.healthLogSubtitle}</p>
                <p className="mt-2 text-sm font-semibold text-yellow-700 bg-yellow-100 border border-yellow-300 rounded-md py-2 px-4 inline-block">{t.logDisclaimer}</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Blood Pressure Section */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2"><HeartPulseIcon className="h-6 w-6 text-red-500" />{t.bpLogTitle}</h2>
                    <form onSubmit={handleAddBp} className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                        <div>
                            <label className="block text-sm font-medium text-slate-600">{t.systolic}</label>
                            <input type="number" name="systolic" required className="mt-1 w-full border border-slate-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600">{t.diastolic}</label>
                            <input type="number" name="diastolic" required className="mt-1 w-full border border-slate-300 rounded-md p-2" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-600">{t.pulse}</label>
                            <input type="number" name="pulse" required className="mt-1 w-full border border-slate-300 rounded-md p-2" />
                        </div>
                        <button type="submit" className="sm:col-span-3 w-full bg-teal-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-700">{t.addBpReading}</button>
                    </form>
                    <div className="mt-6 space-y-2 max-h-60 overflow-y-auto">
                        {bpLogs.length > 0 ? bpLogs.map(log => (
                            <div key={log.id} className="bg-slate-50 p-3 rounded-md text-sm">
                                <p><strong>{log.systolic}/{log.diastolic}</strong> mmHg | <strong>Pulse:</strong> {log.pulse}</p>
                                <p className="text-xs text-slate-500">{log.date}</p>
                            </div>
                        )) : <p className="text-slate-500 text-sm">{t.noReadings}</p>}
                    </div>
                </div>

                {/* Blood Sugar Section */}
                 <div className="bg-white rounded-2xl shadow-lg p-6">
                    <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2"><DropletIcon className="h-6 w-6 text-blue-500" />{t.bsLogTitle}</h2>
                     <form onSubmit={handleAddBs} className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                        <div>
                            <label className="block text-sm font-medium text-slate-600">{t.bloodSugarLevel}</label>
                            <input type="number" name="level" required className="mt-1 w-full border border-slate-300 rounded-md p-2" />
                        </div>
                         <div>
                            <label className="block text-sm font-medium text-slate-600">{t.measured}</label>
                            <select name="measured" className="mt-1 w-full border border-slate-300 rounded-md p-2 bg-white">
                                <option value="before">{t.beforeMeal}</option>
                                <option value="after">{t.afterMeal}</option>
                            </select>
                        </div>
                        <button type="submit" className="sm:col-span-2 w-full bg-teal-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-700">{t.addBsReading}</button>
                    </form>
                    <div className="mt-6 space-y-2 max-h-60 overflow-y-auto">
                        {bsLogs.length > 0 ? bsLogs.map(log => (
                             <div key={log.id} className="bg-slate-50 p-3 rounded-md text-sm">
                                <p><strong>{log.level}</strong> mg/dL <span className="text-xs">({log.measured === 'before' ? t.beforeMeal : t.afterMeal})</span></p>
                                <p className="text-xs text-slate-500">{log.date}</p>
                            </div>
                        )) : <p className="text-slate-500 text-sm">{t.noReadings}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthLogPage;
