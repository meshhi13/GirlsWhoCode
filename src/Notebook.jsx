'use client';
import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './styles/custom.css';

// Reusable left-side spiral binding used on each page
const SpiralBinding = ({ className = '' }) => (
  <div className={`absolute left-0 top-0 w-8 h-full ${className}`}>
    {Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        className="absolute w-6 h-4 border-2 border-gray-500 rounded-full"
        style={{
          left: '4px',
          top: `${i * 5 + 5}%`,
          borderStyle: 'solid',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          transform: 'rotate(0deg)',
          background:
            'linear-gradient(90deg, transparent 30%, #666 30%, #666 70%, transparent 70%)',
        }}
      />
    ))}
  </div>
);

const Notebook = () => {
  const faqItems = [
    {
      q: 'What is a hackathon?',
      a:
        "A hackathon is best described as an \"invention marathon.\" Anyone who has an interest in technology attends a hackathon learn, build & share their creations over the course of a weekend in a relaxed and welcoming atmosphere. You don't have to be a programmer and you certainly don't have to be majoring in Computer Science.",
    },
    {
      q: 'Who can participate?',
      a:
        'Girls Hoo Hack is open to all college-aged students or anyone who has graduated within the last 12 months. We welcome all women, non-binary individuals, and women supporters.',
    },
    {
      q: "What if I don't know how to code?",
      a:
        "Not a problem! The entire Major League Hacking team knew very little when they each attended their very first hackathon. It’s entirely irrelevant what your experience is going into a hackathon, it’s more about your interest in technology. Every MLH Member Event is passionate about making their hackathons very welcoming and beginner-friendly. If you’re wanting to learn how to code outside of a hackathon, there’s a fantastic blog post that you should read. After, you should check out the following: Treehouse, Codecademy and the Major League Hacking blog to get started.",
    },
    {
      q: 'Are there any fees to participate?',
      a:
        'Girls Hoo Hack is free for all participants! Throughout the event, there will also be fun opportunities to get smaller prizes, swag, and more!',
    },
    {
      q: 'Will I annoy people if I ask them questions?',
      a:
        'Not at all! This is a common misconception about hackathons and in actual fact, it’s the complete opposite. The environment at these events are designed specifically to encourage everyone to have fun and help each other. If you’re ever stuck on anything, go find a volunteer who might be able to help and if not, they will almost certainly know who can.',
    },
    {
      q: 'How many people can be on a team?',
      a:
        "Teams can have up to 4 members. Don't worry if you don't have a team - we'll have team formation activities to help you find teammates!",
    },
    {
      q: "What if I don't know anybody there?",
      a:
        "That's perfectly fine! We have team formation events and social activities to help you meet other participants. Many attendees come alone and leave with new friends and connections.",
    },
    {
      q: "What if I don't have a project?",
      a:
        "We'll have project prompts and brainstorming sessions to help you generate ideas. You can also join a team that already has a project concept you're interested in.",
    },
    {
      q: "What if I don't want to present my hack?",
      a:
        "You might think your project isn’t impressive or it might not be finished so you don’t want to present it. You should present it anyway! Honestly, hackathons isn’t about being the best or being competitive. It’s all about having fun, making friends and learning how to become better at things you care about. Presenting your hack gives you a chance to be proud of what you’ve done, and you should be proud.",
    },
    {
      q: 'Do you abide by the MLH Code of Conduct?',
      a:
        'Yes we do! Here is the link to the Code of Conduct: https://static.mlh.io/docs/mlh-code-of-conduct.pdf',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div 
      className="flex justify-center items-center min-h-screen w-full" 
      style={{ 
        padding: '20px',
        position: 'relative'
      }}
    >
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <HTMLFlipBook
          width={550}
          height={700}
          size="fixed"
          drawShadow={true}
          showCover={true}
          flippingTime={800}
          mobileScrollSupport={true}
          usePortrait={true}
          className="transition-transform duration-300 relative rounded-xl shadow-2xl"
          style={{ 
            margin: '0',
            display: 'block'
          }}
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
          <SpiralBinding />
        </div>

        {/* About Us */}
        <div className="w-full h-full bg-white p-6 pt-32 relative">
          <SpiralBinding />
          <h2 className="text-lg font-bold text-gray-800 mb-4 ml-12">About Us</h2>
          <p className="text-gray-700 leading-relaxed text-sm ml-12">
            Girls Who Code at UVA is one of the largest College Loops in the country, 
            founded in 2020 and now 300+ members strong. As part of the national nonprofit, 
            our mission is to close the gender gap in tech and support women and allies 
            in computing through community, education, and empowerment.
          </p>
        </div>

        {/* Our Mission */}
        <div className="w-full h-full bg-white p-6 pt-32 relative">
          <SpiralBinding />
          <h2 className="text-lg font-bold text-gray-800 mb-4 ml-12">Our Mission</h2>
        </div>

        {/* Program Schedule */}
        <div className="w-full h-full bg-white p-6 pt-32 relative">
          <SpiralBinding />
          <h2 className="text-lg font-bold text-gray-800 mb-4 ml-12">Program Schedule</h2>
        </div>

        {/* FAQ */}
        <div className="w-full h-full bg-white p-6 pt-32 relative">
          <SpiralBinding />
          <h2 className="text-lg font-bold text-gray-800 mb-6 ml-12 sticky top-32 bg-white z-10">Frequently Asked Questions</h2>

          <div className="space-y-2 ml-12 h-[calc(100%-9rem)] overflow-y-auto pr-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 py-4">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-md font-semibold text-pink-600">{item.q}</span>
                  <span className="text-blue-600 text-2xl leading-none select-none">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-sm text-gray-700">{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div className="w-full h-full bg-white p-6 pt-32 relative">
          <SpiralBinding />
          <h2 className="text-lg font-bold text-gray-800 mb-4 ml-12">Contact Us</h2>
        </div>

        {/* Our Sponsors */}
        <div className="w-full h-full bg-white p-6 pt-32 relative">
          {/* Wire spiral binding */}
          <div className="absolute left-0 top-0 w-8 h-full">
            {/* Wire coils */}
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="absolute w-6 h-4 border-2 border-gray-500 rounded-full"
                style={{
                  left: '4px',
                  top: `${i * 5 + 5}%`,
                  borderStyle: 'solid',
                  borderLeftColor: 'transparent',
                  borderRightColor: 'transparent',
                  transform: 'rotate(0deg)',
                  background: 'linear-gradient(90deg, transparent 30%, #666 30%, #666 70%, transparent 70%)'
                }}
              />
            ))}
          </div>
          <h2 className="text-lg font-bold text-gray-800 mb-4 ml-12">Our Sponsors</h2>
        </div>

        {/* Back Cover */}
        <div className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-100 flex items-center justify-center p-8">
          <div className="text-center">
          </div>
        </div>
      </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Notebook;
