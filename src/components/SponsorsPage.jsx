'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';

const SponsorsPage = ({ isMobile = false }) => {
  return (
    <div className={`w-full h-full bg-white ${isMobile ? 'p-4 pt-6 pb-6' : 'p-6 pt-20 pb-6'} relative`}>

      <h2 className={`text-lg font-bold text-gray-800 mb-6 ${isMobile ? 'px-4' : 'ml-12'}`}>Sponsors</h2>

      {/* Gold Sponsors */}
      <div className={`mb-8 ${isMobile ? 'px-4' : 'ml-12'}`}>
        <h3 className="text-base font-semibold text-yellow-600 mb-2">Gold</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div className="group relative z-0 overflow-hidden border-2 border-yellow-500 p-2 rounded shadow-lg flex items-center text-xs bg-yellow-50 transform-gpu transition duration-200 hover:scale-105 hover:shadow-2xl group-hover:z-10">
            <img
              src="https://via.placeholder.com/24"
              alt="Sponsor 1 Logo"
              className="w-6 h-6 mr-2 object-cover rounded transition-transform duration-200 group-hover:scale-110"
            />
            <span className="text-xs text-gray-800 transition-colors duration-200">Sponsor 1</span>
          </div>
          <div className="group relative z-0 overflow-hidden border-2 border-yellow-500 p-2 rounded shadow-lg flex items-center text-xs bg-yellow-50 transform-gpu transition duration-200 hover:scale-105 hover:shadow-2xl group-hover:z-10">
            <img
              src="https://via.placeholder.com/24"
              alt="Sponsor 2 Logo"
              className="w-6 h-6 mr-2 object-cover rounded transition-transform duration-200 group-hover:scale-110"
            />
            <span className="text-xs text-gray-800 transition-colors duration-200">Sponsor 2</span>
          </div>
        </div>
  </div>

  {/* Silver Sponsors */}
  <div className={`mb-8 ${isMobile ? 'px-4' : 'ml-12'}`}>
        <h3 className="text-base font-semibold text-gray-500 mb-2">Silver</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div className="group relative z-0 overflow-hidden border border-gray-300 p-2 rounded shadow-sm flex items-center text-xs bg-gray-100 transform-gpu transition duration-200 hover:scale-105 hover:shadow-md group-hover:z-10">
            <img
              src="https://via.placeholder.com/20"
              alt="Sponsor 3 Logo"
              className="w-5 h-5 mr-2 object-cover rounded transition-transform duration-200 group-hover:scale-110"
            />
            <span className="text-xs text-gray-800 transition-colors duration-200">Sponsor 3</span>
          </div>
          <div className="group relative z-0 overflow-hidden border border-gray-300 p-2 rounded shadow-sm flex items-center text-xs bg-gray-100 transform-gpu transition duration-200 hover:scale-105 hover:shadow-md group-hover:z-10">
            <img
              src="https://via.placeholder.com/20"
              alt="Sponsor 4 Logo"
              className="w-5 h-5 mr-2 object-cover rounded transition-transform duration-200 group-hover:scale-110"
            />
            <span className="text-xs text-gray-800 transition-colors duration-200">Sponsor 4</span>
          </div>
        </div>
  </div>

  {/* Bronze Sponsors */}
  <div className={`mb-8 ${isMobile ? 'px-4' : 'ml-12'}`}>
        <h3 className="text-base font-semibold text-amber-700 mb-2">Bronze</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div className="group relative z-0 overflow-hidden border border-amber-500 p-2 rounded shadow-sm flex items-center text-xs bg-amber-50 transform-gpu transition duration-200 hover:scale-105 hover:shadow-md group-hover:z-10">
            <img
              src="https://via.placeholder.com/16"
              alt="Sponsor 5 Logo"
              className="w-4 h-4 mr-2 object-cover rounded transition-transform duration-200 group-hover:scale-110"
            />
            <span className="text-xs text-gray-800 transition-colors duration-200">Sponsor 5</span>
          </div>
        </div>
  </div>

  {/* Partners */}
  <div className={`mb-8 ${isMobile ? 'px-4' : 'ml-12'}`}>
        <h3 className="text-base font-semibold text-blue-700 mb-2">Partners</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div className="group relative z-0 overflow-hidden border border-blue-300 p-2 rounded shadow-sm flex items-center text-xs bg-blue-50 transform-gpu transition duration-200 hover:scale-105 hover:shadow-md group-hover:z-10">
            <img
              src="https://via.placeholder.com/16"
              alt="Partner 1 Logo"
              className="w-4 h-4 mr-2 object-cover rounded transition-transform duration-200 group-hover:scale-110"
            />
            <span className="text-xs text-gray-800 transition-colors duration-200">Partner 1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
