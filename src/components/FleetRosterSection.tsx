import React, { useState } from 'react';

interface FleetRosterSectionProps {
  onOpenDemo: (source: string) => void;
}

export const FleetRosterSection: React.FC<FleetRosterSectionProps> = ({ onOpenDemo }) => {
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);

  const fleetAssets = [
    {
      id: 'TRK-104',
      model: 'Volvo FL Electric 16T',
      status: 'In Route',
      statusBg: 'bg-tertiary-fixed text-on-tertiary-fixed',
      dotColor: 'bg-tertiary',
      velocity: '68 km/h',
      charge: 78,
      driver: 'Alex Mercer',
      latency: '< 0.28s',
    },
    {
      id: 'VAN-208',
      model: 'Ford E-Transit 350L',
      status: 'Fast Charging',
      statusBg: 'bg-secondary-fixed text-on-secondary-fixed',
      dotColor: 'bg-secondary animate-pulse',
      velocity: '0 km/h (Docked)',
      charge: 52,
      driver: 'Sarah Jenkins',
      latency: '< 0.19s',
    },
    {
      id: 'SED-312',
      model: 'Tesla Model 3 Executive',
      status: 'Staged / Idle',
      statusBg: 'bg-surface-container-high text-on-surface-variant',
      dotColor: 'bg-on-surface-variant',
      velocity: '0 km/h',
      charge: 91,
      driver: 'David Chen',
      latency: '< 0.32s',
    },
    {
      id: 'TRK-409',
      model: 'Scania 25 P Electric',
      status: 'In Route',
      statusBg: 'bg-tertiary-fixed text-on-tertiary-fixed',
      dotColor: 'bg-tertiary',
      velocity: '72 km/h',
      charge: 84,
      driver: 'Kavita Patel',
      latency: '< 0.21s',
    },
  ];

  const sectors = [
    {
      icon: 'car_rental',
      title: 'Rental Fleets',
      desc: 'Auto checkout & fuel/battery reconciliation',
    },
    {
      icon: 'local_shipping',
      title: 'Commercial Logistics',
      desc: 'Route corridor optimization & dynamic ETAs',
    },
    {
      icon: 'commute',
      title: 'Public Transport',
      desc: 'Adherence to fixed timetable headways',
    },
    {
      icon: 'inventory_2',
      title: 'Cold-Chain Distribution',
      desc: 'Reefer temperature CAN-bus auditing',
    },
    {
      icon: 'home_repair_service',
      title: 'Field Service Fleets',
      desc: 'Technician dispatch & onsite dwell timers',
    },
    {
      icon: 'account_balance',
      title: 'Institutional & Gov',
      desc: 'Encrypted custody & compliance logs',
    },
    {
      icon: 'business_center',
      title: 'Business-Owned',
      desc: 'Corporate asset safety & usage auditing',
    },
    {
      icon: 'share',
      title: 'Multi-Vehicle Operations',
      desc: 'Heterogeneous ICE + EV fleet unification',
    },
  ];

  return (
    <section id="fleet-management" className="w-full px-4 lg:px-8 py-10 lg:py-16">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold">
              Total Operations Control
            </span>
            <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mt-1">
              Manage Your Entire Fleet From One Place
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low border border-surface-container text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="text-on-surface font-semibold">48 Active</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low border border-surface-container text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="text-on-surface font-semibold">6 Charging</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low border border-surface-container text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              <span className="text-on-surface font-semibold">0 Critical Alert</span>
            </div>
          </div>
        </div>

        {/* Live Operational Roster Table */}
        <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-surface-container overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-[10px] uppercase border-b border-surface-container">
                  <th className="py-3 px-4 font-bold">Asset Identifier</th>
                  <th className="py-3 px-4 font-bold">Vehicle Model</th>
                  <th className="py-3 px-4 font-bold">Status</th>
                  <th className="py-3 px-4 font-bold">Velocity</th>
                  <th className="py-3 px-4 font-bold">Charge / Fuel</th>
                  <th className="py-3 px-4 font-bold">Driver</th>
                  <th className="py-3 px-4 font-bold">GPS Latency</th>
                  <th className="py-3 px-4 font-bold text-right">Audit Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-low text-xs text-on-surface">
                {fleetAssets.map((asset) => (
                  <tr
                    key={asset.id}
                    className="hover:bg-surface-container-low/60 transition-colors"
                  >
                    <td className="py-3 px-4 font-mono font-bold text-primary">
                      {asset.id}
                    </td>
                    <td className="py-3 px-4 font-medium text-on-surface">
                      {asset.model}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${asset.statusBg}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${asset.dotColor}`}></span>
                        {asset.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono font-medium">
                      {asset.velocity}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-surface-container-high h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-tertiary h-full rounded-full"
                            style={{ width: `${asset.charge}%` }}
                          ></div>
                        </div>
                        <span className="font-mono text-[11px] font-semibold">{asset.charge}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-medium">{asset.driver}</td>
                    <td className="py-3 px-4 font-mono text-tertiary font-semibold">
                      {asset.latency}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => {
                          setSelectedAsset(asset.id);
                          onOpenDemo(`Asset Audit Request (${asset.id})`);
                        }}
                        className="h-7 px-3 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary font-label-md text-[11px] font-semibold transition-colors active:scale-95"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 8-Sector Industry Grid */}
        <div className="flex flex-col gap-3">
          <span className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold">
            Engineered Across Sectors
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {sectors.map((sec, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-4 rounded-xl shadow-sm border border-surface-container flex items-start gap-3 hover:border-primary/20 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">{sec.icon}</span>
                </div>
                <div>
                  <div className="font-headline-sm text-xs md:text-sm font-bold text-on-surface">
                    {sec.title}
                  </div>
                  <div className="font-body-sm text-[11px] text-on-surface-variant leading-snug mt-0.5">
                    {sec.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
