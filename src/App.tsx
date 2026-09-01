import React from 'react';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ProfileStrengthsSection from './components/ProfileStrengthsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import TopButton from './components/TopButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] flex flex-col font-sans selection:bg-[#008485] selection:text-white">
      {/* Scroll Progress Bar at very top */}
      <ProgressBar />

      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Area: Projects as the Main Centerpiece */}
      <main className="grow">
        <HeroSection />
        {/* Key Projects Section immediately after Hero for maximum impact */}
        <ProjectsSection />
        {/* Unified Profile, Technical Skills & Certifications Section */}
        <ProfileStrengthsSection />
        {/* Mentoring, Communication & Collaboration Experience */}
        <ExperienceSection />
      </main>

      {/* Footer & Contact */}
      <ContactSection />

      {/* Floating Scroll-to-Top Button */}
      <TopButton />
    </div>
  );
}
