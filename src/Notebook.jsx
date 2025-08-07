'use client';
import React from 'react';
import HTMLFlipBook from 'react-pageflip';

const Notebook = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full" style={{ padding: '20px' }}>
      <HTMLFlipBook
        width={150}
        height={150}
        size="stretch"
        drawShadow={true}
        showCover={false}
        flippingTime={1000}
        mobileScrollSupport={true}
        className="transition-transform duration-300 relative rounded-xl shadow-2xl"
        style={{ margin: '0 auto' }}
      >
        {/* Front Cover */}
        <div className="w-full h-full relative">
          <img 
            src="/src/images/logo style mockup.jpg" 
            alt="Girls Hoo Hack Logo Mockup"
            className="w-full h-full object-cover"
            onLoad={() => console.log('Logo mockup loaded successfully')}
            onError={(e) => console.error('Logo mockup failed to load:', e)}
          />
        </div>

        {/* About Us */}
        <div className="w-full h-full bg-white p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Girls Who Code at UVA is one of the largest College Loops in the country, 
            founded in 2020 and now 300+ members strong. As part of the national nonprofit, 
            our mission is to close the gender gap in tech and support women and allies 
            in computing through community, education, and empowerment.
          </p>
        </div>

        {/* Our Mission */}
        <div className="w-full h-full bg-white p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
        </div>

        {/* Program Schedule */}
        <div className="w-full h-full bg-white p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Program Schedule</h2>
        </div>

        {/* FAQ */}
        <div className="w-full h-full bg-white p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
        </div>

        {/* Contact Us */}
        <div className="w-full h-full bg-white p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        </div>

        {/* Our Sponsors */}
        <div className="w-full h-full bg-white p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Sponsors</h2>
        </div>

        {/* Back Cover */}
        <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-100 flex items-center justify-center p-8">
          <div className="text-center">
          </div>
        </div>
      </HTMLFlipBook>
    </div>
  );
};

export default Notebook;
