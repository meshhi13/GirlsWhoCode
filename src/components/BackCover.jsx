'use client';
import React from 'react';
import SpiralBinding from './SpiralBinding';

const BackCover = ({ isMobile = false }) => {
  if (!isMobile) {
    return (
      <div
        className={`w-full h-full ${isMobile ? 'p-4 pt-6 pb-6' : 'p-6 pt-20 pb-6'} relative shadow-[0_10px_40px_rgba(0,0,0,0.4)]`}
        style={{
          background: '#8bb7e4',
          borderTopLeftRadius: '20px',
          borderRight: '20px solid #102f76',
          fontFamily: 'Poppins, sans-serif',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <div>
          <p
            className="text-2xl font-bold mb-4"
            style={{
              color: 'rgba(16, 47, 118, 0.3)',
            }}
          >
            Girls Hoo Hack, Oct 25-26, 2025
          </p>

          <div className="space-y-2">
            <p
              className="!text-lg font-semibold"
              style={{
                color: 'rgba(16, 47, 118, 0.3)',
              }}
            >
              girlshoohack@gmail.com
            </p>
            <p
              className="!text-lg font-semibold"
              style={{
                color: 'rgba(16, 47, 118, 0.3)',
              }}
            >
              @girlshoohack
            </p>
            <p
              className="!text-lg font-semibold"
              style={{
                color: 'rgba(16, 47, 118, 0.3)',
              }}
            >
              <a
                href="https://mlh.io/code-of-conduct"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[rgba(16,47,118,0.5)] underline"
              >
                MLH Code of Conduct
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default BackCover;

