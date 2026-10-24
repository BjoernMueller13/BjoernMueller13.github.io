/* =========================================================
   Björn Müller – portfolio (GTA VI-inspired)
   Content: 01-Bewerbung/Lebenslauf/CV-Master.md,
            06-Portfolio-Website/wissensstamm-anekdoten-hintergruende.md,
            02-Reisen/vergangene_reisen.md
   ========================================================= */

/* ---------- content ---------- */
const MISSIONS = [
  {
    no: "07", dates: "11/2025 – Now", place: "Essen, Germany",
    title: "Senior Consultant", sub: "Exxeta · Business Process Automation",
    desc: "Process expert and agile coach in HiveMind, the company-wide automation and AI program. Builds n8n and Power Platform workflows across JIRA, SAP, SharePoint and Microsoft 365.",
    reward: "Agentic AI unlocked",
    art: { pal: "neon", motif: "nodes", mx: 280, my: 230, ms: 1.25, city: true, sunX: 250 },
    pill: "pink",
    bullets: [
      "Analyzes and optimizes end-to-end business processes as the interface between business, IT and management; designs target processes including governance and role models",
      "Designs and implements workflow automations with n8n and Microsoft Power Platform, integrating JIRA, SAP, SharePoint, Microsoft 365 and Entra ID",
      "Identifies opportunities for AI-driven processes and designs agent-based, Copilot and knowledge-platform solutions, including data, process and access-rights concepts",
      "Advises business units and executives, facilitates workshops and coaches teams on agile working, process management and automation",
      "Owns use-case prioritization and the build-out of a scalable automation and AI platform as Process Expert & Agile Coach in the program “HiveMind”",
      "Defines KPIs to measure the success of automation initiatives and supports rollout and adoption"
    ],
    stack: ["n8n", "Power Platform", "Microsoft Copilot", "JIRA", "Confluence", "SharePoint", "Microsoft 365", "Entra ID", "SAP", "HubSpot", "APIs"]
  },
  {
    no: "06", dates: "04/2023 – 10/2024", place: "Remote · for CARIAD / Volkswagen",
    title: "Product Owner", sub: "itemis AG",
    desc: "Led a 7-person SAFe team building an architecture modeling tool for CARIAD. The new toolchain cut code generation and integration from 12 weeks to under 4 days.",
    reward: "12 weeks → 4 days",
    art: { pal: "miami", motif: "graph", mx: 540, my: 220, ms: 1.2, city: true, sunX: 560 },
    pill: "peach", left: true,
    bullets: [
      "Led a cross-functional, 7-person agile team (5 software engineers, 1 requirements engineer, 1 Scrum Master) under SAFe principles",
      "Played a key role in introducing a new toolchain that cut CARIAD’s code generation and integration process from an average of 12 weeks to under 4 days",
      "Developed 4 junior engineers to mid-level proficiency within about one year through weekly team meetings and individual feedback",
      "Owned backlog creation, grooming and prioritization as well as (pre-)PI planning, story breakdown, dependency clarification and estimation",
      "Primary point of contact for CARIAD; aligned weekly with product manager, system architect and release train engineer and presented features in system demos"
    ],
    stack: ["JIRA", "Confluence", "Miro", "MPS", "Notion", "Google Workspace", "SAFe"]
  },
  {
    no: "05", dates: "02/2020 – 03/2023", place: "Munich / Wuppertal",
    title: "Sensing Function Owner", sub: "Aptiv · Product Owner & Cluster Lead from 11/2021",
    desc: "Owned camera-based object detection for BMW’s Level 2+ to Level 3 automated driving, supplied by Mobileye. Grew a cluster of up to 6 function owners and 4 master’s students.",
    reward: "Promoted to Cluster Lead",
    art: { pal: "night", motif: "boxes", mx: 300, my: 300, ms: 1.15, city: true, stars: true, sunX: 620, sunR: 80 },
    pill: "lime",
    bullets: [
      "End-to-end responsibility for the upper V-model levels (Sys1, Sys2, partially Sys3) of the camera-based object detection software for BMW Service Pack 2021 (iNext, 5 Series, 7 Series)",
      "Took on product ownership from November 2021 for a cluster of up to 6 function owners and 4 master’s students (Road Marking Detection, Visual Landmarks)",
      "Facilitated daily scrums, sprint plannings, refinements and retrospectives; drove backlog management and PI planning",
      "First point of contact for problem tickets toward BMW; coordinated HIL/SIL and real-world test data analysis and SOTIF homologation analyses",
      "Represented Aptiv in workshops with OEMs and Tier-2 suppliers"
    ],
    stack: ["DOORS", "Confluence", "JIRA", "MS Project", "Python", "SOTIF", "Mobileye"]
  },
  {
    no: "04", dates: "12/2018 – 01/2020", place: "Munich · for the BMW Group",
    title: "Chief Engineer ADAS", sub: "EDAG Engineering",
    desc: "Technical counterpart to BMW’s sub-project lead, steering supplier Valeo on the automated parking ECU: architecture reviews, degradation concepts, Ethernet analysis.",
    reward: "Supplier steering",
    art: { pal: "teal", motif: "sensor", mx: 520, my: 300, ms: 1.1, city: true, sunX: 200 },
    pill: "lilac", left: true,
    bullets: [
      "Directed supplier Valeo for the automated parking control unit of BMW Service Pack 2021; reviewed hardware, software and system architecture",
      "Created degradation and error-handling concepts",
      "Led hardware design reviews on electrical/electromagnetic robustness and base software reviews on ECU boot behavior",
      "Analyzed Ethernet bus communication with Wireshark"
    ],
    stack: ["DOORS", "JIRA", "Confluence", "Wireshark", "E-Sys", "Ediabas"]
  },
  {
    no: "03", dates: "10/2017 – 07/2018", place: "Shanghai, China",
    title: "Customer Data Analytics", sub: "BMW Technology Office China · Working Student",
    desc: "Built Python pipelines on a Hadoop cluster for real customer vehicle data from Chinese traffic and ran data-collection drives in Beijing, Shanghai and Guangzhou.",
    reward: "“Far exceeds requirements”",
    art: { pal: "dusk", motif: "tower", mx: 260, my: 250, ms: 1.2, city: true, sunX: 560 },
    pill: "pink",
    bullets: [
      "Developed algorithms to pre-check and evaluate time-series customer vehicle data (Hadoop, Python/Pandas/Matplotlib) for “Customer Data Analytics China”",
      "Organized data-collection drives in Beijing, Shanghai and Guangzhou and logged CAN and FlexRay bus data from BMW 3 Series, 5 Series and X1",
      "Top ratings for reliability, resilience and initiative across 202 working days with zero sick days",
      "Master’s thesis on parking-maneuver detection from CAN/FlexRay data grew out of this role"
    ],
    stack: ["Python", "Pandas", "Matplotlib", "Hadoop", "Microsoft Azure", "CAN", "FlexRay"]
  },
  {
    no: "01", dates: "09/2011 – 10/2017", place: "Heiligenhaus, Germany",
    title: "From Workshop to Engineering", sub: "Kiekert AG · Apprentice, Intern, Working Student",
    desc: "Industrial mechanic apprenticeship inside a cooperative engineering degree. Designed test rigs for automotive door locks in CATIA V5, including a pneumatic rig from −40 °C to +85 °C.",
    reward: "Origin story",
    art: { pal: "jade", motif: "gear", mx: 560, my: 230, ms: 1.2, city: false, sunX: 250 },
    pill: "peach", left: true,
    bullets: [
      "Vocational qualification as industrial mechanic (maintenance), IHK Düsseldorf, as part of a cooperative engineering degree",
      "Designed test rigs and fixtures for automotive door locks in CATIA V5",
      "Built a pneumatic durability test rig for −40 °C to +85 °C and a PCB for signal conversion",
      "Bachelor’s thesis on pneumatic actuation for durability test rigs"
    ],
    stack: ["CATIA V5", "PLC / Simatic S7", "Pneumatics", "PCB design"]
  }
];

const FEATURED = [
  { eye: "Now playing", title: "Agentic AI\n@ Exxeta", m: 0, art: { pal: "neon", motif: "nodes", mx: 400, my: 200, ms: 1.1, city: true, sunX: 400, sunR: 150 } },
  { eye: "Boss fight", title: "12 weeks\n→ 4 days", m: 1, art: { pal: "miami", motif: "graph", mx: 400, my: 190, ms: 1.1, city: true, sunX: 400, sunR: 150 } },
  { eye: "Unlocked", title: "Shanghai\n2017", m: 4, art: { pal: "dusk", motif: "tower", mx: 400, my: 210, ms: 1.1, city: true, sunX: 400, sunR: 150 } }
];

const ARSENAL = [
  { eye: "Primary", title: "Product Ownership & Agile Delivery", art: { pal: "miami", motif: "people", mx: 400, my: 170, ms: 1.1, sunX: 400, city: true },
    tags: ["Product Ownership", "Requirements Engineering (IREB)", "Backlog & Roadmap", "Stakeholder Management", "SAFe", "Scrum (PSM I)", "Kanban"] },
  { eye: "Special", title: "Workflow Automation & AI", art: { pal: "neon", motif: "nodes", mx: 400, my: 170, ms: 1, sunX: 400, city: true },
    tags: ["n8n", "Power Automate", "Microsoft Copilot", "Agent-based systems", "Prompt engineering", "Enterprise AI architecture", "Knowledge management"] },
  { eye: "Sidearm", title: "Data & Programming", art: { pal: "night", motif: "code", mx: 400, my: 170, ms: 1.1, stars: true, sunX: 400, sunR: 90, city: true },
    tags: ["Python (PCEP)", "SQL / NoSQL", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter"] },
  { eye: "Utility", title: "Enterprise Systems & Tools", art: { pal: "teal", motif: "chart", mx: 400, my: 170, ms: 1.1, sunX: 400, city: true },
    tags: ["JIRA", "Confluence", "DOORS", "SharePoint", "Microsoft 365", "Entra ID", "SAP", "HubSpot", "MS Project", "Miro"] },
  { eye: "Heavy", title: "Domain Expertise: Automotive & ADAS", wide: true, art: { pal: "dusk", motif: "boxes", mx: 560, my: 260, ms: 1, sunX: 220, city: true },
    tags: ["Computer vision & object detection", "Automated driving L2–L3", "ISO 26262 functional safety", "SOTIF", "CAN / FlexRay / Ethernet", "V-model"] }
];

/* Self-assessment, 0–10. Adjust freely. */
const STATS = [
  ["Product Ownership", 9, "#e77fc0"], ["Stakeholder Management", 9, "#e77fc0"],
  ["Agile Coaching / Scrum", 8.5, "#f39bb3"], ["Workflow Automation", 8, "#f39bb3"],
  ["Automotive / ADAS", 8.5, "#f7c8a0"], ["Python & Data", 7, "#f7c8a0"],
  ["English · C1", 8.5, "#d7f27a"], ["Spanish · A2", 3, "#d7f27a"]
];

const QUESTS = [
  { title: "Padel & Beach Volleyball", text: "Team ball sports since age 11. “Where’s the ball?” is a lifelong reflex, these days on a padel court or in the sand.", tag: "Active", art: { pal: "miami", motif: "racket", mx: 400, my: 230, ms: .9, sunX: 600, city: false } },
  { title: "Scuba Diving", text: "Started during the pandemic and felt at home right away. Underwater he is calmer than on land, which still surprises him.", tag: "Since 2020", art: { pal: "ocean", motif: "diver", mx: 400, my: 230, ms: 1, sun: false, city: false } },
  { title: "Cooking as a Souvenir", text: "Bringing places home: Chinese since Shanghai, Japanese since 2026, Colombian, and Moroccan, in a tajine carried back from Morocco.", tag: "Daily", art: { pal: "dusk", motif: "tajine", mx: 400, my: 250, ms: 1, sunX: 400, city: false } },
  { title: "Kegelverein Crew", text: "Founding member and former board member of his bowling club. Leadership without a job title, organizing people because it is fun.", tag: "Founding member", art: { pal: "neon", motif: "pins", mx: 400, my: 250, ms: 1, sunX: 620, city: true } },
  { title: "Basketball & Football", text: "Basketball from 11 to 18, football during the master’s. Noticed that pressing in football is the basketball trap, one to one.", tag: "Pattern recognition", art: { pal: "jade", motif: "ball", mx: 400, my: 230, ms: 1, sunX: 220, city: true } },
  { title: "Spanish, Salsa & Bachata", text: "The most beautiful language, learned as a deliberate challenge. A2 for now, fuelled by salsa, bachata and reggaeton.", tag: "Learning", art: { pal: "miami", motif: "chat", mx: 400, my: 230, ms: 1, sunX: 400, city: true } }
];

const CONTINENTS = [
  { name: "Europe", list: ["Germany", "Spain", "Portugal", "Italy", "Greece", "Malta", "France", "UK", "Ireland", "Austria", "Hungary", "Poland", "Czechia", "Slovakia", "Croatia", "Serbia", "Romania", "Turkey"] },
  { name: "Asia", list: ["Japan", "South Korea", "China", "Hong Kong", "Vietnam", "Thailand", "Malaysia", "Philippines", "Israel"] },
  { name: "Americas & Africa", list: ["Colombia (4 months)", "Mexico", "Peru", "Cuba", "Guatemala", "Jamaica", "Puerto Rico", "Morocco"] }
];

const TRAINING = [
  { title: "M.Sc. Mechatronics", text: "Hochschule Bochum. Thesis: parking-maneuver detection from CAN/FlexRay data, written alongside BMW in Shanghai.", tag: "2015 – 2018", art: { pal: "dusk", motif: "grad", mx: 400, my: 250, ms: .9, sunX: 600 } },
  { title: "B.Eng. Mechatronics & IT", text: "Hochschule Bochum, cooperative degree with Kiekert. Thesis: pneumatic actuation for durability test rigs.", tag: "2011 – 2015", art: { pal: "miami", motif: "grad", mx: 400, my: 250, ms: .9, sunX: 200 } },
  { title: "Industrial Mechanic", text: "Vocational qualification in maintenance, Kiekert AG / IHK Düsseldorf. Where the hands-on mindset comes from.", tag: "2011 – 2013", art: { pal: "jade", motif: "gear", mx: 400, my: 250, ms: .8, sunX: 600 } },
  { title: "Data Science & IT PM", text: "cimdata Bildungsakademie: Python, AI, SQL/NoSQL and Scrum.", tag: "2024 – 2025", art: { pal: "night", motif: "code", mx: 400, my: 250, ms: .9, stars: true, sunX: 200, sunR: 80 } },
  { title: "Professional Scrum Master I", text: "Scrum.org certification.", tag: "2024", art: { pal: "neon", motif: "cert", mx: 400, my: 250, ms: .9, sunX: 620 } },
  { title: "ISO 26262 Functional Safety", text: "TÜV SÜD Akademie.", tag: "2024", art: { pal: "teal", motif: "cert", mx: 400, my: 250, ms: .9, sunX: 200 } }
];

const POSTER = [
  ["a", { pal: "neon", motif: "tower", mx: 400, my: 260, ms: 1.6, city: true, sunX: 400 }],
  ["b", { pal: "night", motif: "boxes", mx: 400, my: 300, ms: 1.2, city: true, stars: true, sunX: 600, sunR: 80 }],
  ["c", { pal: "miami", motif: "plane", mx: 400, my: 200, ms: 1.3, sunX: 250, city: false }],
  ["d", { pal: "ocean", motif: "diver", mx: 400, my: 250, ms: 1.7, sun: false, city: false }],
  ["e", { pal: "dusk", motif: "racket", mx: 400, my: 250, ms: 1.6, sunX: 600, city: false }],
  ["f", { pal: "jade", motif: "gear", mx: 400, my: 230, ms: 1.6, sunX: 200 }],
  ["h", { pal: "neon", motif: "nodes", mx: 400, my: 210, ms: 1.1, city: true, sunX: 620 }],
  ["i", { pal: "dusk", motif: "tajine", mx: 400, my: 250, ms: 1.4, sunX: 400 }],
  ["g", { pal: "miami", motif: "pins", mx: 400, my: 260, ms: 1.5, city: true, sunX: 600 }]
];

/* ---------- SVG key-art generator ---------- */
const PAL = {
  dusk:  ["#35195a", "#b4408e", "#ffa27c"],
  miami: ["#4a3fa6", "#cf6db4", "#ffcaa3"],
  night: ["#0d0f2e", "#2a1f5e", "#7b3a8e"],
  teal:  ["#173a5e", "#2f8c9c", "#c2f2d6"],
  neon:  ["#240c3a", "#7a1d68", "#ff6592"],
  jade:  ["#1c2f3e", "#4b7f6c", "#f0d79a"],
  ocean: ["#06203a", "#14628f", "#6fdfe0"]
};
let uid = 0;
const rng = seed => { let s = seed % 2147483647 || 7; return () => (s = (s * 16807) % 2147483647) / 2147483647; };

function palm(x, y, h, lean, col) {
  const tx = x + lean, ty = y - h, L = h * 0.46;
  let s = `<path d="M${x} ${y} Q${x + lean * 0.15} ${y - h * 0.55} ${tx} ${ty}" stroke="${col}" stroke-width="${(h * 0.045).toFixed(1)}" fill="none" stroke-linecap="round"/>`;
  [-172, -145, -115, -70, -38, -8, 22, 158].forEach(a => {
    const r = a * Math.PI / 180;
    const ex = tx + Math.cos(r) * L, ey = ty + Math.sin(r) * L + L * 0.38;
    const mx = (tx + ex) / 2, my = (ty + ey) / 2;
    const nx = -(ey - ty) / L * L * 0.16, ny = (ex - tx) / L * L * 0.16;
    s += `<path d="M${tx} ${ty} Q${(mx + nx - L * .05).toFixed(1)} ${(my + ny - L * .3).toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)} Q${(mx - nx).toFixed(1)} ${(my - ny - L * .1).toFixed(1)} ${tx} ${ty}Z" fill="${col}"/>`;
  });
  return s;
}

const MOTIF = {
  car: `<path d="M-150 30 L-142 2 Q-125 -10 -92 -15 L-60 -42 Q-40 -56 0 -56 L48 -56 Q74 -56 96 -32 L122 -14 Q150 -9 155 10 L155 30 Z"/><circle cx="-88" cy="32" r="22"/><circle cx="100" cy="32" r="22"/><path d="M-52 -18 L-30 -44 L40 -44 L70 -18 Z"/>`,
  boxes() { return `<g transform="scale(.75)">${this.car}</g><rect x="-128" y="-60" width="252" height="100" stroke="#d7f27a" stroke-width="3"/><text x="-126" y="-68" fill="#d7f27a" stroke="none" font-family="Barlow Condensed" font-weight="700" font-size="20">CAR 0.98</text><rect x="150" y="-80" width="44" height="120" stroke="#ff8fc8" stroke-width="3"/><text x="150" y="-88" fill="#ff8fc8" stroke="none" font-family="Barlow Condensed" font-weight="700" font-size="18">PED 0.91</text><circle cx="172" cy="-52" r="9"/><path d="M172 -42 L172 -2 M172 -30 L158 -14 M172 -30 L186 -14 M172 -2 L160 30 M172 -2 L184 30"/><path d="M-260 140 L-60 50 M260 140 L80 50" stroke-dasharray="18 14"/>`; },
  sensor() { return `${this.car}<path d="M175 -30 A40 40 0 0 1 175 50"/><path d="M195 -48 A62 62 0 0 1 195 68" opacity=".7"/><path d="M215 -66 A84 84 0 0 1 215 86" opacity=".45"/><path d="M-175 -30 A40 40 0 0 0 -175 50"/><path d="M-195 -48 A62 62 0 0 0 -195 68" opacity=".7"/>`; },
  tower: `<path d="M0 -200 L0 -150"/><circle cx="0" cy="-138" r="10"/><path d="M0 -128 L0 -96"/><circle cx="0" cy="-70" r="26"/><path d="M-8 -44 L-8 12 M8 -44 L8 12"/><circle cx="0" cy="40" r="38"/><path d="M-22 70 L-52 140 M22 70 L52 140 M0 78 L0 140 M-70 140 L70 140"/><path d="M-170 140 L-170 20 L-130 20 L-130 140 M-120 140 L-120 -20 L-80 -40 L-80 140 M110 140 L110 -10 L150 -10 L150 140 M160 140 L160 50 L200 50 L200 140"/>`,
  gear: `<circle cx="0" cy="0" r="62" stroke-width="22" stroke-dasharray="15 13.5"/><circle cx="0" cy="0" r="46"/><circle cx="0" cy="0" r="16"/><circle cx="105" cy="78" r="34" stroke-width="14" stroke-dasharray="10 9.6" stroke="#ff8fc8"/><circle cx="105" cy="78" r="10" stroke="#ff8fc8"/>`,
  nodes: `<rect x="-200" y="-30" width="76" height="56" rx="14"/><rect x="-60" y="-90" width="76" height="56" rx="14"/><rect x="-60" y="40" width="76" height="56" rx="14"/><rect x="90" y="-30" width="76" height="56" rx="14" stroke="#ff8fc8"/><path d="M-124 -2 C-90 -2 -95 -62 -60 -62 M-124 -2 C-90 -2 -95 68 -60 68 M16 -62 C55 -62 50 -2 90 -2 M16 68 C55 68 50 -2 90 -2"/><path d="M128 -60 L134 -44 L150 -38 L134 -32 L128 -16 L122 -32 L106 -38 L122 -44 Z" fill="#ff8fc8" stroke="#ff8fc8"/><circle cx="-162" cy="-2" r="8"/><path d="M-36 -62 L-8 -62 M-36 68 L-8 68"/>`,
  graph: `<rect x="-50" y="-120" width="100" height="50" rx="8"/><rect x="-170" y="0" width="100" height="50" rx="8"/><rect x="-50" y="0" width="100" height="50" rx="8"/><rect x="70" y="0" width="100" height="50" rx="8"/><path d="M0 -70 L0 0 M0 -40 L-120 -40 L-120 0 M0 -40 L120 -40 L120 0"/><rect x="-170" y="100" width="100" height="40" rx="8" opacity=".6"/><rect x="70" y="100" width="100" height="40" rx="8" opacity=".6"/><path d="M-120 50 L-120 100 M120 50 L120 100" stroke-dasharray="8 8"/><path d="M-30 -95 L30 -95"/>`,
  racket: `<ellipse cx="-20" cy="-40" rx="58" ry="70" transform="rotate(-20 -20 -40)"/><path d="M5 22 L40 110" stroke-width="14"/><circle cx="-30" cy="-60" r="4"/><circle cx="-6" cy="-52" r="4"/><circle cx="-40" cy="-30" r="4"/><circle cx="-16" cy="-22" r="4"/><circle cx="-26" cy="6" r="4"/><circle cx="100" cy="-110" r="16" stroke="#d7f27a"/><path d="M60 -80 Q80 -100 86 -104" stroke-dasharray="6 8" opacity=".6"/>`,
  diver: `<path d="M-90 0 Q-30 -55 40 0 Q-30 55 -90 0 Z"/><path d="M40 0 L80 -30 L80 30 Z"/><circle cx="-60" cy="-6" r="5"/><path d="M-20 -30 Q-10 0 -20 30" opacity=".7"/><path d="M120 -110 Q150 -100 140 -80 Q170 -70 155 -50 Q190 -40 170 -15 Q195 0 175 20" fill="#ff8fc8" stroke="#ff8fc8" opacity=".55"/><circle cx="-120" cy="-80" r="8"/><circle cx="-108" cy="-110" r="5"/><circle cx="-124" cy="-134" r="3"/><path d="M-300 -170 Q-250 -185 -200 -170 T-100 -170 T0 -170 T100 -170 T200 -170 T300 -170" opacity=".5"/><path d="M-200 130 Q-170 80 -150 130 M-160 130 Q-140 70 -110 130" stroke="#ff8fc8"/>`,
  tajine: `<ellipse cx="0" cy="60" rx="120" ry="18"/><path d="M-90 52 Q0 -150 90 52"/><circle cx="0" cy="-58" r="10"/><path d="M-60 20 Q0 -10 60 20" opacity=".6"/><path d="M-30 -100 Q-40 -130 -25 -150 M0 -90 Q-10 -125 5 -150 M30 -100 Q20 -130 35 -150" opacity=".6"/>`,
  pins: `<path d="M-60 80 Q-80 30 -66 0 Q-56 -20 -66 -40 Q-70 -70 -55 -70 Q-40 -70 -44 -40 Q-54 -20 -44 0 Q-30 30 -50 80 Z"/><path d="M0 80 Q-20 30 -6 0 Q4 -20 -6 -40 Q-10 -70 5 -70 Q20 -70 16 -40 Q6 -20 16 0 Q30 30 10 80 Z"/><path d="M60 80 Q40 30 54 0 Q64 -20 54 -40 Q50 -70 65 -70 Q80 -70 76 -40 Q66 -20 76 0 Q90 30 70 80 Z"/><path d="M-64 -30 L-46 -30 M-4 -30 L14 -30 M56 -30 L74 -30" stroke="#ff8fc8"/><circle cx="-150" cy="55" r="28" stroke="#ff8fc8"/><path d="M-250 55 L-190 55 M-240 40 L-200 40" opacity=".5"/>`,
  ball: `<circle cx="0" cy="0" r="66"/><path d="M-66 0 L66 0 M0 -66 L0 66 M-46 -47 Q-10 0 -46 47 M46 -47 Q10 0 46 47"/><path d="M90 -60 Q130 -110 170 -60" stroke-dasharray="8 8" opacity=".6"/>`,
  chat: `<path d="M-150 -70 h160 a20 20 0 0 1 20 20 v60 a20 20 0 0 1 -20 20 h-110 l-30 26 v-26 h-20 a20 20 0 0 1 -20 -20 v-60 a20 20 0 0 1 20 -20 z"/><text x="-120" y="-12" fill="#fff1d0" stroke="none" font-family="Barlow Condensed" font-weight="700" font-size="44">¡HOLA!</text><path d="M60 0 h100 a18 18 0 0 1 18 18 v44 a18 18 0 0 1 -18 18 h-10 v22 l-26 -22 h-64 a18 18 0 0 1 -18 -18 v-44 a18 18 0 0 1 18 -18 z" stroke="#ff8fc8"/><path d="M84 40 h70" stroke="#ff8fc8"/>`,
  plane: `<path d="M-120 20 L120 -10 Q150 -14 150 0 Q150 12 120 12 L-110 40 Z"/><path d="M0 4 L-60 70 L-30 70 L50 6 M10 -2 L-40 -60 L-14 -60 L56 -6 M-110 26 L-140 -10 L-122 -10 L-90 22"/><path d="M-300 120 Q-160 30 -130 40" stroke-dasharray="10 10" opacity=".6"/>`,
  grad: `<path d="M-110 -30 L0 -80 L110 -30 L0 20 Z"/><path d="M-60 -6 L-60 50 Q0 85 60 50 L60 -6"/><path d="M100 -26 L100 40"/><circle cx="100" cy="48" r="7" fill="#ff8fc8" stroke="#ff8fc8"/>`,
  cert: `<path d="M0 -110 L80 -80 L80 0 Q80 70 0 110 Q-80 70 -80 0 L-80 -80 Z"/><path d="M-36 0 L-8 28 L42 -30" stroke="#d7f27a" stroke-width="8"/>`,
  code: `<path d="M-60 -60 L-130 0 L-60 60 M60 -60 L130 0 L60 60" stroke-width="8"/><path d="M24 -90 L-24 90" stroke="#ff8fc8" stroke-width="8"/>`,
  chart: `<path d="M-150 90 L150 90 M-150 90 L-150 -110"/><rect x="-120" y="20" width="40" height="70"/><rect x="-60" y="-20" width="40" height="110"/><rect x="0" y="-60" width="40" height="150"/><rect x="60" y="-30" width="40" height="120"/><path d="M-100 0 L-40 -40 L20 -90 L80 -60 L140 -110" stroke="#ff8fc8"/>`,
  people: `<circle cx="0" cy="-60" r="30"/><path d="M-60 40 Q-60 -20 0 -20 Q60 -20 60 40"/><circle cx="-110" cy="-30" r="24" opacity=".75"/><path d="M-160 50 Q-160 0 -110 0 Q-70 0 -64 20" opacity=".75"/><circle cx="110" cy="-30" r="24" opacity=".75"/><path d="M160 50 Q160 0 110 0 Q70 0 64 20" opacity=".75"/><path d="M-30 -130 L0 -150 L30 -130" stroke="#ff8fc8"/>`
};

function scene(o = {}) {
  const id = "k" + (uid++), r = rng((o.seed || 0) + uid * 977 + 13);
  const [c1, c2, c3] = PAL[o.pal || "dusk"];
  const hz = o.horizon ?? 370, sx = o.sunX ?? 560, R = o.sunR ?? 120;
  let s = `<svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs>
<linearGradient id="${id}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset=".62" stop-color="${c2}"/><stop offset="1" stop-color="${c3}"/></linearGradient>
<linearGradient id="${id}b" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffeaa6"/><stop offset="1" stop-color="#ff5f9a"/></linearGradient>
<linearGradient id="${id}c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c2}"/><stop offset="1" stop-color="${c1}"/></linearGradient>
<filter id="${id}g" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<clipPath id="${id}d"><rect width="800" height="${hz}"/></clipPath></defs>
<rect width="800" height="500" fill="url(#${id}a)"/>`;
  if (o.stars) for (let i = 0; i < 46; i++) s += `<circle cx="${(r() * 800) | 0}" cy="${(r() * hz * .7) | 0}" r="${(r() * 1.4 + .3).toFixed(1)}" fill="#fff" opacity="${(r() * .6 + .2).toFixed(2)}"/>`;
  if (o.sun !== false) {
    const sy = hz - R * 0.35;
    s += `<g clip-path="url(#${id}d)"><circle cx="${sx}" cy="${sy}" r="${R}" fill="url(#${id}b)" opacity=".95"/>`;
    for (let i = 0; i < 6; i++) { const y = sy - R * 0.15 + i * R * 0.17; s += `<rect x="${sx - R}" y="${y.toFixed(1)}" width="${R * 2}" height="${(2 + i * 2.4).toFixed(1)}" fill="${c3}"/>`; }
    s += `</g>`;
  }
  if (o.city !== false && o.city) {
    let x = -10;
    while (x < 810) { const w = 26 + r() * 46, h = 40 + r() * 110; s += `<rect x="${x.toFixed(0)}" y="${(hz - h).toFixed(0)}" width="${w.toFixed(0)}" height="${h.toFixed(0)}" fill="${c2}" opacity=".45"/>`; x += w + 2; }
    x = -10;
    while (x < 810) {
      const w = 22 + r() * 40, h = 24 + r() * (r() > .8 ? 190 : 90);
      s += `<rect x="${x.toFixed(0)}" y="${(hz - h).toFixed(0)}" width="${w.toFixed(0)}" height="${h.toFixed(0)}" fill="#1b0f33"/>`;
      if (h > 70) for (let k = 0; k < 4; k++) s += `<rect x="${(x + 5 + r() * (w - 12)).toFixed(0)}" y="${(hz - h + 10 + r() * (h - 20)).toFixed(0)}" width="4" height="5" fill="#ffd9a8" opacity=".55"/>`;
      x += w + 3 + r() * 30;
    }
  }
  s += `<rect y="${hz}" width="800" height="${500 - hz}" fill="url(#${id}c)"/>`;
  for (let i = 0; i < 9; i++) s += `<rect x="${(sx - 140 + r() * 120).toFixed(0)}" y="${hz + 6 + i * 13}" width="${(60 + r() * 160).toFixed(0)}" height="2" fill="${c3}" opacity="${(.45 - i * .04).toFixed(2)}"/>`;
  if (o.palms !== false) s += palm(40, hz + 30, 260, 34, "#160b2a") + palm(110, hz + 40, 190, -18, "#160b2a") + palm(760, hz + 34, 240, -40, "#160b2a");
  if (o.motif) {
    const m = typeof MOTIF[o.motif] === "function" ? MOTIF[o.motif]() : MOTIF[o.motif];
    s += `<g transform="translate(${o.mx ?? 400} ${o.my ?? 220}) scale(${o.ms ?? 1})" fill="none" stroke="${o.mc || "#fff1d0"}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" filter="url(#${id}g)">${m}</g>`;
  }
  return s + `</svg>`;
}

/* ---------- render ---------- */
const $ = s => document.querySelector(s);
const esc = t => t.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const nl = t => esc(t).replace(/\n/g, "<br>");

$("#poster").innerHTML =
  POSTER.map(([a, art]) => `<div class="panel panel--${a}" style="grid-area:${a}">${a === "a" ? `<img src="img/portrait.jpg" alt="">` : scene(art)}</div>`).join("") +
  `<div class="panel panel--t">${scene({ pal: "dusk", sunX: 400, sunR: 150, city: true })}<div class="namelogo" id="namelogo"><span>björn</span><span>müller</span></div></div>`;

$("#featured").innerHTML = FEATURED.map((f, i) => `
  <button class="tcard reveal" data-m="${f.m}" style="transition-delay:${i * .08}s">
    ${scene(f.art)}<span class="tcard__play" aria-hidden="true"></span>
    <p class="eyebrow">${f.eye}</p><h3>${nl(f.title)}</h3>
  </button>`).join("");

$("#missionList").innerHTML = MISSIONS.map((m, i) => `
  <article class="banner reveal ${m.left ? "banner--left" : ""}">
    <div class="banner__art">${scene(m.art)}</div>
    <div class="banner__txt">
      <p class="eyebrow">Mission ${m.no} · ${m.dates}</p>
      <h3 class="title">${esc(m.title)}</h3>
      <p class="banner__company">${esc(m.sub)}</p>
      <p class="banner__desc">${esc(m.desc)}</p>
      <p class="banner__reward"><b>REWARD</b>${esc(m.reward)}</p><br>
      <button class="pill pill--${m.pill}" data-m="${i}">Mission Briefing <i>→</i></button>
    </div>
  </article>`).join("");

$("#arsenalGrid").innerHTML = ARSENAL.map(a => `
  <article class="acard reveal ${a.wide ? "acard--wide" : ""}">
    ${scene(a.art)}
    <p class="eyebrow">${a.eye}</p>
    <h3 class="title">${esc(a.title)}</h3>
    <div class="chips">${a.tags.map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div>
  </article>`).join("");

$("#stats").innerHTML = STATS.map(([n, v, c]) => `
  <div class="stat"><div class="stat__row"><span>${esc(n)}</span><em>${v}/10</em></div>
  <div class="stat__bar"><div class="stat__fill" data-v="${v * 10}" style="--c:${c}"></div></div></div>`).join("");

const card = q => `
  <article class="ncard reveal">
    <div class="ncard__art">${scene(q.art)}</div>
    <div class="ncard__body"><h3>${esc(q.title)}</h3><p>${esc(q.text)}</p><small>${esc(q.tag)}</small></div>
  </article>`;
$("#quests").innerHTML = QUESTS.map(card).join("");
$("#training-list").innerHTML = TRAINING.map(card).join("");

$("#travelBanner").innerHTML = `
  <div class="banner__art">${scene({ pal: "miami", motif: "plane", mx: 300, my: 190, ms: 1.2, sunX: 300, sunR: 150, city: true })}</div>
  <div class="banner__txt">
    <p class="eyebrow">People &amp; Places</p>
    <h3 class="title">Only on Planet Earth</h3>
    <div class="travel__stats"><div><b>35</b><span>Countries</span></div><div><b>109</b><span>Places</span></div></div>
    <p class="banner__desc">It started in Shanghai: realizing you can make it on the other side of the world. Since then, the limits keep moving, from Kyoto hostels to four months in Colombia.</p>
    <span class="pill pill--lilac" aria-disabled="true">Travel log · coming soon</span>
  </div>`;
$("#continents").innerHTML = CONTINENTS.map(c => `
  <div class="cont"><h4>${c.name}<em>${c.list.length}</em></h4><p>${c.list.join(" · ")}</p></div>`).join("");

/* ---------- briefing dialog ---------- */
const brief = $("#brief");
document.addEventListener("click", e => {
  const b = e.target.closest("[data-m]");
  if (!b) return;
  const m = MISSIONS[+b.dataset.m];
  $("#briefArt").innerHTML = scene(m.art);
  $("#briefEye").textContent = `Mission ${m.no} · ${m.dates} · ${m.place}`;
  $("#briefTitle").textContent = m.title;
  $("#briefSub").textContent = m.sub;
  $("#briefList").innerHTML = m.bullets.map(t => `<li>${esc(t)}</li>`).join("");
  $("#briefChips").innerHTML = m.stack.map(t => `<span class="chip">${esc(t)}</span>`).join("");
  brief.showModal();
});
$(".brief__x").addEventListener("click", () => brief.close());
brief.addEventListener("click", e => { if (e.target === brief) brief.close(); });

/* ---------- menu ---------- */
const burger = $(".nav__burger");
const setMenu = open => { document.body.classList.toggle("menu-open", open); burger.setAttribute("aria-expanded", open); };
burger.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
document.querySelectorAll(".menu a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

/* ---------- scroll: hero poster + nav ---------- */
const hero = $(".hero"), poster = $("#poster"), logo = $("#namelogo"), nav = $(".nav");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const ease = t => 1 - Math.pow(1 - t, 3);
let ticking = false;
function onScroll() {
  ticking = false;
  const total = hero.offsetHeight - innerHeight;
  const p = clamp(-hero.getBoundingClientRect().top / total, 0, 1);
  const e = reduce ? 1 : ease(clamp(p / 0.65, 0, 1));
  const start = innerWidth < 860 ? 1.45 : 1.9;
  poster.style.setProperty("--s", (start - (start - 1) * e).toFixed(4));
  logo.style.setProperty("--ls", (1.18 - 0.18 * e).toFixed(4));
  hero.classList.toggle("is-settled", e > 0.96);
  nav.classList.toggle("is-scrolled", scrollY > hero.offsetHeight - innerHeight);
}
addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
addEventListener("resize", onScroll);
onScroll();

/* ---------- reveal + stat bars ---------- */
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add("in");
  en.target.querySelectorAll?.(".stat__fill").forEach(f => f.style.width = f.dataset.v + "%");
  io.unobserve(en.target);
}), { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
