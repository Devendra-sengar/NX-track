const fs = require('fs');
const { execSync } = require('child_process');

// 1000x1000 canvas
const Y0 = 228;
const Y1 = 772;
const H = Y1 - Y0; // 544

// Total width of logo is approx 840 (from X=80 to X=920)
// Width of N is from X=80 to X=495 (415 wide)
// Width of X is from X=515 to X=920 (405 wide)
// In N:
// Left stem: 4 vertical lines.
// Right stem: 4 vertical lines.
// Diagonal: 4 diagonal lines.
// Let's determine the exact line widths and positions:
// In the 4-line bundle:
// Left edges of lines k=0,1,2,3:
// Let line width be W = 19, gap between lines be G = 18.
// Pitch P = W + G = 37.
// Bundle width = 3 * P + W = 3 * 37 + 19 = 130.

const W = 19;
const G = 18;
const P = W + G; // 37
const bundleWidth = 3 * P + W; // 130

const N_left = 80;
const N_right = N_left + 415 - bundleWidth; // 495 - 130 = 365
const dx = N_right - N_left; // 285

const X_left = 515;
const X_right = X_left + dx; // 800

// In N:
// Diagonal goes from (N_left + k*P) at Y0 to (N_right + k*P) at Y1.
// Left vertical lines:
// The diagonal top edge for line k starts at (N_left + k*P, Y0).
// Each left vertical line k (from N_left + k*P to N_left + k*P + W)
// starts at y = Y0 + (k * P * H / dx) and goes down to Y1.
// Right vertical lines:
// Each right vertical line k (from N_right + k*P to N_right + k*P + W)
// starts at Y0 and goes down to y = Y1 - ((3 - k) * P * H / dx).

// In X:
// Forward stroke: from (X_left + k*P, Y0) to (X_right + k*P, Y1).
// Center of X is at (X_left + bundleWidth/2 + dx/2, (Y0+Y1)/2).
// Backward stroke: from (X_right + k*P, Y0) to (X_left + k*P, Y1).
// It has a gap around the forward stroke.
// The forward stroke has centerline passing through center of X with slope = H / dx.
// Normal distance from forward stroke:
// Let's create a clip path or cut for the backward stroke.
// Angle of forward stroke: theta = Math.atan2(H, dx).
// Half width of forward stroke = (bundleWidth * Math.cos(theta)) / 2 + gap.
// Or we can simply use polygon clipping in the direction of the forward stroke!

const cx = X_left + (dx + bundleWidth) / 2;
const cy = (Y0 + Y1) / 2;
const theta = Math.atan2(H, dx);
const cosT = Math.cos(theta);
const sinT = Math.sin(theta);

// Half-thickness of the forward stroke perpendicular to its axis:
const halfThick = (bundleWidth * Math.sin(theta)) / 2;
const cutGap = halfThick + 14; // clean gap margin around forward stroke

// Forward stroke centerline: (y - cy) = (H / dx) * (x - cx)
// Normal to forward stroke: (H) * (x - cx) - (dx) * (y - cy) = 0
// We can mask the backward stroke using a polygon that removes the band:
// Band is between normal distance -cutGap and +cutGap from forward stroke axis.

// Let's build the SVG
let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <linearGradient id="nxGrad" x1="0" y1="${Y0}" x2="0" y2="${Y1}" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2ebd42" />
      <stop offset="25%" stop-color="#24b33b" />
      <stop offset="60%" stop-color="#117522" />
      <stop offset="100%" stop-color="#00350f" />
    </linearGradient>

    <mask id="xCutMask">
      <!-- Everything white is visible -->
      <rect x="0" y="0" width="1000" height="1000" fill="#ffffff" />
      <!-- Black strip cuts out the intersection in the direction of forward stroke -->
      <polygon fill="#000000" points="
        ${X_left - 100},${Y0 - 100 * (H/dx) - cutGap / Math.sin(theta)}
        ${X_left - 100},${Y0 - 100 * (H/dx) + cutGap / Math.sin(theta)}
        ${X_right + bundleWidth + 100},${Y1 + 100 * (H/dx) + cutGap / Math.sin(theta)}
        ${X_right + bundleWidth + 100},${Y1 + 100 * (H/dx) - cutGap / Math.sin(theta)}
      " />
    </mask>
  </defs>

  <g fill="url(#nxGrad)">
    <!-- ==================== LETTER N ==================== -->
    <!-- 4 Left Vertical Lines -->
    ${[0, 1, 2, 3].map(k => {
      const x = N_left + k * P;
      // Slanted start at the diagonal
      const yStart = Y0 + (k * P * H / dx);
      return `<rect x="${x}" y="${Math.round(yStart)}" width="${W}" height="${Math.round(Y1 - yStart)}" />`;
    }).join('\n    ')}

    <!-- 4 Diagonal Lines of N -->
    ${[0, 1, 2, 3].map(k => {
      const xTop = N_left + k * P;
      const xBottom = N_right + k * P;
      return `<polygon points="${xTop},${Y0} ${xTop + W},${Y0} ${xBottom + W},${Y1} ${xBottom},${Y1}" />`;
    }).join('\n    ')}

    <!-- 4 Right Vertical Lines -->
    ${[0, 1, 2, 3].map(k => {
      const x = N_right + k * P;
      // Ends at the diagonal
      const yEnd = Y1 - ((3 - k) * P * H / dx);
      return `<rect x="${x}" y="${Y0}" width="${W}" height="${Math.round(yEnd - Y0)}" />`;
    }).join('\n    ')}

    <!-- ==================== LETTER X ==================== -->
    <!-- Forward Stroke (continuous) -->
    ${[0, 1, 2, 3].map(k => {
      const xTop = X_left + k * P;
      const xBottom = X_right + k * P;
      return `<polygon points="${xTop},${Y0} ${xTop + W},${Y0} ${xBottom + W},${Y1} ${xBottom},${Y1}" />`;
    }).join('\n    ')}

    <!-- Backward Stroke (masked around forward stroke) -->
    <g mask="url(#xCutMask)">
      ${[0, 1, 2, 3].map(k => {
        const xTop = X_right + k * P;
        const xBottom = X_left + k * P;
        return `<polygon points="${xTop},${Y0} ${xTop + W},${Y0} ${xBottom + W},${Y1} ${xBottom},${Y1}" />`;
      }).join('\n      ')}
    </g>
  </g>
</svg>`;

fs.writeFileSync('public/nx-logo.svg', svg);
console.log('Saved public/nx-logo.svg');

// Convert SVG to high-res PNG using ImageMagick
execSync('convert -background none -density 300 public/nx-logo.svg -resize 1024x1024 public/nx-logo.png');
console.log('Converted to public/nx-logo.png (1024x1024)');
