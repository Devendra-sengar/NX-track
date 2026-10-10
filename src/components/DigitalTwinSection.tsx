import React from 'react';
import { NXLogo } from './NXLogo';

export const DigitalTwinSection: React.FC = () => {
  const steps = [
    { num: '1', name: 'Connect', desc: 'Plug into OBD-II or J1939 bus' },
    { num: '2', name: 'Capture', desc: 'ECU telemetry & RTK GPS vectors' },
    { num: '3', name: 'Transmit', desc: '4G/LTE Cat-M1 TLS 1.3 stream' },
    { num: '4', name: 'Process', desc: 'Edge machine learning filters' },
    { num: '5', name: 'Monitor', desc: 'Real-time dispatch & fleet actions' },
  ];

  return (
    <section className="w-full px-4 lg:px-8 py-10 lg:py-16 bg-surface-container-low">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold">
              Unified Engineering Topology
            </span>
            <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mt-1">
              From Vehicle Data to Useful Insights
            </h2>
          </div>
          <div className="text-on-surface-variant font-body-md text-xs md:text-sm max-w-lg leading-relaxed">
            Integrated vehicle sensor buses converge through the NX Track hardware gateway into cloud edge processing pipelines.
          </div>
        </div>

        {/* Side-by-side Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Digital Twin Schematic */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl shadow-md border border-surface-container p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-surface-container">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[22px]">sensors</span>
                <span className="font-headline-sm text-base md:text-lg text-on-surface font-bold">
                  Connected Vehicle Digital Twin
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-bold">
                Sensor Array Integration
              </span>
            </div>

            <div className="w-full rounded-xl overflow-hidden bg-surface-container-lowest my-2">
              <img
                alt="Connected vehicle digital twin schematic showing electric van cutaway with LiDAR radar arrays, CAN-bus harness, GNSS antenna telemetry and connected vehicle gateway"
                className="w-full h-[280px] md:h-[340px] object-contain object-center"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUMKHkoBCcbFAmFP-cVcupFiZENhiEIUYwf49Pq3kw46njVHd9tTvxPwUxa1XH7QLF_oJtTnpu_f3ueuyCKN5qmOfkirrN9i70wIAWXzVYDh6ajeuD6FpFPtfV6HHhEJBa_bzfPskHAhom8355TbRcmG1jrLsLyfNgi_jtp9kd7bSZ9PYgXv-3SKWDM66hi6-2tdBNxY3JrYy0drxzYNTb7mmYVk0ADGsUfB-XpcmQRKXnar0KIn3xVQ"
              />
            </div>

            <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] font-label-sm">
              <div className="bg-surface-container-low p-2.5 rounded-xl border border-surface-container">
                <span className="text-on-surface-variant font-medium">GATEWAY LINK</span>
                <div className="font-bold text-on-surface mt-0.5">CAN-FD & 5G Telemetry</div>
              </div>
              <div className="bg-surface-container-low p-2.5 rounded-xl border border-surface-container">
                <span className="text-on-surface-variant font-medium">SAFETY BUS</span>
                <div className="font-bold text-on-surface mt-0.5">ISO 26262 ASIL-D</div>
              </div>
              <div className="bg-surface-container-low p-2.5 rounded-xl border border-surface-container">
                <span className="text-on-surface-variant font-medium">CALIBRATION</span>
                <div className="font-bold text-tertiary mt-0.5">Real-Time In-Flight</div>
              </div>
            </div>
          </div>

          {/* OBD-II Hardware Engineering Diagram */}
          <div className="lg:col-span-5 bg-surface-container-lowest rounded-2xl shadow-md border border-surface-container p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-surface-container">
              <div className="flex items-center gap-2">
                <NXLogo size="sm" />
                <span className="font-headline-sm text-base md:text-lg text-on-surface font-bold">
                  TRACK-LINK T300 Hardware
                </span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-[11px] font-bold">
                IoT OBD-II
              </span>
            </div>

            <div className="w-full rounded-xl overflow-hidden bg-surface-container-lowest my-2">
              <img
                alt="Track-Link T300 IoT telematics unit exploded hardware diagram showing main PCB, 4G LTE modem, GNSS u-blox module, CAN transceiver, and OBD-II vehicle harness"
                className="w-full h-[280px] md:h-[340px] object-contain object-center"
                src="https://lh3.googleusercontent.com/aida/AEtjO1WXTtuAeJs76PyJLF0UVPjPpN66GnXvNpEccHCYV7w6-iu3b769StwlznwJ1ooEdtexq3a6TgqzOvJSWy103H9T2iUJpIPlGOfzp6FFu2d9bn8--ZlWHDUpDgzrmHWZhr9rSbHSKPRoFVPRcV9Sa09oKhqrRec70umZpsNr7OzhWNhEDJw2LIc69fceRkzuMJsPB2iwEV4UlDrO3jfcByaIlqH9T4rq7DqdIKhZxEDYqNerqHmy7X56lr8"
              />
            </div>

            <div className="bg-surface-container-low p-3 rounded-xl border border-surface-container flex flex-col gap-1.5 text-[11px] font-label-sm">
              <div className="flex justify-between text-on-surface-variant">
                <span>GNSS MODULE</span>
                <span className="font-mono text-on-surface font-semibold">u-blox NEO-M8N High Precision</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>CELLULAR MODEM</span>
                <span className="font-mono text-on-surface font-semibold">Quectel EG91 4G/LTE Cat-M1</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>VOLTAGE & HARNESS</span>
                <span className="font-mono text-on-surface font-semibold">9–36V DC Autosense / J1962</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Pipeline Chips */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-surface-container">
            <span className="font-label-sm text-xs uppercase font-bold text-primary tracking-wider">
              Operational Data Lifecycle
            </span>
            <span className="font-label-sm text-[11px] text-on-surface-variant font-mono font-medium">
              END-TO-END PIPELINE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {steps.map((st) => (
              <div
                key={st.num}
                className="bg-surface-container-low p-3.5 rounded-xl border border-surface-container flex items-center gap-3"
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                    st.num === '5'
                      ? 'bg-tertiary text-on-tertiary shadow-sm'
                      : 'bg-primary text-on-primary'
                  }`}
                >
                  {st.num}
                </div>
                <div className="min-w-0">
                  <div className="font-label-md text-xs font-bold text-on-surface truncate">
                    {st.name}
                  </div>
                  <div className="font-body-sm text-[11px] text-on-surface-variant truncate">
                    {st.desc}
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
