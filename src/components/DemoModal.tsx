import React, { useState } from 'react';
import { NXLogo } from './NXLogo';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSource?: string;
}

export const DemoModal: React.FC<DemoModalProps> = ({
  isOpen,
  onClose,
  initialSource = 'Request a Demo CTA',
}) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fleetSize, setFleetSize] = useState('10 - 50 Commercial Vehicles (Pilot Integration)');
  const [requirements, setRequirements] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message?: string;
    error?: string;
    previewUrl?: string | null;
    recipient?: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          fleetSize,
          requirements,
          source: initialSource,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResult({
          success: true,
          message: data.message || 'Email successfully sent via Nodemailer!',
          previewUrl: data.previewUrl,
          recipient: data.recipient || 'pratham89jo@gmail.com',
        });
      } else {
        setResult({
          success: false,
          error: data.error || 'Failed to dispatch email. Please try again.',
        });
      }
    } catch (err: any) {
      setResult({
        success: false,
        error: err.message || 'Network error while contacting the NodeMailer server.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName('');
    setCompany('');
    setEmail('');
    setPhone('');
    setRequirements('');
    setResult(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-surface-container overflow-hidden transition-all duration-300 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-primary to-secondary p-5 text-on-primary flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-lg shadow-sm">
              <NXLogo size="sm" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-headline-sm text-[18px] font-bold tracking-tight text-white">
                  Schedule Live Telematics Demo
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white/20 text-white uppercase tracking-wider">
                  NodeMailer Active
                </span>
              </div>
              <p className="text-xs text-white/80 mt-0.5">
                Dispatch your requirements directly to the engineering desk
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {result?.success ? (
            <div className="bg-tertiary-fixed/40 border border-tertiary p-5 rounded-xl text-on-surface flex flex-col items-center text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-[28px]">check</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-lg font-bold text-tertiary">
                  Demo Request Dispatched!
                </h4>
                <p className="font-body-md text-sm text-on-surface-variant mt-1">
                  NodeMailer has sent your complete requirements to{' '}
                  <strong className="text-primary">{result.recipient}</strong>.
                </p>
              </div>

              {result.previewUrl && (
                <div className="w-full bg-surface-container p-3 rounded-lg text-left mt-2 border border-outline-variant/40">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-on-surface flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px] text-primary">mark_email_read</span>
                      Ethereal Mail Sandbox Preview:
                    </span>
                    <a
                      href={result.previewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                    >
                      <span>View Sent Email</span>
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </a>
                  </div>
                  <p className="text-[11px] text-on-surface-variant mt-1">
                    Click above to inspect the exact HTML message delivered to the mailbox.
                  </p>
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-xs font-semibold transition-colors"
                >
                  Send Another Request
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-xs font-semibold transition-colors shadow-sm"
                >
                  Back to Dashboard
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {result?.error && (
                <div className="p-3 rounded-lg bg-error-container text-error flex items-start gap-2 text-xs">
                  <span className="material-symbols-outlined text-[18px] shrink-0">error</span>
                  <span>{result.error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1">
                    Full Name <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Marcus Vance"
                    className="w-full h-10 px-3 rounded-lg bg-surface-container-low border border-surface-container-high focus:border-primary focus:bg-white text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Apex Logistics Global"
                    className="w-full h-10 px-3 rounded-lg bg-surface-container-low border border-surface-container-high focus:border-primary focus:bg-white text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1">
                    Business Email <span className="text-error">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="m.vance@apexlogistics.com"
                    className="w-full h-10 px-3 rounded-lg bg-surface-container-low border border-surface-container-high focus:border-primary focus:bg-white text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 019-2834"
                    className="w-full h-10 px-3 rounded-lg bg-surface-container-low border border-surface-container-high focus:border-primary focus:bg-white text-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1">
                  Fleet Size & Composition
                </label>
                <select
                  value={fleetSize}
                  onChange={(e) => setFleetSize(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg bg-surface-container-low border border-surface-container-high focus:border-primary focus:bg-white text-sm outline-none transition-all"
                >
                  <option value="10 - 50 Commercial Vehicles (Pilot Integration)">
                    10 - 50 Commercial Vehicles (Pilot Integration)
                  </option>
                  <option value="51 - 250 Commercial Vehicles (Full Deployment)">
                    51 - 250 Commercial Vehicles (Full Deployment)
                  </option>
                  <option value="251 - 1,000+ Vehicles (Enterprise Fleet System)">
                    251 - 1,000+ Vehicles (Enterprise Fleet System)
                  </option>
                  <option value="Autonomous / Specialty EV Prototype Program">
                    Autonomous / Specialty EV Prototype Program
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-on-surface mb-1">
                  Operational Requirements / Protocol
                </label>
                <textarea
                  rows={3}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="Specify CAN protocols (J1939, OBD-II), battery telemetry desires, or custom geofence alerting tolerances..."
                  className="w-full p-3 rounded-lg bg-surface-container-low border border-surface-container-high focus:border-primary focus:bg-white text-sm outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-on-surface-variant flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                  Dispatches via NodeMailer
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-xs font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 rounded-lg bg-primary hover:bg-primary-container disabled:opacity-50 text-on-primary font-label-md text-xs font-semibold flex items-center gap-2 shadow-md transition-all active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Sending Mail...</span>
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-[16px]">send</span>
                        <span>Submit & Send Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
