import { Button } from "@/components/ui/button";
import Image from "next/image";

const features = [
  {
    title: "VARC & DILR",
    description: "Built from scratch for mastery.",
    icon: '/assests/images/prep2.png'
  },
  {
    title: "Advanced Quant",
    description: "The edge between good and exceptional.",
    icon: '/assests/images/prep3.png'
  },
  {
    title: "Mission ABC Mocks",
    description: "The closest thing to D-Day.",
    icon: '/assests/images/prep1.png'
  }
];

export default function CatPrep() {
  return (
    <section className="min-h-screen bg-[rgb(20,21,19)] text-white">
      <div className="min-h-screen flex flex-col justify-between py-16 md:py-24">
        <div className="container mx-auto px-4 xl:px-0 max-w-[1440px] w-full">
          {/* Header Box - 1168x181 */}
          <div className="pt-[60px] lg:px-[140px]">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-16">
              {/* Left Section - 701x181 */}
              <div className="w-full lg:w-[701px] space-y-6">
                <p 
                  className="font-['Qanelas_Soft'] font-medium text-[24px] leading-[29px] tracking-[0%] text-[#F1BC40]"
                  style={{ fontFamily: 'Qanelas Soft' }}
                >
                  WHAT YOU GET
                </p>
                <h1 
                  className="font-['Qanelas_Soft'] font-semibold text-[64px] leading-[70.4px] tracking-[-1px]"
                  style={{ 
                    fontFamily: 'Qanelas Soft',
                    background: 'linear-gradient(97.33deg, #FFFFFF 3.33%, #989898 96.01%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  The Only <span className="text-[#FFB85C]">CAT Prep</span>
                  <br />You Need
                </h1>
              </div>

              {/* Right Section - 467x148 */}
              <div className="w-full lg:w-[467px] flex flex-col gap-8">
                <p 
                  className="text-[20px] sm:text-[24px] lg:text-[32px] leading-[38.08px] tracking-[-0.02em] text-[#F2F2F2]"
                  style={{ 
                    fontFamily: 'Qanelas Soft',
                    fontWeight: 400
                  }}
                >
                  IIM A, B, and C aren't for everyone.
                  <br className="hidden sm:block" />Neither is Mission ABC.
                </p>
                <Button 
                  className="relative w-full md:w-auto text-black font-semibold py-6 px-8 rounded-xl text-lg transition-all duration-300"
                  style={{
                    width: 'fit-content',
                    background: 'rgba(241, 195, 86, 1)',
                    border: '2px solid transparent',
                    borderImage: 'linear-gradient(116.22deg, #1D1E1C -4.25%, #1D1E1C 117.1%) 1',
                    boxShadow: `
                      0px 2px 1px 0px rgba(255, 255, 255, 0.04) inset,
                      0px 2px 1px 0px rgba(255, 255, 255, 0.04) inset,
                      0px 2px 1px 0px rgba(255, 255, 255, 0.04) inset,
                      0px -2px 1px 0px rgba(255, 255, 255, 0.04) inset,
                      0px -2px 1px 0px rgba(255, 255, 255, 0.04) inset,
                      0px -2px 1px 0px rgba(255, 255, 255, 0.04) inset
                    `
                  }}
                >
                  Register Now
                </Button>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24 lg:mt-32 lg:px-[140px]">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="relative rounded-2xl overflow-hidden group h-[480px]"
                style={{
                  background: 'rgba(51, 45, 27, 1)',
                  border: '0.88px solid transparent',
                  borderImage: 'linear-gradient(180deg, rgba(152, 152, 152, 0.02) 0%, rgba(255, 255, 255, 0.28) 52%, rgba(152, 152, 152, 0.02) 100%) 1'
                }}
              >
                {/* Content */}
                <div className="flex flex-col h-full">
                  <div className="p-12 space-y-8">
                    <h3 
                      className="font-['Qanelas_Soft'] text-[36px] leading-[46px] tracking-[-2.12px]"
                      style={{ 
                        fontFamily: 'Qanelas Soft',
                        fontWeight: 600,
                        background: 'linear-gradient(78.05deg, #FFFFFF 68.84%, rgba(178, 178, 178, 0.7) 124.48%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className="text-xl"
                      style={{
                        color: 'rgba(213, 213, 213, 1)'
                      }}
                    >
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Image container */}
                  <div className="mt-auto">
                    <div className="flex justify-center">
                      <Image 
                        src={feature.icon} 
                        alt={feature.title}
                        width={300} 
                        height={240}
                        className="w-auto h-[240px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}