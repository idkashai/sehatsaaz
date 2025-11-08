import React, { useRef } from 'react';
// FIX: Removed non-existent ImageIcon from imports.
import { UploadCloudIcon, AnalyzeIcon } from './Icons';

interface FileUploadProps {
  onFileChange: (file: File | null) => void;
  imageDataUrl: string | null;
  onAnalyze: () => void;
  isAnalyzing: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileChange, imageDataUrl, onAnalyze, isAnalyzing }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    onFileChange(file);
  };

  const handleBoxClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6">
      <div
        onClick={handleBoxClick}
        className="group relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors duration-200"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
          disabled={isAnalyzing}
        />
        {imageDataUrl ? (
          <img
            src={imageDataUrl}
            alt="Lab Report Preview"
            className="object-contain h-full w-full rounded-lg p-2"
          />
        ) : (
          <div className="text-center">
            <UploadCloudIcon className="mx-auto h-12 w-12 text-slate-400 group-hover:text-teal-600 transition-colors" />
            <p className="mt-2 text-sm text-slate-600">
              <span className="font-semibold text-teal-700">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-slate-500">PNG, JPG, JPEG up to 10MB</p>
          </div>
        )}
      </div>
      
      {imageDataUrl && (
        <button
          onClick={onAnalyze}
          disabled={isAnalyzing}
          className="w-full flex items-center justify-center gap-2 rounded-md bg-teal-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {isAnalyzing ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Analyzing...
            </>
          ) : (
            <>
              <AnalyzeIcon className="h-5 w-5" />
              Analyze Report
            </>
          )}
        </button>
      )}
    </div>
  );
};