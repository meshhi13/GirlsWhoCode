'use client';
import React, { useState } from 'react';
import SpiralBinding from './SpiralBinding';

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

const FAQPage = ({ isMobile = false }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFaq = (index) => setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <div className={`w-full h-full bg-white ${isMobile ? 'p-4 pt-6 pb-0' : 'p-6 pt-20 pb-0'} relative`}>
      {!isMobile && <SpiralBinding />}

      <h2 className={`text-lg font-bold text-gray-800 mb-6 ${isMobile ? 'px-4' : 'ml-12 sticky bg-white z-10'}`}>
        Frequently Asked Questions
      </h2>

      <div className={`${isMobile ? 'space-y-3 px-4' : 'space-y-2 ml-12'} ${isMobile ? '' : 'h-[calc(100%-9rem)] overflow-y-auto pr-4'}`}>
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                toggleFaq(index)
              }
            }
              className="w-full z-99 flex items-center justify-between text-left "
              aria-expanded={openIndex === index}
            >
              <span className="text-md font-semibold text-pink-600 hover:bg-pink-100">{item.q}</span>
              <span
                className={`text-blue-600 text-2xl leading-none select-none transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            {openIndex === index && <p className="mt-2 text-sm text-gray-700">{item.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;