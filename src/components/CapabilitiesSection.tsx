import React, { useState } from 'react';

export const CapabilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'legacy' | 'nxtrack'>('all');

  return (
    <section id="capabilities" className="w-full px-4 lg:px-8 py-10 lg:py-16 bg-surface-container-low">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold">
              Architectural Capabilities
            </span>
            <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mt-1">
              Beyond Standard GPS Tracking
            </h2>
          </div>
          <p className="font-body-md text-sm md:text-base text-on-surface-variant max-w-lg leading-relaxed">
            Conventional trackers stream static coordinates at long intervals. NX Track synthesizes
            raw vehicle bus events, drivetrain state vectors, and real-time operator diagnostics.
          </p>
        </div>

        {/* 4 Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: TRACK */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between group hover:shadow-md hover:border-primary/30 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">satellite_alt</span>
              </div>
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase">
                01 // GEOSPATIAL
              </span>
              <h3 className="font-headline-sm text-lg text-on-surface font-bold mt-1 mb-2">
                TRACK
              </h3>
              <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Multi-constellation GNSS with dual-frequency RTK precision down to lane-level
                lane-departure accuracy.
              </p>
            </div>
            <div className="pt-4 mt-4 bg-surface-container-low p-3 rounded-xl border border-surface-container">
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">
                Telemetry Resolution
              </span>
              <div className="font-telemetry-metric text-base font-bold text-primary mt-0.5">
                10 Hz Native Stream
              </div>
            </div>
          </div>

          {/* Card 2: MONITOR */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between group hover:shadow-md hover:border-secondary/30 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">speed</span>
              </div>
              <span className="text-[10px] font-bold text-secondary tracking-widest uppercase">
                02 // TELEMETRY
              </span>
              <h3 className="font-headline-sm text-lg text-on-surface font-bold mt-1 mb-2">
                MONITOR
              </h3>
              <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Instant drivetrain temperature, battery SoC, cell balance degradation, and
                high-frequency CAN fault codes.
              </p>
            </div>
            <div className="pt-4 mt-4 bg-surface-container-low p-3 rounded-xl border border-surface-container">
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">
                OBD-II / J1939 Decoders
              </span>
              <div className="font-telemetry-metric text-base font-bold text-secondary mt-0.5">
                3,400+ PIDs Mapped
              </div>
            </div>
          </div>

          {/* Card 3: ANALYSE */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between group hover:shadow-md hover:border-tertiary/30 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">analytics</span>
              </div>
              <span className="text-[10px] font-bold text-tertiary tracking-widest uppercase">
                03 // ANALYTICS
              </span>
              <h3 className="font-headline-sm text-lg text-on-surface font-bold mt-1 mb-2">
                ANALYSE
              </h3>
              <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Predictive driver aggression scoring, kinematic braking profiles, and machine-learned
                preventive maintenance.
              </p>
            </div>
            <div className="pt-4 mt-4 bg-surface-container-low p-3 rounded-xl border border-surface-container">
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">
                Engine Cycle Ingestion
              </span>
              <div className="font-telemetry-metric text-base font-bold text-tertiary mt-0.5">
                Real-Time FFT Filter
              </div>
            </div>
          </div>

          {/* Card 4: MANAGE */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between group hover:shadow-md hover:border-primary/30 transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[28px]">tune</span>
              </div>
              <span className="text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">
                04 // DISPATCH & CONTROL
              </span>
              <h3 className="font-headline-sm text-lg text-on-surface font-bold mt-1 mb-2">
                MANAGE
              </h3>
              <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Micro-geofencing with sub-second polygon ingress alarms, remote OTA immobility
                commands, and driver dispatch.
              </p>
            </div>
            <div className="pt-4 mt-4 bg-surface-container-low p-3 rounded-xl border border-surface-container">
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">
                Remote Fleet Over-The-Air
              </span>
              <div className="font-telemetry-metric text-base font-bold text-on-surface mt-0.5">
                Zero-Downtime FOTA
              </div>
            </div>
          </div>
        </div>

        {/* High-Contrast Side-by-Side Comparison Matrix */}
        <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-container p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 mb-6 border-b border-surface-container gap-2">
            <div>
              <span className="font-headline-sm text-lg font-bold text-on-surface">
                Technical Differential: Legacy Tracking vs NX Track
              </span>
              <p className="text-xs text-on-surface-variant mt-0.5">
                Comparison of legacy 2G/3G telemetry nodes against NX Track CAN-native edge architecture
              </p>
            </div>
            <span className="font-label-sm text-[11px] text-primary bg-primary-fixed/50 px-3 py-1 rounded-full font-bold tracking-wider uppercase border border-primary/20 w-fit">
              Architecture Audit
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Legacy Column */}
            <div className="bg-surface-container-low/60 p-5 rounded-xl border border-error/20 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-error font-bold font-headline-sm text-base">
                <span className="material-symbols-outlined text-[22px]">cancel</span>
                <span>Legacy 2G/3G GPS Trackers</span>
              </div>
              <ul className="flex flex-col gap-2.5 font-body-md text-xs md:text-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">close</span>
                  <span>Coarse 60-second ping latency misses rapid dynamic maneuvers and accidents.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">close</span>
                  <span>Blind to ECU health, drivetrain temperature, and high-voltage battery degradation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">close</span>
                  <span>Basic polyline approximation without map-matched lane elevation profile.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">close</span>
                  <span>Reactive hardware diagnostics only after costly vehicle breakdown occurrences.</span>
                </li>
              </ul>
            </div>

            {/* NX Track Column */}
            <div className="bg-primary/5 p-5 rounded-xl border border-primary/30 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary font-bold font-headline-sm text-base">
                <span className="material-symbols-outlined text-[22px]">check_circle</span>
                <span>NX Track Unified Vehicle Intelligence</span>
              </div>
              <ul className="flex flex-col gap-2.5 font-body-md text-xs md:text-sm text-on-surface">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check</span>
                  <span>Continuous 10Hz sub-second telemetry with sub-meter RTK GNSS precision.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check</span>
                  <span>Native CAN-bus decoding (J1939 / ISO 11898) with early fault prediction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check</span>
                  <span>High-definition route tracing, micro-geofence polygon triggers (&lt;0.4s).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">check</span>
                  <span>Autonomous fleet health foresight, preventing subsystem breakdown and battery aging.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
