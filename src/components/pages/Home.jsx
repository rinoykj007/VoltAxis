import { useEffect } from "react";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import AboutSection from "../sections/AboutSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import ContactSection from "../sections/ContactSection";

const Home = () => {
  useEffect(() => {
    document.title = "VOLT AXIS | Professional Handyman Services";
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gray-50"
      >
        <HeroSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
