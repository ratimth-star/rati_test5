# SUANDOK NEWS Pro

Responsive bilingual PWA for NEWS assessment.

## Added features
- Patient Context: age, sex, ward, bed number, diagnosis, admit date
- Alert & Escalation: Critical / High / Medium / Low
- Alert log
- NEWS score trend chart
- Vital signs trend chart
- Trend arrows
- Quick input buttons
- Previous-value suggestion
- Oxygen type and flow rate
- Validation with required fields, range checks, and extreme alerts
- Auto save draft
- Reset with confirmation
- Submit confirmation
- Loading state
- Thai / English language switch

## Files
- `index.html`
- `styles.css`
- `app.js`
- `manifest.json`
- `service-worker.js`
- `icons/`

## Notes
- Google Sheet sync still uses the configured Apps Script URL in `app.js`
- All history and drafts are also stored locally in browser storage
