import React, { useState, useCallback } from 'react';
import { FileUpload } from '../FileUpload';
import { AnalysisResultDisplay } from '../AnalysisResultDisplay';
import { Spinner } from '../Spinner';
import type { AnalysisResult, Language } from '../../types';
import { analyzeLabReport } from '../../services/geminiService';

interface LabAnalyzerPageProps {
  language: Language;
}

const LabAnalyzerPage: React.FC<LabAnalyzerPageProps> = ({ language }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (file: File | null) => {
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageDataUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
      setAnalysisResult(null);
      setError(null);
    }
  };

  const handleAnalyzeClick = useCallback(async () => {
    if (!imageDataUrl) {
      setError("Please select an image first.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const base64String = imageDataUrl.split(',')[1];
      const result = await analyzeLabReport(base64String);
      setAnalysisResult(result);
    } catch (err) {
      console.error(err);
      setError("Failed to analyze the report. The AI model might be unavailable or the report could not be read. Please try again with a clearer image.");
    } finally {
      setIsLoading(false);
    }
  }, [imageDataUrl]);

  const handleReset = () => {
    setImageFile(null);
    setImageDataUrl(null);
    setAnalysisResult(null);
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto max-w-4xl p-4 sm:p-6 md:p-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
              AI Lab Report Analyzer
            </h1>
            <p className="mt-2 text-slate-600">
              Upload a photo of your medical report and our AI assistant will provide a simplified explanation.
            </p>
          </div>

          {!analysisResult && (
             <FileUpload 
                onFileChange={handleFileChange} 
                imageDataUrl={imageDataUrl} 
                onAnalyze={handleAnalyzeClick} 
                isAnalyzing={isLoading}
             />
          )}

          {isLoading && (
            <div className="flex flex-col items-center justify-center space-y-4 p-8">
              <Spinner />
              <p className="text-lg font-medium text-slate-700 animate-pulse">Analyzing your report...</p>
              <p className="text-sm text-slate-500 text-center">This may take a moment. Please wait.</p>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-800 p-4 rounded-md" role="alert">
              <p className="font-bold">An Error Occurred</p>
              <p>{error}</p>
            </div>
          )}

          {analysisResult && (
            <AnalysisResultDisplay result={analysisResult} onReset={handleReset} language={language} />
          )}

        </div>
    </div>
  );
};

export default LabAnalyzerPage;
