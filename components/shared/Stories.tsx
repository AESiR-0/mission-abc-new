"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Akshay from "@/public/static/success/1.png"

interface Story {
  name: string
  title: string
  content: string[]
  background?: string
}

const stories: Story[] = [
  {
    name: "Akshay Goel",
    title: "STORY OF AKSHAY GOEL",
    content: [
      "Three years. Three attempts at the CAT exam. A disheartening 19th percentile. Akshay Goel had hit rock bottom—scammed by misleading coaching, losing lakhs, and almost giving up hope.",
      "But Akshay wasn't just anyone. AIR 1 in IIT-JEE Math (1999), a brilliant mind reduced to doubting his own potential. They told him to accept failure, give up, go home. They were dead wrong.",
      `Everything changed in a single, transformative session. Akshay walked in carrying the weight of his failures and walked out with a spark in his eyes, saying, 'I feel like I can cross 90 today.'",
      Just three months later, he didn't just cross 90—he shattered the 99+ percentile barrier and secured his place at IIM Calcutta.`
    ],
    background: "bg-gray-900"
  },
  {
    name: "Arun Verma",
    title: "STORY OF ARUN VERMA",
    content: [
      "Arun Verma didn't have the luxury of an IIT background or a knack for math. He started his CAT journey at a modest 58th percentile, burdened by self-doubt...",
      "Four months of relentless effort and the right mentorship later, Arun transformed into a top performer with a 99.74 percentile, earning admission into IIM Ahmedabad.",
      `His story is a testament that you don't need years of preparation or a fancy degree. With the right mentor, a winning strategy, and unwavering commitment, the impossible becomes achievable.`
    ],
    background: "bg-gray-900"
  },
  {
    name: "Siddharth",
    title: "STORY OF SIDDHARTH",
    content: [
      "Siddharth, an engineer, struggled against the tides of self-doubt and anxiety, his dreams anchored in IIM Bangalore",
      "Under Sandeep's mentorship, he mastered verbal, quant, and DI, leveraging the OCTAVE strategy and KTW sessions to reshape his mindset.",
      `The outcome? Offers from IIMA, IIMC, and IIMB—choosing Bangalore for its vibrant startup culture.
These stories prove one thing—no dream is too big with the right guidance.`
    ]
  }
  // Add more stories as needed
]

const Stories = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedStory, setSelectedStory] = useState<Story>(stories[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1;
        return newPosition >= stories.length ? 0 : newPosition;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTagClick = (story: Story) => {
    setSelectedStory(story);
  };

  return (
    <section className='min-h-screen w-full py-8 md:py-16'>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left column */}
          <div className="flex flex-col w-full lg:w-1/2 gap-4 md:gap-6">
            <h1
              className="font-afacad font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-1px] max-w-3xl"
              style={{
                background: 'linear-gradient(97.33deg, #FFFFFF 3.33%, #989898 96.01%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Some success stories to tell
            </h1>
            <p className='text-base sm:text-lg md:text-xl opacity-90 max-w-2xl'>
              We are proud of our students and proudly wish to tell their stories
            </p>
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] mt-4">
              <Image
                src={Akshay}
                alt="Success story"
                className="object-cover rounded-lg"
                fill
                priority
              />
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col w-full lg:w-1/2 gap-6">
            {/* Story selector buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 justify-start">
              {stories.map((story: Story) => (
                <button
                  key={story.name}
                  onClick={() => handleTagClick(story)}
                  className="group flex flex-col gap-1 py-2 transition-colors"
                >
                  <span className='px-3 sm:px-4 text-sm sm:text-base whitespace-nowrap hover:text-yellow transition-colors'>
                    {story.name}
                  </span>
                  <span
                    className={`w-full h-0.5 transition-all duration-300 ${selectedStory == story
                      ? 'bg-yellow w-full'
                      : 'bg-white/50 w-1/2 group-hover:w-full'
                      }`}
                  />
                </button>
              ))}
            </div>

            {/* Story content */}
            <div className="h-full p-4 sm:p-6 md:p-8 rounded-lg bg-[#1D1E1C]">
              <h2 className="text-lg sm:text-xl md:text-2xl text-yellow font-bold mb-4">
                {selectedStory.title}
              </h2>
              <div className="flex flex-col gap-3 md:gap-5">
                {selectedStory.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-md sm:text-base md:text-xl ${index == 0
                      ? 'font-bold text-white'
                      : 'text-gray-300'
                      }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;