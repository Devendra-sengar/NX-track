import React from 'react';
import { NXLogo } from './NXLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container shadow-[0_-1px_6px_rgba(0,0,0,0.03)] pb-20 md:pb-8">
      <div className="w-full px-4 lg:px-8 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-xl shadow-2xs border border-surface-container">
                <NXLogo size="md" />
              </div>
              <span className="font-headline-sm text-base text-on-surface font-bold">
                NX Track
              </span>
              <span className="font-body-sm text-xs text-on-surface-variant">
                — Precision Vehicle Intelligence
              </span>
            </div>
            <p className="font-body-sm text-xs text-on-surface-variant">
              An advanced autonomous & logistics telemetry architecture by{' '}
              <strong className="text-on-surface">NexisparkX Group</strong>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="mailto:contact@nexusbox.com"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-low border border-surface-container text-on-surface-variant hover:text-primary transition-colors text-xs font-medium"
            >
              <span className="material-symbols-outlined text-[16px] text-primary">alternate_email</span>
              <span className="font-label-md text-xs font-semibold text-on-surface">contact@nexusbox.com</span>
            </a>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-low border border-surface-container text-on-surface-variant text-xs font-medium">
              <span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
              <span className="font-label-md text-xs font-semibold text-on-surface">ISO 26262 & ASIL-D</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-surface-container flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <div>
            © 2025 NexisparkX Group. All rights reserved. Platform dispatch & situational telemetry.
          </div>
          <div className="flex items-center gap-6">
            <a href="#overview" className="hover:text-on-surface transition-colors">
              Security Operations
            </a>
            <a href="#overview" className="hover:text-on-surface transition-colors">
              Privacy Policy
            </a>
            <a href="#overview" className="hover:text-on-surface transition-colors">
              API Dispatch SLA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
