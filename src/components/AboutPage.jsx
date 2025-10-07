'use client';
import React from 'react';
import ghhdir from "../images/ghhdir.png";
import ghhmem from "../images/ghhmem.png";
import SpiralBinding from './SpiralBinding';

const AboutPage = ({ isMobile = false }) => {
  return (
    <div
      className={`notebook-page w-full h-full ${
        isMobile ? "p-4 pt-6 pb-6" : "p-6 pt-20 pb-6"
      } relative`}
    >
<div
  className={`${isMobile ? "px-4" : "ml-8 mt-[-1rem]"} text-left relative`}
>
  <h2 className="mb-4 !text-[68px] font-bold text-gray-800 -mt-6 -ml-2">
    about us
  </h2>
</div>

      <div
        className={`flex ${
          isMobile ? "flex-col" : "flex-row"
        } items-center justify-center gap-7 mb-12`}
      >
        <div className="w-full max-w-md text-gray-700 p-2">
          <p className="text-justify !text-[15px] leading-tight">
            Girls Who Code at UVA is one of the largest College Loops in the
            country, founded in 2020 and now 300+ members strong. As part of the
            national nonprofit, our mission is to close the gender gap in tech
            and support women and allies in computing through community,
            education, and empowerment.
          </p>
        </div>

<div className="w-full max-w-md flex justify-center">
  <div className="relative transform rotate-[-2deg]">
    <div
      className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-4 
                 bg-blue-100/70 backdrop-blur-sm shadow-sm 
                 rotate-[1deg]"
    />

    <img
      src={ghhdir}
      alt="GWC Directors"
      className="shadow-lg w-full object-cover"
    />
  </div>
</div>
      </div>

      <div
        className={`flex ${
          isMobile ? "flex-col" : "flex-row-reverse"
        } items-center justify-center gap-7`}
      >
        <div className="w-full max-w-md text-gray-700 p-4">
          <p className="text-justify !text-[15px] leading-tight">
            Girls Hoo Hack is an in-person 48-hour hackathon hosted by Girls Who Code at UVA that aims to foster a community of diverse thought and skill. Coders of all levels of experience have the opportunity to work together with teams and mentors, attend educational workshops, and code action-oriented projects that reflect innovation, diverse perspectives, and empowerment.
          </p>
        </div>

<div className="w-full max-w-md flex justify-center">
  <div className="relative transform rotate-[2deg]">
    <div
      className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-4 
                 bg-blue-100/70 backdrop-blur-sm shadow-sm 
                 rotate-[-1deg]"
    />

    <img
      src={ghhmem}
      alt="GWC Mem"
      className="shadow-lg w-full object-cover"
    />
  </div>
</div>
    </div>
    </div>
  );
};

export default AboutPage;
