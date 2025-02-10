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

const SharingStories = () => {
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
        <div className="relative w-full max-md:min-h-[500px] max-md:my-10 min-h-[600px] sm:min-h-screen px-4 sm:px-6 lg:px-8 mx-auto mt-12 sm:mt-20 lg:mt-52">
            {/* Background with gradient overlay */}
            <div
                className="absolute inset-0"

                style={{
                    backgroundImage: 'linear-gradient(180deg, rgba(20, 21, 19, 0.7) 0%, rgba(20, 21, 19, 0.7) 100%)',
                    backgroundColor: 'rgb(20, 21, 19)'
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center">
                <h2
                    className="text-4xl sm:text-3xl md:text-5xl lg:text-[64px] text-center mb-3 sm:mb-4 px-4"
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
                    className="text-lg sm:text-xl md:text-2xl lg:text-[32px] text-center mb-6 sm:mb-8 lg:mb-16 px-4"
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
                        {[...stories, ...stories].map((story, index) => (
                            <div
                                key={`${story.id}-${index}`}
                                className="relative flex-shrink-0 px-2 w-[90vw] sm:w-[calc(100vw/1.2)] max-w-[calc(100%/3)] min-w-[280px]"
                            >
                                <div className="relative w-full pt-[125%] rounded-2xl overflow-hidden">
                                    <Image
                                        src={story.image}
                                        alt={`Success story ${index + 1}`}
                                        fill
                                        className={`object-cover transition-transform duration-300 hover:scale-105 ${index % 2 === 0 ? 'scale-[0.85] rounded-2xl' : ''
                                            }`}
                                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-30" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Add gradient overlays for better visual effect on sides */}
                    <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#141513] to-transparent" />
                    <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#141513] to-transparent" />
                </div>
            </div>
        </div >
    );
};

export default SharingStories;