import HeroCarousel from "@/components/home/HeroCarousel";
import AboutSection from "@/components/home/AboutSection";
import BlogSection from "@/components/home/BlogSection";
import HackathonsSection from "@/components/home/HackathonsSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroCarousel />
      <AboutSection />
      <BlogSection />
      <HackathonsSection />
      <ResourcesSection />
      <ContactSection />
    </div>
  );
};

export default Home;