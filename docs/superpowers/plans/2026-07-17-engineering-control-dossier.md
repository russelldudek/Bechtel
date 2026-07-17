# Engineering Control Dossier Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Bechtel candidate documents as a visually strong, print-exact engineering control dossier and regenerate matching PDFs.

**Architecture:** Create one isolated stylesheet for all document surfaces, then replace each document's HTML with purpose-specific layouts built from shared dossier primitives. Generate PDFs from the local HTML with Chromium, render them at 200 DPI, inspect page counts and geometry, then publish the validated files through a branch and merge.

**Tech Stack:** Static HTML5, CSS Grid/Flexbox, Chromium/Playwright PDF export, Python PDF render/inspection scripts, GitHub Pages.

## Global Constraints
- Resume must be exactly 2 US Letter pages.
- Cover letter must be exactly 1 US Letter page.
- Interview thesis brief must be exactly 3 US Letter pages.
- 90-day entry plan must be exactly 2 US Letter pages.
- AI Capability Work Package Review must be exactly 2 US Letter pages.
- Preserve verified candidate facts and metrics.
- Preserve independent-candidate disclaimer and avoid implying Bechtel endorsement.
- No new external runtime dependencies.
- No horizontal overflow at 390 px, 768 px, 1024 px, or 1440 px.

---

### Task 1: Shared Dossier Design System

**Files:**
- Create: `document-system.css`
- Create: `assets/brand/bechtel-logo-official.svg`

**Interfaces:**
- Consumes: existing document HTML content and brand colors.
- Produces: shared classes for `.dossier-page`, `.dossier-header`, `.control-band`, `.proof-rail`, `.section-label`, `.metric-chip`, `.decision-gate`, `.timeline`, and print rules.

- [ ] Build a standalone CSS system with web, mobile, and print layouts.
- [ ] Add exact US Letter sizing and page-break behavior.
- [ ] Add compact, accessible typography and high-contrast color tokens.
- [ ] Verify one synthetic page renders at 8.5 x 11 inches without overflow.
- [ ] Commit the shared design system.

### Task 2: Resume and Cover Letter

**Files:**
- Modify: `resume.html`
- Modify: `cover-letter.html`

**Interfaces:**
- Consumes: `document-system.css` shared primitives.
- Produces: 2-page resume and 1-page cover letter.

- [ ] Recompose the resume into mandate/proof and depth/transfer pages.
- [ ] Add proof rail, evidence anchors, operating mechanisms, and tighter experience blocks.
- [ ] Recompose the cover letter with thesis rail, readable letter column, evidence anchors, fit objection, and closing block.
- [ ] Export PDFs and confirm page counts 2 and 1.
- [ ] Render PDFs and inspect for clipping, sparse zones, and broken links.
- [ ] Commit resume and cover-letter redesign.

### Task 3: Interview Thesis Brief

**Files:**
- Modify: `interview-brief.html`

**Interfaces:**
- Consumes: dossier primitives.
- Produces: 3-page executive thesis document.

- [ ] Build page 1 as role mandate, tensions, and candidate thesis.
- [ ] Build page 2 as the AI Capability Work Package operating system and portfolio gates.
- [ ] Build page 3 as verified evidence, hard objection, discovery questions, and success measures.
- [ ] Export and confirm exactly 3 pages.
- [ ] Render and visually inspect all pages.
- [ ] Commit thesis brief redesign.

### Task 4: Entry Plan and Work Package Artifact

**Files:**
- Modify: `90-day-plan.html`
- Modify: `work-package-review.html`

**Interfaces:**
- Consumes: dossier primitives.
- Produces: 2-page entry plan and 2-page operating form.

- [ ] Compress the three repeated entry-plan pages into a two-page roadmap plus operating cadence.
- [ ] Add phase gates, outputs, stakeholder map, measures, risk controls, and day-90 receipts.
- [ ] Redesign the work package as a writable intake/control page plus disposition/value-receipt page.
- [ ] Export and confirm both documents are exactly 2 pages.
- [ ] Render and inspect writable areas, tables, and page density.
- [ ] Commit entry-plan and work-package redesign.

### Task 5: Research Register and Document Navigation

**Files:**
- Modify: `sources.html`
- Modify: document toolbar links in all redesigned HTML files.

**Interfaces:**
- Consumes: dossier visual language.
- Produces: a structured source register and consistent navigation.

- [ ] Create source-class cards for role, company, candidate evidence, and hypotheses.
- [ ] Add visible status labels for fact, public source, candidate evidence, and hypothesis.
- [ ] Verify every document link and PDF download target exists.
- [ ] Commit research register and navigation updates.

### Task 6: PDF Generation and Visual QA

**Files:**
- Create/replace: `docs/*.pdf`
- Test outputs: `/mnt/data/bechtel-redesign/renders/*`

**Interfaces:**
- Consumes: final HTML and CSS.
- Produces: validated PDFs and screenshots.

- [ ] Generate all PDFs with Chromium in Letter format and background graphics enabled.
- [ ] Inspect page counts with `pdfinfo` or `pdf_inspect.py`.
- [ ] Render every PDF at 200 DPI.
- [ ] Run a script checking missing local references and page overflow.
- [ ] Capture desktop and mobile screenshots of representative document views.
- [ ] Fix all visual defects and repeat the full verification loop.
- [ ] Commit final PDFs.

### Task 7: Publish

**Files:**
- All redesigned files on `redesign/document-dossier`.

**Interfaces:**
- Consumes: verified branch.
- Produces: merged main branch and GitHub Pages deployment.

- [ ] Open a pull request with page-count and QA evidence.
- [ ] Review changed filenames and patch.
- [ ] Merge the pull request.
- [ ] Verify the live GitHub Pages routes and document downloads.
