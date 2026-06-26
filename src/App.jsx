import React from "react";
import { HeroSection } from "./components/HeroSection.jsx";
import { ServicesSection } from "./components/ServicesSection.jsx";
import { ProjectsSection } from "./components/ProjectsSection.jsx";
import { AboutSection } from "./components/AboutSection.jsx";
import { ScrollTransition } from "./components/ScrollTransition.jsx";

export default function App() {
  return (
    <main className="site-shell">
      <HeroSection />
      <ScrollTransition />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
    </main>
  );
}
