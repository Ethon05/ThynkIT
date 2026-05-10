import Hero from "../sections/Hero";
import ClientMarquee from "../sections/ClientMarquee";
import ServicesSection from "../sections/ServicesSection";
import Portfolio from "../sections/Portfolio";
import Initiatives from "../sections/Initiatives";
import Process from "../sections/Process";
import MeetTheMinds from "../sections/MeetTheMinds";
import Metrics from "../sections/Metrics";
import TechStack from "../sections/TechStack";
import FinalCTA from "../sections/FinalCTA";

export default function Home() {
  return (
    <div data-testid="home-page">
      <Hero />
      <ClientMarquee />
      <ServicesSection />
      <Portfolio />
      <Initiatives />
      <Process />
      <MeetTheMinds />
      <Metrics />
      <TechStack />
      <FinalCTA />
    </div>
  );
}
