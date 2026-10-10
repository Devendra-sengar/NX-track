import React, { useState } from 'react';
import { NXLogo } from './NXLogo';

export const EnquirySection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fleetSize, setFleetSize] = useState('10 - 50 Commercial Vehicles (Pilot Integration)');
  const [requirements, setRequirements] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    success: boolean;
    message?: string;
    error?: string;
    previewUrl?: string | null;
    recipient?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          company,
          email,
          phone,
          fleetSize,
          requirements,
          source: 'Bottom Commercial Request Form',
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFeedback({
          success: true,
          message: data.message,
          previewUrl: data.previewUrl,
          recipient: data.recipient,
        });
      } else {
        setFeedback({
          success: false,
          error: data.error || 'Failed to dispatch email. Please check your network.',
        });
      }
    } catch (err: any) {
      setFeedback({
        success: false,
        error: err.message || 'Error communicating with NodeMailer server.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="enquiry-section" className="w-full px-4 lg:px-8 py-10 lg:py-16">
      <div className="bg-surface-container-lowest rounded-2xl shadow-xl border border-surface-container p-6 lg:p-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Value Prop & Official Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-white p-1 rounded-lg border border-surface-container shadow-2xs">
                <NXLogo size="sm" />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed/50 text-on-primary-fixed-variant w-fit font-label-sm text-xs font-bold border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span>ENTERPRISE ONBOARDING</span>
              </div>
            </div>

            <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-on-surface leading-tight">
              Deploy NX Track to Your Commercial Fleet
            </h2>

            <p className="font-body-lg text-xs md:text-sm text-on-surface-variant leading-relaxed">
              Connect directly with our automotive systems integration team to benchmark your vehicles, review CAN-bus compatibility, and pilot live telematics units.
            </p>

            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center gap-3 bg-surface-container-low p-3.5 rounded-xl border border-surface-container">
                <div className="w-10 h-10 rounded-lg bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">mail</span>
                </div>
                <div>
                  <div className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">
                    Official Systems Desk
                  </div>
                  <div className="font-label-md text-xs md:text-sm font-bold text-on-surface font-mono">
                    contact@nexusbox.com
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface-container-low p-3.5 rounded-xl border border-surface-container">
                <div className="w-10 h-10 rounded-lg bg-tertiary-fixed flex items-center justify-center text-tertiary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">verified</span>
                </div>
                <div>
                  <div className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">
                    SLA & Compliance
                  </div>
                  <div className="font-label-md text-xs md:text-sm font-bold text-on-surface">
                    99.95% API Dispatch SLA / ISO 26262 ASIL-D
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-surface-container-low p-3.5 rounded-xl border border-surface-container">
                <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[22px]">send</span>
                </div>
                <div>
                  <div className="font-label-sm text-[10px] text-on-surface-variant uppercase font-medium">
                    NodeMailer Inbox Destination
                  </div>
                  <div className="font-label-md text-xs md:text-sm font-bold text-primary font-mono truncate">
                    pratham89jo@gmail.com
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 font-body-sm text-xs text-on-surface-variant leading-relaxed">
              Part of the <span className="font-bold text-on-surface">NexisparkX Group</span> connected hardware ecosystems. Complete on-premise or cloud-isolated deployment options available.
            </div>
          </div>

          {/* Right: Compact Tactical Enquiry Form with NodeMailer */}
          <div className="lg:col-span-7 bg-surface-container-low p-6 lg:p-8 rounded-2xl border border-surface-container">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-2 border-b border-surface-container">
                <div>
                  <span className="font-headline-sm text-base md:text-lg text-on-surface font-bold">
                    Commercial Request Specification
                  </span>
                  <p className="text-[11px] text-on-surface-variant">
                    Dispatched directly to engineering team via NodeMailer
                  </p>
                </div>
                <span className="font-label-sm text-[10px] text-primary font-bold uppercase tracking-wider">
                  *All fields validated
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-xs text-on-surface font-bold uppercase tracking-wider">
                    Full Name <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Marcus Vance"
                    className="h-10 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-xs outline-none focus:ring-2 focus:ring-primary border border-surface-container shadow-sm transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-xs text-on-surface font-bold uppercase tracking-wider">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. GlobalFleet Logistics Ltd"
                    className="h-10 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-xs outline-none focus:ring-2 focus:ring-primary border border-surface-container shadow-sm transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-xs text-on-surface font-bold uppercase tracking-wider">
                    Business Email <span className="text-error">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="m.vance@globalfleet.com"
                    className="h-10 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-xs outline-none focus:ring-2 focus:ring-primary border border-surface-container shadow-sm transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-xs text-on-surface font-bold uppercase tracking-wider">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 019-2834"
                    className="h-10 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-xs outline-none focus:ring-2 focus:ring-primary border border-surface-container shadow-sm transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="font-label-sm text-xs text-on-surface font-bold uppercase tracking-wider">
                    Fleet Size & Composition
                  </label>
                  <select
                    value={fleetSize}
                    onChange={(e) => setFleetSize(e.target.value)}
                    className="h-10 px-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-xs outline-none focus:ring-2 focus:ring-primary border border-surface-container shadow-sm transition-all"
                  >
                    <option>10 - 50 Commercial Vehicles (Pilot Integration)</option>
                    <option>51 - 250 Commercial Vehicles (Full Deployment)</option>
                    <option>251 - 1,000+ Vehicles (Enterprise Fleet System)</option>
                    <option>Autonomous / Specialty EV Prototype Program</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="font-label-sm text-xs text-on-surface font-bold uppercase tracking-wider">
                    Operational Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={requirements}
                    onChange={(e) => setRequirements(e.target.value)}
                    placeholder="Specify CAN protocol needs (J1939, OBD-II), battery telemetry desires, or custom geofence alerting tolerances..."
                    className="p-3 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-xs outline-none focus:ring-2 focus:ring-primary border border-surface-container shadow-sm resize-none transition-all"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="h-11 rounded-xl bg-primary hover:bg-primary-container disabled:opacity-50 text-on-primary font-label-md text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Dispatched through NodeMailer...</span>
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                    <span>Send Technical Demo & Pilot Request</span>
                  </>
                )}
              </button>

              {/* Feedback Alert */}
              {feedback?.success && (
                <div className="p-4 bg-tertiary-fixed text-on-tertiary-fixed rounded-xl flex flex-col gap-2 border border-tertiary">
                  <div className="flex items-center gap-2 font-label-md text-xs font-bold">
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                    <span>Enquiry logged & email dispatched to {feedback.recipient || 'pratham89jo@gmail.com'}!</span>
                  </div>
                  {feedback.previewUrl && (
                    <div className="text-xs pt-1 border-t border-tertiary/20 flex items-center justify-between">
                      <span>Nodemailer Sandbox Preview:</span>
                      <a
                        href={feedback.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold underline flex items-center gap-1 hover:opacity-80"
                      >
                        <span>View Sent Mail</span>
                        <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                      </a>
                    </div>
                  )}
                </div>
              )}

              {feedback?.error && (
                <div className="p-3 bg-error-container text-error rounded-xl flex items-center gap-2 text-xs font-medium">
                  <span className="material-symbols-outlined text-[18px]">error</span>
                  <span>{feedback.error}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
