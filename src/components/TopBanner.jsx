'use client';
import React, { useState } from 'react';

const TopBanner = ({ pageHelper }) => {
  const tabs = ['about & mission', 'schedule & faq', 'stats & sponsors'];
  const [disabled, setDisabled] = useState(false);

  const handleClick = (tab) => {
    if (disabled) return; // ignore clicks during cooldown
    pageHelper(tab);
    setDisabled(true);

    // Re-enable after 1 second
    setTimeout(() => setDisabled(false), 1000);
  };

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col md:flex-row items-start md:items-center justify-between">
        {/* Title */}
        <div className="text-left mb-4 md:mb-0">
        </div>

        {/* Navigation Tabs */}
        <nav className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 w-full sm:w-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`
                font-poppins 
                text-[#1d3557] 
                font-bold 
                px-3 sm:px-4 py-1.5
                rounded-full shadow-lg 
                bg-white/70 hover:bg-white/95 
                transition text-sm sm:text-base 
                ${disabled ? 'opacity-70 cursor-not-allowed' : ''}
                w-full sm:w-auto text-center
              `}
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
