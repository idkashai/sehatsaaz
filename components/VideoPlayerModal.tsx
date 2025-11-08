import React from 'react';
import { XIcon } from './Icons';

interface VideoPlayerModalProps {
  videoId: string;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ videoId, onClose }) => {
  return (
    <div 
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" 
        onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-3xl aspect-video relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the video player
      >
        <button 
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white rounded-full p-1.5 shadow-lg hover:bg-slate-200 transition-colors z-10"
          aria-label="Close video player"
        >
          <XIcon className="h-6 w-6 text-slate-800" />
        </button>
        <iframe
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
