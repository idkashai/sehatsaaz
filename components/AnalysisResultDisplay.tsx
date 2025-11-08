import React, { useCallback } from 'react';
// FIX: Changed 'import type' to a value import for the 'Severity' enum to be used at runtime.
import { Severity, type AnalysisResult, type Finding, Language } from '../types';
import { AlertTriangleIcon, CheckCircleIcon, ShieldAlertIcon, RefreshCwIcon, ClipboardCheckIcon, Volume2Icon } from './Icons';

const severityConfig = {
  [Severity.Green]: {
    bgColor: 'bg-green-50',
    borderColor: 'border-green-500',
    textColor: 'text-green-800',
    icon: <CheckCircleIcon className="h-8 w-8 text-green-500" />,
    title: 'Normal Report',
  },
  [Severity.Yellow]: {
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-500',
    textColor: 'text-yellow-800',
    icon: <AlertTriangleIcon className="h-8 w-8 text-yellow-500" />,
    title: 'Caution Advised',
  },
  [Severity.Red]: {
    bgColor: 'bg-red-50',
    borderColor: 'border-red-500',
    textColor: 'text-red-800',
    icon: <ShieldAlertIcon className="h-8 w-8 text-red-500" />,
    title: 'Urgent Attention Needed',
  },
};

const FindingRow: React.FC<{ finding: Finding }> = ({ finding }) => (
  <tr className={`border-b ${finding.isAbnormal ? 'bg-red-50' : 'bg-white'}`}>
    <td className="p-3 text-sm font-medium text-slate-800">{finding.testName}</td>
    <td className={`p-3 text-sm text-center font-semibold ${finding.isAbnormal ? 'text-red-600' : 'text-slate-700'}`}>
      {finding.value}
    </td>
    <td className="p-3 text-sm text-center text-slate-600 hidden sm:table-cell">{finding.normalRange} {finding.unit}</td>
    <td className="p-3 text-sm text-slate-600">
        <p className="font-semibold text-slate-800">English:</p>
        <p>{finding.interpretation.english}</p>
        <p className="font-semibold text-slate-800 mt-2">اردو:</p>
        <p className="text-right" dir="rtl">{finding.interpretation.urdu}</p>
    </td>
  </tr>
);


export const AnalysisResultDisplay: React.FC<{ result: AnalysisResult, onReset: () => void, language: Language }> = ({ result, onReset, language }) => {
  const config = severityConfig[result.severity];
  
  const speakResults = useCallback(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Cancel any previous speech
      
      const textToSpeak = `
        AI اسسٹنٹ کی طرف سے آپ کی رپورٹ کا خلاصہ یہ ہے۔
        ${result.overallAssessment.urdu}
        اہم تلاشیں یہ ہیں:
        ${result.findings.map(f => `${f.testName}: ${f.interpretation.urdu}`).join('. ')}
      `;
      
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'ur-PK';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  }, [result]);


  return (
    <div className="space-y-8 animate-fade-in">
      {/* Disclaimer */}
      <div className="border-l-4 border-yellow-500 bg-yellow-50 p-4 rounded-md">
        <p className="font-bold text-yellow-800">Important Disclaimer</p>
        <p className="text-yellow-700">{result.disclaimer}</p>
      </div>

      {/* Severity & Summary */}
      <div className={`border-l-4 p-5 rounded-md ${config.borderColor} ${config.bgColor}`}>
        <div className="flex items-start space-x-4">
          <div>{config.icon}</div>
          <div>
            <h2 className={`text-xl font-bold ${config.textColor}`}>{config.title}</h2>
            <p className={`mt-1 font-medium ${config.textColor}`}>Reasoning:</p>
            <p className={`text-sm ${config.textColor}`}>{result.severityReasoning.english}</p>
            <p className={`text-sm text-right ${config.textColor}`} dir="rtl">{result.severityReasoning.urdu}</p>
          </div>
        </div>
      </div>
      
      {/* Overall Assessment */}
      <div className="bg-slate-50 p-5 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2"><ClipboardCheckIcon className="h-6 w-6 text-teal-600" /> Overall Assessment</h3>
            <button onClick={speakResults} className="flex items-center gap-2 text-sm text-teal-700 font-semibold hover:text-teal-900 transition-colors" title="Read results aloud in Urdu">
                <Volume2Icon className="h-5 w-5" />
                <span>Speak Results</span>
            </button>
          </div>

          <div className="mt-3 space-y-2 text-slate-700">
            <div>
                <p className="font-semibold">Summary (English):</p>
                <p>{result.overallAssessment.english}</p>
            </div>
            <div className="text-right" dir="rtl">
                <p className="font-semibold">(خلاصہ (اردو</p>
                <p>{result.overallAssessment.urdu}</p>
            </div>
          </div>
      </div>

      {/* Detailed Findings */}
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-3">Detailed Findings</h3>
        <div className="overflow-x-auto border border-slate-200 rounded-lg">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-100">
              <tr>
                <th scope="col" className="p-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Test Name</th>
                <th scope="col" className="p-3 text-center text-xs font-bold text-slate-600 uppercase tracking-wider">Your Value</th>
                <th scope="col" className="p-3 text-center text-xs font-bold text-slate-600 uppercase tracking-wider hidden sm:table-cell">Normal Range</th>
                <th scope="col" className="p-3 text-left text-xs font-bold text-slate-600 uppercase tracking-wider">Interpretation</th>
              </tr>
            </thead>
            <tbody>
              {result.findings.map((finding, index) => (
                <FindingRow key={index} finding={finding} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reset Button */}
       <button
          onClick={onReset}
          className="w-full flex items-center justify-center gap-2 rounded-md bg-slate-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 transition-all duration-200"
        >
          <RefreshCwIcon className="h-5 w-5" />
          Analyze Another Report
        </button>
    </div>
  );
};
