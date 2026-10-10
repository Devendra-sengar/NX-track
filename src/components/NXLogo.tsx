import React from 'react';

interface NXLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showText?: boolean;
}

export const NXLogo: React.FC<NXLogoProps> = ({
  className = '',
  size = 'md',
  showText = false,
}) => {
  const sizeMap = {
    xs: 'w-5 h-5',
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
    '2xl': 'w-24 h-24',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official NX Green Striped Vector Logo */}
      <svg
        viewBox="0 0 1000 1000"
        className={`${sizeMap[size]} shrink-0 transition-transform duration-200 hover:scale-105 drop-shadow-sm`}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="NX Track Official Logo"
      >
        <defs>
          <linearGradient id="nxLogoGradComp" x1="0%" y1="228" x2="0%" y2="772" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2ebd42" />
            <stop offset="20%" stopColor="#26b33c" />
            <stop offset="45%" stopColor="#188c2b" />
            <stop offset="75%" stopColor="#0a5317" />
            <stop offset="100%" stopColor="#002b0c" />
          </linearGradient>
        </defs>

        <g fill="url(#nxLogoGradComp)">
          {/* ================= LETTER N ================= */}
          {/* 4 Left Vertical Lines */}
          <rect x="80" y="228" width="18" height="544" />
          <rect x="117" y="298" width="18" height="474" />
          <rect x="154" y="369" width="18" height="403" />
          <rect x="191" y="439" width="18" height="333" />

          {/* 4 Diagonal Lines of N */}
          <polygon points="80,228 98,228 383,772 365,772" />
          <polygon points="117,228 135,228 420,772 402,772" />
          <polygon points="154,228 172,228 457,772 439,772" />
          <polygon points="191,228 209,228 494,772 476,772" />

          {/* 4 Right Vertical Lines */}
          <rect x="365" y="228" width="18" height="333" />
          <rect x="402" y="228" width="18" height="403" />
          <rect x="439" y="228" width="18" height="474" />
          <rect x="476" y="228" width="18" height="544" />

          {/* ================= LETTER X ================= */}
          {/* Continuous Diagonal Stroke (/) */}
          <polygon points="790,228 808,228 523,772 505,772" />
          <polygon points="827,228 845,228 560,772 542,772" />
          <polygon points="864,228 882,228 597,772 579,772" />
          <polygon points="901,228 919,228 634,772 616,772" />

          {/* Intersecting Diagonal Stroke (\) Upper & Lower Segments */}
          <polygon points="505,228 523,228 648,466 639,483" />
          <polygon points="721,640 730,623 808,772 790,772" />

          <polygon points="542,228 560,228 666,430 657,448" />
          <polygon points="740,605 749,588 845,772 827,772" />

          <polygon points="579,228 597,228 685,395 676,412" />
          <polygon points="758,570 767,552 882,772 864,772" />

          <polygon points="616,228 634,228 703,360 694,377" />
          <polygon points="777,534 786,517 919,772 901,772" />
        </g>
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="font-headline-sm text-base md:text-lg font-bold tracking-tight text-on-surface">
            NX Track
          </span>
          <span className="text-[10px] uppercase font-label-sm tracking-wider text-on-surface-variant font-medium mt-0.5">
            NexisparkX Group
          </span>
        </div>
      )}
    </div>
  );
};
