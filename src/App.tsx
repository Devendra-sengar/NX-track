import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { VisibilityModules } from './components/VisibilityModules';
import { TripAuditSection } from './components/TripAuditSection';
import { DiagnosticsHUD } from './components/DiagnosticsHUD';
import { DigitalTwinSection } from './components/DigitalTwinSection';
import { FleetRosterSection } from './components/FleetRosterSection';
import { TechnologySection } from './components/TechnologySection';
import { EnquirySection } from './components/EnquirySection';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [modalSource, setModalSource] = useState('CTA Button');
  const [activeSection, setActiveSection] = useState('overview');

  const handleOpenDemo = (source: string) => {
    setModalSource(source);
    setIsDemoModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['overview', 'capabilities', 'visibility', 'fleet-management', 'technology', 'enquiry-section'];
      const scrollY = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background font-body-md text-on-surface antialiased flex flex-col selection:bg-primary-fixed selection:text-on-primary-fixed-variant">
      {/* Top Header */}
      <Navbar onOpenDemo={handleOpenDemo} activeSection={activeSection} />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-16">
        <HeroSection onOpenDemo={handleOpenDemo} />
        <CapabilitiesSection />
        <VisibilityModules />
        <TripAuditSection />
        <DiagnosticsHUD />
        <DigitalTwinSection />
        <FleetRosterSection onOpenDemo={handleOpenDemo} />
        <TechnologySection />
        <EnquirySection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed Bottom Navigation Bar */}
      <MobileBottomNav onOpenDemo={handleOpenDemo} activeSection={activeSection} />

      {/* Interactive NodeMailer Demo Request Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialSource={modalSource}
      />
    </div>
  );
}
