# Engineering Control Dossier Design

## Purpose
Redesign the Bechtel candidate documents as a coherent executive project-delivery dossier. The system must feel operational, evidence-driven, print-exact, and employer-authentic rather than like generic exported HTML.

## Visual system
Use a restrained Bechtel-derived palette: charcoal, white, warm paper, engineering gray, and red only for control points, decisions, section identifiers, and evidence emphasis. Pages use technical bands, page codes, keylines, compact modular grids, and deliberate asymmetry. White space remains functional; no page may contain an unexplained dead lower third.

## Document architecture
- Resume: exactly two US Letter pages. Page 1 is the mandate-and-proof page; page 2 is depth, credentials, and transfer evidence. A charcoal proof rail anchors both pages.
- Cover letter: exactly one US Letter page. A narrow thesis rail holds mandate, evidence anchors, and fit objection while the main column remains a readable letter.
- Interview thesis brief: exactly three US Letter pages with distinct purposes: mandate, operating system, evidence/discovery. Repeated generic cards are replaced with diagrams, matrices, and decision blocks.
- 90-day entry plan: exactly two US Letter pages. Page 1 shows the three-phase roadmap and gates; page 2 shows operating cadence, stakeholders, measures, risks, and tangible outputs.
- AI Capability Work Package Review: exactly two US Letter pages. Page 1 is the intake/control form; page 2 is the disposition and value receipt.
- Sources and assumptions: web-first research register with source classes, status badges, and explicit fact/hypothesis boundaries.

## Print and web constraints
- US Letter pages at 8.5 x 11 inches.
- Resume 2 pages, cover letter 1, thesis brief 3, entry plan 2, work package 2.
- No clipped content, overlapping text, broken glyphs, or unintended blank pages.
- Browser views remain responsive and readable below 900 px.
- Download links point to regenerated PDFs matching the redesigned HTML.
- All career claims remain unchanged unless editing for brevity without altering meaning.
- The Bechtel logo remains clearly labeled as part of independent candidate material; no implication of endorsement.

## Component model
A standalone `document-system.css` owns all document layouts. Shared components include dossier header, page code, control band, section label, evidence strip, metric chip, decision gate, timeline, and print footer. Each HTML document receives a document-specific body class and layout primitives so purpose drives composition.

## Acceptance criteria
1. Every document has a visibly distinct information architecture while sharing one coherent visual system.
2. No page has excessive unoccupied space unless deliberately used for a signature or writable form field.
3. Generated PDFs match exact page counts.
4. Desktop and mobile browser views show no horizontal overflow.
5. Chromium console reports no relevant errors.
6. Rendered PDF pages pass visual inspection at 200 DPI.
