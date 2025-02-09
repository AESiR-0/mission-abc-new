"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const stories = [
  {
    id: 1,
    image: "/assests/images/person1.png", 
  },
  {
    id: 2,
    image: "/assests/images/person2.png",
  },
  {
    id: 3,
    image: "/assests/images/person5.png",
  },
  {
    id: 4,
    image: "/assests/images/person4.png",
  },
  {
    id: 5,
    image: "/assests/images/person3.png",
  }
];

const Stories = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 1;
        return newPosition >= stories.length ? 0 : newPosition;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen px-4 sm:px-6 lg:px-8 mx-auto mt-20 lg:mt-[120px]">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(20, 21, 19, 0.7) 0%, rgba(20, 21, 19, 0.7) 100%)',
          backgroundColor: 'rgb(20, 21, 19)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 
          className="text-3xl md:text-5xl lg:text-[64px] text-center mb-4 px-4"
          style={{
            fontFamily: 'Qanelas Soft',
            fontWeight: 600,
            lineHeight: '1.1',
            letterSpacing: '-1px',
            background: 'linear-gradient(97.33deg, #FFFFFF 3.33%, #989898 96.01%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          Sharing our stories
        </h2>
        <p 
          className="text-xl md:text-2xl lg:text-[32px] text-center mb-8 lg:mb-16 px-4"
          style={{
            fontFamily: 'Qanelas Soft',
            fontWeight: 400,
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
            color: 'rgba(242, 242, 242, 1)'
          }}
        >
          A wall of our success stories
        </p>

        {/* Horizontal Auto-scrolling Carousel */}
        <div className="relative w-full max-w-[1440px] overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${scrollPosition * (100 / stories.length)}%)`
            }}
          >
            {/* Duplicate the array for infinite scroll effect */}
            {[...stories, ...stories].map((story, index) => (
              <div
                key={`${story.id}-${index}`}
                className={`relative flex-shrink-0 ${index % stories.length === Math.floor(stories.length / 2) ? 'px-10' : 'px-2'}`}
                style={{
                  width: 'calc(100vw / 1.2)',
                  maxWidth: 'calc(100% / 3)',
                  minWidth: '280px',
                }}
              >
                <div className="relative w-full pt-[125%] rounded-2xl overflow-hidden">
                  <Image
                    src={story.image}
                    alt={`Success story ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-30" />
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays for cut-off effect */}
       </div>
      </div>
    </div>
  );
};

export default Stories;