'use client';
import React, { useState } from 'react';

const TopBanner = ({ pageHelper }) => {
  const tabs = ['about & mission', 'schedule & faq', 'contact & sponsors'];
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#102f76]">
          </h2>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 w-full sm:w-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`font-poppins text-[#1d3557] opacity-80 font-bold px-3 sm:px-4 py-2 rounded-xl shadow-lg hover:bg-[#FFC6F2] transition text-sm sm:text-base ${
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
