import React, { useState } from 'react';

export const TripAuditSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleExport = () => {
    const data = {
      tripId: 'TRIP-1245',
      asset: 'TRK-EV-4088',
      date: '2025-10-09',
      waypoints: [
        { code: 'W-1', name: 'Logistics Depot Terminal', time: '10:32:04', soc: '98%' },
        { code: 'W-2', name: 'North Distribution Hub', time: '11:05:18', dwell: '4m 12s' },
        { code: 'W-3', name: 'Central Commercial Bay', time: '11:42:50', dwell: '2m 05s' },
        { code: 'W-4', name: 'Return Waypoint Terminal', time: '12:08:14', soc: '82%' },
      ],
      totalDistanceKm: 47.8,
      duration: '1h 36m',
      avgSpeedKmh: 42.1,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `NX_Track_Audit_Trip_1245.json`;
    a.click();
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section className="w-full px-4 lg:px-8 py-10 lg:py-16 bg-surface-container-low">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold">
              Deterministic Auditing
            </span>
            <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mt-1">
              Every Journey, Clearly Recorded
            </h2>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-sm border border-surface-container">
            <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
            <span className="font-label-md text-xs font-semibold text-on-surface">
              Immutable CAN + GPS Audit Trail
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Live Desktop Route Map UI Mockup Reference */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl overflow-hidden shadow-md border border-surface-container flex flex-col">
            <div className="p-3 bg-surface-container flex items-center justify-between border-b border-surface-container-high">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-error inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-secondary-container inline-block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container inline-block"></span>
                <span className="font-label-sm text-xs text-on-surface-variant font-mono ml-2 font-medium">
                  GIS_VECTOR_CANVAS // ROUTE_INSPECTION_V4
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label-sm text-[11px] bg-primary text-on-primary px-2.5 py-0.5 rounded-full font-bold">
                  FT-4088 EN ROUTE
                </span>
              </div>
            </div>

            <div className="relative w-full h-[320px] md:h-[440px] bg-inverse-surface overflow-hidden">
              <img
                alt="Desktop fleet route intelligence dashboard showing vehicle FT-4088 active route path in London with speed, battery, waypoint inspection cards and map layers"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AEtjO1VB96wwttSpIu6rCcIg2uVyjHFGS8JxQ92ek19ETCyHPsm6a4nmBsxXmqcCRRrRxsQ7Lgbanha-hhC9ftcRiaePghtBK7jn0Up9B_aW5JLOJbFSWU8TTef4Z4VyfsNUt11OyDE40skWeeMOPbYl6yy6ddvbPVJaKdy7x9c5Yv_BuaULKuT-I_1IcQQ31dE0VqsslU6HIuLOVnuX60PnGLLjJkS_gQmvtyRfmzuvjkw70oGE5zxRjXVFBK0u"
              />
              {/* Overlay Micro-HUD */}
              <div className="absolute bottom-4 left-4 right-4 md:right-auto bg-surface-container-lowest/90 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-white/20 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">route</span>
                </div>
                <div>
                  <div className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">
                    Selected Corridors
                  </div>
                  <div className="font-headline-sm text-xs md:text-sm text-on-surface font-bold">
                    City Transit Ring // Waypoint 1 to Waypoint 4
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trip Audit Panel */}
          <div className="lg:col-span-4 bg-surface-container-lowest rounded-2xl shadow-md border border-surface-container p-6 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-2 border-b border-surface-container">
                <div>
                  <span className="font-label-sm text-[10px] text-primary uppercase font-bold tracking-wider">
                    Trip Audit Manifest
                  </span>
                  <h3 className="font-headline-sm text-base md:text-lg text-on-surface font-bold">
                    Trip #1245 Telemetry Ledger
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[11px] font-bold">
                  VERIFIED
                </span>
              </div>

              {/* Key Trip Metrics */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-surface-container-low p-3 rounded-xl border border-surface-container">
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">
                    Time Window
                  </span>
                  <div className="font-body-md text-xs font-bold text-on-surface mt-0.5">
                    10:32 AM – 12:08 PM
                  </div>
                </div>
                <div className="bg-surface-container-low p-3 rounded-xl border border-surface-container">
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">
                    Total Distance
                  </span>
                  <div className="font-telemetry-metric text-base font-bold text-primary mt-0.5">
                    47.8 <span className="text-xs font-normal text-on-surface-variant">KM</span>
                  </div>
                </div>
                <div className="bg-surface-container-low p-3 rounded-xl border border-surface-container">
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">
                    Gross Duration
                  </span>
                  <div className="font-telemetry-metric text-base font-bold text-on-surface mt-0.5">
                    1h 36m
                  </div>
                </div>
                <div className="bg-surface-container-low p-3 rounded-xl border border-surface-container">
                  <span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">
                    Avg Dynamic Speed
                  </span>
                  <div className="font-telemetry-metric text-base font-bold text-secondary mt-0.5">
                    42.1 <span className="text-xs font-normal text-on-surface-variant">KM/H</span>
                  </div>
                </div>
              </div>

              {/* Waypoint Audit Step Line */}
              <div className="flex flex-col gap-3 pt-2">
                <span className="font-label-sm text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">
                  Waypoint Milestone Status
                </span>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <span className="font-label-md text-xs font-bold text-on-surface truncate">
                        W-1: Logistics Depot Terminal
                      </span>
                      <span className="font-label-sm text-[10px] text-on-surface-variant font-mono ml-1">
                        10:32:04
                      </span>
                    </div>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">
                      Pre-trip checklist cleared, SOC 98%
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <span className="font-label-md text-xs font-bold text-on-surface truncate">
                        W-2: North Distribution Hub
                      </span>
                      <span className="font-label-sm text-[10px] text-on-surface-variant font-mono ml-1">
                        11:05:18
                      </span>
                    </div>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">
                      Cargo bay accessed, dwell time 4m 12s
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-tertiary text-[20px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <span className="font-label-md text-xs font-bold text-on-surface truncate">
                        W-3: Central Commercial Bay
                      </span>
                      <span className="font-label-sm text-[10px] text-on-surface-variant font-mono ml-1">
                        11:42:50
                      </span>
                    </div>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">
                      Fast dropoff completed, dwell time 2m 05s
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5 animate-pulse">
                    radio_button_checked
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline">
                      <span className="font-label-md text-xs font-bold text-primary truncate">
                        W-4: Return Waypoint Terminal
                      </span>
                      <span className="font-label-sm text-[10px] text-primary font-mono font-bold ml-1">
                        12:08:14
                      </span>
                    </div>
                    <span className="font-body-sm text-[11px] text-on-surface-variant">
                      Final odometer sync & battery plug-in
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-surface-container">
              <button
                onClick={handleExport}
                className="w-full h-10 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-xs font-semibold flex items-center justify-center gap-2 transition-colors active:scale-98"
              >
                <span className="material-symbols-outlined text-[18px] text-primary">download</span>
                <span>
                  {downloadSuccess ? 'Downloaded Trip Log (.JSON)!' : 'Export Telemetry Ledger (.JSON)'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
