'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';

const SponsorsPage = () => {
  return (
    <div className="w-full h-full bg-white p-6 pt-20 relative">
      <SpiralBinding />

      <h2 className="text-lg font-bold text-gray-800 mb-6 ml-12">Our Sponsors</h2>

      {/* Gold Sponsors */}
      <div className="mb-8 ml-12">
        <h3 className="text-base font-semibold text-yellow-600 mb-2">Gold Sponsors</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="border-2 border-yellow-500 p-2 rounded shadow-lg flex items-center text-xs bg-yellow-50">
            <img
              src="https://via.placeholder.com/24"
              alt="Sponsor 1 Logo"
              className="w-6 h-6 mr-2 object-cover rounded"
            />
            Sponsor 1
          </div>
          <div className="border-2 border-yellow-500 p-2 rounded shadow-lg flex items-center text-xs bg-yellow-50">
            <img
              src="https://via.placeholder.com/24"
              alt="Sponsor 2 Logo"
              className="w-6 h-6 mr-2 object-cover rounded"
            />
            Sponsor 2
          </div>
        </div>
      </div>

      {/* Silver Sponsors */}
      <div className="mb-8 ml-12">
        <h3 className="text-base font-semibold text-gray-500 mb-2">Silver Sponsors</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="border p-2 rounded shadow-sm flex items-center text-xs bg-gray-100">
            <img
              src="https://via.placeholder.com/20"
              alt="Sponsor 3 Logo"
              className="w-5 h-5 mr-2 object-cover rounded"
            />
            Sponsor 3
          </div>
          <div className="border p-2 rounded shadow-sm flex items-center text-xs bg-gray-100">
            <img
              src="https://via.placeholder.com/20"
              alt="Sponsor 4 Logo"
              className="w-5 h-5 mr-2 object-cover rounded"
            />
            Sponsor 4
          </div>
        </div>
      </div>

      {/* Bronze Sponsors */}
      <div className="mb-8 ml-12">
        <h3 className="text-base font-semibold text-amber-700 mb-2">Bronze Sponsors</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="border p-2 rounded shadow-sm flex items-center text-xs bg-amber-50">
            <img
              src="https://via.placeholder.com/16"
              alt="Sponsor 5 Logo"
              className="w-4 h-4 mr-2 object-cover rounded"
            />
            Sponsor 5
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="mb-8 ml-12">
        <h3 className="text-base font-semibold text-blue-700 mb-2">Partners</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="border p-2 rounded shadow-sm flex items-center text-xs bg-blue-50">
            <img
              src="https://via.placeholder.com/16"
              alt="Partner 1 Logo"
              className="w-4 h-4 mr-2 object-cover rounded"
            />
            Partner 1
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
