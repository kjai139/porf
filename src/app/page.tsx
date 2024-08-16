import ParticleBg from "@/components/backgrounds/ParticlesBg";
import AboutSection from "@/components/cards/aboutSection";
import ProjectSection from "@/components/cards/projectSection";
import HeroSection from "@/components/hero/hero";
import TopNav from "@/components/nav/topNav";

export default function Home() {
  return (
    <main>
      
      <TopNav></TopNav>
      {/* <ParticleBg></ParticleBg> */}
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ProjectSection></ProjectSection>
    </main>
  );
}
