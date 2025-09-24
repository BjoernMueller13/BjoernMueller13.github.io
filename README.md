# BjoernMueller13.github.io

Zweisprachige, statische Portfolio-Website (DE/EN) für **GitHub Pages** – leichtgewichtig (HTML/CSS/JS), modern (helles Theme, Navy-Akzent), mobilfreundlich.

## ✨ Highlights
- **Language-Switch:** `DE` ⇄ `EN` (Header-Button)
- **Hero:** Portrait ohne weißen Kasten, navy-Akzent, kompakte Abstände
- **Buttons:** „Projekte ansehen“, „Kontakt“, **CV-Download** (DE/EN-Variante)
- **Kontaktbereich:** am **Seitenende**
- **Skills-Layout:** zweispaltig
  - **Links:** *Programmiersprachen* · *Agile & Requirement Skills*
  - **Rechts:** *Sprachen* · *Fortbildungen*
- **Projektkarten:** Repo-Buttons **fixiert unten links**, hellgrauer Button mit **weißer** Schrift
- **Projekte-Status:** zusätzlicher Hinweis *„Derzeit in Entwicklung / Work in progress“*
- **EN-Seite** inhaltlich/sprachlich konsistent mit DE (inkl. Projektlinks)

## 🗂 Struktur
```
/
├─ index.html        # Deutsche Seite
├─ en.html           # Englische Seite
├─ styles.css        # Theme, Layout (inkl. Skills-Grid & Button-Styling)
├─ script.js         # Mobile-Menü, Jahreszahl
├─ assets/
│  ├─ avatar.jpg                     # Portraitfoto
│  ├─ favicon.svg                    # Favicon (navy)
│  ├─ CV_Bjoern_Mueller_DE.pdf       # CV (DE)
│  └─ CV_Bjoern_Mueller_EN-GB.pdf    # CV (EN)
└─ README.md
```

## 🚀 Deploy auf GitHub Pages
1. Repository muss exakt **`BjoernMueller13.github.io`** heißen.
2. Alle Dateien ins **Repo-Root** pushen (kein Build notwendig).
3. Aufruf: **https://BjoernMueller13.github.io**  
   (Falls nicht sichtbar: hard reload `Strg/Cmd + Shift + R`).

## 🔧 Personalisieren
### Portrait
Ersetze `assets/avatar.jpg` durch dein Bild (Bezeichnung beibehalten).

### CV
- DE-Button lädt `assets/CV_Bjoern_Mueller_DE.pdf`
- EN-Button lädt `assets/CV_Bjoern_Mueller_EN-GB.pdf`  
Dateien einfach austauschen, Namen beibehalten.

### Projekt-Links
In **beiden** Dateien (`index.html`, `en.html`) sind die Repo-Buttons bereits gesetzt:
- **ML-Prototyp: Lineare Regression – Versicherungsdaten** → `http://github.com/BjoernMueller13/HealthInsuranceDataUS`
- **SQL Analyse: Fußballdaten** → `https://github.com/BjoernMueller13/SQLFootballDataKPIs`
- **CV/ADAS Demo and Maturity Assesment** → `https://github.com/BjoernMueller13/CVAutnomousDriving`

Zum Ändern die `href`-Attribute der jeweiligen `<a class="btn btn--small" ...>`-Links anpassen.

### Skills
Die Skills sind zweispaltig organisiert (`#skills .skills-grid`):
- **Programmiersprachen:** Python, SQL, NoSQL, Java, Matlab, C, C++, DXL
- **Agile & Requirement Skills:** Scrum, SAFe, KANBAN, JIRA, Confluence, Notion, Miro, Microsoft Office Suit, Doors, Polarion
- **Sprachen:** Deutsch, Englisch, Spanisch
- **Fortbildungen:** 
  - [Professional Scrum Master 1](https://www.scrum.org/certificates/1154945)
  - IREB Requirement Engineering
  - Systemmodellierung auf Basis von SysML-Grundlagen

### Farben & Abstände (styles.css)
- **Akzentfarbe (Navy):**
  ```css
  :root { --accent: #0b3d91; }
  ```
- **Hero-Bildgröße (~20 % kleiner):**
  ```css
  .avatar-img{ transform: scale(0.8); transform-origin: top center; }
  ```
- **Repo-Buttons (grau + weiße Schrift, unten links fixiert):**
  ```css
  .cards .card{ position: relative; padding-bottom: 3.5rem; }
  .cards .card .btn--small{
    position: absolute; left: 1rem; bottom: 1rem;
    background: #e5e7eb; border-color: #cbd5e1; color: #ffffff;
  }
  .cards .card .btn--small:hover{ background:#e2e8f0; }
  ```
- **Skills-Zweispalter:**
  ```css
  #skills .skills-grid{ display:grid; grid-template-columns:1fr 1fr; gap:2rem; }
  @media (max-width: 900px){ #skills .skills-grid{ grid-template-columns:1fr; } }
  ```
- **Zusätzlicher Abstand oberhalb zweiter Unterüberschrift je Spalte (DE: „Agile & Requirement Skills“ / „Fortbildungen“):**
  ```css
  #skills .skills-grid .skills-col h3.sub:nth-of-type(2){ margin-top: 1.2rem; }
  ```

## 🧩 Inhalte anpassen
- **Hero-Text:** In `index.html`/`en.html` im `#home`-Abschnitt.
- **Über mich / About:** Listenpunkte unter `#about` (DE/EN). Unterlisten möglich (`<ul class="list">` verschachtelt).
- **Kontakt:** `#contact` am Seitenende; Trennung per „|“ in einer Zeile.

## 🐞 Troubleshooting
- Leere Seite? Prüfe `index.html` liegt im **Root**.  
- Cache? Hard reload (`Strg/Cmd + Shift + R`).  
- Favicon nicht sichtbar? Safari/Chrome Caches brauchen teils 1–2 Reloads.

## 📄 Lizenz
MIT
