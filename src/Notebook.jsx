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
  const aboutAndMissionRef = useRef(null);
  const scheduleAndFAQRef = useRef(null);
  const contactAndSponsorsRef = useRef(null);

  // responsive: switch to stacked mobile layout below this width
  const mobileThreshold = 900;
  
  const [currentPage, setCurrentPage] = useState(0);
  const [pageFlipInstance, setPageFlipInstance] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const isMobile = windowWidth <= mobileThreshold;
  const totalPages = 8;
  const isFrontCover = currentPage === 0;
  const isBackCover = currentPage === totalPages - 1;


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [isMobile])

  const setFlipBookRef = (ref) => {
    if (ref && ref.pageFlip) {
      setPageFlipInstance(ref.pageFlip);
    }
    flipBookRef.current = ref;
  };

  let offsetX = '';
  if (isFrontCover) offsetX = '-translate-x-1/4';
  else if (isBackCover) offsetX = 'translate-x-1/4';

  return (
    <div className='min-h-screen'>
      <TopBanner
        pageHelper={(tab) => {

          if (!pageFlipInstance && !isMobile) return;
          switch (tab) {
            case 'About and Mission':
              if (isMobile) {
                setTimeout(() => {aboutAndMissionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 10);
              } else {
                pageFlipInstance.turnToPage(1);
                setCurrentPage(1);
              }
              break;
            case 'Schedule and FAQ':
              if (isMobile) {
                setTimeout(() => {scheduleAndFAQRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 10);
              } else {
                pageFlipInstance.turnToPage(3);
                setCurrentPage(3);
              }
              break;
            case 'Contact and Sponsors':
              if (isMobile) {
                setTimeout(() => {contactAndSponsorsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 10);
              } else {  
                pageFlipInstance.turnToPage(5);
                setCurrentPage(5);
              }
              break;
          }
        }}
      />

      <div className="h-full flex flex-col justify-center items-center pt-2 relative w-full">
        {/* Desktop / large screens: show flipbook */}
        {!isMobile && (
          <div className="relative">
            <div
              style={{
                transform: `scale(${Math.min(1, window.innerWidth / 1500)})`,
                transformOrigin: 'top center',
              }}
              className="w-full flex justify-center"
            >
              <HTMLFlipBook
                ref={setFlipBookRef}
                width={600}
                height={725}
                drawShadow={true}
                showCover={true}
                usePortrait={false}
                disableFlipByClick={true}
                useMouseEvents={false}
                showPageCorners={false}
                clickEvent={(e) => console.log(e)}
                onInit={(pageFlip) => setPageFlipInstance(pageFlip)}
                className={`transition-transform duration-300 relative rounded-xl shadow-2xl ${offsetX} border-none !outline-none !shadow-none !ring-0 !box-shadow-none`}
              >
                <div>
                  
                  <FrontCover isMobile={isMobile} />
                </div>
                <div>
                  <AboutPage isMobile={isMobile} />
                </div>
                <div>
                  <MissionPage isMobile={isMobile} />
                </div>
                <div>
                  <SchedulePage isMobile={isMobile} />
                </div>
                <div>
                  <FAQPage isMobile={isMobile} />
                </div>
                <div>
                  <ContactPage isMobile={isMobile} />
                </div>
                <div>
                  <SponsorsPage isMobile={isMobile} />
                </div>
                <div>
                  <BackCover isMobile={isMobile} />
                </div>
              </HTMLFlipBook>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
              <button
                className="px-4 py-2 text-lg rounded-lg shadow font-semibold bg-[#FFB6C1] text-[#A2D2FF] hover:bg-[#FFC6F2] transition disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => {
                  if (!pageFlipInstance) return;
                  pageFlipInstance.flipPrev();
                  setCurrentPage(Math.max(currentPage - 2, 0));
                }}
                disabled={isFrontCover}
              >
                ◀ Prev
              </button>
              <button
                className="px-4 py-2 text-lg rounded-lg shadow font-semibold bg-[#FFB6C1] text-[#A2D2FF] hover:bg-[#FFC6F2] transition disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => {
                  if (!pageFlipInstance) return;
                  pageFlipInstance.flipNext();
                  setCurrentPage(Math.min(currentPage + 2, totalPages - 1));
                }}
                disabled={isBackCover}
              >
                Next ▶
              </button>
            </div>
          </div>
        )}

        {/* Mobile: stacked, scrollable pages */}
        {isMobile && (
          <div className="w-full max-w-xl px-4 mb-8">
            <div className="mb-6">
              <div className="rounded-lg overflow-hidden shadow-lg bg-white">
                <FrontCover isMobile={isMobile} />
              </div>
            </div>

            <div className="space-y-4">
              <section ref={aboutAndMissionRef} className="p-4 bg-white rounded-lg shadow">
                {!isMobile && <h3 className="text-lg font-semibold mb-2">About</h3>}
                <AboutPage isMobile={isMobile} />
              </section>

              <section className="p-4 bg-white rounded-lg shadow">
                {!isMobile && <h3 className="text-lg font-semibold mb-2">Mission</h3>}
                <MissionPage isMobile={isMobile} />
              </section>

              <section ref={scheduleAndFAQRef} className="p-4 bg-white rounded-lg shadow">
                {!isMobile && <h3 className="text-lg font-semibold mb-2">Schedule</h3>}
                <SchedulePage isMobile={isMobile} />
              </section>

              <section className="p-4 bg-white rounded-lg shadow">
                {!isMobile && <h3 className="text-lg font-semibold mb-2">FAQ</h3>}
                <FAQPage isMobile={isMobile} />
              </section>

              <section ref={contactAndSponsorsRef} className="p-4 bg-white rounded-lg shadow">
                {!isMobile && <h3 className="text-lg font-semibold mb-2">Contact</h3>}
                <ContactPage isMobile={isMobile} />
              </section>

              <section className="p-4 bg-white rounded-lg shadow">
                {!isMobile && <h3 className="text-lg font-semibold mb-2">Sponsors</h3>}
                <SponsorsPage isMobile={isMobile} />
              </section>
              <section className="p-4 bg-white rounded-lg shadow">
                {!isMobile && <h3 className="text-lg font-semibold mb-2">Sponsors</h3>}
                <BackCover isMobile={isMobile} />
              </section>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notebook;
