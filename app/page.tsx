import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import ExperienceSection from "@/sections/Experience";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TestimonialsSection } from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      {/* wrapper */}
      <Header />
      <section id="home" className="scroll-mt-32">
        <HeroSection />
      </section>
      <section id="about" className="scroll-mt-32">
        <AboutSection />
      </section>
      <section id="experience" className="scroll-mt-32">
        <ExperienceSection />
      </section>
      <section id="projects" className="scroll-mt-32">
        <ProjectsSection />
      </section>
      <section id="testimonials" className="scroll-mt-32">
        <TestimonialsSection />
      </section>
      <section id="contact" className="scroll-mt-32">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
