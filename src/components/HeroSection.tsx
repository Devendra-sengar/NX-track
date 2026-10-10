import React from 'react';
import { NXLogo } from './NXLogo';

interface HeroSectionProps {
  onOpenDemo: (source: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenDemo }) => {
  return (
    <section id="overview" className="w-full px-4 lg:px-8 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Narrative */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed/50 text-on-primary-fixed-variant w-fit border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-sm text-[11px] uppercase tracking-widest font-bold">
              ASIL-D Level 4 Telematics Architecture
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
              <div className="bg-white p-1 rounded-lg shadow-2xs border border-surface-container">
                <NXLogo size="xs" />
              </div>
              <span className="font-label-md text-xs text-on-surface-variant uppercase tracking-wider font-bold">
                NX Track • NexisparkX Group
              </span>
            </div>
            <h1 className="font-display-hero text-3xl md:text-5xl text-on-surface font-bold tracking-tight leading-[1.08] mt-1">
              Connected Vehicles. <br />
              <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Complete Control.
              </span>
            </h1>
          </div>

          <p className="font-body-lg text-sm md:text-base text-on-surface-variant max-w-xl leading-relaxed">
            NX Track converts high-frequency CAN-bus, GNSS-RTK, and power metrics into deterministic
            fleet intelligence for real-time dispatch and lifecycle monitoring.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onOpenDemo('Hero Primary CTA')}
              className="h-11 px-6 rounded-lg bg-primary hover:bg-primary-container active:scale-95 text-on-primary font-label-md text-xs font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              <span>Request a Demo</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <a
              href="#capabilities"
              className="h-11 px-5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-xs font-semibold flex items-center gap-2 transition-colors border border-surface-container"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">hub</span>
              <span>Explore Architecture</span>
            </a>
          </div>

          {/* Live Quick Matrix */}
          <div className="grid grid-cols-3 gap-3 pt-3">
            <div className="bg-surface-container-lowest p-3 rounded-xl shadow-sm border border-surface-container">
              <div className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">
                Stream Latency
              </div>
              <div className="font-telemetry-metric text-lg font-bold text-on-surface mt-0.5">
                &lt; 140<span className="text-xs font-normal text-on-surface-variant ml-1">ms</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-3 rounded-xl shadow-sm border border-surface-container">
              <div className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">
                GNSS Precision
              </div>
              <div className="font-telemetry-metric text-lg font-bold text-tertiary mt-0.5">
                ±12<span className="text-xs font-normal text-on-surface-variant ml-1">cm (RTK)</span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-3 rounded-xl shadow-sm border border-surface-container">
              <div className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">
                Active Units
              </div>
              <div className="font-telemetry-metric text-lg font-bold text-secondary mt-0.5">
                14,892<span className="text-xs font-normal text-on-surface-variant ml-1">online</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Automotive Telematics HUD */}
        <div className="lg:col-span-7 relative">
          <div className="relative w-full rounded-2xl overflow-hidden bg-surface-container-highest shadow-xl border border-surface-container">
            <img
              alt="Commercial Electric Fleet parked at high voltage zero emission charging hub with active diagnostic telemetry stream"
              className="w-full h-[320px] md:h-[460px] object-cover object-center"
              src="https://lh3.googleusercontent.com/aida/AEtjO1W0iCK4A6L8TxSMLOiYILpbmWegOqd1rgjfJjkBMTO4Onbx5Z-_TI54ICdKoLU-fa_v1pHWH7C7j0FcyMJyaWzG4svt0TcMHNal4Hpp8rSwYeMvntBJMBfF2hPM10W6iflxZM2GhCMKEFLpowprAPdtKjUKk7oNsIHCtRl4vHivxdhfjE-eU180C0xdTP6Xcp2VaV4GahY_-UAG_Q_jYytEX6ipqhopYUW_1pohoOtAFbPSWwQ_9sPdu5nH"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-inverse-surface/30 to-transparent"></div>

            {/* Pinned HUD Micro-Card Top Right */}
            <div className="absolute top-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-white/20 flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tertiary-container animate-ping"></span>
                <span className="font-label-sm text-[11px] text-on-surface font-bold tracking-wider">
                  LIVE TELEMETRY STREAM
                </span>
              </div>
              <span className="font-label-sm text-[10px] text-primary font-mono font-semibold bg-surface-container px-2 py-0.5 rounded">
                NODE #LON-DEPOT-09
              </span>
            </div>

            {/* Pinned Main Telemetry Pod Bottom */}
            <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 bg-surface-container-lowest/95 backdrop-blur-xl p-4 rounded-xl shadow-2xl border border-surface-container">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-2 mb-2 border-b border-surface-container-low">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-xs font-bold">
                    TRK-EV-4088
                  </span>
                  <span className="font-headline-sm text-sm md:text-base font-bold text-on-surface">
                    VoltRoute Transporter E-65
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-[11px] text-on-surface-variant">
                    Hub Depot Alpha
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-tertiary font-label-md text-xs font-bold">
                  <span className="material-symbols-outlined text-[16px]">verified_user</span>
                  <span>ASIL-D Operational</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                <div className="bg-surface-container-low p-2 rounded-lg">
                  <div className="font-label-sm text-[9px] text-on-surface-variant uppercase font-medium">
                    Current Speed
                  </div>
                  <div className="font-telemetry-metric text-sm md:text-base font-bold text-on-surface">
                    78.4 <span className="text-[10px] font-normal text-on-surface-variant">km/h</span>
                  </div>
                </div>
                <div className="bg-surface-container-low p-2 rounded-lg">
                  <div className="font-label-sm text-[9px] text-on-surface-variant uppercase font-medium">
                    Battery SoC
                  </div>
                  <div className="font-telemetry-metric text-sm md:text-base font-bold text-tertiary">
                    94.2 <span className="text-[10px] font-normal text-on-surface-variant">%</span>
                  </div>
                </div>
                <div className="bg-surface-container-low p-2 rounded-lg">
                  <div className="font-label-sm text-[9px] text-on-surface-variant uppercase font-medium">
                    GNSS Fix
                  </div>
                  <div className="font-telemetry-metric text-sm md:text-base font-bold text-primary">
                    99.98 <span className="text-[10px] font-normal text-on-surface-variant">% RTK</span>
                  </div>
                </div>
                <div className="bg-surface-container-low p-2 rounded-lg">
                  <div className="font-label-sm text-[9px] text-on-surface-variant uppercase font-medium">
                    Position Vector
                  </div>
                  <div className="font-label-md text-xs text-on-surface truncate font-mono font-medium">
                    51.5074° N, 0.1278° W
                  </div>
                </div>
                <div className="bg-surface-container-low p-2 rounded-lg col-span-2 md:col-span-1">
                  <div className="font-label-sm text-[9px] text-on-surface-variant uppercase font-medium">
                    CAN Bus Link
                  </div>
                  <div className="font-telemetry-metric text-sm md:text-base font-bold text-secondary">
                    500 <span className="text-[10px] font-normal text-on-surface-variant">kbps J1939</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
