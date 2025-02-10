import Navbar from "./Navbar";
import Image from "next/image";
// import sanDeep1 from "@/public/static/hero/sandeep1.jpeg";
import partition from "@/public/static/hero/partition.png";
import sanDeep2 from "@/public/static/hero/sandeep cut out.png";

export default function Hero() {
  return (
    <>
      <Navbar />
      <section className="hero-grad relative flex flex-col justify-center items-center gap-16 sm:gap-24 md:gap-32 mx-4 sm:m-10 rounded-xl min-h-screen px-4 sm:px-6 md:px-8 sm:py-16 md:py-32 py-24">
        {/* Hero Content */}
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto">
              Advanced CAT Prep for the{" "}
              <span className="text-yellow md:text-5xl italic font-playfair block sm:inline mt-2 sm:mt-0">
                most ambitious;
              </span>{" "}
              not for everyone.
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl md:text-2xl font-thin mt-6 sm:mt-8 mb-8">
              Do not join us if your target is lower than IIM A, B, or C.
            </p>
            <button className="font-manrope  btn bg-yellow btn text-black px-6 py-3 rounded-xl shadow-md hover:bg-yellow/80 text-sm md:text-base transition-colors">
              Start Now
            </button>
          </div>
        </div>

        {/* Sandeep Section */}
        <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="sandeep-grad relative w-full rounded-2xl py-8 sm:py-12 md:py-16 px-6 sm:px-8 md:px-12">
            {/* Text Content */}
            <div className="relative z-10 space-y-6 sm:space-y-8 max-w-xl">
              <div className="space-y-2 max-md:text-center">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-afacad font-bold">
                  Sandeep Gupta
                </h2>
                <div className="space-y-1 font-poppins text-gray-400 text-sm sm:text-base">
                  <p>CAT/GMAT 100%iler</p>
                  <p>Rejected IIM-A and Harvard</p>
                  <p>CAT Trainer since 1996</p>
                </div>
              </div>

              {/* Stats Card */}
              <div className="card w-[850px] max-md:w-full z-0   flex flex-col sm:flex-row items-center gap-4 sm:gap-0 p-4 sm:p-5">
                <StatItem
                  number="29 Years +"
                  text="of transforming lives"
                />
                <Image src={partition} className="hidden sm:block h-full" alt="partition" />
                <StatItem
                  number="76,000 Hrs +"
                  text="Delivered onstage"
                />
                <Image src={partition} className="hidden sm:block h-full" alt="partition" />
                <StatItem
                  number="100,000 Admits +"
                  text="to top schools & counting"
                />
              </div>
            </div>

            {/* Sandeep Image */}
            <Image 
              className="absolute z-10 max-md:hidden flip bottom-0 right-0 w-[280px] sm:w-[380px] md:w-[512px] h-auto object-contain"
              src={sanDeep2}
              alt="Sandeep Gupta"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}

// Helper component for stats
function StatItem({ number, text }: { number: string; text: string }) {
  return (
    <div className="text-center p-3">
      <p className="text-xl text-yellow sm:text-2xl font-bold">{number}</p>
      <p className="text-sm ">{text}</p>
    </div>
  );
} 