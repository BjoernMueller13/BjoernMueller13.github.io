/* =========================================================
   Björn Müller – portfolio v2 (GTA VI-inspired)
   Content: 01-Bewerbung/Lebenslauf/CV-Master.md,
            06-Portfolio-Website/wissensstamm-anekdoten-hintergruende.md,
            02-Reisen/vergangene_reisen.md
   Images:  06-Portfolio-Website/images (cropped copies in img/v2/)
   i18n:    all text fields are {de, en, es}; see i18n.js for
            static UI strings and the radio/language switcher.
   ========================================================= */

const { tr, getLang } = window.BM_I18N;

/* ---------- content ---------- */
const MISSIONS = [
  {
    no: "07", dates: "11/2025 – Now",
    place: { de: "Essen, Deutschland", en: "Essen, Germany", es: "Essen, Alemania" },
    title: { de: "Senior Consultant", en: "Senior Consultant", es: "Senior Consultant" },
    sub: { de: "Exxeta · Business Process Automation", en: "Exxeta · Business Process Automation", es: "Exxeta · Business Process Automation" },
    desc: {
      de: "Prozessexperte und Agile Coach im unternehmensweiten Automatisierungs- und KI-Programm HiveMind. Baut n8n- und Power-Platform-Workflows über JIRA, SAP, SharePoint und Microsoft 365 hinweg.",
      en: "Process expert and agile coach in HiveMind, the company-wide automation and AI program. Builds n8n and Power Platform workflows across JIRA, SAP, SharePoint and Microsoft 365.",
      es: "Experto en procesos y agile coach en HiveMind, el programa corporativo de automatización e IA. Desarrolla flujos de trabajo con n8n y Power Platform integrando JIRA, SAP, SharePoint y Microsoft 365."
    },
    reward: { de: "Agentic AI freigeschaltet", en: "Agentic AI unlocked", es: "IA agéntica desbloqueada" },
    art: { pal: "neon", motif: "nodes", mx: 640, my: 210, ms: .8, city: true, sunX: 610, sunR: 110 },
    windowImg: "img/v2/intel-n8n.jpg", windowTitle: "n8n · agent workflow",
    pill: "pink",
    bullets: {
      de: [
        "Analysiert und optimiert End-to-End-Geschäftsprozesse als Schnittstelle zwischen Fachbereich, IT und Management; gestaltet Zielprozesse inklusive Governance- und Rollenmodellen",
        "Konzipiert und implementiert Workflow-Automatisierungen mit n8n und Microsoft Power Platform und integriert JIRA, SAP, SharePoint, Microsoft 365 und Entra ID",
        "Identifiziert Potenziale für KI-gestützte Prozesse und entwirft agentenbasierte Copilot- und Wissensplattform-Lösungen inklusive Daten-, Prozess- und Berechtigungskonzepten",
        "Berät Fachbereiche und Führungskräfte, moderiert Workshops und coacht Teams in agilem Arbeiten, Prozessmanagement und Automatisierung",
        "Verantwortet als Process Expert & Agile Coach im Programm „HiveMind“ die Priorisierung von Use Cases und den Aufbau einer skalierbaren Automatisierungs- und KI-Plattform",
        "Definiert KPIs zur Erfolgsmessung von Automatisierungsinitiativen und begleitet Rollout und Adoption"
      ],
      en: [
        "Analyzes and optimizes end-to-end business processes as the interface between business, IT and management; designs target processes including governance and role models",
        "Designs and implements workflow automations with n8n and Microsoft Power Platform, integrating JIRA, SAP, SharePoint, Microsoft 365 and Entra ID",
        "Identifies opportunities for AI-driven processes and designs agent-based, Copilot and knowledge-platform solutions, including data, process and access-rights concepts",
        "Advises business units and executives, facilitates workshops and coaches teams on agile working, process management and automation",
        "Owns use-case prioritization and the build-out of a scalable automation and AI platform as Process Expert & Agile Coach in the program “HiveMind”",
        "Defines KPIs to measure the success of automation initiatives and supports rollout and adoption"
      ],
      es: [
        "Analiza y optimiza procesos de negocio de principio a fin como interfaz entre negocio, TI y dirección; diseña procesos objetivo incluyendo modelos de gobernanza y roles",
        "Diseña e implementa automatizaciones de flujos de trabajo con n8n y Microsoft Power Platform, integrando JIRA, SAP, SharePoint, Microsoft 365 y Entra ID",
        "Identifica oportunidades para procesos impulsados por IA y diseña soluciones basadas en agentes, Copilot y plataformas de conocimiento, incluyendo conceptos de datos, procesos y permisos",
        "Asesora a áreas de negocio y directivos, facilita talleres y forma a equipos en trabajo ágil, gestión de procesos y automatización",
        "Como Process Expert & Agile Coach en el programa «HiveMind», lidera la priorización de casos de uso y la construcción de una plataforma escalable de automatización e IA",
        "Define KPIs para medir el éxito de las iniciativas de automatización y acompaña el despliegue y la adopción"
      ]
    },
    stack: ["n8n", "Power Platform", "Microsoft Copilot", "JIRA", "Confluence", "SharePoint", "Microsoft 365", "Entra ID", "SAP", "HubSpot", "APIs"],
    intel: [{ src: "img/v2/intel-n8n.jpg", cap: {
      de: "n8n · KI-Agent-Workflow mit Chat-Modell, Memory, Entra-ID- und Jira-Tools (Original-Screenshot, Beispiel)",
      en: "n8n · AI-agent workflow with chat model, memory, Entra ID and Jira tools (original screenshot, example)",
      es: "n8n · flujo de trabajo de agente de IA con modelo de chat, memoria y herramientas de Entra ID y Jira (captura original, ejemplo)"
    } }]
  },
  {
    no: "06", dates: "04/2023 – 10/2024",
    place: { de: "Remote · für CARIAD / Volkswagen", en: "Remote · for CARIAD / Volkswagen", es: "Remoto · para CARIAD / Volkswagen" },
    title: { de: "Product Owner", en: "Product Owner", es: "Product Owner" },
    sub: { de: "itemis AG · für CARIAD", en: "itemis AG · for CARIAD", es: "itemis AG · para CARIAD" },
    desc: {
      de: "Leitete ein 7-köpfiges SAFe-Team beim Aufbau eines Architektur-Modellierungstools für CARIAD. Die neue Toolchain verkürzte Codegenerierung und Integration von 12 Wochen auf unter 4 Tage.",
      en: "Led a 7-person SAFe team building an architecture modeling tool for CARIAD. The new toolchain cut code generation and integration from 12 weeks to under 4 days.",
      es: "Lideró un equipo SAFe de 7 personas que construyó una herramienta de modelado de arquitectura para CARIAD. La nueva cadena de herramientas redujo la generación e integración de código de 12 semanas a menos de 4 días."
    },
    reward: { de: "12 Wochen → 4 Tage", en: "12 weeks → 4 days", es: "12 semanas → 4 días" },
    img: "img/v2/intel-vwos.jpg", pos: "60% 50%", posM: "42% 50%", grade: true,
    pill: "peach", left: true,
    bullets: {
      de: [
        "Leitete ein funktionsübergreifendes, 7-köpfiges agiles Team (5 Softwareentwickler, 1 Requirements Engineer, 1 Scrum Master) nach SAFe-Prinzipien",
        "Trug maßgeblich zur Einführung einer neuen Toolchain bei, die CARIADs Codegenerierungs- und Integrationsprozess von durchschnittlich 12 Wochen auf unter 4 Tage verkürzte",
        "Entwickelte 4 Junior-Engineers innerhalb von rund einem Jahr durch wöchentliche Team-Meetings und individuelles Feedback zu Mid-Level-Niveau",
        "Verantwortete Backlog-Erstellung, -Pflege und -Priorisierung sowie (Pre-)PI-Planning, Story-Breakdown, Abhängigkeitsklärung und Aufwandsschätzung",
        "Primärer Ansprechpartner für CARIAD; stimmte sich wöchentlich mit Product Manager, System-Architekt und Release Train Engineer ab und präsentierte neue Features in System-Demos"
      ],
      en: [
        "Led a cross-functional, 7-person agile team (5 software engineers, 1 requirements engineer, 1 Scrum Master) under SAFe principles",
        "Played a key role in introducing a new toolchain that cut CARIAD’s code generation and integration process from an average of 12 weeks to under 4 days",
        "Developed 4 junior engineers to mid-level proficiency within about one year through weekly team meetings and individual feedback",
        "Owned backlog creation, grooming and prioritization as well as (pre-)PI planning, story breakdown, dependency clarification and estimation",
        "Primary point of contact for CARIAD; aligned weekly with product manager, system architect and release train engineer and presented features in system demos"
      ],
      es: [
        "Lideró un equipo ágil multidisciplinar de 7 personas (5 ingenieros de software, 1 requirements engineer, 1 Scrum Master) bajo principios SAFe",
        "Desempeñó un papel clave en la introducción de una nueva cadena de herramientas que redujo el proceso de generación e integración de código de CARIAD de una media de 12 semanas a menos de 4 días",
        "Formó a 4 ingenieros junior hasta nivel medio en aproximadamente un año mediante reuniones semanales de equipo y feedback individual",
        "Responsable de la creación, refinamiento y priorización del backlog, así como de la planificación (pre-)PI, el desglose de historias, la clarificación de dependencias y la estimación",
        "Punto de contacto principal para CARIAD; se coordinó semanalmente con el product manager, el arquitecto de sistemas y el release train engineer, y presentó nuevas funcionalidades en las demos del sistema"
      ]
    },
    stack: ["JIRA", "Confluence", "Miro", "MPS", "Notion", "Google Workspace", "SAFe"],
    intel: [
      { src: "img/v2/intel-mps.jpg", cap: {
        de: "JetBrains MPS · Text- und Diagramm-Projektion desselben Modells (Original-Screenshot)",
        en: "JetBrains MPS · text and diagram projection of the same model (original screenshot)",
        es: "JetBrains MPS · proyección en texto y diagrama del mismo modelo (captura original)"
      } },
      { src: "img/v2/intel-vwos.jpg", cap: {
        de: "VW.OS-Softwareebenen (Original-Grafik, CARIAD)",
        en: "VW.OS software layers (original graphic, CARIAD)",
        es: "Capas de software de VW.OS (gráfico original, CARIAD)"
      } },
      { src: "img/v2/intel-cea.jpg", cap: {
        de: "Kontext: zonale E/E-Architektur mit Zentralrechner (Original-Grafik, CARIAD China)",
        en: "Context: zonal E/E architecture with central computer (original graphic, CARIAD China)",
        es: "Contexto: arquitectura E/E zonal con ordenador central (gráfico original, CARIAD China)"
      } }
    ]
  },
  {
    no: "05", dates: "02/2020 – 03/2023",
    place: { de: "München / Wuppertal", en: "Munich / Wuppertal", es: "Múnich / Wuppertal" },
    title: { de: "Sensing Function Owner", en: "Sensing Function Owner", es: "Sensing Function Owner" },
    sub: { de: "Aptiv · ab 11/2021 zusätzlich Product Owner & Cluster Lead", en: "Aptiv · Product Owner & Cluster Lead from 11/2021", es: "Aptiv · Product Owner y Cluster Lead desde 11/2021" },
    desc: {
      de: "Verantwortete die kamerabasierte Objekterkennung für BMWs automatisiertes Fahren von Level 2+ bis Level 3, zugeliefert von Mobileye. Baute einen Cluster von bis zu 6 Function Ownern und 4 Masterstudierenden auf.",
      en: "Owned camera-based object detection for BMW’s Level 2+ to Level 3 automated driving, supplied by Mobileye. Grew a cluster of up to 6 function owners and 4 master’s students.",
      es: "Responsable de la detección de objetos basada en cámara para la conducción automatizada de BMW (Nivel 2+ a Nivel 3), suministrada por Mobileye. Hizo crecer un cluster de hasta 6 function owners y 4 estudiantes de máster."
    },
    reward: { de: "Zum Cluster Lead befördert", en: "Promoted to Cluster Lead", es: "Ascenso a Cluster Lead" },
    img: "img/v2/mission-aptiv.jpg", pos: "50% 72%", posM: "40% 60%",
    pill: "lime",
    bullets: {
      de: [
        "End-to-End-Verantwortung für die oberen V-Modell-Ebenen (Sys1, Sys2, teilweise Sys3) der kamerabasierten Objekterkennungs-Software für das BMW Service Pack 2021 (iNext, 5er, 7er) für automatisiertes Fahren Level 2+ bis Level 3",
        "Übernahm ab November 2021 zusätzlich die Produktverantwortung für einen auf bis zu 6 Function Owner und 4 Masterstudierende gewachsenen Cluster (Road Marking Detection, Visual Landmarks)",
        "Moderierte zentrale agile Zeremonien (Daily Scrums, Sprint Plannings, Refinements, Retrospektiven) und trieb Backlog-Management sowie PI-Planning voran",
        "Erster Ansprechpartner für Problemtickets mit Gesamtverantwortung gegenüber Kunde BMW; koordinierte Testdatenanalysen (HIL/SIL, Realfahrten) und Homologationsanalysen nach SOTIF",
        "Vertrat Aptiv in Workshops mit OEMs und Tier-2-Zulieferern"
      ],
      en: [
        "End-to-end responsibility for the upper V-model levels (Sys1, Sys2, partially Sys3) of the camera-based object detection software for BMW Service Pack 2021 (iNext, 5 Series, 7 Series)",
        "Took on product ownership from November 2021 for a cluster of up to 6 function owners and 4 master’s students (Road Marking Detection, Visual Landmarks)",
        "Facilitated daily scrums, sprint plannings, refinements and retrospectives; drove backlog management and PI planning",
        "First point of contact for problem tickets toward BMW; coordinated HIL/SIL and real-world test data analysis and SOTIF homologation analyses",
        "Represented Aptiv in workshops with OEMs and Tier-2 suppliers"
      ],
      es: [
        "Responsabilidad de extremo a extremo de los niveles superiores del modelo en V (Sys1, Sys2, parcialmente Sys3) del software de detección de objetos basado en cámara para el BMW Service Pack 2021 (iNext, Serie 5, Serie 7), para conducción automatizada de Nivel 2+ a Nivel 3",
        "Asumió desde noviembre de 2021 la responsabilidad de producto de un cluster que creció hasta 6 function owners y 4 estudiantes de máster (Road Marking Detection, Visual Landmarks)",
        "Facilitó las ceremonias ágiles principales (dailies, sprint plannings, refinements, retrospectivas) e impulsó la gestión del backlog y el PI planning",
        "Primer punto de contacto para incidencias con responsabilidad de extremo a extremo frente al cliente BMW; coordinó el análisis de datos de pruebas (HIL/SIL, conducción real) y los análisis de homologación según SOTIF",
        "Representó a Aptiv en talleres con fabricantes (OEM) y proveedores de nivel 2"
      ]
    },
    stack: ["DOORS", "Confluence", "JIRA", "MS Project", "Python", "SOTIF", "Mobileye"],
    intel: [
      { src: "img/v2/card-aptiv.jpg", cap: {
        de: "Objekterkennung im Vice-Stil (GTA-artiges Artwork)", en: "Object detection, Vice-style (GTA-like artwork)", es: "Detección de objetos al estilo Vice (ilustración de estilo GTA)"
      } },
      { src: "img/v2/intel-sensorset.jpg", cap: {
        de: "Sensor-Set: Kamera, Radar, LiDAR, Ultraschall (KI-generierte Illustration)", en: "Sensor set: camera, radar, LiDAR, ultrasonic (AI-generated illustration)", es: "Conjunto de sensores: cámara, radar, LiDAR, ultrasonidos (ilustración generada por IA)"
      } },
      { src: "img/v2/intel-inext.jpg", cap: {
        de: "BMW Vision iNEXT, Teil des Service-Pack-2021-Umfangs (Originalfoto)", en: "BMW Vision iNEXT, part of the Service Pack 2021 scope (original photo)", es: "BMW Vision iNEXT, parte del alcance del Service Pack 2021 (foto original)"
      } }
    ]
  },
  {
    no: "04", dates: "12/2018 – 01/2020",
    place: { de: "München · im Auftrag der BMW Group", en: "Munich · for the BMW Group", es: "Múnich · por encargo del Grupo BMW" },
    title: { de: "Chief Engineer ADAS", en: "Chief Engineer ADAS", es: "Chief Engineer ADAS" },
    sub: { de: "EDAG Engineering · für BMW", en: "EDAG Engineering · for BMW", es: "EDAG Engineering · para BMW" },
    desc: {
      de: "Technisches Pendant zum BMW-Teilprojektleiter, steuerte Zulieferer Valeo beim Steuergerät für automatisiertes Parken: Architektur-Reviews, Degradationskonzepte, Ethernet-Analyse.",
      en: "Technical counterpart to BMW’s sub-project lead, steering supplier Valeo on the automated parking ECU: architecture reviews, degradation concepts, Ethernet analysis.",
      es: "Contraparte técnica del responsable de subproyecto de BMW, dirigiendo al proveedor Valeo en la unidad de control de aparcamiento automatizado: revisiones de arquitectura, conceptos de degradación, análisis Ethernet."
    },
    reward: { de: "Lieferantensteuerung", en: "Supplier steering", es: "Dirección de proveedores" },
    img: "img/v2/mission-edag.jpg", pos: "50% 60%", posM: "54% 40%",
    pill: "lilac", left: true,
    bullets: {
      de: [
        "Steuerte Zulieferer Valeo für das Steuergerät für automatisiertes Parken des BMW Service Pack 2021; reviewte Hardware-, Software- und Systemarchitektur",
        "Erstellte Degradations- und Fehlerbehandlungskonzepte",
        "Leitete Hardware-Design-Reviews zu elektrischer/elektromagnetischer Robustheit sowie Basissoftware-Reviews zum Bootverhalten der Steuergeräte",
        "Analysierte die Ethernet-Buskommunikation mit Wireshark"
      ],
      en: [
        "Directed supplier Valeo for the automated parking control unit of BMW Service Pack 2021; reviewed hardware, software and system architecture",
        "Created degradation and error-handling concepts",
        "Led hardware design reviews on electrical/electromagnetic robustness and base software reviews on ECU boot behavior",
        "Analyzed Ethernet bus communication using Wireshark"
      ],
      es: [
        "Dirigió al proveedor Valeo para la unidad de control de aparcamiento automatizado del BMW Service Pack 2021; revisó la arquitectura de hardware, software y sistema",
        "Creó conceptos de degradación y gestión de errores",
        "Lideró revisiones de diseño de hardware sobre robustez eléctrica/electromagnética y revisiones de software base sobre el comportamiento de arranque de las unidades de control",
        "Analizó la comunicación del bus Ethernet con Wireshark"
      ]
    },
    stack: ["DOORS", "JIRA", "Confluence", "Wireshark", "E-Sys", "Ediabas"],
    intel: [
      { src: "img/v2/intel-fiz.jpg", cap: {
        de: "BMW-Zentrale und BMW Welt, München (Originalfoto)", en: "BMW headquarters and BMW Welt, Munich (original photo)", es: "Sede central de BMW y BMW Welt, Múnich (foto original)"
      } },
      { src: "img/v2/intel-welt.jpg", cap: {
        de: "Blick von der BMW Welt zum Vierzylinder-Turm (Originalfoto)", en: "View from BMW Welt to the four-cylinder tower (original photo)", es: "Vista desde BMW Welt hacia la torre de los cuatro cilindros (foto original)"
      } },
      { src: "img/v2/intel-inext.jpg", cap: {
        de: "BMW Vision iNEXT (Originalfoto)", en: "BMW Vision iNEXT (original photo)", es: "BMW Vision iNEXT (foto original)"
      } }
    ]
  },
  {
    no: "03", dates: "10/2017 – 07/2018",
    place: { de: "Shanghai, China", en: "Shanghai, China", es: "Shanghái, China" },
    title: { de: "Customer Data Analytics", en: "Customer Data Analytics", es: "Customer Data Analytics" },
    sub: { de: "BMW Technology Office China · Werkstudent", en: "BMW Technology Office China · Working Student", es: "BMW Technology Office China · Estudiante en prácticas" },
    desc: {
      de: "Baute Python-Pipelines auf einem Hadoop-Cluster für reale Kundenfahrzeugdaten aus dem chinesischen Straßenverkehr auf und organisierte Datenerhebungsfahrten in Peking, Shanghai und Guangzhou.",
      en: "Built Python pipelines on a Hadoop cluster for real customer vehicle data from Chinese traffic and ran data-collection drives in Beijing, Shanghai and Guangzhou.",
      es: "Desarrolló pipelines en Python sobre un cluster Hadoop para datos reales de vehículos de clientes del tráfico chino y organizó viajes de recogida de datos en Pekín, Shanghái y Cantón."
    },
    reward: { de: "„Übertrifft die Anforderungen deutlich“", en: "“Far exceeds requirements”", es: "«Supera ampliamente los requisitos»" },
    img: "img/v2/mission-bmwchina.jpg", pos: "50% 50%", posM: "88% 50%",
    pill: "pink", left: true,
    bullets: {
      de: [
        "Entwickelte Algorithmen zur Vorprüfung und Zeitreihenauswertung von Kundenfahrzeugdaten (Hadoop, Python/Pandas/Matplotlib) für das Projekt „Customer Data Analytics China“",
        "Organisierte Datenerhebungsfahrten in Peking, Shanghai und Guangzhou und protokollierte CAN- und FlexRay-Busdaten von BMW 3er, 5er und X1",
        "Erzielte Bestbewertungen für Zuverlässigkeit, Belastbarkeit und Eigeninitiative über 202 Arbeitstage bei null Krankheitstagen",
        "Aus dieser Station entstand die Masterarbeit zur Parkmanöver-Erkennung aus CAN-/FlexRay-Daten"
      ],
      en: [
        "Developed algorithms to pre-check and evaluate time-series customer vehicle data (Hadoop, Python/Pandas/Matplotlib) for “Customer Data Analytics China”",
        "Organized data-collection drives in Beijing, Shanghai and Guangzhou and logged CAN and FlexRay bus data from BMW 3 Series, 5 Series and X1",
        "Top ratings for reliability, resilience and initiative across 202 working days with zero sick days",
        "Master’s thesis on parking-maneuver detection from CAN/FlexRay data grew out of this role"
      ],
      es: [
        "Desarrolló algoritmos para la verificación previa y evaluación de series temporales de datos de vehículos de clientes (Hadoop, Python/Pandas/Matplotlib) para el proyecto «Customer Data Analytics China»",
        "Organizó viajes de recogida de datos en Pekín, Shanghái y Cantón y registró datos de bus CAN y FlexRay de BMW Serie 3, Serie 5 y X1",
        "Obtuvo las máximas valoraciones en fiabilidad, resiliencia e iniciativa durante 202 días laborables sin ninguna baja por enfermedad",
        "De esta etapa surgió el trabajo de fin de máster sobre detección de maniobras de aparcamiento a partir de datos CAN/FlexRay"
      ]
    },
    stack: ["Python", "Pandas", "Matplotlib", "Hadoop", "Microsoft Azure", "CAN", "FlexRay"],
    intel: [{ src: "img/v2/intel-shanghai.jpg", cap: {
      de: "BMW-Bürogebäude, Shanghai (Originalfoto)", en: "BMW office building, Shanghai (original photo)", es: "Edificio de oficinas de BMW, Shanghái (foto original)"
    } }]
  },
  {
    no: "01", dates: "09/2011 – 10/2017",
    place: { de: "Heiligenhaus, Deutschland", en: "Heiligenhaus, Germany", es: "Heiligenhaus, Alemania" },
    title: { de: "Von der Werkstatt in die Entwicklung", en: "From Workshop to Engineering", es: "Del taller a la ingeniería" },
    sub: { de: "Kiekert AG · Azubi, Praktikant, Werkstudent", en: "Kiekert AG · Apprentice, Intern, Working Student", es: "Kiekert AG · Aprendiz, becario, estudiante en prácticas" },
    desc: {
      de: "Ausbildung zum Industriemechaniker im Rahmen eines dualen Ingenieurstudiums. Konstruierte Prüfstände für Autotürschlösser in CATIA V5, darunter einen Pneumatik-Prüfstand von −40 °C bis +85 °C.",
      en: "Industrial mechanic apprenticeship inside a cooperative engineering degree. Designed test rigs for automotive door locks in CATIA V5, including a pneumatic rig from −40 °C to +85 °C.",
      es: "Formación como mecánico industrial dentro de un grado dual en ingeniería. Diseñó bancos de pruebas para cerraduras de puertas de automóviles en CATIA V5, incluido un banco neumático de −40 °C a +85 °C."
    },
    reward: { de: "Ursprungsgeschichte", en: "Origin story", es: "Historia de origen" },
    art: { pal: "jade", motif: "gear", mx: 260, my: 230, ms: 1.2, city: false, sunX: 560 },
    pill: "peach",
    bullets: {
      de: [
        "Ausbildung zum Industriemechaniker (Fachrichtung Instandhaltung), IHK Düsseldorf, im Rahmen eines dualen Ingenieurstudiums",
        "Konstruierte Prüfstände und Vorrichtungen für Autotürschlösser in CATIA V5",
        "Baute einen pneumatischen Dauerlauf-Prüfstand für −40 °C bis +85 °C sowie eine Platine zur Signalwandlung",
        "Bachelorarbeit zur pneumatischen Aktuierung für Dauerlauf-Prüfstände"
      ],
      en: [
        "Vocational qualification as industrial mechanic (maintenance), IHK Düsseldorf, as part of a cooperative engineering degree",
        "Designed test rigs and fixtures for automotive door locks in CATIA V5",
        "Built a pneumatic durability test rig for −40 °C to +85 °C and a PCB for signal conversion",
        "Bachelor’s thesis on pneumatic actuation for durability test rigs"
      ],
      es: [
        "Formación profesional como mecánico industrial (mantenimiento), IHK Düsseldorf, dentro de un grado dual en ingeniería",
        "Diseñó bancos de pruebas y utillajes para cerraduras de puertas de automóviles en CATIA V5",
        "Construyó un banco de pruebas de durabilidad neumático para −40 °C a +85 °C y una placa de circuito para conversión de señal",
        "Trabajo de fin de grado sobre accionamiento neumático para bancos de pruebas de durabilidad"
      ]
    },
    stack: ["CATIA V5", "PLC / Simatic S7", "Pneumatics", "PCB design"],
    intel: []
  }
];

const FEATURED = [
  { eye: { de: "Läuft gerade", en: "Now playing", es: "Sonando ahora" }, title: { de: "Agentic AI\n@ Exxeta", en: "Agentic AI\n@ Exxeta", es: "IA Agéntica\n@ Exxeta" }, img: "img/v2/card-exxeta.jpg", alt: { de: "Björn in einer futuristischen Glashalle mit holografischen Modellen", en: "Björn in a futuristic glass hall with holographic models", es: "Björn en una sala futurista de cristal con modelos holográficos" }, m: 0 },
  { eye: { de: "Bosskampf", en: "Boss fight", es: "Combate final" }, title: { de: "Level 3\nfür BMW", en: "Level 3\nfor BMW", es: "Nivel 3\npara BMW" }, img: "img/v2/card-aptiv.jpg", alt: { de: "Straßenszene mit LiDAR-Ringen und Erkennungsboxen um Autos", en: "Street scene with LiDAR rings and detection boxes around cars", es: "Escena callejera con anillos LiDAR y cajas de detección alrededor de coches" }, m: 2 },
  { eye: { de: "Freigeschaltet", en: "Unlocked", es: "Desbloqueado" }, title: { de: "Shanghai\n2017", en: "Shanghai\n2017", es: "Shanghái\n2017" }, img: "img/v2/card-shanghai.jpg", alt: { de: "Beleuchtete BMW-Bürokuppel in Shanghai bei Nacht", en: "Illuminated BMW office dome in Shanghai at night", es: "Cúpula iluminada de las oficinas de BMW en Shanghái de noche" }, m: 4 }
];

const ARSENAL = [
  { eye: { de: "Primärwaffe", en: "Primary", es: "Arma principal" }, title: { de: "Product Ownership & Agile Delivery", en: "Product Ownership & Agile Delivery", es: "Product Ownership y entrega ágil" },
    art: { pal: "miami", motif: "people", mx: 400, my: 170, ms: 1.1, sunX: 400, city: true },
    tags: {
      de: ["Product Ownership", "Requirements Engineering (IREB)", "Backlog & Roadmap", "Stakeholder-Management", "SAFe", "Scrum (PSM I)", "Kanban"],
      en: ["Product Ownership", "Requirements Engineering (IREB)", "Backlog & Roadmap", "Stakeholder Management", "SAFe", "Scrum (PSM I)", "Kanban"],
      es: ["Product Ownership", "Requirements Engineering (IREB)", "Backlog y roadmap", "Gestión de stakeholders", "SAFe", "Scrum (PSM I)", "Kanban"]
    } },
  { eye: { de: "Spezialwaffe", en: "Special", es: "Arma especial" }, title: { de: "Workflow-Automatisierung & KI", en: "Workflow Automation & AI", es: "Automatización de flujos e IA" },
    art: { pal: "neon", motif: "nodes", mx: 400, my: 170, ms: 1, sunX: 400, city: true },
    tags: {
      de: ["n8n", "Power Automate", "Microsoft Copilot", "Agentenbasierte Systeme", "Prompt Engineering", "Enterprise-KI-Architektur", "Wissensmanagement"],
      en: ["n8n", "Power Automate", "Microsoft Copilot", "Agent-based systems", "Prompt engineering", "Enterprise AI architecture", "Knowledge management"],
      es: ["n8n", "Power Automate", "Microsoft Copilot", "Sistemas basados en agentes", "Prompt engineering", "Arquitectura de IA empresarial", "Gestión del conocimiento"]
    } },
  { eye: { de: "Nebenwaffe", en: "Sidearm", es: "Arma secundaria" }, title: { de: "Daten & Programmierung", en: "Data & Programming", es: "Datos y programación" },
    art: { pal: "night", motif: "code", mx: 400, my: 170, ms: 1.1, stars: true, sunX: 400, sunR: 90, city: true },
    tags: {
      de: ["Python (PCEP)", "SQL / NoSQL", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter"],
      en: ["Python (PCEP)", "SQL / NoSQL", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter"],
      es: ["Python (PCEP)", "SQL / NoSQL", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter"]
    } },
  { eye: { de: "Ausrüstung", en: "Utility", es: "Utilidad" }, title: { de: "Enterprise-Systeme & Tools", en: "Enterprise Systems & Tools", es: "Sistemas y herramientas empresariales" },
    art: { pal: "teal", motif: "chart", mx: 400, my: 170, ms: 1.1, sunX: 400, city: true },
    tags: {
      de: ["JIRA", "Confluence", "DOORS", "SharePoint", "Microsoft 365", "Entra ID", "SAP", "HubSpot", "MS Project", "Miro"],
      en: ["JIRA", "Confluence", "DOORS", "SharePoint", "Microsoft 365", "Entra ID", "SAP", "HubSpot", "MS Project", "Miro"],
      es: ["JIRA", "Confluence", "DOORS", "SharePoint", "Microsoft 365", "Entra ID", "SAP", "HubSpot", "MS Project", "Miro"]
    } },
  { eye: { de: "Schwere Waffe", en: "Heavy", es: "Arma pesada" }, title: { de: "Fachexpertise: Automotive & ADAS", en: "Domain Expertise: Automotive & ADAS", es: "Experiencia de dominio: automoción y ADAS" }, wide: true,
    img: "img/v2/arsenal-domain.jpg", alt: { de: "Konzept-SUV in einem neonbeleuchteten Tunnel", en: "Concept SUV in a neon-lit tunnel", es: "SUV conceptual en un túnel iluminado con neón" },
    tags: {
      de: ["Computer Vision & Objekterkennung", "Automatisiertes Fahren L2–L3", "Funktionale Sicherheit nach ISO 26262", "SOTIF", "CAN / FlexRay / Ethernet", "V-Modell"],
      en: ["Computer vision & object detection", "Automated driving L2–L3", "ISO 26262 functional safety", "SOTIF", "CAN / FlexRay / Ethernet", "V-model"],
      es: ["Visión por computador y detección de objetos", "Conducción automatizada L2–L3", "Seguridad funcional ISO 26262", "SOTIF", "CAN / FlexRay / Ethernet", "Modelo en V"]
    } }
];

/* Self-assessment, 0–10. Adjust freely. */
const STATS = [
  { name: { de: "Product Ownership", en: "Product Ownership", es: "Product Ownership" }, v: 9, c: "#e77fc0" },
  { name: { de: "Stakeholder-Management", en: "Stakeholder Management", es: "Gestión de stakeholders" }, v: 9, c: "#e77fc0" },
  { name: { de: "Agile Coaching / Scrum", en: "Agile Coaching / Scrum", es: "Agile Coaching / Scrum" }, v: 8.5, c: "#f39bb3" },
  { name: { de: "Workflow-Automatisierung", en: "Workflow Automation", es: "Automatización de flujos" }, v: 8, c: "#f39bb3" },
  { name: { de: "Automotive / ADAS", en: "Automotive / ADAS", es: "Automoción / ADAS" }, v: 8.5, c: "#f7c8a0" },
  { name: { de: "Python & Daten", en: "Python & Data", es: "Python y datos" }, v: 7, c: "#f7c8a0" },
  { name: { de: "Englisch · C1", en: "English · C1", es: "Inglés · C1" }, v: 8.5, c: "#d7f27a" },
  { name: { de: "Spanisch · A2", en: "Spanish · A2", es: "Español · A2" }, v: 3, c: "#d7f27a" }
];

const QUESTS = [
  { title: { de: "Padel & Beachvolleyball", en: "Padel & Beach Volleyball", es: "Pádel y vóley playa" },
    text: { de: "Mannschafts-Ballsport seit dem 11. Lebensjahr. „Wo ist der Ball?“ ist ein lebenslanger Reflex – heute auf dem Padel-Court oder im Sand.", en: "Team ball sports since age 11. “Where’s the ball?” is a lifelong reflex, these days on a padel court or in the sand.", es: "Deportes de equipo con pelota desde los 11 años. «¿Dónde está la pelota?» es un reflejo de toda la vida, hoy en la pista de pádel o en la arena." },
    tag: { de: "Aktiv", en: "Active", es: "Activo" },
    art: { pal: "miami", motif: "racket", mx: 400, my: 230, ms: .9, sunX: 600, city: false } },
  { title: { de: "Tauchen", en: "Scuba Diving", es: "Buceo" },
    text: { de: "Begann während der Pandemie und fühlte sich sofort zu Hause. Unter Wasser ist er ruhiger als an Land – das überrascht ihn bis heute.", en: "Started during the pandemic and felt at home right away. Underwater he is calmer than on land, which still surprises him.", es: "Empezó durante la pandemia y se sintió como en casa desde el primer momento. Bajo el agua está más tranquilo que en tierra, algo que todavía le sorprende." },
    tag: { de: "Seit 2020", en: "Since 2020", es: "Desde 2020" },
    art: { pal: "ocean", motif: "diver", mx: 400, my: 230, ms: 1, sun: false, city: false } },
  { title: { de: "Kochen als Souvenir", en: "Cooking as a Souvenir", es: "Cocinar como recuerdo" },
    text: { de: "Orte mit nach Hause nehmen: chinesisch seit Shanghai, japanisch seit 2026, kolumbianisch und marokkanisch – im Tajine-Topf, den er aus Marokko mitgebracht hat.", en: "Bringing places home: Chinese since Shanghai, Japanese since 2026, Colombian, and Moroccan, in a tajine carried back from Morocco.", es: "Traerse los lugares a casa: cocina china desde Shanghái, japonesa desde 2026, colombiana y marroquí, en un tajín que trajo de Marruecos." },
    tag: { de: "Täglich", en: "Daily", es: "A diario" },
    art: { pal: "dusk", motif: "tajine", mx: 400, my: 250, ms: 1, sunX: 400, city: false } },
  { title: { de: "Kegelverein-Crew", en: "Kegelverein Crew", es: "La peña de bolos" },
    text: { de: "Gründungsmitglied und ehemaliges Vorstandsmitglied seines Kegelvereins. Führung ohne Titel – Menschen organisieren, weil es Spaß macht.", en: "Founding member and former board member of his bowling club. Leadership without a job title, organizing people because it is fun.", es: "Socio fundador y antiguo miembro de la junta de su club de bolos (Kegelverein). Liderazgo sin cargo formal: organizar a la gente porque es divertido." },
    tag: { de: "Gründungsmitglied", en: "Founding member", es: "Socio fundador" },
    art: { pal: "neon", motif: "pins", mx: 400, my: 250, ms: 1, sunX: 620, city: true } },
  { title: { de: "Basketball & Fußball", en: "Basketball & Football", es: "Baloncesto y fútbol" },
    text: { de: "Basketball von 11 bis 18, Fußball während des Masterstudiums. Erkannte, dass Pressing im Fußball eins zu eins der Trap im Basketball entspricht.", en: "Basketball from 11 to 18, football during the master’s. Noticed that pressing in football is the basketball trap, one to one.", es: "Baloncesto de los 11 a los 18 años, fútbol durante el máster. Se dio cuenta de que el pressing en el fútbol es exactamente la trampa (trap) del baloncesto." },
    tag: { de: "Mustererkennung", en: "Pattern recognition", es: "Reconocimiento de patrones" },
    art: { pal: "jade", motif: "ball", mx: 400, my: 230, ms: 1, sunX: 220, city: true } },
  { title: { de: "Spanisch, Salsa & Bachata", en: "Spanish, Salsa & Bachata", es: "Español, salsa y bachata" },
    text: { de: "Die schönste Sprache der Welt, bewusst als Herausforderung gewählt. Bisher A2, angetrieben von Salsa, Bachata und Reggaeton.", en: "The most beautiful language, learned as a deliberate challenge. A2 for now, fuelled by salsa, bachata and reggaeton.", es: "El idioma más bonito, aprendido como un reto deliberado. Por ahora A2, impulsado por la salsa, la bachata y el reggaetón." },
    tag: { de: "Lernt gerade", en: "Learning", es: "Aprendiendo" },
    art: { pal: "miami", motif: "chat", mx: 400, my: 230, ms: 1, sunX: 400, city: true } }
];

const CONTINENTS = [
  { name: { de: "Europa", en: "Europe", es: "Europa" },
    list: {
      de: ["Deutschland", "Spanien", "Portugal", "Italien", "Griechenland", "Malta", "Frankreich", "Vereinigtes Königreich", "Irland", "Österreich", "Ungarn", "Polen", "Tschechien", "Slowakei", "Kroatien", "Serbien", "Rumänien", "Türkei"],
      en: ["Germany", "Spain", "Portugal", "Italy", "Greece", "Malta", "France", "UK", "Ireland", "Austria", "Hungary", "Poland", "Czechia", "Slovakia", "Croatia", "Serbia", "Romania", "Turkey"],
      es: ["Alemania", "España", "Portugal", "Italia", "Grecia", "Malta", "Francia", "Reino Unido", "Irlanda", "Austria", "Hungría", "Polonia", "Chequia", "Eslovaquia", "Croacia", "Serbia", "Rumanía", "Turquía"]
    } },
  { name: { de: "Asien", en: "Asia", es: "Asia" },
    list: {
      de: ["Japan", "Südkorea", "China", "Hongkong", "Vietnam", "Thailand", "Malaysia", "Philippinen", "Israel"],
      en: ["Japan", "South Korea", "China", "Hong Kong", "Vietnam", "Thailand", "Malaysia", "Philippines", "Israel"],
      es: ["Japón", "Corea del Sur", "China", "Hong Kong", "Vietnam", "Tailandia", "Malasia", "Filipinas", "Israel"]
    } },
  { name: { de: "Amerika & Afrika", en: "Americas & Africa", es: "América y África" },
    list: {
      de: ["Kolumbien (4 Monate)", "Mexiko", "Peru", "Kuba", "Guatemala", "Jamaika", "Puerto Rico", "Marokko"],
      en: ["Colombia (4 months)", "Mexico", "Peru", "Cuba", "Guatemala", "Jamaica", "Puerto Rico", "Morocco"],
      es: ["Colombia (4 meses)", "México", "Perú", "Cuba", "Guatemala", "Jamaica", "Puerto Rico", "Marruecos"]
    } }
];

const TRAINING = [
  { title: { de: "M.Sc. Mechatronik", en: "M.Sc. Mechatronics", es: "Máster en Mecatrónica" },
    text: { de: "Hochschule Bochum. Thesis: Parkmanöver-Erkennung aus CAN-/FlexRay-Daten, verfasst parallel zur Zeit bei BMW in Shanghai.", en: "Hochschule Bochum. Thesis: parking-maneuver detection from CAN/FlexRay data, written alongside BMW in Shanghai.", es: "Hochschule Bochum. Trabajo fin de máster: detección de maniobras de aparcamiento a partir de datos CAN/FlexRay, escrito en paralelo a su etapa en BMW en Shanghái." },
    tag: "2015 – 2018", art: { pal: "dusk", motif: "grad", mx: 400, my: 250, ms: .9, sunX: 600 } },
  { title: { de: "B.Eng. Mechatronik & IT", en: "B.Eng. Mechatronics & IT", es: "Grado en Mecatrónica y TI" },
    text: { de: "Hochschule Bochum, duales Studium mit Kiekert. Thesis: pneumatische Aktuierung für Dauerlauf-Prüfstände.", en: "Hochschule Bochum, cooperative degree with Kiekert. Thesis: pneumatic actuation for durability test rigs.", es: "Hochschule Bochum, grado dual con Kiekert. Trabajo fin de grado: accionamiento neumático para bancos de pruebas de durabilidad." },
    tag: "2011 – 2015", art: { pal: "miami", motif: "grad", mx: 400, my: 250, ms: .9, sunX: 200 } },
  { title: { de: "Industriemechaniker", en: "Industrial Mechanic", es: "Mecánico industrial" },
    text: { de: "Berufsausbildung Fachrichtung Instandhaltung, Kiekert AG / IHK Düsseldorf. Hier kommt die Hands-on-Mentalität her.", en: "Vocational qualification in maintenance, Kiekert AG / IHK Düsseldorf. Where the hands-on mindset comes from.", es: "Formación profesional en mantenimiento, Kiekert AG / IHK Düsseldorf. De aquí viene su mentalidad práctica." },
    tag: "2011 – 2013", art: { pal: "jade", motif: "gear", mx: 400, my: 250, ms: .8, sunX: 600 } },
  { title: { de: "Data Science & IT-Projektmanagement", en: "Data Science & IT PM", es: "Data Science y gestión de proyectos TI" },
    text: { de: "cimdata Bildungsakademie: Python, KI, SQL/NoSQL und Scrum.", en: "cimdata Bildungsakademie: Python, AI, SQL/NoSQL and Scrum.", es: "cimdata Bildungsakademie: Python, IA, SQL/NoSQL y Scrum." },
    tag: "2024 – 2025", art: { pal: "night", motif: "code", mx: 400, my: 250, ms: .9, stars: true, sunX: 200, sunR: 80 } },
  { title: { de: "Professional Scrum Master I", en: "Professional Scrum Master I", es: "Professional Scrum Master I" },
    text: { de: "Zertifizierung von Scrum.org.", en: "Scrum.org certification.", es: "Certificación de Scrum.org." },
    tag: "2024", art: { pal: "neon", motif: "cert", mx: 400, my: 250, ms: .9, sunX: 620 } },
  { title: { de: "ISO 26262 Funktionale Sicherheit", en: "ISO 26262 Functional Safety", es: "ISO 26262 Seguridad funcional" },
    text: { de: "TÜV SÜD Akademie.", en: "TÜV SÜD Akademie.", es: "TÜV SÜD Akademie." },
    tag: "2024", art: { pal: "teal", motif: "cert", mx: 400, my: 250, ms: .9, sunX: 200 } }
];

/* ---------- SVG key-art generator (for sections without artwork) ---------- */
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

/* ---------- top strip: procedurally drawn palm fronds ---------- */
function frond(bx, by, len, ang, bend, th) {
  const a = ang * Math.PI / 180, dx = Math.cos(a), dy = Math.sin(a);
  const P = t => [bx + dx * len * t, by + dy * len * t + len * bend * t * t];
  const T = t => { const x = dx * len, y = dy * len + 2 * len * bend * t, m = Math.hypot(x, y); return [x / m, y / m]; };
  const n = Math.round(len / 3.4), f = v => v.toFixed(1);
  let d = "";
  for (let i = 1; i <= n; i++) {
    const t = i / n, dt = 2.4 / n;
    const [px, py] = P(t), [qx, qy] = P(Math.min(1, t + dt)), [tx, ty] = T(t);
    const l = th * (1 - t * 0.82) * (0.45 + 0.55 * Math.min(1, t * 6));
    [-1, 1].forEach(s => {
      const r = s * (52 - 20 * t) * Math.PI / 180, c = Math.cos(r), sn = Math.sin(r);
      let ux = tx * c - ty * sn, uy = tx * sn + ty * c + 0.55;
      const m = Math.hypot(ux, uy); ux /= m; uy /= m;
      d += `M${f(px)} ${f(py)}L${f(px + ux * l)} ${f(py + uy * l)}L${f(qx)} ${f(qy)}Z`;
    });
  }
  const [ex, ey] = P(1), [mx, my] = P(0.5);
  d += `M${f(bx)} ${f(by)}Q${f(mx)} ${f(my)} ${f(ex)} ${f(ey)}`;
  return `<path d="${d}" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`;
}
(function topstripPalms() {
  const host = document.querySelector(".topstrip__palms");
  if (!host) return;
  const crown = (x, y, angs, L, bend, th) => angs.map(a => [x, y, L * (1 - .45 * Math.abs(Math.sin(a * Math.PI / 180))), a, bend, th]);
  const sets = [
    [...crown(36, -6, [8, 32, 62, 118, 150, 172], 112, .22, 21), ...crown(210, -8, [14, 48, 100, 142, 170], 100, .24, 19), ...crown(370, -6, [10, 40, 95, 150], 90, .24, 18),
     ...crown(-10, 74, [-18, -44, -70], 95, -.2, 20), ...crown(260, 78, [-24, -50, -80], 80, -.18, 17)],
    [...crown(30, -8, [12, 40, 78, 128, 160], 106, .24, 20), ...crown(180, -6, [8, 36, 64, 112, 152, 176], 104, .22, 21), ...crown(340, -8, [16, 52, 106, 150], 90, .24, 18),
     ...crown(-12, 76, [-20, -46, -72], 90, -.2, 19), ...crown(230, 80, [-26, -54], 80, -.18, 16)]
  ];
  host.innerHTML = sets.map(s => `<svg viewBox="0 0 520 64" preserveAspectRatio="xMinYMin slice" fill="currentColor" aria-hidden="true" focusable="false">${s.map(a => frond(...a)).join("")}</svg>`).join("");
})();

const MOTIF = {
  gear: `<circle cx="0" cy="0" r="62" stroke-width="22" stroke-dasharray="15 13.5"/><circle cx="0" cy="0" r="46"/><circle cx="0" cy="0" r="16"/><circle cx="105" cy="78" r="34" stroke-width="14" stroke-dasharray="10 9.6" stroke="#ff8fc8"/><circle cx="105" cy="78" r="10" stroke="#ff8fc8"/>`,
  nodes: `<rect x="-200" y="-30" width="76" height="56" rx="14"/><rect x="-60" y="-90" width="76" height="56" rx="14"/><rect x="-60" y="40" width="76" height="56" rx="14"/><rect x="90" y="-30" width="76" height="56" rx="14" stroke="#ff8fc8"/><path d="M-124 -2 C-90 -2 -95 -62 -60 -62 M-124 -2 C-90 -2 -95 68 -60 68 M16 -62 C55 -62 50 -2 90 -2 M16 68 C55 68 50 -2 90 -2"/><path d="M128 -60 L134 -44 L150 -38 L134 -32 L128 -16 L122 -32 L106 -38 L122 -44 Z" fill="#ff8fc8" stroke="#ff8fc8"/><circle cx="-162" cy="-2" r="8"/><path d="M-36 -62 L-8 -62 M-36 68 L-8 68"/>`,
  racket: `<ellipse cx="-20" cy="-40" rx="58" ry="70" transform="rotate(-20 -20 -40)"/><path d="M5 22 L40 110" stroke-width="14"/><circle cx="-30" cy="-60" r="4"/><circle cx="-6" cy="-52" r="4"/><circle cx="-40" cy="-30" r="4"/><circle cx="-16" cy="-22" r="4"/><circle cx="-26" cy="6" r="4"/><circle cx="100" cy="-110" r="16" stroke="#d7f27a"/><path d="M60 -80 Q80 -100 86 -104" stroke-dasharray="6 8" opacity=".6"/>`,
  diver: `<path d="M-90 0 Q-30 -55 40 0 Q-30 55 -90 0 Z"/><path d="M40 0 L80 -30 L80 30 Z"/><circle cx="-60" cy="-6" r="5"/><path d="M-20 -30 Q-10 0 -20 30" opacity=".7"/><path d="M120 -110 Q150 -100 140 -80 Q170 -70 155 -50 Q190 -40 170 -15 Q195 0 175 20" fill="#ff8fc8" stroke="#ff8fc8" opacity=".55"/><circle cx="-120" cy="-80" r="8"/><circle cx="-108" cy="-110" r="5"/><circle cx="-124" cy="-134" r="3"/><path d="M-300 -170 Q-250 -185 -200 -170 T-100 -170 T0 -170 T100 -170 T200 -170 T300 -170" opacity=".5"/><path d="M-200 130 Q-170 80 -150 130 M-160 130 Q-140 70 -110 130" stroke="#ff8fc8"/>`,
  tajine: `<ellipse cx="0" cy="60" rx="120" ry="18"/><path d="M-90 52 Q0 -150 90 52"/><circle cx="0" cy="-58" r="10"/><path d="M-60 20 Q0 -10 60 20" opacity=".6"/><path d="M-30 -100 Q-40 -130 -25 -150 M0 -90 Q-10 -125 5 -150 M30 -100 Q20 -130 35 -150" opacity=".6"/>`,
  pins: `<path d="M-60 80 Q-80 30 -66 0 Q-56 -20 -66 -40 Q-70 -70 -55 -70 Q-40 -70 -44 -40 Q-54 -20 -44 0 Q-30 30 -50 80 Z"/><path d="M0 80 Q-20 30 -6 0 Q4 -20 -6 -40 Q-10 -70 5 -70 Q20 -70 16 -40 Q6 -20 16 0 Q30 30 10 80 Z"/><path d="M60 80 Q40 30 54 0 Q64 -20 54 -40 Q50 -70 65 -70 Q80 -70 76 -40 Q66 -20 76 0 Q90 30 70 80 Z"/><path d="M-64 -30 L-46 -30 M-4 -30 L14 -30 M56 -30 L74 -30" stroke="#ff8fc8"/><circle cx="-150" cy="55" r="28" stroke="#ff8fc8"/><path d="M-250 55 L-190 55 M-240 40 L-200 40" opacity=".5"/>`,
  ball: `<circle cx="0" cy="0" r="66"/><path d="M-66 0 L66 0 M0 -66 L0 66 M-46 -47 Q-10 0 -46 47 M46 -47 Q10 0 46 47"/><path d="M90 -60 Q130 -110 170 -60" stroke-dasharray="8 8" opacity=".6"/>`,
  chat: `<path d="M-150 -70 h160 a20 20 0 0 1 20 20 v60 a20 20 0 0 1 -20 20 h-110 l-30 26 v-26 h-20 a20 20 0 0 1 -20 -20 v-60 a20 20 0 0 1 20 -20 z"/><text x="-120" y="-12" fill="#fff4cc" stroke="none" font-family="Sofia Sans Extra Condensed, sans-serif" font-weight="800" font-size="48">¡HOLA!</text><path d="M60 0 h100 a18 18 0 0 1 18 18 v44 a18 18 0 0 1 -18 18 h-10 v22 l-26 -22 h-64 a18 18 0 0 1 -18 -18 v-44 a18 18 0 0 1 18 -18 z" stroke="#ff8fc8"/><path d="M84 40 h70" stroke="#ff8fc8"/>`,
  grad: `<path d="M-110 -30 L0 -80 L110 -30 L0 20 Z"/><path d="M-60 -6 L-60 50 Q0 85 60 50 L60 -6"/><path d="M100 -26 L100 40"/><circle cx="100" cy="48" r="7" fill="#ff8fc8" stroke="#ff8fc8"/>`,
  cert: `<path d="M0 -110 L80 -80 L80 0 Q80 70 0 110 Q-80 70 -80 0 L-80 -80 Z"/><path d="M-36 0 L-8 28 L42 -30" stroke="#d7f27a" stroke-width="8"/>`,
  code: `<path d="M-60 -60 L-130 0 L-60 60 M60 -60 L130 0 L60 60" stroke-width="8"/><path d="M24 -90 L-24 90" stroke="#ff8fc8" stroke-width="8"/>`,
  chart: `<path d="M-150 90 L150 90 M-150 90 L-150 -110"/><rect x="-120" y="20" width="40" height="70"/><rect x="-60" y="-20" width="40" height="110"/><rect x="0" y="-60" width="40" height="150"/><rect x="60" y="-30" width="40" height="120"/><path d="M-100 0 L-40 -40 L20 -90 L80 -60 L140 -110" stroke="#ff8fc8"/>`,
  people: `<circle cx="0" cy="-60" r="30"/><path d="M-60 40 Q-60 -20 0 -20 Q60 -20 60 40"/><circle cx="-110" cy="-30" r="24" opacity=".75"/><path d="M-160 50 Q-160 0 -110 0 Q-70 0 -64 20" opacity=".75"/><circle cx="110" cy="-30" r="24" opacity=".75"/><path d="M160 50 Q160 0 110 0 Q70 0 64 20" opacity=".75"/><path d="M-30 -130 L0 -150 L30 -130" stroke="#ff8fc8"/>`,
  plane: `<path d="M-120 20 L120 -10 Q150 -14 150 0 Q150 12 120 12 L-110 40 Z"/><path d="M0 4 L-60 70 L-30 70 L50 6 M10 -2 L-40 -60 L-14 -60 L56 -6 M-110 26 L-140 -10 L-122 -10 L-90 22"/><path d="M-300 120 Q-160 30 -130 40" stroke-dasharray="10 10" opacity=".6"/>`
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
  if (o.city) {
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
    const m = MOTIF[o.motif];
    s += `<g transform="translate(${o.mx ?? 400} ${o.my ?? 220}) scale(${o.ms ?? 1})" fill="none" stroke="${o.mc || "#fff4cc"}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" filter="url(#${id}g)">${m}</g>`;
  }
  return s + `</svg>`;
}

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const nl = t => esc(t).replace(/\n/g, "<br>");
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smooth = t => t * t * (3 - 2 * t);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- reveal bookkeeping ----------
   First paint: sections fade in via IntersectionObserver as the user
   scrolls to them. On a language switch we rebuild the same containers
   in place, so new nodes should appear instantly, with no replay and
   no transition flicker. */
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (!en.isIntersecting) return;
  en.target.classList.add("in");
  en.target.querySelectorAll(".stat__fill").forEach(f => f.style.width = f.dataset.v + "%");
  io.unobserve(en.target);
}), { threshold: 0.15 });

function mount(container, html, instant) {
  container.innerHTML = html;
  if (instant || reduce) {
    container.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
    container.querySelectorAll(".stat__fill").forEach(f => f.style.width = f.dataset.v + "%");
  } else {
    container.querySelectorAll(".reveal").forEach(el => io.observe(el));
  }
}
function withoutTransitions(fn) {
  document.body.classList.add("no-anim");
  fn();
  document.body.offsetHeight; // reflow
  requestAnimationFrame(() => requestAnimationFrame(() => document.body.classList.remove("no-anim")));
}

/* ---------- render sections ---------- */
function renderFeatured(instant) {
  mount($("#featured"), FEATURED.map((f, i) => `
    <button class="tcard reveal" data-m="${f.m}" style="transition-delay:${i * .08}s" aria-label="${esc(tr(f.eye))}: ${esc(tr(f.title).replace("\n", " "))}, ${esc(window.BM_I18N.t("mission.ariaOpen"))}">
      <img src="${f.img}" alt="${esc(tr(f.alt))}" loading="lazy">
      <span class="tcard__play" aria-hidden="true"></span>
      <p class="eyebrow">${esc(tr(f.eye))}</p><h3>${nl(tr(f.title))}</h3>
    </button>`).join(""), instant);
}

function missionMedia(m) {
  if (m.img) return `<div class="banner__media ${m.grade ? "banner__grade" : ""}" style="--pos:${m.pos || "50% 50%"};--pos-m:${m.posM || m.pos || "50% 50%"}"><img src="${m.img}" alt="" loading="lazy"></div>`;
  return `<div class="banner__media">${scene(m.art)}</div>`;
}
function renderMissions(instant) {
  const T = window.BM_I18N.t;
  mount($("#missionList"), MISSIONS.map((m, i) => `
    <article class="banner reveal ${m.left ? "banner--left" : ""} ${m.windowImg ? "banner--window" : ""}">
      ${missionMedia(m)}
      ${m.windowImg ? `<div class="window ${m.left ? "" : "window--left"}" aria-hidden="true"><div class="window__bar"><i></i><i></i><i></i>${esc(m.windowTitle)}</div><img src="${m.windowImg}" alt="" loading="lazy"></div>` : ""}
      <div class="banner__txt">
        <p class="eyebrow">${T("mission.label")} ${m.no} · ${m.dates}</p>
        <h3 class="title">${esc(tr(m.title))}</h3>
        <p class="banner__company">${esc(tr(m.sub))}</p>
        <p class="banner__desc">${esc(tr(m.desc))}</p>
        <p class="banner__reward"><b>${T("mission.reward")}</b>${esc(tr(m.reward))}</p>
        <button class="pill pill--${m.pill}" data-m="${i}">${T("mission.briefing")} <i>→</i></button>
      </div>
    </article>`).join(""), instant);
}

function renderArsenal(instant) {
  mount($("#arsenalGrid"), ARSENAL.map(a => `
    <article class="acard reveal ${a.wide ? "acard--wide" : ""}">
      ${a.img ? `<img src="${a.img}" alt="${esc(tr(a.alt))}" loading="lazy">` : scene(a.art)}
      <p class="eyebrow">${esc(tr(a.eye))}</p>
      <h3 class="title">${esc(tr(a.title))}</h3>
      <div class="chips">${tr(a.tags).map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div>
    </article>`).join(""), instant);
}

function renderStats(instant) {
  mount($("#stats"), STATS.map(s => `
    <div class="stat"><div class="stat__row"><span>${esc(tr(s.name))}</span><em>${s.v}/10</em></div>
    <div class="stat__bar"><div class="stat__fill" data-v="${s.v * 10}" style="--c:${s.c}"></div></div></div>`).join(""), instant);
}

function card(q) {
  return `
  <article class="ncard reveal">
    <div class="ncard__art">${q.img ? `<img src="${q.img}" alt="" loading="lazy">` : scene(q.art)}</div>
    <div class="ncard__body"><h3>${esc(tr(q.title))}</h3><p>${esc(tr(q.text))}</p><small>${esc(tr(q.tag))}</small></div>
  </article>`;
}
function renderQuests(instant) { mount($("#quests"), QUESTS.map(card).join(""), instant); }
function renderTraining(instant) { mount($("#trainingList"), TRAINING.map(card).join(""), instant); }

function renderTravel(instant) {
  const T = window.BM_I18N.t;
  mount($("#travelBanner"), `
    <div class="banner__media">${scene({ pal: "miami", motif: "plane", mx: 300, my: 190, ms: 1.2, sunX: 300, sunR: 150, city: true })}</div>
    <div class="banner__txt">
      <p class="eyebrow">${T("travel.eyebrow")}</p>
      <h3 class="title">${T("travel.title")}</h3>
      <div class="travel__stats"><div><b>35</b><span>${T("travel.countries")}</span></div><div><b>109</b><span>${T("travel.places")}</span></div></div>
      <p class="banner__desc">${T("travel.desc")}</p>
      <span class="pill pill--lilac" aria-disabled="true">${T("travel.comingSoon")}</span>
    </div>`, instant);
  mount($("#continents"), CONTINENTS.map(c => `
    <div class="cont"><h4>${esc(tr(c.name))}<em>${tr(c.list).length}</em></h4><p>${tr(c.list).map(esc).join(" · ")}</p></div>`).join(""), true);
}

/* ---------- mission briefing dialog with intel gallery ---------- */
const brief = $("#brief"), briefArt = $("#briefArt");
let currentMission = null, currentIndex = null;
function showArt(m) {
  briefArt.classList.remove("is-intel");
  briefArt.innerHTML = m.img ? `<img src="${m.img}" alt="">` : scene(m.art);
}
function showIntel(item) {
  briefArt.classList.add("is-intel");
  briefArt.innerHTML = `<img src="${item.src}" alt="${esc(tr(item.cap))}"><figcaption>${esc(tr(item.cap))}</figcaption>`;
}
function openBrief(i) {
  const T = window.BM_I18N.t;
  const m = MISSIONS[i]; currentMission = m; currentIndex = i;
  showArt(m);
  $("#briefEye").textContent = `${T("mission.label")} ${m.no} · ${m.dates} · ${tr(m.place)}`;
  $("#briefTitle").textContent = tr(m.title);
  $("#briefSub").textContent = tr(m.sub);
  $("#briefList").innerHTML = tr(m.bullets).map(t => `<li>${esc(t)}</li>`).join("");
  $("#briefChips").innerHTML = m.stack.map(t => `<span class="chip">${esc(t)}</span>`).join("");
  $("#briefIntel").innerHTML = m.intel.length ? `
    <h4>${T("brief.intel")}</h4><p>${T("brief.intelHint")}</p>
    <div class="intel__grid">${m.intel.map((it, k) => `
      <button class="intel__item" data-k="${k}" aria-pressed="false"><img src="${it.src}" alt="" loading="lazy"><span>${esc(tr(it.cap))}</span></button>`).join("")}
    </div>` : "";
  if (!brief.open) brief.showModal();
  brief.scrollTop = 0;
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-m]");
  if (b) { openBrief(+b.dataset.m); return; }
  const it = e.target.closest(".intel__item");
  if (it && currentMission) {
    const pressed = it.getAttribute("aria-pressed") === "true";
    brief.querySelectorAll(".intel__item").forEach(x => x.setAttribute("aria-pressed", "false"));
    if (pressed) showArt(currentMission);
    else { it.setAttribute("aria-pressed", "true"); showIntel(currentMission.intel[+it.dataset.k]); brief.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); }
  }
});
$(".brief__x").addEventListener("click", () => brief.close());
brief.addEventListener("click", e => { if (e.target === brief) brief.close(); });
brief.addEventListener("close", () => { currentMission = null; currentIndex = null; });

/* ---------- menu ---------- */
const burger = $(".nav__burger");
const setMenu = open => {
  document.body.classList.toggle("menu-open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", window.BM_I18N.t(open ? "nav.menuClose" : "nav.menuOpen"));
};
burger.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
document.querySelectorAll(".menu a").forEach(a => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

/* ---------- hero: shatter geometry ---------- */
const hero = $(".hero"), poster = $("#poster"), posterImg = $("#posterImg"), nav = $(".nav");
const shardsEl = $("#shards"), cracksEl = $("#cracks");
const C = { x: 57, y: 46 };          // impact point (% of poster), roughly on the chest
const shards = [];
(function buildShards() {
  const r = rng(424242);
  const N = 14;
  const perim = t => {                // 0..4 around the rectangle, clockwise from top-left
    t = ((t % 4) + 4) % 4; const s = Math.floor(t), f = t - s;
    return s === 0 ? { x: f * 100, y: 0 } : s === 1 ? { x: 100, y: f * 100 } : s === 2 ? { x: 100 - f * 100, y: 100 } : { x: 0, y: 100 - f * 100 };
  };
  const ts = Array.from({ length: N }, (_, i) => (i + 0.2 + r() * 0.6) * 4 / N);
  const outer = ts.map(perim);
  const inner = outer.map(p => { const k = 0.34 + r() * 0.22; return { x: C.x + (p.x - C.x) * k, y: C.y + (p.y - C.y) * k }; });
  const between = (t0, t1) => { const pts = []; for (let k = 1; k <= 4; k++) { const kk = k < t0 ? k + 4 : k; if (kk > t0 && kk < t1) pts.push(perim(k)); } return pts; };
  const add = (pts, isInner) => {
    const cx = pts.reduce((a, p) => a + p.x, 0) / pts.length, cy = pts.reduce((a, p) => a + p.y, 0) / pts.length;
    shards.push({ pts, cx, cy, inner: isInner, d: isInner ? 0.35 + r() * 0.35 : 0.65 + r() * 0.7, rot: (r() - 0.5) * (isInner ? 110 : 70), z: r() * 0.28, el: null });
  };
  for (let i = 0; i < N; i++) {
    const j = (i + 1) % N, t0 = ts[i], t1 = j === 0 ? ts[0] + 4 : ts[j];
    add([inner[i], outer[i], ...between(t0, t1), outer[j], inner[j]], false);
    add([C, inner[i], inner[j]], true);
  }
  const f = n => n.toFixed(2);
  shardsEl.innerHTML = shards.map(s => `<div class="shard" style="clip-path:polygon(${s.pts.map(p => `${f(p.x)}% ${f(p.y)}%`).join(",")});transform-origin:${f(s.cx)}% ${f(s.cy)}%"></div>`).join("");
  shardsEl.querySelectorAll(".shard").forEach((el, i) => shards[i].el = el);
  let d = inner.map((p, i) => `M${f(C.x)} ${f(C.y)}L${f(p.x)} ${f(p.y)}L${f(outer[i].x)} ${f(outer[i].y)}`).join("");
  d += "M" + inner.map(p => `${f(p.x)} ${f(p.y)}`).join("L") + "Z";
  cracksEl.innerHTML = `<path d="${d}"/>`;
})();
const syncShardImage = () => { if (posterImg.currentSrc) shardsEl.style.setProperty("--img", `url("${posterImg.currentSrc}")`); };
posterImg.complete ? syncShardImage() : posterImg.addEventListener("load", syncShardImage);

/* ---------- hero: scroll timeline ---------- */
let box = { w: 0, h: 0 }, ticking = false;
const measure = () => { const b = poster.getBoundingClientRect(); box = { w: b.width, h: b.height }; };
function frame() {
  ticking = false;
  const total = hero.offsetHeight - innerHeight;
  const p = reduce ? 1 : clamp(-hero.getBoundingClientRect().top / total, 0, 1);
  const crack = clamp((p - 0.04) / 0.07, 0, 1) * (1 - clamp((p - 0.15) / 0.05, 0, 1));
  const burst = reduce ? 0 : clamp((p - 0.13) / 0.37, 0, 1);
  const reveal = smooth(clamp((p - 0.16) / 0.3, 0, 1));
  const word = smooth(clamp((p - 0.3) / 0.2, 0, 1));
  const tag = smooth(clamp((p - 0.48) / 0.14, 0, 1));
  const info = reduce ? 1 : 1 - clamp((p - 0.03) / 0.08, 0, 1);

  hero.style.setProperty("--reveal", reveal.toFixed(3));
  hero.style.setProperty("--word", word.toFixed(3));
  hero.style.setProperty("--tag", tag.toFixed(3));
  hero.style.setProperty("--info", info.toFixed(3));
  poster.style.setProperty("--crack", crack.toFixed(3));
  poster.style.setProperty("--burst", burst.toFixed(3));
  hero.classList.toggle("is-revealed", tag > 0.5 && !reduce);

  if (!reduce) {
    const isBurst = burst > 0;
    poster.classList.toggle("is-burst", isBurst);
    if (isBurst) {
      const e = smooth(burst), far = Math.max(box.w, box.h) * 1.1;
      const fade = 1 - clamp((burst - 0.5) / 0.5, 0, 1);
      for (const s of shards) {
        let vx = (s.cx - C.x) * box.w / 100, vy = (s.cy - C.y) * box.h / 100;
        const len = Math.hypot(vx, vy) || 1; vx /= len; vy /= len;
        const dist = s.d * far * e;
        s.el.style.transform = `translate3d(${(vx * dist).toFixed(1)}px,${(vy * dist + far * 0.18 * e * e).toFixed(1)}px,0) rotate(${(s.rot * e).toFixed(1)}deg) scale(${(1 + s.z * e).toFixed(3)})`;
        s.el.style.opacity = fade.toFixed(3);
      }
    }
  }
  nav.classList.toggle("is-scrolled", scrollY > hero.offsetHeight - innerHeight * 1.05);
}
const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
addEventListener("scroll", request, { passive: true });
addEventListener("resize", () => { measure(); syncShardImage(); request(); });
measure(); frame();

/* ---------- initial render + language-change re-render ---------- */
function renderAll(instant) {
  renderFeatured(instant);
  renderMissions(instant);
  renderArsenal(instant);
  renderStats(instant);
  renderQuests(instant);
  renderTraining(instant);
  renderTravel(instant);
}
/* Reveal elements that live in the static HTML (story block, section heads,
   stats, travel banner, continents). mount() only observes rendered children. */
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
renderAll(false);

window.addEventListener("bm:langchange", () => {
  withoutTransitions(() => {
    renderAll(true);
    if (currentIndex !== null && brief.open) openBrief(currentIndex);
  });
});
