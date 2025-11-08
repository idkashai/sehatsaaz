export enum Severity {
  Green = "Green",
  Yellow = "Yellow",
  Red = "Red",
}

export type Language = 'en' | 'ur';
export type Page = 'home' | 'analyzer' | 'diabetes' | 'heartHealth' | 'healthLog' | 'voiceAssistant';

export interface Finding {
  testName: string;
  value: string;
  unit: string;
  normalRange: string;
  isAbnormal: boolean;
  interpretation: {
    english: string;
    urdu: string;
  };
}

export interface AnalysisResult {
  disclaimer: string;
  overallAssessment: {
    english: string;
    urdu: string;
  };
  severity: Severity;
  severityReasoning: {
    english: string;
    urdu: string;
  };
  findings: Finding[];
}

export interface BloodPressureLog {
  id: number;
  systolic: number;
  diastolic: number;
  pulse: number;
  date: string;
}

export interface BloodSugarLog {
  id: number;
  level: number;
  measured: 'before' | 'after'; // Before or after meal
  date: string;
}
