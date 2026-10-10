const fs = require('fs');

// Geometric parameters in 1000x1000 viewport
const Y0 = 228;
const Y1 = 772;
const H = Y1 - Y0; // 544

const P = 36; // Pitch between stripe centers/lefts
const W = 18; // Width of each vertical stripe
const N_x0 = 80;
const N_xRight = 366; // Right leg start
const dx = N_xRight - N_x0; // 286 is horizontal delta of diagonal

const X_gap = 18; // Gap between N and X
const X_x0 = N_xRight + 3 * P + W + X_gap; // ~510

// We want 4 stripes (k = 0, 1, 2, 3)
// Vertical gradient from top (#22c55e / #1ea838) to bottom (#003912)

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <linearGradient id="nxGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#2ebd42" />
      <stop offset="25%" stop-color="#22b238" />
      <stop offset="60%" stop-color="#127824" />
      <stop offset="100%" stop-color="#013b10" />
    </linearGradient>
    <clipPath id="clipXTop">
      <!-- Upper part of backward stroke above intersection -->
      <polygon points="${X_x0 - 100},${Y0 - 10} ${X_x0 + dx + 3*P + W + 100},${Y0 - 10} ${X_x0 + dx + 3*P + W + 100},${Y0 + H/2 - 22} ${X_x0 - 100},${Y0 + H/2 - 22}" />
    </clipPath>
    <clipPath id="clipXBottom">
      <!-- Lower part of backward stroke below intersection -->
      <polygon points="${X_x0 - 100},${Y0 + H/2 + 22} ${X_x0 + dx + 3*P + W + 100},${Y0 + H/2 + 22} ${X_x0 + dx + 3*P + W + 100},${Y1 + 10} ${X_x0 - 100},${Y1 + 10}" />
    </clipPath>
  </defs>

  <g fill="url(#nxGrad)">
    <!-- ================= LETTER N ================= -->
    <!-- N Left Vertical Leg (4 bars) -->
    ${[0, 1, 2, 3].map(k => {
      const x = N_x0 + k * P;
      return `<rect x="${x}" y="${Y0}" width="${W}" height="${H}" />`;
    }).join('\n    ')}

    <!-- N Right Vertical Leg (4 bars) -->
    ${[0, 1, 2, 3].map(k => {
      const x = N_xRight + k * P;
      return `<rect x="${x}" y="${Y0}" width="${W}" height="${H}" />`;
    }).join('\n    ')}

    <!-- N Diagonal Stroke (4 parallel diagonal bands) -->
    ${[0, 1, 2, 3].map(k => {
      const xTop = N_x0 + k * P;
      const xBottom = N_xRight + k * P;
      // Parallelogram with horizontal top & bottom edges of width W
      return `<polygon points="${xTop},${Y0} ${xTop + W},${Y0} ${xBottom + W},${Y1} ${xBottom},${Y1}" />`;
    }).join('\n    ')}

    <!-- ================= LETTER X ================= -->
    <!-- X Main Forward Diagonal (Top-Left to Bottom-Right) -->
    ${[0, 1, 2, 3].map(k => {
      const xTop = X_x0 + k * P;
      const xBottom = X_x0 + dx + k * P;
      return `<polygon points="${xTop},${Y0} ${xTop + W},${Y0} ${xBottom + W},${Y1} ${xBottom},${Y1}" />`;
    }).join('\n    ')}

    <!-- X Backward Diagonal (Top-Right to Bottom-Left) - Upper part -->
    <g clip-path="url(#clipXTop)">
      ${[0, 1, 2, 3].map(k => {
        const xTop = X_x0 + dx + k * P;
        const xBottom = X_x0 + k * P;
        return `<polygon points="${xTop},${Y0} ${xTop + W},${Y0} ${xBottom + W},${Y1} ${xBottom},${Y1}" />`;
      }).join('\n      ')}
    </g>

    <!-- X Backward Diagonal (Top-Right to Bottom-Left) - Lower part -->
    <g clip-path="url(#clipXBottom)">
      ${[0, 1, 2, 3].map(k => {
        const xTop = X_x0 + dx + k * P;
        const xBottom = X_x0 + k * P;
        return `<polygon points="${xTop},${Y0} ${xTop + W},${Y0} ${xBottom + W},${Y1} ${xBottom},${Y1}" />`;
      }).join('\n      ')}
    </g>
  </g>
</svg>
`;

fs.writeFileSync('public/nx-logo.svg', svg);
console.log('Saved public/nx-logo.svg successfully');
