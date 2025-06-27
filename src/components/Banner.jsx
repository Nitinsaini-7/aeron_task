import React, { useState } from 'react';
import { FileText, Search, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const Banner = () => {
 
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-20 w-32 h-32 bg-white rounded-full opacity-20"></div>
        <div className="absolute bottom-10 right-20 w-48 h-48 bg-white rounded-full opacity-10"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full opacity-15"></div>
      </div>

      {/* Motorcycle Silhouettes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 opacity-20">
          <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 60C20 66.627 14.627 72 8 72C1.373 72 -4 66.627 -4 60C-4 53.373 1.373 48 8 48C14.627 48 20 53.373 20 60Z" fill="white"/>
            <path d="M112 60C112 66.627 106.627 72 100 72C93.373 72 88 66.627 88 60C88 53.373 93.373 48 100 48C106.627 48 112 53.373 112 60Z" fill="white"/>
            <path d="M8 58H32L40 38H65L75 58H100M40 38L45 28H70L75 38M65 38V28" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
        <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 opacity-15">
          <svg width="140" height="90" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 70C25 77.732 18.732 84 11 84C3.268 84 -3 77.732 -3 70C-3 62.268 3.268 56 11 56C18.732 56 25 62.268 25 70Z" fill="white"/>
            <path d="M132 70C132 77.732 125.732 84 118 84C110.268 84 104 77.732 104 70C104 62.268 110.268 56 118 56C125.732 56 132 62.268 132 70Z" fill="white"/>
            <path d="M11 68H38L48 44H78L90 68H118M48 44L55 32H85L90 44M78 44V32" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between">
          {/* Left Content */}
          <div className="flex items-center space-x-6">
            {/* Document Icon */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
              <FileText className="w-16 h-16 text-white" strokeWidth={1.5} />
            </div>
            
            {/* Text Content */}
            <div>
              <h3 className="text-white/90 text-lg font-medium mb-2">
                It's Time to Claim Now
              </h3>
              <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight">
                From Quote To Coverage
              </h1>
            </div>
          </div>

          {/* Right Content - Claim Tracker */}
         <button className=' bg-white p-4 px-6 text-lg font-semibold'>Track Your Claim</button>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
    </div>
  );
};

export default Banner;