import React from 'react';

export const TechnologySection: React.FC = () => {
  return (
    <section id="technology" className="w-full px-4 lg:px-8 py-10 lg:py-16 bg-surface-container-low">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold">
              Value Architecture
            </span>
            <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mt-1">
              Why NX Track Powers Modern Fleets
            </h2>
          </div>
          <p className="font-body-md text-xs md:text-sm text-on-surface-variant max-w-lg leading-relaxed">
            Raw telemetry only matters when it drives bottom-line profitability, safety compliance, and uninterrupted uptime.
          </p>
        </div>

        {/* Progression Strip */}
        <div className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-surface-container overflow-x-auto">
          <div className="flex items-center justify-between gap-3 min-w-[700px]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
              <span className="font-headline-sm text-xs md:text-sm font-bold text-on-surface">
                Hardware & CAN Bus
              </span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-[18px]">arrow_forward</span>

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
              <span className="font-headline-sm text-xs md:text-sm font-bold text-on-surface">
                10Hz Telemetry Data
              </span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-[18px]">arrow_forward</span>

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
              <span className="font-headline-sm text-xs md:text-sm font-bold text-on-surface">
                Predictive Intelligence
              </span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-[18px]">arrow_forward</span>

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
              <span className="font-headline-sm text-xs md:text-sm font-bold text-on-surface">
                Automated Dispatch
              </span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-[18px]">arrow_forward</span>

            <div className="flex items-center gap-1.5 bg-tertiary-fixed px-3 py-1.5 rounded-xl border border-tertiary/20">
              <span className="material-symbols-outlined text-on-tertiary-fixed text-[16px]">trending_up</span>
              <span className="font-label-md text-xs font-bold text-on-tertiary-fixed">
                Bottom-Line Efficiency
              </span>
            </div>
          </div>
        </div>

        {/* 4 Core Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary mb-4">
                <span className="material-symbols-outlined text-[26px]">visibility</span>
              </div>
              <h3 className="font-headline-sm text-base md:text-lg text-on-surface font-bold mb-2">
                Total Visibility
              </h3>
              <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Zero telemetry dark spots. Seamless switching between cellular 4G, RTK base station corridors, and onboard offline buffer memory.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-surface-container font-label-sm text-xs text-primary font-bold">
              99.99% Signal Reliability
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary mb-4">
                <span className="material-symbols-outlined text-[26px]">shield</span>
              </div>
              <h3 className="font-headline-sm text-base md:text-lg text-on-surface font-bold mb-2">
                Decisive Control
              </h3>
              <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Execute immediate geofence lockdowns, configure maximum speed governors over the air, and isolate powertrain ignition if tampering occurs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-surface-container font-label-sm text-xs text-secondary font-bold">
              Sub-0.4s Ingress Triggers
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary mb-4">
                <span className="material-symbols-outlined text-[26px]">psychology</span>
              </div>
              <h3 className="font-headline-sm text-base md:text-lg text-on-surface font-bold mb-2">
                Drivetrain Insight
              </h3>
              <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Detect anomalous battery voltage dropoff or high brake thermal stress thousands of kilometers before hardware failure occurs.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-surface-container font-label-sm text-xs text-tertiary font-bold">
              -34% Unscheduled Repairs
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center text-on-surface mb-4">
                <span className="material-symbols-outlined text-[26px]">energy_savings_leaf</span>
              </div>
              <h3 className="font-headline-sm text-base md:text-lg text-on-surface font-bold mb-2">
                Operational Efficiency
              </h3>
              <p className="font-body-md text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Cut unnecessary idle consumption by 22% and align electric fleet charging schedules strictly to lowest off-peak tariff brackets.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-surface-container font-label-sm text-xs text-on-surface font-bold">
              +18.5% Route Efficiency
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
