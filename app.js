const SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbz_mzulEZJF5PlhkGUzPXUX7u0Zjt784oHGnE-iI9lUBgAIrYl0VWOvPbWTUXgq_wcwgQ/exec";
const STORAGE_KEY = "suandok-news-history-v3";
const DRAFT_KEY = "suandok-news-draft-v3";
const LANG_KEY = "suandok-news-lang-v1";

const I18N = {
  en: {
    installApp: "Install App",
    heroSubtitle: "National Early Warning Score with bilingual workflow, escalation, trends, and bedside-friendly input.",
    patientContext: "Patient Context",
    patientContextSub: "Basic patient information for safe handover and better clinical context.",
    patientName: "Patient Name",
    hn: "HN",
    assessmentTime: "Assessment Time",
    age: "Age",
    sex: "Sex",
    male: "Male",
    female: "Female",
    other: "Other",
    ward: "Ward",
    bedNo: "Bed No.",
    diagnosis: "Diagnosis",
    admitDate: "Admit Date",
    location: "Location",
    clinicalNote: "Clinical Note",
    vitalSigns: "Vital Signs & NEWS Inputs",
    vitalSignsSub: "Quick bedside input with range checks, quick buttons, and previous-value hints.",
    respiratoryRate: "Respiratory Rate",
    perMin: "breaths/min",
    spo2: "SpO₂",
    oxygenType: "Oxygen Type",
    oxygenSupportDetail: "Room air / device / intervention",
    roomAir: "Room air",
    nasalCannula: "Nasal cannula",
    mask: "Mask",
    ventilator: "Ventilator",
    flowRate: "Flow rate (L/min)",
    temperature: "Temperature",
    systolicBP: "Systolic BP",
    heartRate: "Heart Rate",
    beatsPerMin: "beats/min",
    consciousness: "Consciousness (AVPU)",
    trendVisualization: "Trend & Visualization",
    trendVisualizationSub: "Track NEWS score, vital signs, and direction arrows over time.",
    newsTrend: "NEWS Trend",
    vitalTrend: "Vital Signs Trend",
    history: "History",
    historySub: "Recent assessments, escalation log, and local storage history.",
    clearHistory: "Clear History",
    time: "Time",
    patient: "Patient",
    score: "Score",
    risk: "Risk",
    redFlag: "RED",
    alertLog: "Alert Log",
    totalScore: "Total Score",
    riskLevel: "Risk Level",
    redScore: "RED Score",
    escalation: "Escalation",
    submitAssessment: "Submit Assessment",
    resetForm: "Reset",
    nursingAdvice: "Advice",
    low: "Low",
    medium: "Medium",
    high: "High",
    critical: "Critical",
    yes: "Yes",
    no: "No",
    none: "None",
    previousValue: "Previous",
    requiredMissing: "Please complete all required fields.",
    invalidRange: "Some values are out of the acceptable range.",
    extremeAlert: "Extreme values detected. Please recheck immediately.",
    confirmSubmit: "Confirm submission?",
    confirmReset: "Reset all current inputs?",
    savedLocalOnly: "Saved locally, but Google Sheet sync failed.",
    savedSuccess: "Saved successfully.",
    saving: "Saving...",
    draftSaved: "Draft autosaved",
    cleared: "History cleared.",
    noHistory: "No history yet.",
    noLog: "No alerts logged yet.",
    adviseLowTitle: "Low risk / continue routine monitoring",
    adviseLowBody: "Continue monitoring as ordered and repeat assessment if symptoms change.",
    adviseMediumTitle: "Medium risk / inform responsible nurse or physician",
    adviseMediumBody: "Increase frequency of observation and consider escalation according to ward policy.",
    adviseHighTitle: "High risk / urgent clinical review",
    adviseHighBody: "Notify medical team urgently and prepare intervention or transfer if needed.",
    adviseCriticalTitle: "Critical risk / immediate response",
    adviseCriticalBody: "Immediate escalation to emergency response / rapid response team is recommended.",
    alertLogLabel: "Alert",
    riskLabel: "Risk",
    escalationLabel: "Escalation",
    redDetected: "RED detected",
    redNotDetected: "No RED",
    roomAirFlowHint: "Flow rate is usually 0 for room air."
  },
  th: {
    installApp: "ติดตั้งแอป",
    heroSubtitle: "National Early Warning Score พร้อมระบบสองภาษา การแจ้งเตือน การแสดงแนวโน้ม และการกรอกข้อมูลที่เหมาะกับข้างเตียงผู้ป่วย",
    patientContext: "ข้อมูลผู้ป่วย",
    patientContextSub: "ข้อมูลพื้นฐานเพื่อการส่งต่อและเพิ่มบริบททางคลินิก",
    patientName: "ชื่อผู้ป่วย",
    hn: "HN",
    assessmentTime: "เวลาประเมิน",
    age: "อายุ",
    sex: "เพศ",
    male: "ชาย",
    female: "หญิง",
    other: "อื่น ๆ",
    ward: "Ward",
    bedNo: "เตียง",
    diagnosis: "Diagnosis",
    admitDate: "วันที่ Admit",
    location: "สถานที่ประเมิน",
    clinicalNote: "หมายเหตุทางคลินิก",
    vitalSigns: "สัญญาณชีพและข้อมูล NEWS",
    vitalSignsSub: "กรอกได้เร็ว มี range check ปุ่มลัด และแนะนำค่าครั้งก่อน",
    respiratoryRate: "อัตราการหายใจ",
    perMin: "ครั้ง/นาที",
    spo2: "SpO₂",
    oxygenType: "ชนิดการให้ออกซิเจน",
    oxygenSupportDetail: "Room air / อุปกรณ์ / intervention",
    roomAir: "Room air",
    nasalCannula: "Nasal cannula",
    mask: "Mask",
    ventilator: "Ventilator",
    flowRate: "อัตราการไหล (L/min)",
    temperature: "อุณหภูมิ",
    systolicBP: "ความดันตัวบน",
    heartRate: "อัตราการเต้นหัวใจ",
    beatsPerMin: "ครั้ง/นาที",
    consciousness: "ระดับความรู้สึกตัว (AVPU)",
    trendVisualization: "แนวโน้มและกราฟ",
    trendVisualizationSub: "ติดตาม NEWS, vital signs และลูกศรแนวโน้มย้อนหลัง",
    newsTrend: "กราฟ NEWS ย้อนหลัง",
    vitalTrend: "กราฟ Vital Signs",
    history: "ประวัติ",
    historySub: "ประวัติการประเมิน การแจ้งเตือน และข้อมูลที่บันทึกในเครื่อง",
    clearHistory: "ล้างประวัติ",
    time: "เวลา",
    patient: "ผู้ป่วย",
    score: "คะแนน",
    risk: "ความเสี่ยง",
    redFlag: "RED",
    alertLog: "บันทึกการแจ้งเตือน",
    totalScore: "คะแนนรวม",
    riskLevel: "ระดับความเสี่ยง",
    redScore: "RED Score",
    escalation: "ระดับการแจ้งเตือน",
    submitAssessment: "บันทึกการประเมิน",
    resetForm: "รีเซ็ต",
    nursingAdvice: "คำแนะนำ",
    low: "ต่ำ",
    medium: "ปานกลาง",
    high: "สูง",
    critical: "วิกฤต",
    yes: "พบ",
    no: "ไม่พบ",
    none: "ไม่มี",
    previousValue: "ค่าก่อนหน้า",
    requiredMissing: "กรุณากรอกข้อมูลที่จำเป็นให้ครบ",
    invalidRange: "มีค่าบางรายการอยู่นอกช่วงที่ยอมรับได้",
    extremeAlert: "พบค่าที่ผิดปกติอย่างมาก กรุณาตรวจสอบซ้ำทันที",
    confirmSubmit: "ยืนยันการบันทึกข้อมูลใช่หรือไม่",
    confirmReset: "ต้องการรีเซ็ตข้อมูลทั้งหมดใช่หรือไม่",
    savedLocalOnly: "บันทึกในเครื่องแล้ว แต่ส่ง Google Sheet ไม่สำเร็จ",
    savedSuccess: "บันทึกข้อมูลสำเร็จ",
    saving: "กำลังบันทึก...",
    draftSaved: "บันทึกฉบับร่างอัตโนมัติแล้ว",
    cleared: "ล้างประวัติเรียบร้อย",
    noHistory: "ยังไม่มีประวัติ",
    noLog: "ยังไม่มีรายการแจ้งเตือน",
    adviseLowTitle: "ความเสี่ยงต่ำ / ติดตามตามปกติ",
    adviseLowBody: "ติดตามอาการตามแผนการรักษา และประเมินซ้ำหากอาการเปลี่ยนแปลง",
    adviseMediumTitle: "ความเสี่ยงปานกลาง / แจ้งพยาบาลหรือแพทย์ประจำ",
    adviseMediumBody: "เพิ่มความถี่ในการเฝ้าระวัง และพิจารณา escalation ตามแนวทางของ ward",
    adviseHighTitle: "ความเสี่ยงสูง / ต้องได้รับการประเมินเร่งด่วน",
    adviseHighBody: "แจ้งทีมแพทย์โดยด่วน และเตรียม intervention หรือการย้ายระดับการดูแล",
    adviseCriticalTitle: "ภาวะวิกฤต / ต้องตอบสนองทันที",
    adviseCriticalBody: "แนะนำให้ escalate ไปยังทีมฉุกเฉินหรือ rapid response team ทันที",
    alertLogLabel: "แจ้งเตือน",
    riskLabel: "ความเสี่ยง",
    escalationLabel: "Escalation",
    redDetected: "พบ RED",
    redNotDetected: "ไม่พบ RED",
    roomAirFlowHint: "Room air โดยทั่วไปอัตราการไหลควรเป็น 0"
  }
};

const elements = {
  formRoot: document.body,
  fields: {
    patientName: document.getElementById("patientName"),
    hn: document.getElementById("hn"),
    assessmentTime: document.getElementById("assessmentTime"),
    age: document.getElementById("age"),
    sex: document.getElementById("sex"),
    ward: document.getElementById("ward"),
    bedNo: document.getElementById("bedNo"),
    diagnosis: document.getElementById("diagnosis"),
    admitDate: document.getElementById("admitDate"),
    location: document.getElementById("location"),
    note: document.getElementById("note"),
    respiratoryRate: document.getElementById("respiratoryRate"),
    spo2: document.getElementById("spo2"),
    spo2Scale: document.getElementById("spo2Scale"),
    oxygenType: document.getElementById("oxygenType"),
    flowRate: document.getElementById("flowRate"),
    temperature: document.getElementById("temperature"),
    systolicBP: document.getElementById("systolicBP"),
    heartRate: document.getElementById("heartRate"),
    consciousness: document.getElementById("consciousness")
  },
  scoreOutput: document.getElementById("totalScore"),
  urgencyLabel: document.getElementById("urgencyLabel"),
  redFlag: document.getElementById("redFlag"),
  escalationBox: document.getElementById("escalationBox"),
  adviceBox: document.getElementById("adviceBox"),
  saveBtn: document.getElementById("saveBtn"),
  resetBtn: document.getElementById("resetBtn"),
  clearHistoryBtn: document.getElementById("clearHistoryBtn"),
  historyTable: document.getElementById("historyTable"),
  alertLog: document.getElementById("alertLog"),
  validationBox: document.getElementById("validationBox"),
  saveStatus: document.getElementById("saveStatus"),
  langThBtn: document.getElementById("langThBtn"),
  langEnBtn: document.getElementById("langEnBtn"),
  draftToast: document.getElementById("draftToast"),
  installBtn: document.getElementById("installBtn")
};

let deferredPrompt = null;
let scoreChart = null;
let vitalsChart = null;
let draftToastTimer = null;

const RANGES = {
  age: { min: 0, max: 120, extremeMin: 0, extremeMax: 120 },
  respiratoryRate: { min: 0, max: 80, extremeMin: 4, extremeMax: 60 },
  spo2: { min: 0, max: 100, extremeMin: 50, extremeMax: 100 },
  flowRate: { min: 0, max: 100, extremeMin: 0, extremeMax: 30 },
  temperature: { min: 30, max: 45, extremeMin: 33, extremeMax: 42 },
  systolicBP: { min: 0, max: 300, extremeMin: 50, extremeMax: 250 },
  heartRate: { min: 0, max: 250, extremeMin: 25, extremeMax: 180 }
};

const REQUIRED_FIELDS = [
  "patientName", "hn", "assessmentTime", "age", "sex", "ward", "bedNo", "admitDate", "location",
  "respiratoryRate", "spo2", "oxygenType", "temperature", "systolicBP", "heartRate", "consciousness"
];

function t(key) {
  const lang = getCurrentLanguage();
  return I18N[lang][key] ?? key;
}

function getCurrentLanguage() {
  return localStorage.getItem(LANG_KEY) || "th";
}

function setLanguage(lang) {
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang === "th" ? "th" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (key) el.textContent = t(key);
  });
  elements.langThBtn.classList.toggle("active", lang === "th");
  elements.langEnBtn.classList.toggle("active", lang === "en");
  renderEverything();
}

function getHistory() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
}

function saveHistory(history) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

function getDraft() {
  return JSON.parse(localStorage.getItem(DRAFT_KEY) || "{}");
}

function setDraft(draft) {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
}

function getFormData() {
  const data = {};
  Object.entries(elements.fields).forEach(([key, el]) => {
    data[key] = el.value ?? "";
  });
  return data;
}

function setFormData(data = {}) {
  Object.entries(elements.fields).forEach(([key, el]) => {
    if (data[key] !== undefined) el.value = data[key];
  });
}

function numericValue(key) {
  const raw = elements.fields[key].value;
  if (raw === "" || raw === null || raw === undefined) return null;
  return Number(raw);
}

function scoreRespiratoryRate(value) {
  if (value === null) return 0;
  if (value <= 8) return 3;
  if (value <= 11) return 1;
  if (value <= 20) return 0;
  if (value <= 24) return 2;
  return 3;
}

function scoreSpO2(value, scale) {
  if (value === null) return 0;
  if (scale === "2") {
    if (value <= 83) return 3;
    if (value <= 85) return 2;
    if (value <= 87) return 1;
    if (value <= 92) return 0;
    if (value <= 93) return 1;
    if (value <= 95) return 2;
    return 3;
  }
  if (value <= 91) return 3;
  if (value <= 93) return 2;
  if (value <= 95) return 1;
  return 0;
}

function scoreOxygenSupport(type) {
  return type && type !== "room_air" ? 2 : 0;
}

function scoreTemperature(value) {
  if (value === null) return 0;
  if (value <= 35.0) return 3;
  if (value <= 36.0) return 1;
  if (value <= 38.0) return 0;
  if (value <= 39.0) return 1;
  return 2;
}

function scoreSystolicBP(value) {
  if (value === null) return 0;
  if (value <= 90) return 3;
  if (value <= 100) return 2;
  if (value <= 110) return 1;
  if (value <= 219) return 0;
  return 3;
}

function scoreHeartRate(value) {
  if (value === null) return 0;
  if (value <= 40) return 3;
  if (value <= 50) return 1;
  if (value <= 90) return 0;
  if (value <= 110) return 1;
  if (value <= 130) return 2;
  return 3;
}

function scoreConsciousness(value) {
  if (!value) return 0;
  return value === "A" ? 0 : 3;
}

function calculateAssessment(data = getFormData()) {
  const scores = {
    respiratoryRate: scoreRespiratoryRate(toNumber(data.respiratoryRate)),
    spo2: scoreSpO2(toNumber(data.spo2), data.spo2Scale || "1"),
    oxygenSupport: scoreOxygenSupport(data.oxygenType),
    temperature: scoreTemperature(toNumber(data.temperature)),
    systolicBP: scoreSystolicBP(toNumber(data.systolicBP)),
    heartRate: scoreHeartRate(toNumber(data.heartRate)),
    consciousness: scoreConsciousness(data.consciousness)
  };
  const total = Object.values(scores).reduce((sum, value) => sum + value, 0);
  const red = Object.values(scores).some(v => v === 3);
  const risk = getRiskLevel(total);
  const escalation = getEscalation(total, red);
  return { scores, total, red, risk, escalation };
}

function toNumber(value) {
  if (value === "" || value === null || value === undefined) return null;
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function getRiskLevel(score) {
  if (score >= 7) return "critical";
  if (score >= 5) return "high";
  if (score >= 3) return "medium";
  return "low";
}

function getEscalation(score, red) {
  if (score >= 7 || red) return "critical";
  if (score >= 5) return "high";
  if (score >= 3) return "medium";
  return "low";
}

function validateData(data = getFormData()) {
  const messages = [];
  const extremes = [];
  let hasRequiredError = false;
  let hasRangeError = false;

  REQUIRED_FIELDS.forEach(key => {
    const el = elements.fields[key];
    const value = data[key];
    const empty = value === "" || value === null || value === undefined;
    el.classList.toggle("input-invalid", empty);
    if (empty) hasRequiredError = true;
  });

  Object.entries(RANGES).forEach(([key, range]) => {
    const el = elements.fields[key];
    const value = toNumber(data[key]);
    if (value === null) return;
    const outOfRange = value < range.min || value > range.max;
    if (outOfRange) hasRangeError = true;
    el.classList.toggle("input-invalid", outOfRange);
    const extreme = value < range.extremeMin || value > range.extremeMax;
    if (extreme) extremes.push(key);
  });

  if (data.oxygenType === "room_air" && toNumber(data.flowRate) > 0) {
    extremes.push("flowRate");
  }

  if (hasRequiredError) messages.push({ type: "danger", text: t("requiredMissing") });
  if (hasRangeError) messages.push({ type: "warning", text: t("invalidRange") });
  if (extremes.length > 0) messages.push({ type: "danger", text: t("extremeAlert") });

  return { valid: !hasRequiredError && !hasRangeError, messages, extremes };
}

function showValidation(messages) {
  if (!messages.length) {
    elements.validationBox.className = "validation-box empty";
    elements.validationBox.innerHTML = "";
    return;
  }
  elements.validationBox.className = "validation-box";
  elements.validationBox.innerHTML = messages.map(m => `<div class="validation-item text-${m.type === "warning" ? "warning" : "danger"}">• ${m.text}</div>`).join("");
}

function updateScoreChips(assessment) {
  [
    ["respiratoryRateScore", assessment.scores.respiratoryRate],
    ["spo2Score", assessment.scores.spo2],
    ["oxygenSupportScore", assessment.scores.oxygenSupport],
    ["temperatureScore", assessment.scores.temperature],
    ["systolicBPScore", assessment.scores.systolicBP],
    ["heartRateScore", assessment.scores.heartRate],
    ["consciousnessScore", assessment.scores.consciousness]
  ].forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });
}

function applyRiskClass(el, prefix, level) {
  el.className = `${prefix} ${prefix}-${level}`;
  el.textContent = t(level);
}

function updateSummary() {
  const data = getFormData();
  const assessment = calculateAssessment(data);
  const validation = validateData(data);

  elements.scoreOutput.textContent = assessment.total;
  applyRiskClass(elements.urgencyLabel, "risk-pill risk", assessment.risk);
  elements.redFlag.className = `risk-pill ${assessment.red ? "risk-critical" : "risk-neutral"}`;
  elements.redFlag.textContent = assessment.red ? t("yes") : t("no");
  applyRiskClass(elements.escalationBox, "escalation-box escalation", assessment.escalation);
  updateScoreChips(assessment);
  showValidation(validation.messages);
  updateAdvice(assessment);
  updateHintsAndTrends();
}

function updateAdvice(assessment) {
  const mapping = {
    low: ["adviseLowTitle", "adviseLowBody"],
    medium: ["adviseMediumTitle", "adviseMediumBody"],
    high: ["adviseHighTitle", "adviseHighBody"],
    critical: ["adviseCriticalTitle", "adviseCriticalBody"]
  };
  const [titleKey, bodyKey] = mapping[assessment.escalation];
  const items = [
    { title: t(titleKey), body: t(bodyKey) },
    {
      title: t("alertLogLabel"),
      body: `${t("riskLabel")}: ${t(assessment.risk)} · ${t("escalationLabel")}: ${t(assessment.escalation)} · ${assessment.red ? t("redDetected") : t("redNotDetected")}`
    }
  ];
  if (elements.fields.oxygenType.value === "room_air" && toNumber(elements.fields.flowRate.value) > 0) {
    items.push({ title: "Flow", body: t("roomAirFlowHint") });
  }
  elements.adviceBox.innerHTML = items.map(item => `<div class="advice-item"><strong>${item.title}</strong><span>${item.body}</span></div>`).join("");
}

function lastHistoryEntry() {
  const history = getHistory();
  return history.length ? history[history.length - 1] : null;
}

function trendArrow(current, previous) {
  if (current === null || previous === null || previous === undefined) return "—";
  if (current > previous) return "↑";
  if (current < previous) return "↓";
  return "→";
}

function updateHintsAndTrends() {
  const last = lastHistoryEntry();
  const hintPairs = [
    "respiratoryRate",
    "spo2",
    "temperature",
    "systolicBP",
    "heartRate"
  ];
  hintPairs.forEach(key => {
    const hintEl = document.getElementById(`${key}Hint`);
    const trendEl = document.getElementById(`${key}Trend`);
    const current = toNumber(elements.fields[key].value);
    const prev = last ? toNumber(last.raw[key]) : null;
    if (hintEl) hintEl.textContent = last && prev !== null ? `${t("previousValue")}: ${prev}` : "";
    if (trendEl) trendEl.textContent = trendArrow(current, prev);
  });
}

function showDraftToast(message) {
  elements.draftToast.textContent = message;
  elements.draftToast.classList.add("show");
  clearTimeout(draftToastTimer);
  draftToastTimer = setTimeout(() => elements.draftToast.classList.remove("show"), 1400);
}

function autosaveDraft() {
  const draft = getFormData();
  setDraft(draft);
  showDraftToast(t("draftSaved"));
}

function renderHistory() {
  const history = getHistory();
  if (!history.length) {
    elements.historyTable.innerHTML = `<tr><td colspan="6" class="text-center text-secondary">${t("noHistory")}</td></tr>`;
    return;
  }
  elements.historyTable.innerHTML = history.slice().reverse().map(item => {
    const dt = new Date(item.savedAt);
    return `
      <tr>
        <td>${dt.toLocaleString()}</td>
        <td>${escapeHtml(item.raw.patientName || "-")}</td>
        <td>${escapeHtml(item.raw.hn || "-")}</td>
        <td>${item.total}</td>
        <td><span class="risk-pill risk-${item.risk}">${t(item.risk)}</span></td>
        <td>${item.red ? t("yes") : t("no")}</td>
      </tr>
    `;
  }).join("");
}

function renderAlertLog() {
  const history = getHistory().slice().reverse();
  if (!history.length) {
    elements.alertLog.innerHTML = `<div class="text-secondary">${t("noLog")}</div>`;
    return;
  }
  elements.alertLog.innerHTML = history.map(item => `
    <div class="log-entry ${item.escalation}">
      <div class="fw-semibold">${escapeHtml(item.raw.patientName || "-")} · HN ${escapeHtml(item.raw.hn || "-")}</div>
      <div class="small text-secondary">${new Date(item.savedAt).toLocaleString()}</div>
      <div class="mt-2">${t("riskLabel")}: <strong>${t(item.risk)}</strong> · ${t("escalationLabel")}: <strong>${t(item.escalation)}</strong> · ${item.red ? t("redDetected") : t("redNotDetected")}</div>
      <div class="small mt-1">NEWS ${item.total}</div>
    </div>
  `).join("");
}

function buildScoreChart() {
  const ctx = document.getElementById("scoreChart");
  const history = getHistory();
  const labels = history.map(item => new Date(item.savedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  const scores = history.map(item => item.total);

  if (scoreChart) scoreChart.destroy();
  scoreChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "NEWS",
        data: scores,
        tension: 0.25,
        borderWidth: 2,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: { legend: { labels: { color: "#e5eefc" } } },
      scales: {
        x: { ticks: { color: "#b7c7dd" }, grid: { color: "rgba(183,199,221,.12)" } },
        y: { ticks: { color: "#b7c7dd" }, grid: { color: "rgba(183,199,221,.12)" }, beginAtZero: true }
      }
    }
  });
}

function buildVitalsChart() {
  const ctx = document.getElementById("vitalsChart");
  const history = getHistory();
  const labels = history.map(item => new Date(item.savedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));

  if (vitalsChart) vitalsChart.destroy();
  vitalsChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        { label: "RR", data: history.map(i => toNumber(i.raw.respiratoryRate)), borderWidth: 2, tension: 0.25 },
        { label: "HR", data: history.map(i => toNumber(i.raw.heartRate)), borderWidth: 2, tension: 0.25 },
        { label: "SBP", data: history.map(i => toNumber(i.raw.systolicBP)), borderWidth: 2, tension: 0.25 },
        { label: "SpO₂", data: history.map(i => toNumber(i.raw.spo2)), borderWidth: 2, tension: 0.25 },
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: { legend: { labels: { color: "#e5eefc" } } },
      scales: {
        x: { ticks: { color: "#b7c7dd" }, grid: { color: "rgba(183,199,221,.12)" } },
        y: { ticks: { color: "#b7c7dd" }, grid: { color: "rgba(183,199,221,.12)" }, beginAtZero: true }
      }
    }
  });
}

function renderCharts() {
  buildScoreChart();
  buildVitalsChart();
}

function renderEverything() {
  updateSummary();
  renderHistory();
  renderAlertLog();
  renderCharts();
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function setLoading(isLoading) {
  document.body.classList.toggle("loading-state", isLoading);
  elements.saveBtn.disabled = isLoading;
  elements.resetBtn.disabled = isLoading;
  elements.saveStatus.textContent = isLoading ? t("saving") : "";
}

async function saveToGoogleSheet(payload) {
  try {
    const res = await fetch(SHEET_WEBAPP_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    });
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch {
      return { ok: true, raw: text };
    }
  } catch (error) {
    throw error;
  }
}

async function handleSave() {
  const data = getFormData();
  const assessment = calculateAssessment(data);
  const validation = validateData(data);

  updateSummary();

  if (!validation.valid) return;
  if (!window.confirm(t("confirmSubmit"))) return;

  const payload = {
    savedAt: new Date().toISOString(),
    raw: data,
    total: assessment.total,
    risk: assessment.risk,
    escalation: assessment.escalation,
    red: assessment.red,
    scores: assessment.scores
  };

  const history = getHistory();
  history.push(payload);
  saveHistory(history);
  setLoading(true);

  try {
    await saveToGoogleSheet(payload);
    elements.saveStatus.textContent = t("savedSuccess");
  } catch (error) {
    elements.saveStatus.textContent = t("savedLocalOnly");
  } finally {
    setLoading(false);
  }

  setDraft({});
  renderEverything();
}

function handleReset() {
  if (!window.confirm(t("confirmReset"))) return;
  Object.values(elements.fields).forEach(el => { el.value = ""; });
  elements.fields.spo2Scale.value = "1";
  elements.fields.oxygenType.value = "room_air";
  setDefaultDateTime();
  localStorage.removeItem(DRAFT_KEY);
  elements.saveStatus.textContent = "";
  renderEverything();
}

function setDefaultDateTime() {
  if (!elements.fields.assessmentTime.value) {
    const now = new Date();
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0,16);
    elements.fields.assessmentTime.value = local;
  }
  if (!elements.fields.admitDate.value) {
    const today = new Date().toISOString().slice(0,10);
    elements.fields.admitDate.value = today;
  }
}

function bindQuickButtons() {
  document.querySelectorAll(".quick-buttons").forEach(container => {
    const target = container.dataset.target;
    container.querySelectorAll(".quick-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        elements.fields[target].value = btn.textContent.trim();
        updateSummary();
        autosaveDraft();
      });
    });
  });
}

function bindAutosave() {
  Object.values(elements.fields).forEach(el => {
    el.addEventListener("input", () => {
      updateSummary();
      autosaveDraft();
    });
    el.addEventListener("change", () => {
      updateSummary();
      autosaveDraft();
    });
  });
}

function restoreDraft() {
  const draft = getDraft();
  if (Object.keys(draft).length) setFormData(draft);
}

function clearHistory() {
  localStorage.removeItem(STORAGE_KEY);
  elements.saveStatus.textContent = t("cleared");
  renderEverything();
}

function setupPWA() {
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("./service-worker.js");
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    elements.installBtn.classList.remove("d-none");
  });
  elements.installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    elements.installBtn.classList.add("d-none");
  });
}

function initKeyboardSupport() {
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "s") {
      event.preventDefault();
      handleSave();
    }
  });
}

function initLanguageButtons() {
  elements.langThBtn.addEventListener("click", () => setLanguage("th"));
  elements.langEnBtn.addEventListener("click", () => setLanguage("en"));
}

function init() {
  setDefaultDateTime();
  restoreDraft();
  setLanguage(getCurrentLanguage());
  bindQuickButtons();
  bindAutosave();
  initKeyboardSupport();
  initLanguageButtons();

  elements.saveBtn.addEventListener("click", handleSave);
  elements.resetBtn.addEventListener("click", handleReset);
  elements.clearHistoryBtn.addEventListener("click", clearHistory);

  renderEverything();
  setupPWA();
}

document.addEventListener("DOMContentLoaded", init);
