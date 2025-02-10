"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const successStories = [
  {
    id: 1,
    title: "A student cracked a $39 million role as Head of Data",
    description: "After using a KTW insight on aircraft fuel consumption, 186 factors made the difference.",
  },
  {
    id: 2,
    title: "A Chief Data Officer at GE Global landed a $12 million position",
    description: "After using a KTW insight on aircraft fuel consumption, 186 factors made the difference.",
  },
  {
    id: 3,
    title: "A startup founder secured a $20 million Series A investment",
    description: "Insights from KTW enabled a breakthrough funding round.",
  }, {
    id: 4,
    title: "A student cracked a $39 million role as Head of Data",
    description: "After using a KTW insight on aircraft fuel consumption, 186 factors made the difference.",
  },
  {
    id: 5,
    title: "A Chief Data Officer at GE Global landed a $12 million position",
    description: "After using a KTW insight on aircraft fuel consumption, 186 factors made the difference.",
  },
  {
    id: 6,
    title: "A startup founder secured a $20 million Series A investment",
    description: "Insights from KTW enabled a breakthrough funding round.",
  },
];

export default function SuccessCarousel() {
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <div className="relative w-full min-h-[80vh] md:min-h-screen lg:min-h-screen px-4 sm:px-6 lg:px-8 mx-auto my-10 md:my-20 lg:mt-[120px]">
      {/* Background with gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(180deg, rgba(20, 21, 19, 0.7) 0%, rgba(20, 21, 19, 0.7) 100%)',
          backgroundColor: 'rgb(20, 21, 19)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 gap-3 flex flex-col items-center">
        <span className="text-yellow text-lg md:text-2xl uppercase">Know the world</span>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl flex flex-col gap-2 text-center mb-4 "
          style={{
            fontWeight: 600,
            lineHeight: '1.1',
            letterSpacing: '-1px',
            background: 'linear-gradient(97.33deg, #FFFFFF 3.33%, #989898 96.01%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          <span className="max-w-[850px]">Transform Your Future with KTW</span>
          <span className="max-w-[850px]">Real-World Success Stories</span>
        </h2>
        <button className="bg-yellow text-black px-4 md:px-6 py-2 md:py-3 rounded-[12px] shadow-md hover:bg-yellow/80 text-sm md:text-base">
          Start Now
        </button>

        {/* Carousel Section */}
        <div className="relative w-full max-w-[1440px] my-8 md:my-12">
          <Swiper
            spaceBetween={25}
            slidesPerView={3}
            centeredSlides
            loop={true}
            breakpoints={{
              390:{
                slidesPerView:1.5,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              }
            }}
            onSwiper={(swiper) => setSwiperRef(swiper)}
            className="px-4"
          >
            {successStories.map((story) => (
              <SwiperSlide key={story.id}>
                <div className="bg-[rgba(255,255,255,0.1)] max-w-2xl backdrop-blur-sm rounded-2xl p-4 md:p-6 justify-between gap-3 md:gap-4 h-full max-h-[400px] flex flex-col">
                  <div className="w-full h-28 md:h-40 bg-[rgba(255,255,255,0.2)] rounded-xl p-6 md:p-10"></div>
                  <h3 className="text-lg md:text-2xl font-semibold line-clamp-2">{story.title}</h3>
                  <p className="text-gray-300 text-base md:text-lg line-clamp-3">{story.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Edge Gradient Masks */}
          {/* <div
            className="absolute top-0 left-0 w-[15%] md:w-[20%] h-full pointer-events-none z-10"
            style={{
              background: 'linear-gradient(90deg, rgb(20,21,19) 0%, rgba(20,21,19,0.001) 100%)'
            }}
          />
          <div
            className="absolute top-0 right-0 w-[15%] md:w-[20%] h-full pointer-events-none z-10"
            style={{
              background: 'linear-gradient(270deg, rgb(20,21,19) 0%, rgba(20,21,19,0.001) 100%)'
            }}
          /> */}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-full hover:bg-white/20 transition z-10"
            onClick={() => swiperRef?.slidePrev()}
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-yellow" />
          </button>

          <button
            className="bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-full hover:bg-white/20 transition z-10"
            onClick={() => swiperRef?.slideNext()}
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-yellow" />
          </button>
        </div>
      </div>
    </div>
  );
}
