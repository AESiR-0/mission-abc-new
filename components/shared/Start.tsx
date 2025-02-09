import Image from "next/image";
import NavBar from "./NavBar";
import { InstructorStats } from "../InstructorStats";
const Start = () => {
  return (
    <div className="bg-[rgb(20,21,19)] text-white min-h-screen">
      <div className="mx-4 sm:mx-8 lg:mx-12 my-6 sm:my-12">
        <div className="px-12 sm:px-4 lg:px-6 border-t border-l border-r rounded-lg  border-[rgba(241,188,64,0.24)] m-12 h-screen bg-gradient-to-b from-[rgba(20,21,19)] via-[rgb(70,67,61)] to-[rgba(20,21,20)] ">
          {/* NavBar Container */}
          <div className="px-4 sm:px-6 lg:px-8 pt-6">
            <NavBar />
          </div>

          {/* Hero Section */}
          <section className="relative flex flex-col items-center justify-center w-[1201px] h-[160px] mx-auto mt-[215px] px-4 sm:px-6 lg:px-[66px]">
            <h1 className="text-center" style={{
              fontFamily: 'Qanelas Soft',
              fontWeight: 600,
              fontSize: '80px',
              lineHeight: '80px',
              letterSpacing: '-0.01em',
            }}>
              Advanced CAT Prep for the{' '}
              <span style={{
                fontFamily: 'Afacad',
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}> </span>
              <span style={{
                fontFamily: 'Playfair Display',
                fontWeight: 700,
                fontStyle: 'italic',
                letterSpacing: '-0.05em',
              }} className="text-yellow-500">most ambitious;</span>
              <span style={{
                fontFamily: 'Afacad',
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}> not for everyone.</span>
            </h1>
            <p className="w-[787px] h-[38px] mt-8" style={{
              fontFamily: 'Qanelas Soft',
              fontWeight: 400,
              fontSize: '32px',
              lineHeight: '38.08px',
              letterSpacing: '0',
              textAlign: 'center',
              color: 'rgba(242, 242, 242, 1)',
            }}>
              Do not join us if your target is lower than IIM A, B, or C.
            </p>
            <div className="hidden md:block">
              <button className="px-6 py-3 bg-[rgba(241,188,64,1)] text-[rgb(20,21,19)] font-semibold rounded-[12px] hover:bg-[#ffa533] transition-colors gap-4 mt-8">
                Start Now
              </button>
            </div>
          </section>

          <article className="flex gap-10 items-start p-10 mx-auto my-0 mt-36 rounded-2xl bg-black bg-opacity-30 max-w-full max-md:flex-col max-md:gap-6 max-md:p-6">
            <div className="flex-1">
              <h2 className="mb-2 text-4xl font-semibold text-white max-sm:text-3xl">
                Sandeep Gupta
              </h2>
              <ul className="list-none p-0">
                <li className="mb-1 text-base text-white opacity-90">
                  CAT/GMAT 100%iler
                </li>
                <li className="mb-1 text-base text-white opacity-90">
                  Rejected IIM-A and Harvard
                </li>
                <li className="mb-1 text-base text-white opacity-90">
                  CAT Trainer since 1996
                </li>
              </ul>
              <InstructorStats />
            </div>
            <img
              src="https://placehold.co/300x400/3A3A3A/3A3A3A"
              className="object-cover rounded-lg bg-neutral-700 h-[400px] w-[300px] max-md:w-full max-md:h-[300px]"
              alt="Instructor Sandeep Gupta"
              loading="lazy"
            />
          </article>
        </div>


      </div>
    </div>

  );
};

export default Start;