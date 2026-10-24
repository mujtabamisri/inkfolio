# Inkfolio Studio

**A free, local-first handwriting and notebook-layout studio.** Turn pasted text and imported documents into notebook-style pages, adjust handwritten lines independently, and export PNGs or PDFs.

## Live Demo

Try Inkfolio Studio directly in your browser:

**[🚀 Launch Inkfolio Studio](https://mujtabamisri.github.io/inkfolio/)**

## Features

- Paste text; import `.txt`, `.md`, or PDF files.
- 11 handwriting fonts, including Kalam, Handlee, Patrick Hand, Caveat, and others.
- Tune handwriting size, spacing, ink, opacity, and subtle per-character variation.
- Choose ruled, graph, dotted, plain, or red-margin notebook paper; upload a blank notebook photo.
- Select and drag individual lines with separate X/Y offsets and font-size adjustment; use arrow keys for precision.
- Preview multi-page results; export PNG images or a multi-page PDF.
- Best-effort preservation of PDF diagrams and page artwork on **additional illustration sheets**.
- Optional OCR for image-only/scanned PDFs using Tesseract.js; OCR model files may download on first use.
- No account, paid API, or application backend required. Editor settings and recent text are saved in browser storage.

## Run locally

Requirements: Node.js 20+ and npm.

```powershell
npm install
npm run dev
```

Open the URL printed by Vite, usually http://localhost:5173/.


## Notes and limitations

- Diagrams are placed on separate notebook illustration sheets, **not at their exact location between original paragraphs**.
- PDF image extraction is best effort: graphics overlapping selectable text may be partly masked.
- Scanned documents may retain visible original text in the artwork pages alongside newly extracted OCR text.
- OCR quality varies with scans, language, and page layout. Large documents can consume substantial browser memory.
- Per-line adjustments are indexed to rendered text lines; substantial changes to text wrapping or font may require realignment.
- Uploaded PDF artwork is retained in memory for the current browser session, not permanently persisted.
- Exported PDFs use rasterized pages, so exported text is not selectable.
- Use according to applicable academic or workplace disclosure requirements.

## Tech stack

Vite · Vanilla JavaScript · Canvas 2D · PDF.js · Tesseract.js · jsPDF · Fontsource handwriting fonts · Lucide.

## License

Project source code is available under the [MIT License](LICENSE). Third-party packages and fonts retain their own respective licenses.
