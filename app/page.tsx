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
import HeroWithWebinars from "@/components/HeroWithWebinars";
import SharingStories from "@/components/shared/SharingStories";
export default function Home() {
  return (
    <main>
      <Hero />
      <MafiaCard />
      <HeroWithWebinars />
      <Stories />
      <TruthPage />
      <SharingStories />
      <CatPrep />

      <TeachingExperience />
      <SuccessfullCarousel />
      <Footer />

    </main>
  );
}
