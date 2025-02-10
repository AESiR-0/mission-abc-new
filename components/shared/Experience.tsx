"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
];

export default function TeachingSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [video, setVideo] = useState<HTMLVideoElement | null>(null);
    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        video?.pause();

        setCurrentIndex((prev) => (prev + 1) % images.length);
        setTimeout(() => setIsAnimating(false), 500); // Match this with animation duration
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        video?.pause();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setTimeout(() => setIsAnimating(false), 500); // Match this with animation duration

    };

    return (
        <section className="w-full font-qanelas relative bg-[rgb(20,21,19)] overflow-hidden text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Left Text Content */}
                <div className="w-full md:w-1/2 z-20 bg-[rgb(20,21,19)] space-y-3">
                    <p className="text-yellow text-xl sm:text-2xl uppercase font-medium">
                        Get to know the other side of edu
                    </p>
                    <h2
                        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                        style={{
                            background: 'linear-gradient(97.33deg, #FFFFFF 3.33%, #989898 96.01%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Experience Sandeep's <br /> <span className="mt-5">Teaching</span>
                    </h2>
                    <div className="flex flex-col pr-4 sm:pr-8 md:pr-16 gap-4 sm:gap-5">
                        <p className="text-xl sm:text-2xl pt-6 sm:pt-10 flex flex-col font-semibold">
                            <span>Your Background doesn't matter.</span>
                            <span>Your Hunger does.</span>
                        </p>
                        <p className="text-base sm:text-lg md:text-xl">
                            IIMs don't care where you come from engineers, lawyers, CAs, B.Com, B.A., Liberal Arts everyone has a shot.
                        </p>
                        <p className="text-base sm:text-lg md:text-xl">
                            When you sit for the CAT, the computer doesn't know (or care) if you're an IITian or not.
                        </p>
                    </div>
                </div>

                {/* Right Slider Section */}
                <div className="w-full md:w-1/2 ">
                    <div className="bg-[#1D1E1C] relative rounded-lg p-4 h-[500px]  ">
                        {/* Navigation Elements */}
                        <div className="absolute top-3 left-3 z-10">
                            <Image
                                src="/static/logo/emblem_white.png"
                                alt="Logo"
                                width={30}
                                height={30}
                            />
                        </div>

                        <div className="absolute top-3 right-3 z-10 flex gap-2">
                            <button
                                onClick={prevSlide}
                                className="bg-[#28282C] p-2 rounded-full text-yellow hover:bg-[#333] transition-colors"
                                disabled={isAnimating}
                            >
                                <ChevronLeft className="w-5 h-5 hover:scale-110 transition-transform" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="bg-[#28282C] p-2 rounded-full text-yellow hover:bg-[#333] transition-colors"
                                disabled={isAnimating}
                            >
                                <ChevronRight className="w-5 h-5 hover:scale-110 transition-transform" />
                            </button>
                        </div>

                        {/* Video Slider */}
                        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-full">
                            <div
                                className="relative w-full transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                }}
                            >

                                <div className="flex">
                                    {images.map((src, index) => (
                                        <div
                                            key={index}
                                            className={`min-w-full px-4 transition-opacity duration-200 ${currentIndex === index ? 'opacity-100' : 'opacity-0'
                                                }`}
                                        >
                                            <video
                                                className="w-full rounded-lg cursor-pointer"
                                                height={800}
                                                width={400}
                                                onClick={(e) => {
                                                    setVideo(e.currentTarget);
                                                    video?.paused ? video?.play() : video?.pause();
                                                }}


                                                src={src}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
