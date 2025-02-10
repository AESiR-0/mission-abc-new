import Navbar from "./Navbar";
import Image from "next/image";
// import sanDeep1 from "@/public/static/hero/sandeep1.jpeg";
import sanDeep2 from "@/public/static/hero/sandeep2.png";

export default function Hero() {
  return (

    <>
      <Navbar />
      <section
        style={{
          background: "linear-gradient(179.91deg, #1D1D1D 6.93%, rgba(247, 244, 242, 0) 96.03%)",
          border: "1px solid ",
          borderImageSource: "linear-gradient(180deg, rgba(241, 188, 64, 0.24) 0%, rgba(255, 255, 255, 0) 100%);",
        }}
        className=" relative flex flex-col justify-center items-center gap-10  max-md:m-0 m-10 rounded-xl min-h-screen px-4 py-16 md:py-24 overflow-hidden">
        <div className="mx-auto max-md:m-0 max-w-6xl max-md:max-w-full">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col h-full justify-center items-center text-center">
              <h1 className="text-3xl md:text-6xl max-md:px-0 px-36 mt-20  font-bold text-white ">
                Advanced CAT Prep for the
                <span className="text-yellow md:text-5xl   italic font-playfair"> most ambitious;</span> not for everyone.
              </h1>
            </div>
            <span className="text-gray-300 text-2xl max-md:text-xl text-left  max-md:text-center  font-thin  my-8">
              Do not join us if your target is lower than IIM A, B, or C.
            </span>

            <button className="bg-yellow text-black px-4 md:px-6 py-2 md:py-3 rounded-[12px] shadow-md hover:bg-yellow/80 text-sm md:text-base">
              Start Now
            </button>
          </div>
        </div>
        <div className="flex flex-col border w-full max-w-7xl max-md:p-3 p-5 items-center justify-center">
          <div className="flex flex-col max-md:items-center max-md:text-center  w-full justify-start  gap-8 items-start">
            <div className="p-5 max-md:space-y-2 ">

              <h2 className="text-4xl font-bold mb-4">Sandeep Gupta</h2>

              <p className="text-gray-400 mb-2">CAT/GMAT 100%iler</p>
              <p className="text-gray-400 mb-4">Rejected IIM-A and Harvard</p>
              <p className="text-gray-400">CAT Trainer since 1996</p>
            </div>

            <div className=" bg-opacity-75 max-md:p-0 p-5 max-md:grid-cols-1 max-md:place-content-center max-md:place-items-center max-md:gap-5  grid grid-cols-3 ">
              <div className=" bg-[#292929] p-3">
                <p className="text-primary text-2xl font-bold">29 Years +</p>
                <p className="text-sm text-gray-400">of transforming lives</p>
              </div>
              <div className=" bg-[#292929] p-3">
                <p className="text-primary text-2xl font-bold">76,000 Hrs +</p>
                <p className="text-sm text-gray-400">Delivered onstage</p>
              </div>
              <div className=" bg-[#292929] p-3">
                <p className="text-primary w-full text-2xl font-bold">100,000 Admits +</p>
                <p className="text-sm text-gray-400">to top schools & counting</p>
              </div>
            </div>
          </div>
          {/* <Image src={sanDeep1} alt="sandeep1" /> */}
          {/* <Image src={sanDeep2} alt="sandeep2" /> */}
        </div>
      </section>
    </>

  )
} 