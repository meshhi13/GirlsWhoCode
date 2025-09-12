"use client";
import React from "react";
import SpiralBinding from "./SpiralBinding";

const ContactUs = ({ isMobile = false }) => {
  return (
    <div className={`notebook-page w-full h-full ${isMobile ? "p-4 pt-6 pb-6" : "p-6 pt-20 pb-6"} relative`}>
      <div className={`${isMobile ? "px-4" : "ml-12"}`}>
        <h2 className="text-lg font-bold text-gray-800 mb-4">contact us</h2>
        <p className="text-gray-700 mb-4">Questions? Reach out to us at <a className="text-pink-600" href="mailto:girlshoohack@gmail.com">girlshoohack@gmail.com</a>!</p>
        <div className={`${isMobile ? "space-y-3" : "grid grid-cols-2 gap-4"}`}>
        <div className="p-4 rounded w-105">
  <form
    action="mailto:girlshoohack@gmail.com"
    method="post"
    encType="text/plain"
  >
    <label className="block mb-2">
      Name
      <input type="text" name="name" className="border rounded-xl p-1 w-full" />
    </label>
    <label className="block mb-2">
      Email
      <input type="email" name="email" className="border rounded-xl p-1 w-full" />
    </label>
    <label className="block mb-2">
      Message
      <textarea name="message" className="border rounded-xl p-1 w-full" />
    </label>
    <button
      type="submit"
      className="bg-black text-white px-4 py-1 rounded-xl mt-2"
    >
      send
    </button>
  </form>
</div>
    
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

