import React from 'react';

export const VisibilityModules: React.FC = () => {
  const modules = [
    {
      num: 'Question 01',
      title: 'Where is it?',
      desc: 'Real-time geospatial positioning, active corridor adherence, and speed heading.',
      icon: 'explore',
      color: 'text-primary',
      badgeColor: 'bg-primary-fixed text-on-primary-fixed-variant',
      metrics: [
        { label: 'ACTIVE GEOFENCE', val: 'Zone 4 Inbound', highlight: 'text-tertiary font-bold' },
        { label: 'HEADING', val: '312° NW', highlight: 'font-mono text-on-surface font-semibold' },
      ],
    },
    {
      num: 'Question 02',
      title: 'What did it do?',
      desc: 'Exact breadcrumb trajectory replay, engine idle durations, and door open/close events.',
      icon: 'history_toggle_off',
      color: 'text-secondary',
      badgeColor: 'bg-secondary-fixed text-on-secondary-fixed-variant',
      metrics: [
        { label: 'DAILY TRIPS', val: '14 Completed', highlight: 'text-on-surface font-bold' },
        { label: 'IDLE DURATION', val: '12m 40s', highlight: 'font-mono text-on-surface font-semibold' },
      ],
    },
    {
      num: 'Question 03',
      title: 'How is it performing?',
      desc: 'Battery cell thermal spread, regenerative braking efficacy, and drivetrain draw.',
      icon: 'electric_meter',
      color: 'text-tertiary',
      badgeColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
      metrics: [
        { label: 'ENERGY EFFICIENCY', val: '18.4 kWh/100km', highlight: 'text-tertiary font-bold' },
        { label: 'PACK HEALTH', val: '98.2% SOH', highlight: 'text-tertiary font-bold' },
      ],
    },
    {
      num: 'Question 04',
      title: 'What should I know?',
      desc: 'Instant tactical notifications on harsh maneuvers, geofence breaches, and DTC codes.',
      icon: 'notification_important',
      color: 'text-error',
      badgeColor: 'bg-error-container text-error',
      metrics: [
        { label: 'UNRESOLVED ALERTS', val: '0 Critical', highlight: 'text-tertiary font-bold' },
        { label: 'BRAKE ACCEL G-FORCE', val: '0.28 G (Normal)', highlight: 'font-mono text-on-surface font-semibold' },
      ],
    },
    {
      num: 'Question 05',
      title: 'What can I learn?',
      desc: 'Longitudinal fleet wear trends, charge scheduling optimizations, and driver safety index.',
      icon: 'insights',
      color: 'text-secondary-container',
      badgeColor: 'bg-primary-fixed text-primary',
      metrics: [
        { label: 'DISPATCH EFFICIENCY', val: '+14.2% MoM', highlight: 'text-secondary font-bold' },
        { label: 'SAFETY SCORE', val: '96 / 100', highlight: 'font-mono text-on-surface font-bold' },
      ],
    },
  ];

  return (
    <section id="visibility" className="w-full px-4 lg:px-8 py-10 lg:py-16">
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        <div className="flex flex-col">
          <span className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold">
            Situational Awareness
          </span>
          <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mt-1">
            Complete Vehicle Visibility
          </h2>
          <p className="font-body-md text-sm md:text-base text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
            Five deterministic answers to every tactical fleet question, synthesized into real-time operational streams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {modules.map((m, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md hover:border-primary/20 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-label-sm text-[10px] uppercase font-bold tracking-wider ${m.color}`}>
                    {m.num}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-surface-container ${m.color}`}>
                    <span className="material-symbols-outlined text-[20px]">{m.icon}</span>
                  </div>
                </div>
                <h3 className="font-headline-sm text-base text-on-surface font-bold mb-1.5">
                  {m.title}
                </h3>
                <p className="font-body-sm text-xs text-on-surface-variant mb-4 leading-relaxed">
                  {m.desc}
                </p>
              </div>

              <div className="bg-surface-container-low p-2.5 rounded-xl border border-surface-container flex flex-col gap-1.5">
                {m.metrics.map((met, mIdx) => (
                  <div key={mIdx} className="flex justify-between items-center text-[11px] font-label-sm">
                    <span className="text-on-surface-variant uppercase font-medium">{met.label}</span>
                    <span className={met.highlight}>{met.val}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
