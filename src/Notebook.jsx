'use client';
import AboutPage from '@components/AboutPage';
import BackCover from '@components/BackCover';
import ContactPage from '@components/ContactUs';
import FAQPage from '@components/FAQPage';
import FrontCover from '@components/FrontCover';
import MissionPage from '@components/MissionPage';
import SchedulePage from '@components/SchedulePage';
import SpiralBinding from '@components/SpiralBinding';
import SponsorsPage from '@components/SponsorsPage';
import TopBanner from '@components/TopBanner';
import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

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
  }, [isMobile]);

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
            case 'about & mission':
              if (isMobile) {
                setTimeout(() => {
                  aboutAndMissionRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }, 10);
              } else {
                pageFlipInstance.turnToPage(1);
                setCurrentPage(1);
              }
              break;
            case 'schedule & faq':
              if (isMobile) {
                setTimeout(() => {
                  scheduleAndFAQRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 10);
              } else {
                pageFlipInstance.turnToPage(3);
                setCurrentPage(3);
              }
              break;
            case 'contact & sponsors':
              if (isMobile) {
                setTimeout(() => {
                  contactAndSponsorsRef.current?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }, 10);
              } else {
                pageFlipInstance.turnToPage(5);
                setCurrentPage(5);
              }
              break;
          }
        }}
      />

      <div className='relative flex h-full w-full flex-col items-center justify-center pt-2'>
        {/* Desktop / large screens: show flipbook */}
        {!isMobile && (
          <div className='relative'>
            <div
              style={{
                transform: `scale(${Math.min(1, window.innerWidth / 1500)})`,
                transformOrigin: 'top center',
              }}
              className='flex w-full justify-center'
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
                className={`relative rounded-xl shadow-2xl transition-transform duration-300 ${offsetX} !box-shadow-none border-none !shadow-none !ring-0 !outline-none`}
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

            <div className='absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-4'>
              <button
                className='font-poppins rounded-lg px-4 py-2 text-lg font-semibold text-[#1d3557] opacity-70 transition hover:text-[#FFFFFF] disabled:cursor-not-allowed disabled:opacity-30'
                onClick={() => {
                  if (!pageFlipInstance) return;
                  pageFlipInstance.flipPrev();
                  setCurrentPage(Math.max(currentPage - 2, 0));
                }}
                disabled={isFrontCover}
              >
                ◀ back
              </button>
              <button
                className='font-poppins rounded-lg px-4 py-2 text-lg font-semibold text-[#1d3557] opacity-70 transition hover:text-[#FFFFFF] disabled:cursor-not-allowed disabled:opacity-30'
                onClick={() => {
                  if (!pageFlipInstance) return;
                  pageFlipInstance.flipNext();
                  setCurrentPage(Math.min(currentPage + 2, totalPages - 1));
                }}
                disabled={isBackCover}
              >
                flip ▶
              </button>
            </div>
          </div>
        )}

        {/* Mobile: stacked, scrollable pages */}
        {isMobile && (
          <div className='mb-8 w-full max-w-xl px-4'>
            <div className='mb-6'>
              <div className='overflow-hidden rounded-lg bg-white shadow-lg'>
                <FrontCover isMobile={isMobile} />
              </div>
            </div>

            <div className='space-y-4'>
              <section ref={aboutAndMissionRef} className='rounded-lg bg-white p-4 shadow'>
                {!isMobile && <h3 className='mb-2 text-lg font-semibold'>About</h3>}
                <AboutPage isMobile={isMobile} />
              </section>

              <section className='rounded-lg bg-white p-4 shadow'>
                {!isMobile && <h3 className='mb-2 text-lg font-semibold'>Mission</h3>}
                <MissionPage isMobile={isMobile} />
              </section>

              <section ref={scheduleAndFAQRef} className='rounded-lg bg-white p-4 shadow'>
                {!isMobile && <h3 className='mb-2 text-lg font-semibold'>Schedule</h3>}
                <SchedulePage isMobile={isMobile} />
              </section>

              <section className='rounded-lg bg-white p-4 shadow'>
                {!isMobile && <h3 className='mb-2 text-lg font-semibold'>FAQ</h3>}
                <FAQPage isMobile={isMobile} />
              </section>

              <section ref={contactAndSponsorsRef} className='rounded-lg bg-white p-4 shadow'>
                {!isMobile && <h3 className='mb-2 text-lg font-semibold'>Contact</h3>}
                <ContactPage isMobile={isMobile} />
              </section>

              <section className='rounded-lg bg-white p-4 shadow'>
                {!isMobile && <h3 className='mb-2 text-lg font-semibold'>Sponsors</h3>}
                <SponsorsPage isMobile={isMobile} />
              </section>
              <section className='rounded-lg bg-white p-4 shadow'>
                {!isMobile && <h3 className='mb-2 text-lg font-semibold'>Sponsors</h3>}
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
