import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false
import HeroSection from "./pages/HeroSection";
import ServiceCard from "./pages/ServiceCard";
import { services } from "./data/services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TeamPage from "./pages/Team";
import ProjectsPage from "./pages/Projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>
      <About/>
      <ProjectsPage/>
      <TeamPage/>
      <Contact/>
    </>
  );
}
