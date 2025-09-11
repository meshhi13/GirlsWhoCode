'use client';
import React, { useState } from 'react';

const TopBanner = ({ pageHelper }) => {
  const tabs = ['About and Mission', 'Schedule and FAQ', 'Contact and Sponsors'];
  const [disabled, setDisabled] = useState(false);

  const handleClick = (tab) => {
    if (disabled) return; // ignore clicks during cooldown
    pageHelper(tab);
    setDisabled(true);

    // Re-enable after 1 second
    setTimeout(() => setDisabled(false), 1000);
  };

  return (
    <header className="w-full shadow-md border-b-4 border-[#FFC6F2] bg-[#A2D2FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col md:flex-row items-start md:items-center justify-between">
        {/* Title */}
        <div className="text-left mb-4 md:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFB6C1]">
            Girls Hoo Hack
          </h1>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 w-full sm:w-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`bg-[#FFB6C1] text-[#A2D2FF] font-semibold px-3 sm:px-4 py-2 rounded-lg shadow hover:bg-[#FFC6F2] transition text-sm sm:text-base ${
                disabled ? 'opacity-50 cursor-not-allowed' : ''
              } w-full sm:w-auto text-center`}
              onClick={() => handleClick(tab)}
              disabled={disabled}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default TopBanner;
