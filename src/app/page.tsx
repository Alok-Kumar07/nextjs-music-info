import AnimatedTooltips from "@/components/AnimatedTooltips";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MovingCards from "@/components/MovingCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MovingCards/>
      <UpcomingWebinar/>
      <AnimatedTooltips/>
      <Footer/>
    </main>
  );
}
