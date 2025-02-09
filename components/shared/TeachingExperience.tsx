import Image from 'next/image'

const TeachingExperience = () => {
  return (
    <section className="relative  text-white py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2">
          <p className="text-[#FFD700] uppercase tracking-wider text-sm mb-4">
            GET TO KNOW THE OTHER SIDE OF EDU
          </p>
          <h2 className="text-4xl font-bold mb-6">
            Experience Sandeep&apos;s Teaching
          </h2>
          <div className="space-y-4">
            <p>
              Your Background doesn&apos;t matter.<br />
              Your Hunger does.
            </p>
            <p>
              IIMs don&apos;t care where you come from—<br />
              engineers, lawyers, CA, B.Com, B.A., Liberal Arts—everyone has a shot!
            </p>
            <p>
              When you sit for the CAT, the computer doesn&apos;t know (or care) if you&apos;re an IITian or not.
            </p>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="md:w-1/2 relative">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/path-to-your-teaching-image.jpg" // Replace with your actual image path
              alt="Teaching moment"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
            <button className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
              <span className="sr-only">Previous</span>
              ←
            </button>
            <button className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
              <span className="sr-only">Next</span>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeachingExperience 