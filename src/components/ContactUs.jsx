"use client";
import React from "react";
import SpiralBinding from "./SpiralBinding";

const ContactUs = ({ isMobile = false }) => {
  return (
    <div className={`w-full h-full bg-white ${isMobile ? "p-4 pt-6 pb-6" : "p-6 pt-20 pb-6"} relative`}>
      <div className={`${isMobile ? "px-4" : "ml-12"}`}>
        <h2 className="text-lg font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">Questions? Reach out to us at <a className="text-blue-600" href="mailto:hello@gwc.org">hello@gwc.org</a></p>
        <div className={`${isMobile ? "space-y-3" : "grid grid-cols-2 gap-4"}`}>
          <div className="bg-gray-100 p-4 rounded">Email Form Placeholder</div>
          <div className="bg-gray-100 p-4 rounded">Map Placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

