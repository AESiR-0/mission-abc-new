import Image from 'next/image';

const truthCards = [
  {
    icon: '/assests/icons/Star.svg',
    content: 'I turn away students who lack the hunger for IIM A, B, or C.'
  },
  {
    icon: '/assests/icons/Paisa.svg',
    content: "I won't take your money if you're not serious."
  },
  {
    icon: '/assests/icons/Mic.svg',
    content: 'I believe in brutal honesty—not sugar-coated dreams.'
  }
];

const lies = [
  {
    id: '01',
    text: "If you're not a math genius, don't even try."
  },
  {
    id: '02',
    text: 'Only IIT/NIT engineers crack IIM A, B, or C'
  },
  {
    id: '03',
    text: 'You need years to prepare.'
  },
  {
    id: '04',
    text: 'You must watch endless video lessons.'
  }
];

const TruthPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mt-[60px] px-4 md:px-0">
        <h1 className="text-center text-[32px] md:text-[48px] font-bold font-[Qanelas Soft]">
          The lies of the CAT Mafia
        </h1>
        <p className="text-center text-[20px] md:text-[30px] font-[Qanelas Soft]">
          The coaching industry profits off your fear. They'll tell you
        </p>
      </div>    

      <section className="flex justify-center items-center min-h-[300px] md:h-[569px] mt-[40px] md:mt-[80px] mb-[50px] md:mb-[100px] relative px-4 md:px-0">
        <div className="relative w-full md:w-[928px] h-[300px] md:h-[569px]">
          <Image 
            src="/assests/images/girl.png" 
            alt="Reference image" 
            fill
            className="object-cover rounded-[12px]"
          />
          {/* Desktop Lies */}
          <div className="hidden md:block">
            {lies.map((lie, index) => (
              <div
                key={`desktop-${lie.id}`}
                className="absolute bg-[rgba(40,40,40,0.55)] border border-[rgba(62,62,62,1)] backdrop-blur-[52.4px] p-[16px_24px] rounded-[8px] text-white font-[Qanelas Soft]"
                style={getPositionStyle(index)}
              >
                <div className="text-[#FFB85C] text-[14px] mb-1">
                  Lies {lie.id}
                </div>
                <div className="text-[16px] max-w-[220px]">
                  {lie.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Lies */}
      <div className="md:hidden px-4 mb-8">
        <div className="grid gap-4">
          {lies.map((lie) => (
            <div
              key={`mobile-${lie.id}`}
              className="bg-[rgba(40,40,40,0.55)] border border-[rgba(62,62,62,1)] backdrop-blur-[52.4px] p-[16px_24px] rounded-[8px] text-white font-[Qanelas Soft]"
            >
              <div className="text-[#FFB85C] text-[14px] mb-1">
                Lies {lie.id}
              </div>
              <div className="text-[16px]">
                {lie.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 md:px-[120px] mb-8 md:mb-0">
        <h2 className="text-center font-[Qanelas Soft] font-medium text-[20px] md:text-[24px] leading-[28.97px] text-[rgba(241,188,64,1)] mb-8">
          HERE'S THE TRUTH
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-8">
          {truthCards.map((card, index) => (
            <div
              key={index}
              className="w-full md:w-[370.67px] rounded-[8px] p-[24px_16px] bg-[rgba(241,188,64,0.13)] flex flex-col gap-4 items-start"
            >
              <div className="relative w-6 h-6">
                <Image 
                  src={card.icon}
                  alt="Icon"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="font-[Qanelas Soft] text-[16px] md:text-[18px] text-white m-0">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );      
};

const getPositionStyle = (index: number) => {
  const positions = [
    { top: '70%', right: '-10%' },  
    { top: '12%', right: '-10%' },  
    { top: '10%', left: '-10%' },   
    { top: '70%', left: '-10%' }    
  ];
  
  return positions[index];
};

export default TruthPage;