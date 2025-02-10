"use client"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const mafiaData = [
  {
    id: "01",
    content: [
      "Leave the entire CAT exam blank—you'll still outrank 60,000+ test-takers.",
      "Yet, every coaching center sells the same dream: IIM A, B, C—no matter your level."
    ]
  },
  {
    id: "02",
    content: [
      "No reality checks. No real diagnostic tests. Even students scoring below zero are promised IIM seats",
      "After a year of classes and mocks, many don't even break even. The problem isn't their scores—it's the lies of the CAT Mafia."
    ]
  },
  {
    id: " ",
    content: [
      "It's time to break free. Get the truth. Get results.",
      " "
    ]
  }
];

export default function MafiaCard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mafiaData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mafiaData.length) % mafiaData.length);
  };

  return (
    <div className="flex text-white min-h-screen w-full bg-[rgb(20,21,19)] justify-center items-center py-8 lg:pt-32">
      {/* Main Container */}
      <div className="flex flex-col relative lg:flex-row w-full  mx-auto items-center justify-center gap-4 lg:gap-0 px-4 sm:px-6 lg:px-8 ">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 h-[500px] sm:h-[550px] md:h-[600px] lg:h-[778px] relative">
          {/* Vector 2520 - Hidden on mobile */}
          <div className="hidden lg:block absolute right-10 top-0 z-10">
            <Image
              src="/assests/icons/Vector 2520.svg"
              alt="Vector"
              width={41}
              height={66}
              className="w-[41px] h-[66px]"
            />
          </div>
          {/* Rectangle 3464291 */}
          <div className="absolute w-[6px] sm:w-[8px] lg:w-[10px] h-full lg:h-[618px] left-[16px] sm:left-[24px] lg:left-[31px] bg-[rgba(19,68,104,1)]" />
          
          <div className="w-full h-full lg:h-[618px] rounded-t-[12px] lg:rounded-l-[12px] lg:rounded-tr-none bg-[rgba(10,44,69,1)] py-8 sm:py-10 lg:py-[80px] flex flex-col justify-center gap-[10px] px-6 sm:px-8 lg:px-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-tight lg:leading-[72px] font-bold">
              <span className="text-white">The </span>
              <span className="text-[#FFB85C]">CAT Mafia:</span>
              <br />
              <span className="text-white">Built on Lies</span>
            </h1>
            <p className="text-[#E5E5E5] mt-4 lg:mt-8 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              False Promises. Fake Hope.
              <br />
              Endless Looting.
            </p>
          </div>
          {/* Navigation Buttons */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:left-16 lg:translate-x-0 bottom-4 lg:bottom-48 flex gap-4 z-20">
            <button 
              onClick={handlePrev}
              className="p-2 rounded-full bg-[#053D66] hover:bg-[#074b7e] text-yellow transition-colors"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button 
              onClick={handleNext}
              className="p-2 rounded-full bg-[#053D66] hover:bg-[#074b7e] text-yellow transition-colors"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Right Section - Carousel */}
        <div className="w-full lg:w-1/2 h-[500px] sm:h-[550px] md:h-[600px] lg:h-[778px] relative">
          <div className="w-full h-[350px] lg:h-[618px] rounded-b-[12px] lg:rounded-r-[12px] lg:rounded-bl-none relative bg-[rgba(29,30,28,0.6)] border-[rgba(251,206,101,1)] border-t-0 lg:border-t-2 border-x-2 border-b-2 overflow-hidden">
            {/* Bottom gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-[200px] sm:h-[250px] lg:h-[300px]" 
              style={{ 
                background: 'linear-gradient(180deg, rgba(25, 26, 25, 0) 0%, rgba(241, 188, 64, 0.24) 100%)'
              }} 
            />

            {/* Carousel Content */}
            <div className="relative h-full">
              <div 
                className={`"absolute w-full transition-transform duration-500 ease-in-out translate-`}
                style={{ transform: `translateY(-${currentIndex * 610}px)` }}
              >
                {mafiaData.map((item) => (
                  <div 
                    key={item.id}
                    className="w-full  h-[618px] py-8 sm:py-10 lg:py-[80px] px-6 sm:px-8 lg:px-16 flex flex-col justify-start gap-8"
                  >
                    <h2 className="text-[#FBCE65] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold relative z-10">
                      {item.id}
                    </h2>
                    <div className="space-y-12 sm:space-y-16 lg:space-y-20 relative z-10">
                      {item.content.map((text, idx) => (
                        <p key={idx} className="text-[#E5E5E5] text-base sm:text-lg md:text-2xl lg:text-4xl leading-relaxed">
                          {text}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}