/* =========================================================
   Björn Müller – portfolio v2 · i18n + radio engine
   The radio IS the language switcher: picking a station picks
   the UI language. Stations also play a CC-BY 4.0 synthwave
   loop by Tomasz Kucza (opengameart.org/content/retro-synthwave-loops),
   credited in the footer.
   ========================================================= */
(function () {
  "use strict";

  const SUPPORTED = ["de", "en", "es"];

  const STATIONS = [
    { id: "en", freq: "98.6", name: "FLASH FM", file: "station-en",
      lang: { de: "Englisch", en: "English", es: "Inglés" } },
    { id: "de", freq: "107.9", name: "K108 ESSEN", file: "station-de",
      lang: { de: "Deutsch", en: "German", es: "Alemán" } },
    { id: "es", freq: "95.4", name: "RADIO VIAJE", file: "station-es",
      lang: { de: "Spanisch", en: "Spanish", es: "Español" } }
  ];

  /* ---------- static UI strings ---------- */
  const UI = {
    "topstrip": { de: "Mission 07 läuft gerade", en: "Mission 07 now playing", es: "Misión 07 sonando ahora" },
    "nav.hire": { de: "Kontakt", en: "Hire Me", es: "Contactar" },
    "nav.menuOpen": { de: "Menü öffnen", en: "Open menu", es: "Abrir menú" },
    "nav.menuClose": { de: "Menü schließen", en: "Close menu", es: "Cerrar menú" },
    "nav.backToTop": { de: "Björn Müller – nach oben", en: "Björn Müller – back to top", es: "Björn Müller – volver arriba" },

    "menu.story": { de: "Story", en: "Story", es: "Historia" },
    "menu.missions": { de: "Missionen", en: "Missions", es: "Misiones" },
    "menu.arsenal": { de: "Arsenal", en: "Arsenal", es: "Arsenal" },
    "menu.quests": { de: "Nebenquests", en: "Side Quests", es: "Misiones secundarias" },
    "menu.travels": { de: "Reisen", en: "Travels", es: "Viajes" },
    "menu.contact": { de: "Kontakt", en: "Contact", es: "Contacto" },

    "hero.tag": { de: "Product Owner & Senior Consultant", en: "Product Owner & Senior Consultant", es: "Product Owner y Senior Consultant" },
    "hero.tagSub": { de: "Agentic AI · Workflow-Automatisierung · Datengetriebene Produkte", en: "Agentic AI · Workflow Automation · Data-Driven Products", es: "IA agéntica · Automatización de flujos · Productos basados en datos" },
    "hero.cta": { de: "Karrieremodus starten", en: "Start Career Mode", es: "Iniciar modo carrera" },
    "hero.info.nowPlaying": { de: "Läuft gerade", en: "Now playing", es: "Sonando ahora" },
    "hero.info.role": { de: "Senior Consultant\n@ Exxeta", en: "Senior Consultant\n@ Exxeta", es: "Senior Consultant\n@ Exxeta" },
    "hero.info.basedIn": { de: "Standort", en: "Based in", es: "Ubicación" },
    "hero.info.location": { de: "Essen, Deutschland\nUmzugsbereit", en: "Essen, Germany\nOpen to relocation", es: "Essen, Alemania\nDisponible para reubicación" },
    "hero.poster.alt": {
      de: "Illustriertes Porträt von Björn Müller im Anzug, verschränkte Arme, vor einer Sonnenuntergangs-Skyline",
      en: "Illustrated portrait of Björn Müller in a suit, arms crossed, in front of a sunset skyline",
      es: "Retrato ilustrado de Björn Müller con traje, brazos cruzados, frente a un horizonte al atardecer"
    },

    "section.featured": { de: "Ausgewählte Missionen", en: "Featured missions", es: "Misiones destacadas" },
    "section.missions": { de: "Missionen", en: "Missions", es: "Misiones" },
    "section.missionsSub": { de: "Karrieremodus · 2011 – heute", en: "Career mode · 2011 – now", es: "Modo carrera · 2011 – hoy" },
    "section.arsenal": { de: "Arsenal", en: "Arsenal", es: "Arsenal" },
    "section.requestCV": { de: "Vollständigen CV anfragen", en: "Request full CV", es: "Solicitar CV completo" },
    "section.quests": { de: "Nebenquests", en: "Side Quests", es: "Misiones secundarias" },
    "section.questsSub": { de: "Hobbys & Crews", en: "Hobbies & crews", es: "Aficiones y equipos" },
    "section.training": { de: "Trainingsprotokoll", en: "Training Records", es: "Registro de formación" },
    "section.trainingSub": { de: "Ausbildung & Zertifikate", en: "Education & certifications", es: "Educación y certificaciones" },

    "edition.kicker": { de: "Karriere-Edition", en: "Career Edition", es: "Edición de carrera" },
    "edition.title": { de: "Karriere-\nEdition", en: "Career\nEdition", es: "Edición de\ncarrera" },
    "edition.desc": {
      de: "Eine exklusive Sammlung von Missionen, die sich durch jedes Kapitel von Björns Karriere ziehen – vom Werkstattboden bis zur Agentic AI.",
      en: "An exclusive collection of missions threaded across every chapter of Björn’s career, from the workshop floor to agentic AI.",
      es: "Una colección exclusiva de misiones que recorre cada capítulo de la carrera de Björn, desde el taller hasta la IA agéntica."
    },
    "edition.cta": { de: "Vollständigen CV anfragen", en: "Request full CV", es: "Solicitar CV completo" },

    "story.h": { de: "Essen, Deutschland.", en: "Essen, Germany.", es: "Essen, Alemania." },
    "story.p": {
      de: "Björn arbeitet seit jeher auf dem horizontalen Balken des T: Mechanik, Elektronik, Software, Menschen. Von der Werkstatt-Ausbildung bei Kiekert über die Objekterkennung für BMW bis zum Backlog bei CARIAD und zur Agentic AI bei Exxeta – er geht dorthin, wo die Arbeit wirklich gemacht wird. Wird ein einfacher Job kompliziert, gräbt er sich rein, holt das Team mit ins Boot und kommt mit einem Prozess raus, der 12 Wochen schneller läuft.",
      en: "Björn has always worked the horizontal bar of the T: mechanics, electronics, software, people. From a workshop apprenticeship at Kiekert to object detection for BMW, from a backlog at CARIAD to agentic AI at Exxeta, he goes where the work is actually done. When an easy job gets complicated, he digs in, brings the team with him and makes it out with a process that runs 12 weeks faster.",
      es: "Björn siempre ha trabajado en la barra horizontal de la T: mecánica, electrónica, software, personas. Desde una formación como aprendiz en el taller de Kiekert hasta la detección de objetos para BMW, desde un backlog en CARIAD hasta la IA agéntica en Exxeta, va allí donde realmente se hace el trabajo. Cuando un encargo sencillo se complica, se involucra a fondo, se lleva al equipo con él y sale adelante con un proceso que corre 12 semanas más rápido."
    },
    "story.fact.class.k": { de: "Klasse", en: "Class", es: "Clase" },
    "story.fact.class.v": { de: "T-shaped Generalist", en: "T-shaped generalist", es: "Generalista en forma de T" },
    "story.fact.base.k": { de: "Standort", en: "Home base", es: "Base" },
    "story.fact.base.v": { de: "Essen · umzugsbereit", en: "Essen · open to relocation", es: "Essen · disponible para reubicación" },
    "story.fact.lang.k": { de: "Sprachen", en: "Languages", es: "Idiomas" },
    "story.fact.lang.v": { de: "Deutsch · Englisch C1 · Spanisch A2", en: "German · English C1 · Spanish A2", es: "Alemán · inglés C1 · español A2" },
    "story.fact.motto.k": { de: "Motto", en: "Motto", es: "Lema" },
    "story.fact.motto.v": { de: "„Geh dahin, wo die Arbeit gemacht wird.“", en: "“Go where the work is done.”", es: "«Ve allí donde se hace el trabajo.»" },

    "mission.label": { de: "Mission", en: "Mission", es: "Misión" },
    "mission.reward": { de: "BELOHNUNG", en: "REWARD", es: "RECOMPENSA" },
    "mission.briefing": { de: "Missionsbriefing", en: "Mission Briefing", es: "Informe de misión" },
    "mission.ariaOpen": { de: "Missionsbriefing öffnen", en: "open mission briefing", es: "abrir informe de misión" },

    "stats.title": { de: "Spielerwerte", en: "Player Stats", es: "Estadísticas del jugador" },
    "stats.sub": { de: "Selbsteinschätzung · aktualisiert 10/2026", en: "Self-assessed · updated 10/2026", es: "Autoevaluación · actualizado 10/2026" },

    "travel.eyebrow": { de: "Menschen & Orte", en: "People & Places", es: "Gente y lugares" },
    "travel.title": { de: "Nur auf dem Planeten Erde", en: "Only on Planet Earth", es: "Solo en el planeta Tierra" },
    "travel.countries": { de: "Länder", en: "Countries", es: "Países" },
    "travel.places": { de: "Orte", en: "Places", es: "Lugares" },
    "travel.desc": {
      de: "Es begann in Shanghai: die Erkenntnis, dass man es auch auf der anderen Seite der Welt schafft. Seitdem verschieben sich die Grenzen immer weiter – von Hostels in Kyoto bis zu vier Monaten in Kolumbien.",
      en: "It started in Shanghai: realizing you can make it on the other side of the world. Since then, the limits keep moving, from Kyoto hostels to four months in Colombia.",
      es: "Todo empezó en Shanghái: darse cuenta de que también se puede triunfar al otro lado del mundo. Desde entonces, los límites no dejan de moverse, desde hostales en Kioto hasta cuatro meses en Colombia."
    },
    "travel.comingSoon": { de: "Reisetagebuch · folgt in Kürze", en: "Travel log · coming soon", es: "Diario de viaje · próximamente" },

    "brief.intel": { de: "Intel", en: "Intel", es: "Inteligencia" },
    "brief.intelHint": {
      de: "Referenzmaterial aus dem Einsatz. Element auswählen zum Vergrößern, erneut auswählen zum Zurückgehen.",
      en: "Reference material from the field. Select an item to enlarge it, select it again to go back.",
      es: "Material de referencia del terreno. Selecciona un elemento para ampliarlo, selecciónalo de nuevo para volver."
    },
    "brief.close": { de: "Schließen", en: "Close", es: "Cerrar" },

    "foot.cta.title": { de: "Kontakt aufnehmen", en: "Get in touch", es: "Ponte en contacto" },
    "foot.cta.desc": {
      de: "Product Ownership, Workflow-Automatisierung oder Agentic AI auf deiner Roadmap? Schreib eine Nachricht und erhalte innerhalb von zwei Tagen eine Antwort.",
      en: "Product ownership, workflow automation or agentic AI on your roadmap? Send a message and get a reply within two days.",
      es: "¿Tienes product ownership, automatización de procesos o IA agéntica en tu roadmap? Envía un mensaje y recibe respuesta en dos días."
    },
    "foot.imprint": { de: "Impressum", en: "Imprint", es: "Aviso legal" },
    "foot.privacy": { de: "Datenschutz", en: "Privacy", es: "Privacidad" },
    "foot.music": { de: "Musik: Tomasz Kucza (CC BY 4.0)", en: "Music: Tomasz Kucza (CC BY 4.0)", es: "Música: Tomasz Kucza (CC BY 4.0)" },
    "foot.rating.badge": { de: "TEAM-\nPLAYER", en: "TEAM\nPLAYER", es: "EN\nEQUIPO" },
    "foot.rating.line1": {
      de: "Agile Zeremonien, starker Kaffee, häufiges Reisen, passables Spanisch, wiederholte Nutzung von Post-its.",
      en: "Agile Ceremonies, Strong Coffee, Frequent Travel, Mild Spanish, Repeated Use of Post-its.",
      es: "Ceremonias ágiles, café cargado, viajes frecuentes, español aceptable, uso recurrente de notas adhesivas."
    },
    "foot.rating.line2": { de: "Vor-Ort- und Remote-Missionen.", en: "In-Office and Remote Missions.", es: "Misiones presenciales y en remoto." },
    "foot.linkedin": { de: "LinkedIn", en: "LinkedIn", es: "LinkedIn" },
    "foot.xing": { de: "Xing", en: "Xing", es: "Xing" },
    "foot.email": { de: "E-Mail", en: "E-Mail", es: "Correo electrónico" },

    "radio.toggle": { de: "Radio öffnen", en: "Open radio", es: "Abrir radio" },
    "radio.play": { de: "Abspielen", en: "Play", es: "Reproducir" },
    "radio.pause": { de: "Pause", en: "Pause", es: "Pausa" },
    "radio.volume": { de: "Lautstärke", en: "Volume", es: "Volumen" },
    "radio.onAir": { de: "ON AIR", en: "ON AIR", es: "AL AIRE" },
    "radio.hint": { de: "Sender wählen = Sprache wechseln", en: "Pick a station to change language", es: "Elige una emisora para cambiar el idioma" }
  };

  /* ---------- language state ---------- */
  function detectDefault() {
    const saved = localStorage.getItem("bm-lang");
    if (saved && SUPPORTED.includes(saved)) return saved;
    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return SUPPORTED.includes(nav) ? nav : "en";
  }
  let current = detectDefault();

  function t(key) {
    const row = UI[key];
    if (!row) return key;
    return row[current] || row.en || key;
  }
  function tr(field) {
    if (field == null) return "";
    if (typeof field === "string") return field;
    return field[current] || field.en || "";
  }

  function escapeHtml(s) {
    return s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  }

  function applyStaticI18n(root) {
    (root || document).querySelectorAll("[data-i18n]").forEach(el => {
      el.innerHTML = escapeHtml(t(el.dataset.i18n)).replace(/\n/g, "<br>");
    });
    (root || document).querySelectorAll("[data-i18n-aria]").forEach(el => {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });
    (root || document).querySelectorAll("[data-i18n-alt]").forEach(el => {
      el.setAttribute("alt", t(el.dataset.i18nAlt));
    });
  }

  function setLang(code, opts) {
    opts = opts || {};
    if (!SUPPORTED.includes(code)) return;
    const changed = code !== current;
    current = code;
    localStorage.setItem("bm-lang", code);
    document.documentElement.lang = code;
    applyStaticI18n(document);
    if (changed || opts.force) {
      window.dispatchEvent(new CustomEvent("bm:langchange", { detail: { lang: code } }));
    }
    Radio.onLangSet(code, opts.userGesture);
  }

  /* ---------- radio engine ---------- */
  const Radio = (function () {
    const els = {};
    let playing = false;
    let volume = Number(localStorage.getItem("bm-vol") ?? 0.55);
    let activeAudio = null;

    function audioFor(id) {
      if (!els[id]) {
        const a = new Audio();
        a.loop = true;
        a.preload = "none";
        a.volume = 0;
        const base = "audio/" + STATIONS.find(s => s.id === id).file;
        const srcOgg = document.createElement("source"); srcOgg.src = base + ".ogg"; srcOgg.type = "audio/ogg";
        const srcMp3 = document.createElement("source"); srcMp3.src = base + ".mp3"; srcMp3.type = "audio/mpeg";
        a.appendChild(srcOgg); a.appendChild(srcMp3);
        els[id] = a;
      }
      return els[id];
    }

    // Each <audio> tracks its own pending fade (as a property on the element)
    // so fading the outgoing and incoming station in and out at the same
    // time doesn't let one call's rAF loop cancel the other's.
    function fade(audio, to, ms, onDone) {
      if (audio._fadeRaf) cancelAnimationFrame(audio._fadeRaf);
      const from = audio.volume, start = performance.now();
      if (ms <= 0) { audio.volume = to; audio._fadeRaf = null; if (onDone) onDone(); return; }
      function step(now) {
        // clamp both ends: a rAF timestamp can land fractionally before
        // `start` (seen under headless/virtual-time clocks), which would
        // otherwise send volume negative and throw IndexSizeError
        const p = Math.max(0, Math.min(1, (now - start) / ms));
        audio.volume = from + (to - from) * p;
        if (p < 1) { audio._fadeRaf = requestAnimationFrame(step); }
        else { audio._fadeRaf = null; if (onDone) onDone(); }
      }
      audio._fadeRaf = requestAnimationFrame(step);
    }

    function stationMeta(id) { return STATIONS.find(s => s.id === id); }

    function play(id) {
      const next = audioFor(id);
      if (playing && activeAudio === next) return; // already the active station
      const prev = activeAudio;
      next.volume = 0;
      const p = next.play();
      if (p && p.catch) p.catch(() => { playing = false; renderUI(); });
      fade(next, volume, 280);
      if (prev && prev !== next) fade(prev, 0, 280, () => prev.pause());
      activeAudio = next;
      playing = true;
      renderUI();
    }
    function pause() {
      if (activeAudio) fade(activeAudio, 0, 220, () => activeAudio && activeAudio.pause());
      playing = false;
      renderUI();
    }
    function setVolume(v) {
      volume = Math.max(0, Math.min(1, v));
      localStorage.setItem("bm-vol", String(volume));
      if (activeAudio && playing) activeAudio.volume = volume;
      renderUI();
    }

    function onLangSet(id, userGesture) {
      if (playing) {
        play(id); // crossfade to the new station's track
      } else if (userGesture) {
        play(id); // tapping a station row starts the radio
      } else {
        renderUI(); // page-load / silent default: just reflect selection
      }
    }

    /* ---- widget DOM ---- */
    let panelOpen = false;
    function build() {
      const wrap = document.createElement("div");
      wrap.className = "radio";
      wrap.innerHTML = `
        <button class="radio__dial" type="button" aria-haspopup="true" aria-expanded="false">
          <span class="radio__eq" aria-hidden="true"><i></i><i></i><i></i><i></i></span>
          <span class="radio__freq"></span>
          <span class="radio__name"></span>
        </button>
        <div class="radio__panel" role="menu">
          <p class="radio__hint" data-i18n="radio.hint"></p>
          <ul class="radio__stations"></ul>
          <div class="radio__transport">
            <button class="radio__play" type="button"></button>
            <input class="radio__vol" type="range" min="0" max="1" step="0.01" aria-label="">
          </div>
        </div>`;
      document.body.appendChild(wrap);

      wrap.querySelector(".radio__stations").innerHTML = STATIONS.map(s => `
        <li><button class="radio__station" type="button" data-id="${s.id}">
          <span class="radio__station-freq">${s.freq}</span>
          <span class="radio__station-txt"><b>${s.name}</b><small data-lang="${s.id}"></small></span>
          <span class="radio__onair" data-i18n="radio.onAir"></span>
        </button></li>`).join("");

      const dial = wrap.querySelector(".radio__dial");
      const panel = wrap.querySelector(".radio__panel");
      dial.addEventListener("click", () => {
        panelOpen = !panelOpen;
        panel.classList.toggle("is-open", panelOpen);
        dial.setAttribute("aria-expanded", String(panelOpen));
      });
      document.addEventListener("click", e => {
        if (panelOpen && !wrap.contains(e.target)) { panelOpen = false; panel.classList.remove("is-open"); dial.setAttribute("aria-expanded", "false"); }
      });
      document.addEventListener("keydown", e => {
        if (e.key === "Escape" && panelOpen) { panelOpen = false; panel.classList.remove("is-open"); dial.setAttribute("aria-expanded", "false"); dial.focus(); }
      });

      wrap.querySelectorAll(".radio__station").forEach(btn => {
        btn.addEventListener("click", () => setLang(btn.dataset.id, { userGesture: true }));
      });
      const playBtn = wrap.querySelector(".radio__play");
      playBtn.addEventListener("click", () => {
        if (playing) pause(); else play(current);
      });
      const vol = wrap.querySelector(".radio__vol");
      vol.value = String(volume);
      vol.addEventListener("input", () => setVolume(Number(vol.value)));

      els.wrap = wrap;
      return wrap;
    }

    function renderUI() {
      const wrap = els.wrap || build();
      const meta = stationMeta(current);
      wrap.querySelector(".radio__freq").textContent = meta.freq;
      wrap.querySelector(".radio__name").textContent = meta.name;
      wrap.classList.toggle("is-playing", playing);
      wrap.querySelectorAll(".radio__station").forEach(btn => btn.classList.toggle("is-active", btn.dataset.id === current));
      wrap.querySelectorAll("[data-lang]").forEach(el => { el.textContent = tr(stationMeta(el.dataset.lang).lang); });
      const playBtn = wrap.querySelector(".radio__play");
      playBtn.textContent = playing ? "⏸" : "▶";
      playBtn.setAttribute("aria-label", t(playing ? "radio.pause" : "radio.play"));
      wrap.querySelector(".radio__dial").setAttribute("aria-label", t("radio.toggle") + " – " + meta.name);
      wrap.querySelector(".radio__vol").setAttribute("aria-label", t("radio.volume"));
      applyStaticI18n(wrap);
    }

    return { onLangSet, renderUI, play, pause };
  })();

  /* ---------- boot ---------- */
  window.BM_I18N = { t, tr, getLang: () => current, setLang, SUPPORTED, STATIONS };
  document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.lang = current;
    applyStaticI18n(document);
    Radio.renderUI();
  });
})();
