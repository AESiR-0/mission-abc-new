import Image from "next/image";
export default function MafiaCard() {
  return (
    <div className="flex text-white min-h-screen w-full bg-[rgb(20,21,19)] justify-center items-center p-4 sm:p-6 lg:p-8 lg:pt-32">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row w-full max-w-[1313px] gap-0 relative">

        
        
        {/* Left Section */}
        <div className="w-full lg:w-[656.5px] h-[500px] sm:h-[550px] md:h-[600px] lg:h-[778px] lg:-mt-[80px] relative">
          {/* Vector 2520 - Hidden on mobile */}
          {/* <div className="hidden lg:block absolute w-[41px] h-[66px] left-[525px] top-0 bg-[rgba(241,188,64,1)] z-10" /> */}
          <div className="hidden lg:block absolute left-[525px] top-0 z-10">
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
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[656.5px] h-[500px] sm:h-[550px] md:h-[600px] lg:h-[778px] lg:-mt-[80px] relative">
          <div 
            className="w-full h-full lg:h-[618px] rounded-b-[12px] lg:rounded-r-[12px] lg:rounded-bl-none py-8 sm:py-10 lg:py-[80px] px-6 sm:px-8 lg:px-16 flex flex-col justify-center gap-[10px] relative bg-[rgba(29,30,28,0.6)] border-[rgba(251,206,101,1)] lg:border-r-2 lg:border-t-2 lg:border-b-2"
          >
            {/* Bottom gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-[200px] sm:h-[250px] lg:h-[300px]" style={{ 
              background: 'linear-gradient(180deg, rgba(25, 26, 25, 0) 0%, rgba(241, 188, 64, 0.24) 100%)'
            }} />
            
            <h2 className="text-[#FBCE65] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 lg:mb-8 relative z-10">01</h2>
            <div className="space-y-4 lg:space-y-6 relative z-10">
              <p className="text-[#E5E5E5] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                Leave the entire CAT exam blank—you'll still outrank 60,000+ test-takers.
              </p>
              <p className="text-[#E5E5E5] text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
                Yet, every coaching center sells the same dream: IIM A, B, C—no matter your level.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default function MafiaCard() {
//   return (
//     <div className="flex text-white min-h-screen w-full bg-[rgb(20,21,19)] justify-center items-center p-4 md:p-6 lg:p-8">
//       {/* Main Container */}
//       <div className="flex flex-col lg:flex-row w-full max-w-[1313px] gap-8 lg:gap-0 relative">

        
//         {/* Left Section */}
//         <div className="w-full lg:w-[656.5px] min-h-[500px] lg:h-[778px] lg:-mt-[80px] relative">
//           {/* Vector 2520 - Hidden on mobile */}
//           <div className="hidden lg:block absolute w-[41px] h-[66px] left-[525px] top-0 bg-[rgba(241,188,64,1)] z-10" />
          
//           {/* Rectangle 3464291 */}
//           <div className="absolute w-[10px] h-full lg:h-[618px] left-[31px] bg-[rgba(19,68,104,1)]" />
          
//           <div className="w-full h-full lg:h-[618px] rounded-t-[12px] lg:rounded-l-[12px] lg:rounded-tr-none bg-[rgba(10,44,69,1)] py-10 lg:py-[80px] flex flex-col justify-center gap-[10px] px-6 lg:px-16">
//             <h1 className="text-4xl md:text-5xl lg:text-[64px] leading-tight lg:leading-[72px] font-bold">
//               <span className="text-white">The </span>
//               <span className="text-[#FFB85C]">CAT Mafia:</span>
//               <br />
//               <span className="text-white">Built on Lies</span>
//             </h1>
//             <p className="text-[#E5E5E5] mt-4 lg:mt-8 text-lg md:text-xl lg:text-2xl leading-relaxed">
//               False Promises. Fake Hope.
//               <br />
//               Endless Looting.
//             </p>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="w-full lg:w-[656.5px] min-h-[500px] lg:h-[778px] lg:-mt-[80px] relative">
//           <div 
//             className="w-full h-full lg:h-[618px] rounded-b-[12px] lg:rounded-r-[12px] lg:rounded-bl-none py-10 lg:py-[80px] px-6 lg:px-16 flex flex-col justify-center gap-[10px] relative bg-[rgba(29,30,28,0.6)] border-[rgba(251,206,101,1)] lg:border-r-2 lg:border-t-2 lg:border-b-2"
//           >
//             {/* Bottom gradient overlay */}
//             <div className="absolute inset-x-0 bottom-0 h-[300px]" style={{ 
//               background: 'linear-gradient(180deg, rgba(25, 26, 25, 0) 0%, rgba(241, 188, 64, 0.24) 100%)'
//             }} />
            
//             <h2 className="text-[#FBCE65] text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 lg:mb-8 relative z-10">01</h2>
//             <div className="space-y-4 lg:space-y-6 relative z-10">
//               <p className="text-[#E5E5E5] text-lg md:text-xl lg:text-2xl leading-relaxed">
//                 Leave the entire CAT exam blank—you'll still outrank 60,000+ test-takers.
//               </p>
//               <p className="text-[#E5E5E5] text-lg md:text-xl lg:text-2xl leading-relaxed">
//                 Yet, every coaching center sells the same dream: IIM A, B, C—no matter your level.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }