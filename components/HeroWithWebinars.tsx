'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const webinars = [
  {
    id: "01",
    title: "Webinar 01",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    status: "N", // N for New
  },
  {
    id: "02",
    title: "Webinar 02",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    status: "N",
  },
  {
    id: "03",
    title: "Webinar 03",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    status: "N",
  }
];

export default function HeroWithWebinars() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section 
      ref={targetRef}
      className="min-h-screen bg-[rgb(20,21,19)] text-white overflow-hidden"
    >
      <div className="container mx-auto px-4 py-8 lg:py-16 flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-[692px] p-4 lg:pl-[120px] lg:pt-16 bg-[#141513] flex-col justify-start items-start gap-8 lg:gap-14 relative pb-[160px]">
          <div className="self-stretch flex-col justify-start items-start gap-8 lg:gap-14 flex">
            <div className="self-stretch flex-col justify-start items-start gap-4 lg:gap-6 flex">
              <div className="text-white text-3xl lg:text-[64px] font-semibold font-['Qanelas Soft'] leading-tight lg:leading-[70.40px]">
                Your First Step to<br />IIM A, B, or C
              </div>
              <div className="self-stretch text-[#f2f2f2] text-xl lg:text-[32px] font-normal font-['Qanelas Soft']">
                No fluff. No generic coaching. Just raw, result-driven strategy.
              </div>
            </div>
            
            <div className="flex-col justify-start items-start gap-4 lg:gap-6 flex">
              {[
                "Free Webinar: Experience Sandeep's game-changing approach",
                "VARC & DILR from scratch—even if you're starting fresh.",
                "Elite Quant—because good isn't enough, you need to be the best.",
                "Real Exam Strategy—what actually works on D-Day."
              ].map((item, index) => (
                <div key={index} className="self-stretch justify-start items-center gap-3 lg:gap-5 inline-flex">
                  <div data-svg-wrapper className="flex-shrink-0">
                    <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 lg:w-10 lg:h-10">
                      <g filter="url(#filter0_d_2_1004)">
                        <rect x="1.5" y="2" width="36" height="36" rx="6" fill="#F1BC40"/>
                        <rect x="1.95" y="2.45" width="35.1" height="35.1" rx="5.55" stroke="#362580" strokeOpacity="0.1" strokeWidth="0.9"/>
                        <path d="M9.18091 21.2901L15.9529 27.7391L29.819 12.2607" stroke="#0A2C45" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      <defs>
                        <filter id="filter0_d_2_1004" x="0" y="0.5" width="39" height="39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feMorphology radius="1.5" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_2_1004"/>
                          <feOffset/>
                          <feComposite in2="hardAlpha" operator="out"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.0800341 0 0 0 0 0 0 0 0 0 0.428418 0 0 0 0.32 0"/>
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_1004"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_1004" result="shape"/>
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="grow text-[#f3f3f3] text-lg lg:text-2xl font-medium font-['Qanelas Soft']">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Modified yellow section - adjusted positioning */}
          <div className="absolute left-0 bottom-0 w-full lg:w-[545px] p-4 lg:p-6 bg-[#f1bc41] rounded-tr-xl rounded-br-xl border border-[#292929]">
            <div className="text-[#1d1e1c] text-xl lg:text-2xl font-medium font-['Qanelas Soft']">
              New Batch Starts This April, See the difference. Register now.
            </div>
          </div>
        </div>

        {/* Right Section - Horizontal Scrolling Cards */}
        <div className="w-full lg:flex-1 overflow-hidden">
          <motion.div 
            style={{ x }}
            className="flex gap-4 lg:gap-6"
          >
            {webinars.map((webinar) => (
              <div 
                key={webinar.id}
                className="w-[300px] lg:w-[584px] flex-shrink-0 bg-[#1d1e1c] rounded-xl flex-col justify-center items-center gap-[18px] inline-flex overflow-hidden"
              >
                <div className="self-stretch p-4 lg:p-8 flex-col justify-start items-start gap-4 lg:gap-6 inline-flex">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 p-2 lg:p-2.5 rounded-xl border border-[#362580]/10 flex-col justify-center items-center gap-2.5 flex">
                    <div className="text-[#f1bc3f] text-lg lg:text-xl font-medium font-['DM Sans'] leading-tight lg:leading-[33px]">
                      {webinar.id}
                    </div>
                  </div>

                  <div className="self-stretch flex-col justify-start items-start gap-3 lg:gap-4 flex">
                    <div className="self-stretch text-white text-2xl lg:text-5xl font-semibold font-['Qanelas Soft'] leading-tight lg:leading-[48px]">
                      {webinar.title}
                    </div>
                    <div className="self-stretch text-[#dbdbdb]/60 text-lg lg:text-2xl font-normal font-['Qanelas Soft']">
                      {webinar.description}
                    </div>
                  </div>

                  <button className="relative w-full lg:w-[148px] px-4 py-3 lg:py-3.5 rounded-xl group">
                    {/* Gradient border background */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1c1c1c] via-[#f1bc3f]/30 to-[#f1bc3f]/50" />
                    
                    {/* Dark background with slight padding to create border effect */}
                    <div className="absolute inset-[1px] rounded-xl bg-[#1d1e1c]" />
                    
                    {/* Button content */}
                    <div className="relative z-10 flex justify-center items-center">
                      <div className="text-center text-[#f1bc3f] text-base lg:text-lg font-bold font-['Manrope'] capitalize leading-tight">
                        Register Now
                      </div>
                    </div>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#1c1c1c] via-[#f1bc3f]/40 to-[#f1bc3f]/60" />
                  </button>
                </div>

                <div className="relative w-[90%]">
                  <svg className="w-full" viewBox="0 0 483 269" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 12C0.5 5.37258 5.87258 0 12.5 0H470.5C477.127 0 482.5 5.37258 482.5 12V269H0.5V12Z" fill="#2B2B2B"/>
                  </svg>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
