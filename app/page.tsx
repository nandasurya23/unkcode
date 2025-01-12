import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import CSS Font Awesome
config.autoAddCss = false
import HeroSection from "./components/HeroSection";
import ServiceCard from "./components/ServiceCard";
import { services } from "./data/services";
import About from "./components/About";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
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
      <Contact/>
    </main>
  );
}
