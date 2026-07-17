import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const root = process.cwd();
const outputs = new Map([
  ['resume.html', 'Russell-Dudek-Bechtel-AI-Enablement-Resume.pdf'],
  ['cover-letter.html', 'Russell-Dudek-Bechtel-AI-Enablement-Cover-Letter.pdf'],
  ['interview-brief.html', 'Russell-Dudek-Bechtel-Interview-Thesis-Brief.pdf'],
  ['90-day-plan.html', 'Russell-Dudek-Bechtel-90-Day-Entry-Plan.pdf'],
  ['work-package-review.html', 'Russell-Dudek-Bechtel-AI-Capability-Work-Package-Review.pdf'],
]);

const css = (await Promise.all(['document-core.css','document-components.css','document-layout.css','document-enhancements.css'].map(name => fs.readFile(path.join(root, name), 'utf8')))).join('\n');
const svg = await fs.readFile(path.join(root, 'assets/brand/bechtel-logo-official.svg'));
const svgUri = `data:image/svg+xml;base64,${svg.toString('base64')}`;
await fs.mkdir(path.join(root, 'docs'), { recursive: true });

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await page.emulateMedia({ media: 'print' });

  for (const [htmlName, pdfName] of outputs) {
    let html = await fs.readFile(path.join(root, htmlName), 'utf8');
    html = html.replace(
      '<link rel="stylesheet" href="document-system.css">',
      `<style>${css}</style>`,
    );
    html = html
      .replaceAll('assets/brand/bechtel-logo-official.svg?v=20260717-dossier', svgUri)
      .replaceAll('assets/brand/bechtel-logo-official.svg', svgUri);

    await page.setContent(html, { waitUntil: 'load' });
    await page.pdf({
      path: path.join(root, 'docs', pdfName),
      format: 'Letter',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });
    console.log(`Generated docs/${pdfName}`);
  }
} finally {
  await browser.close();
}
