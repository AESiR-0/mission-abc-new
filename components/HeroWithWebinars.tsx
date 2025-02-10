const webinars = [
  {
    id: "01",
    title: "Webinar 01",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    status: "N", // N for New
  },
  {
    id: "02",
    title: "Webinar 02",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    status: "N",
  },
  {
    id: "03",
    title: "Webinar 03",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    status: "N",
  }
];

export default function HeroWithWebinars() {
  return (
    <section className="min-h-screen bg-[rgb(20,21,19)] text-white">
      <div className="container mx-auto px-4 py-16 flex gap-8">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">
            Your First Step to<br />IIM A, B, or C
          </h1>
          <p className="text-xl mb-8">
            No fluff. No generic coaching. Just raw,<br />result-driven strategy.
          </p>
          
          <div className="space-y-6">
            {[
              "Free Webinar: Experience Sandeep's game-changing approac",
              "VARC & DILR from scratch—even if you're starting fresh",
              "Elite Quant—because good isn't enough, you need to be the best",
              "Real Exam Strategy—what actually works on D-Day"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-yellow-400 rounded-sm flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="bg-yellow-400 text-black p-4 rounded-lg inline-block">
              <p className="font-semibold">New Batch Starts This April</p>
              <p>See the difference. Register now.</p>
            </div>
          </div>
        </div>

        {/* Right Section - Horizontal Scrolling Cards */}
        <div className="flex-1 overflow-x-auto">
          <div className="flex gap-6 min-w-max">
            {webinars.map((webinar) => (
              <div
                key={webinar.id}
                className="bg-zinc-900 rounded-lg p-6 w-[400px]"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="text-yellow-400">{webinar.id}</span>
                  {webinar.status === "N" && (
                    <span className="bg-zinc-700 px-2 py-1 rounded-full text-sm">N</span>
                  )}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{webinar.title}</h3>
                <p className="text-gray-400 mb-6">{webinar.description}</p>
                <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 