// pages/index.tsx

import CatPrep from "@/components/shared/CatPrep";
import Footer from "@/components/shared/Footer";
import MafiaCard from "@/components/shared/MafiaCard";
import Stories from "@/components/shared/Stories";
import SuccessfullCarousel from "@/components/shared/SuccesfullCarousel";

import TruthPage from "@/components/shared/TruthPage";
import Hero from '@/components/Hero'
import InstructorStats from '@/components/InstructorStats'
import TeachingExperience from "@/components/shared/Experience";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col">
      <Hero />
      <InstructorStats />
      <div className=" w-full bg-[rgb(20,21,19)] text-white  min-h-screen">


        <MafiaCard />
        <TruthPage />

        <Stories />
        <CatPrep />
        <TeachingExperience />
        <SuccessfullCarousel />
        <Footer />
      </div>

    </main>
  );
}
