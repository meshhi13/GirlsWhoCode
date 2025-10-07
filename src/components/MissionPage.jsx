'use client';
import React from 'react';
import ghhspeech from "../images/ghhspeech.png";
import ghhproj from "../images/ghhproj.png";
import SpiralBinding from './SpiralBinding';

const MissionPage = ({ isMobile = false }) => {
  return (
    <div
      className={`notebook-page-right w-full h-full ${
        isMobile ? "p-4 pt-6 pb-6" : "p-6 pt-20 pb-6"
      } relative`}
    >
      <div
        className={`${isMobile ? "px-4" : "ml-8 mt-[-1rem]"} text-right relative`}
      >
        <h2 className="mb-4 !text-[68px] font-bold text-gray-800 -mt-6 -ml-2 pb-7">
          our mission
        </h2>
      </div>

      <div
        className={`flex ${
          isMobile ? "flex-col" : "flex-row"
        } items-center justify-center gap-7 mb-12`}
      >
        <div className="w-full max-w-md text-gray-700 pl-10 pr-4">
          <p className="text-justify !text-[15px] leading-tight">
            Girls Who Code at the University of Virginia is an empowering and inclusive team of the next leaders in CS. GWC at UVA aims to close the gender gap in technology by creating opportunities for young women to explore technology.
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
              src={ghhspeech}
              alt="GWC Speech"
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
            Together, we're breaking down barriers in the tech industry due to resource inequality, race, and gender biases. All skill levels welcome. Come for the coding, stay for the community!
          </p>
        </div>

        <div className="w-full max-w-md flex justify-center pl-10">
          <div className="relative transform rotate-[2deg]">
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-4 
                         bg-blue-100/70 backdrop-blur-sm shadow-sm 
                         rotate-[-1deg]"
            />
            <img
              src={ghhproj}
              alt="GWC Project"
              className="shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;

