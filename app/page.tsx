"use client";

import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import CertificationsSection from "./components/CertificationsSection";
import TestimoniesSection from "./components/TestimoniesSection";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      <HeroSection />
      <ProjectsSection />
      <CertificationsSection />
      <SkillsSection />
      <TestimoniesSection />
      <ContactSection />
    </main>
  );
}
