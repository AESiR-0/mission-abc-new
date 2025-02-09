"use client";

import Image from "next/image";
import coverBook from '@/public/static/footer/Cover book.png'
import emblemLogo from '@/public/static/logo/emblem.png'
import vectors from '@/public/static/footer/Vector.png'
import xLogo from '@/public/static/logo/socials/X.png'
import Instagram from '@/public/static/logo/socials/instagram.png'
import Facebook from '@/public/static/logo/socials/facebook.png'
import Linkedin from '@/public/static/logo/socials/linkedin.png'




export default function Footer() {
    return (
        <div className="mx-4 md:m-16 md:mt-0 text-white">
            {/* Hero Section */}
            <div className="bg-grad-yellow overflow-hidden relative rounded-[24px] min-h-[500px] md:h-[500px] rounded-b-none py-8 md:py-12 px-4 md:px-20 flex flex-col md:flex-row justify-between items-center">
                <div className="z-10 max-w-full md:max-w-[50%]">
                    <h1 className="text-2xl flex flex-col gap-3 md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#01388F] to-[#001C46]">
                        <span>Start Your Journey </span> <span> with Mission ABC</span>
                    </h1>
                    <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-4 sm:space-x-4">
                        <button className="bg-black hover:bg-[#F1BC40] hover:text-black text-[#F1BC40] px-4 md:px-6 py-2 md:py-3 rounded-[12px] shadow-md transition-all duration-300">
                            Start Now
                        </button>
                        <button className="bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-[12px] shadow-md hover:bg-gray-200">
                            Download Book
                        </button>
                    </div>
                </div>
                <div className="mt-8 md:mt-0">
                    <Image
                        src={vectors} // Replace with actual image URL
                        alt="Book Cover"
                        width={1000}
                        height={430}
                        className="absolute z-0 -bottom-10 -right-24 rotate-[-14deg] opacity-85"
                    />
                    <Image
                        src={coverBook} // Replace with actual image URL
                        alt="Book Cover"
                        width={600}
                        height={600}
                        className="absolute bottom-0 right-0 z-10"


                    />
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-grad w-full rounded-[24px] md:h-[380px] rounded-t-none text-white py-12 px-6 md:px-20 flex max-md:flex-col justify-between  max-md:justify-center max-md:items-center">
                {/* Left - Brand Section */}
                <div className="flex max-md:justify-center max-md:items-center flex-col space-y-4">
                    <Image
                        src={emblemLogo}
                        alt="Mission ABC Logo"
                        width={80}
                        height={80}
                        className="w-16 md:w-20"
                    />
                    <h1 className="text-2xl flex flex-col gap-3 md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#999999] pb-2">
                        <span>Start Your Journey </span> <span > with Mission ABC</span>
                    </h1>
                    <div className="flex space-x-4 mt-2">
                        <a href="#" className="hover:opacity-80">
                            <Image src={Facebook} alt="Facebook" width={25} height={25} />
                        </a>
                        <a href="#" className="hover:opacity-80">
                            <Image src={Linkedin} alt="Linkedin" width={25} height={25} />
                        </a> <a href="#" className="hover:opacity-80">
                            <Image src={Instagram} alt="Instagram" width={25} height={25} />
                        </a>
                        <a href="#" className="hover:opacity-80">
                            <Image src={xLogo} alt="Twitter" width={25} height={25} />
                        </a>
                    </div>

                </div>

                {/* Right - Links Section */}
                <div className="flex gap-10 mt-5 md:mt-0">
                    <div className="flex flex-col items-center justify-between">
                        <h3 className="text-lg text-center font-semibold">HOME</h3>
                        <ul className="flex-1 mt-5 space-y-2 flex flex-col items-center justify-between">
                            <li><a href="#" className="hover:text-[#F1BC40] transition-all duration-200 text-gray-300">Link 1</a></li>
                            <li><a href="#" className="hover:text-[#F1BC40] transition-all duration-200 text-gray-300">Link 2</a></li>
                            <li><a href="#" className="hover:text-[#F1BC40] transition-all duration-200 text-gray-300">Link 3</a></li>
                            <li><a href="#" className="hover:text-[#F1BC40] transition-all duration-200 text-gray-300">Link 4</a></li>
                            <li><a href="#" className="hover:text-[#F1BC40] transition-all duration-200 text-gray-300">Link 5</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-between">
                        <h3 className="text-lg text-center font-semibold">HOME</h3>
                        <ul className="flex-1 mt-5 space-y-2 flex flex-col items-center justify-between">

                            <li><a href="#" className="hover:text-[#F1BC40] transition-all duration-200 text-gray-300">Link 1</a></li>
                            <li><a href="#" className="hover:text-[#F1BC40] transition-all duration-200 text-gray-300">Link 2</a></li>
                            <li><a href="#" className="hover:text-[#F1BC40] transition-all duration-200 text-gray-300">Link 3</a></li>
                            <li><a href="#" className="hover:text-[#F1BC40] transition-all duration-200 text-gray-300">Link 4</a></li>
                            <li><a href="#" className="hover:text-[#F1BC40] transition-all duration-200 text-gray-300">Link 5</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
