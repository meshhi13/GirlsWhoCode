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

          <div className="mt-8 space-y-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdT1304somoh9ME9QJ64L9ZT-DlU4LdgU_Vvy7_m6ucWfjFDw/closedform"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-[#102f76] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-[#0c245c] transition-all duration-200 no-underline"
            >
              Register Now
            </a>

            <div className="pt-4">
              <p
                className="!text-lg font-semibold"
                style={{
                  color: 'rgba(16, 47, 118, 0.3)',
                }}
              >
                Website by:
              </p>
              <p
                className="!text-lg font-semibold"
                style={{
                  color: 'rgba(16, 47, 118, 0.3)',
                }}
              >
                Mumtaheena Raisa <br />
                Himesh Ahuja
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default BackCover;
