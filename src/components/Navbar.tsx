import React, { useState } from 'react';
import { NXLogo } from './NXLogo';

interface NavbarProps {
  onOpenDemo: (source: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemo, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#overview', id: 'overview' },
    { label: 'Features', href: '#capabilities', id: 'capabilities' },
    { label: 'How It Works', href: '#visibility', id: 'visibility' },
    { label: 'Fleet Management', href: '#fleet-management', id: 'fleet-management' },
    { label: 'Technology', href: '#technology', id: 'technology' },
    { label: 'Contact', href: '#enquiry-section', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-surface-container shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 w-full px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand with Official NX Logo */}
        <a href="#overview" className="flex items-center gap-3 shrink-0 group">
          <div className="flex items-center justify-center p-1 rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors">
            <NXLogo size="md" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-headline-sm text-[17px] text-on-surface font-bold tracking-tight">
                NX Track
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] uppercase font-label-sm bg-surface-container text-primary font-bold tracking-wider">
                Enterprise
              </span>
            </div>
            <span className="font-label-sm text-[11px] text-on-surface-variant font-medium">
              NexisparkX Group
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`font-body-md text-[13px] transition-colors ${
                activeSection === link.id
                  ? 'text-primary font-bold border-b-2 border-primary pb-0.5'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-low border border-surface-container">
            <span className="w-2 h-2 rounded-full bg-tertiary-container animate-pulse"></span>
            <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider font-semibold">
              Telemetry Stream Online
            </span>
          </div>

          <button
            onClick={() => onOpenDemo('Header CTA Button')}
            className="h-9 px-4 rounded-lg bg-primary hover:bg-primary-container active:scale-95 text-on-primary font-label-md text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-[16px]">calendar_month</span>
            <span>Request a Demo</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-surface-container px-6 py-4 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-on-surface hover:text-primary transition-colors border-b border-surface-container-low"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo('Mobile Dropdown Menu');
              }}
              className="w-full h-10 rounded-lg bg-primary text-on-primary font-semibold text-xs flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">mail</span>
              <span>Open Demo Request Form</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
