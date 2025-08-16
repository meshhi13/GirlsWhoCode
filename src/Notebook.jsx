'use client';
import React, { useState, useEffect, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import FrontCover from '@components/FrontCover';
import BackCover from '@components/BackCover';
import SpiralBinding from '@components/SpiralBinding';
import AboutPage from '@components/AboutPage';
import MissionPage from '@components/MissionPage';
import SchedulePage from '@components/SchedulePage';
import FAQPage from '@components/FAQPage';
import ContactPage from '@components/ContactUs';
import TopBanner from '@components/TopBanner';
import SponsorsPage from '@components/SponsorsPage';

const Notebook = () => {
  const flipBookRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageFlipInstance, setPageFlipInstance] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const setFlipBookRef = (ref) => {
    if (ref && ref.pageFlip) {
      setPageFlipInstance(ref.pageFlip);
    }
    flipBookRef.current = ref;
  };

  const totalPages = 8;
  const isFrontCover = currentPage === 0;
  const isBackCover = currentPage === totalPages - 1;

  let offsetX = '';
  if (isFrontCover) offsetX = '-translate-x-1/4';
  else if (isBackCover) offsetX = 'translate-x-1/4';

  return (
    <div className='min-h-screen'>
      <TopBanner
        pageHelper={(tab) => {
          if (!pageFlipInstance) return;

          switch (tab) {
            case 'About and Mission':
              pageFlipInstance.turnToPage(1);
              setCurrentPage(1);
              break;
            case 'Schedule and FAQ':
              pageFlipInstance.turnToPage(3);
              setCurrentPage(3);
              break;
            case 'Contact and Sponsors':
              pageFlipInstance.turnToPage(5);
              setCurrentPage(5);
              break;
          }
          console.log(currentPage);
        }}
      />

      <div
        className="flex flex-col justify-center items-center pt-3 relative"
        style={{
          transform: `scale(${Math.min(1, window.innerWidth / 1500)})`,
          transformOrigin: 'top center',
        }}
      >
      <HTMLFlipBook
        ref={setFlipBookRef}
        width={600}
        height={650}
        drawShadow={currentPage !== 0}
        showCover={true}
        usePortrait={windowWidth < 720} // portrait for small screens
        disableFlipByClick={true}
        useMouseEvents={false}
        showPageCorners={false}
        clickEvent={(e) => console.log(e)}
        onInit={(pageFlip) => setPageFlipInstance(pageFlip)}
        className={`transition-transform duration-300 relative rounded-xl shadow-2xl ${offsetX} border-none !outline-none !shadow-none !ring-0 !box-shadow-none`}
      >
        <div>
          <SpiralBinding />
          <FrontCover />
        </div>
        <div>
          <AboutPage />
        </div>
        <div>
          <MissionPage />
        </div>
        <div>
          <SchedulePage />
        </div>
        <div>
          <FAQPage />
        </div>
        <div>
          <ContactPage />
        </div>
        <div>
          <SponsorsPage />
        </div>
        <div>
          <BackCover />
        </div>
      </HTMLFlipBook>

        <div className="flex gap-4 mt-4">
          <button
            className="px-4 py-2 text-lg rounded-lg shadow font-semibold 
                       bg-[#FFB6C1] text-[#A2D2FF] hover:bg-[#FFC6F2] 
                       transition disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              if (!pageFlipInstance) return;
              pageFlipInstance.flipPrev();
              setCurrentPage(Math.max(currentPage - 2, 0));
            }}
            disabled={isFrontCover}  // disable on front
          >
            ◀ Prev
          </button>
          <button
            className="px-4 py-2 text-lg rounded-lg shadow font-semibold 
                       bg-[#FFB6C1] text-[#A2D2FF] hover:bg-[#FFC6F2] 
                       transition disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={() => {
              if (!pageFlipInstance) return;
              pageFlipInstance.flipNext();
              setCurrentPage(Math.min(currentPage + 2, totalPages - 1));
            }}
            disabled={isBackCover} // disable on back
          >
            Next ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notebook;
