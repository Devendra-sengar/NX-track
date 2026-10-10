import React, { useState, useEffect } from 'react';

export const DiagnosticsHUD: React.FC = () => {
  const [speed, setSpeed] = useState(64);
  const [rpm, setRpm] = useState(1840);
  const [temp, setTemp] = useState(88.5);
  const [volts, setVolts] = useState(24.2);
  const [isLiveSimulating, setIsLiveSimulating] = useState(true);

  useEffect(() => {
    if (!isLiveSimulating) return;
    const interval = setInterval(() => {
      // Small realistic jitter
      setSpeed((prev) => Math.min(80, Math.max(50, +(prev + (Math.random() * 2 - 1)).toFixed(1))));
      setRpm((prev) => Math.min(2200, Math.max(1600, Math.round(prev + (Math.random() * 40 - 20)))));
      setTemp((prev) => +(88.5 + (Math.random() * 0.6 - 0.3)).toFixed(1));
      setVolts((prev) => +(24.2 + (Math.random() * 0.1 - 0.05)).toFixed(2));
    }, 2000);
    return () => clearInterval(interval);
  }, [isLiveSimulating]);

  return (
    <section className="w-full px-4 lg:px-8 py-10 lg:py-16">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label-sm text-xs uppercase tracking-wider text-primary font-bold">
              ECU-Level Telematics
            </span>
            <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface mt-1">
              Vehicle Intelligence & Diagnostics
            </h2>
            <p className="font-body-md text-sm md:text-base text-on-surface-variant max-w-2xl mt-1 leading-relaxed">
              Deep CAN-bus integration bypasses surface-level assumptions to deliver instant mechanical and electrical clarity.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsLiveSimulating(!isLiveSimulating)}
              className="px-3 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-xs font-semibold text-on-surface flex items-center gap-2 transition-colors"
            >
              <span className={`w-2 h-2 rounded-full ${isLiveSimulating ? 'bg-tertiary animate-pulse' : 'bg-outline'}`}></span>
              <span>{isLiveSimulating ? 'Live J1939 Stream' : 'Stream Paused'}</span>
            </button>
          </div>
        </div>

        {/* 4 Live Gauges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Gauge 1: Speed Vector */}
          <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">
                Speed Vector
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-tertiary-fixed text-on-tertiary-fixed font-bold">
                CRUISE
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 my-2">
              <span className="font-display-hero text-4xl font-bold text-on-surface">
                {Math.round(speed)}
              </span>
              <span className="font-headline-sm text-sm text-on-surface-variant">km/h</span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mb-2">
              <div
                className="bg-primary h-full rounded-full transition-all duration-500"
                style={{ width: `${(speed / 100) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-[11px] font-label-sm text-on-surface-variant">
              <span>Limit: 80 km/h</span>
              <span className="text-tertiary font-medium">Delta: -{Math.round(80 - speed)} km/h</span>
            </div>
          </div>

          {/* Gauge 2: Powertrain RPM */}
          <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">
                Motor / Engine RPM
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-surface-container text-on-surface font-bold">
                OPTIMAL
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 my-2">
              <span className="font-display-hero text-4xl font-bold text-on-surface">
                {rpm.toLocaleString()}
              </span>
              <span className="font-headline-sm text-sm text-on-surface-variant">RPM</span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mb-2">
              <div
                className="bg-secondary h-full rounded-full transition-all duration-500"
                style={{ width: `${(rpm / 4500) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-[11px] font-label-sm text-on-surface-variant">
              <span>Redline: 4,500</span>
              <span className="font-medium text-on-surface">Torque: 280 Nm</span>
            </div>
          </div>

          {/* Gauge 3: Thermal Loop */}
          <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">
                Coolant & Inverter Temp
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-tertiary-fixed text-on-tertiary-fixed font-bold">
                STABLE
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 my-2">
              <span className="font-display-hero text-4xl font-bold text-on-surface">
                {temp}
              </span>
              <span className="font-headline-sm text-sm text-on-surface-variant">°C</span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mb-2">
              <div
                className="bg-tertiary h-full rounded-full transition-all duration-500"
                style={{ width: `${(temp / 110) * 100}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-[11px] font-label-sm text-on-surface-variant">
              <span>Threshold: 105°C</span>
              <span className="text-tertiary font-medium">Safe Margin: {(105 - temp).toFixed(1)}°C</span>
            </div>
          </div>

          {/* Gauge 4: Auxiliary Electrical Bus */}
          <div className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-surface-container flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="font-label-sm text-[10px] text-on-surface-variant uppercase font-bold">
                Aux Bus Potential
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-primary-fixed text-on-primary-fixed-variant font-bold">
                REGULATED
              </span>
            </div>
            <div className="flex items-baseline gap-1.5 my-2">
              <span className="font-display-hero text-4xl font-bold text-on-surface">
                {volts}
              </span>
              <span className="font-headline-sm text-sm text-on-surface-variant">V DC</span>
            </div>
            <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden mb-2">
              <div className="bg-primary h-full rounded-full" style={{ width: '82%' }}></div>
            </div>
            <div className="flex justify-between text-[11px] font-label-sm text-on-surface-variant">
              <span>Nominal: 24.0V</span>
              <span className="font-medium text-primary">Ripple: &lt; 20mV</span>
            </div>
          </div>
        </div>

        {/* Duty Cycle Distribution Bar Visual Chart */}
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-surface-container">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 gap-2 border-b border-surface-container mb-4">
            <div>
              <h3 className="font-headline-sm text-base md:text-lg text-on-surface font-bold">
                24-Hour Duty Cycle Distribution
              </h3>
              <span className="font-body-sm text-xs text-on-surface-variant">
                Aggregated continuous operating status across active shift schedules
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-label-sm flex-wrap">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-primary"></span>
                <span className="text-on-surface font-semibold">In Motion (62%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-tertiary"></span>
                <span className="text-on-surface font-semibold">DC Fast Charge (18%)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded bg-surface-container-high"></span>
                <span className="text-on-surface font-semibold">Depot Idle (20%)</span>
              </div>
            </div>
          </div>

          {/* Multi-segment duty cycle horizontal bar */}
          <div className="w-full h-8 bg-surface-container rounded-xl flex overflow-hidden p-1 gap-1">
            <div
              className="bg-primary h-full rounded-lg transition-all"
              style={{ width: '62%' }}
              title="Active Transit: 62%"
            ></div>
            <div
              className="bg-tertiary h-full rounded-lg transition-all"
              style={{ width: '18%' }}
              title="High-Voltage Charging: 18%"
            ></div>
            <div
              className="bg-surface-container-high h-full rounded-lg transition-all"
              style={{ width: '20%' }}
              title="Depot Staged: 20%"
            ></div>
          </div>

          {/* Hourly timeline markers */}
          <div className="flex justify-between pt-2 text-[11px] font-label-sm text-on-surface-variant font-mono">
            <span>00:00</span>
            <span>04:00</span>
            <span>08:00</span>
            <span>12:00</span>
            <span>16:00</span>
            <span>20:00</span>
            <span>23:59</span>
          </div>
        </div>
      </div>
    </section>
  );
};
