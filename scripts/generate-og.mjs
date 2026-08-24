import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fef9f3"/>
  <rect x="0" y="0" width="14" height="630" fill="#0369a1"/>
  <text x="96" y="250" font-family="sans-serif" font-size="76" font-weight="700" fill="#1c1917">Hyukjun Park</text>
  <text x="98" y="330" font-family="sans-serif" font-size="40" fill="#0369a1">AI Engineer Portfolio</text>
  <g font-family="sans-serif" font-size="26" fill="#57534e">
    <rect x="96" y="430" width="120" height="56" rx="28" fill="#f5eee3" stroke="#eae2d6"/>
    <text x="156" y="467" text-anchor="middle">Python</text>
    <rect x="246" y="430" width="160" height="56" rx="28" fill="#f5eee3" stroke="#eae2d6"/>
    <text x="326" y="467" text-anchor="middle">LangChain</text>
    <rect x="436" y="430" width="130" height="56" rx="28" fill="#f5eee3" stroke="#eae2d6"/>
    <text x="501" y="467" text-anchor="middle">FastAPI</text>
    <rect x="596" y="430" width="130" height="56" rx="28" fill="#f5eee3" stroke="#eae2d6"/>
    <text x="661" y="467" text-anchor="middle">MySQL</text>
  </g>
  <text x="96" y="570" font-family="sans-serif" font-size="26" fill="#a8a29e">Case studies · Career</text>
</svg>
`;

await mkdir(path.dirname('public/og.png'), { recursive: true });
await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('og.png generated');
