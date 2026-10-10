import React from 'react';

interface MobileBottomNavProps {
  onOpenDemo: (source: string) => void;
  activeSection: string;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenDemo, activeSection }) => {
  const items = [
    { label: 'Overview', icon: 'dashboard', href: '#overview', id: 'overview' },
    { label: 'Features', icon: 'tune', href: '#capabilities', id: 'capabilities' },
    { label: 'Workflow', icon: 'alt_route', href: '#visibility', id: 'visibility' },
    { label: 'Fleet', icon: 'local_shipping', href: '#fleet-management', id: 'fleet-management' },
    { label: 'Tech', icon: 'memory', href: '#technology', id: 'technology' },
  ];

  return (
    <nav className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-xl border-t border-surface-container shadow-[0_-2px_12px_rgba(0,0,0,0.06)] px-2 py-1">
      <div className="flex justify-around items-center h-14 max-w-lg mx-auto">
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={`flex flex-col items-center justify-center min-w-[50px] py-1 transition-colors ${
              activeSection === item.id ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
            <span className="font-label-sm text-[10px] mt-0.5">{item.label}</span>
          </a>
        ))}
        <button
          onClick={() => onOpenDemo('Mobile Bottom Floating CTA')}
          className="flex flex-col items-center justify-center min-w-[50px] py-1 text-primary font-bold active:scale-95 transition-transform"
        >
          <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[15px]">send</span>
          </div>
          <span className="font-label-sm text-[10px] mt-0.5">Demo</span>
        </button>
      </div>
    </nav>
  );
};
