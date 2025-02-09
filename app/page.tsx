// pages/index.tsx

import CatPrep from "@/components/shared/CatPrep";
import Footer from "@/components/shared/Footer";
import MafiaCard from "@/components/shared/MafiaCard";
import Start from "@/components/shared/Start";
import Stories from "@/components/shared/Stories";
import SuccessfullCarousel from "@/components/shared/SuccesfullCarousel";

import TruthPage from "@/components/shared/TruthPage";
import TeachingExperience from '@/components/shared/TeachingExperience'


export default function Home() {
  return (
    <div className=" w-full bg-[rgb(20,21,19)] text-white  min-h-screen">
      {/* <Start />  */}

      <MafiaCard />
      <TruthPage />

      <Stories />
      <CatPrep />
      <SuccessfullCarousel />
      {/* <TeachingExperience /> */}
      <Footer />
    </div>
  );
}
