import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PhilosophySection from "./components/PhilosophySection";
import ManifestoSection from "./components/ManifestoSection";
import PromiseContract from "./components/PromiseContract";
import CrisisEngine from "./components/CrisisEngine";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#090A0F] text-[#F8FAFC] font-sans">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <PhilosophySection />
        <ManifestoSection />
        <PromiseContract />
        <CrisisEngine />
      </main>
      <Footer />
    </div>
  );
}
