<div align="center">

# 🛰️ Cosmic Legacy

### *What missions left behind is still teaching.*

**An interactive, bilingual, 3D space museum that highlights seven "abandoned" missions that were never forgotten.**

![NASA Space Apps 2026](https://img.shields.io/badge/NASA%20Space%20Apps-2026-0B3D91?style=for-the-badge)
![Challenge](https://img.shields.io/badge/Challenge-Abandoned%20but%20Not%20Forgotten-FC3D21?style=for-the-badge)
![Languages](https://img.shields.io/badge/Languages-EN%20%7C%20ES-2ea44f?style=for-the-badge)
![3D](https://img.shields.io/badge/3D-glTF%20%2B%20model--viewer-8A2BE2?style=for-the-badge)
![No backend](https://img.shields.io/badge/Backend-none-lightgrey?style=for-the-badge)

🇪🇸 **[Leer en español → README SPANISH.md](README%20SPANISH.md)**

</div>

> ⚠️ Independent educational project. **It is not an official product and is not endorsed by NASA or JPL.**

---

## ▶️ How to run it

### Option 1 — Open the published website (recommended for judges)

**[Open Cosmic Legacy on Cloudflare](https://legado-cosmico.lopezrosalezpiero.workers.dev/)**

No software, extensions, or ZIP download are required. Open the link in a modern browser with an Internet connection and WebGL enabled. Check that the deployed site matches this ZIP revision.

### Option 2 — Run the ZIP with Visual Studio Code and Live Server

This is the method used during project development.

1. Extract the entire ZIP into a folder of your choice, keeping all files and subfolders together.
2. Open [Visual Studio Code](https://code.visualstudio.com/) and select **File → Open Folder**. Choose the folder that directly contains `index.html`.
3. In **Extensions** (`Ctrl + Shift + X`), search for **Live Server** (Ritwick Dey) and install it if needed.
4. Open `index.html` in the VS Code Explorer. Right-click and select **Open with Live Server** (or click **Go Live**).
5. Your browser opens automatically, usually at <http://127.0.0.1:5500/>. If a different port is used, follow the address shown by Live Server.
6. Choose English or Spanish and explore the museum.

### Option 3 — Local Python 3 server (alternative)

Open a terminal **inside the folder containing `index.html`**. The folder does not need a particular name.

Windows:

```bash
py -m http.server 8000
```

macOS or Linux:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000/> in your browser. Keep the terminal open while using the site. Press `Ctrl + C` to stop the server.

### Requirements and quick checks

- Modern browser with WebGL; Internet connection for Google Fonts and model-viewer (CDN).
- No npm, backend, database, account, or API key is required.
- Do not open `index.html` through `file://`: use one of the local servers above or the published website.
- `index.html` is the main entry point; `index(1).html` is a compatible copy.
- Check the Solar System, 3D models, languages, Echo Protocol, Legacy Protocol and resource library. If a model fails to load, check the Internet connection and WebGL support.
- To publish another version on Cloudflare, upload the ZIP with `index.html` at its root and test the link in an incognito window. The documentary review did not independently verify the public deployment or full WebGL operation.

---

## 📑 Table of Contents

1. [How to run it](#-how-to-run-it)
2. [The idea in 30 seconds](#-the-idea-in-30-seconds)
3. [Why it matters](#-why-it-matters)
4. [What you can do](#-what-you-can-do)
5. [The seven missions](#-the-seven-missions)
6. [Echo Protocol & Legacy Protocol](#-echo-protocol--legacy-protocol)
7. [NASA data and resources used](#-nasa-data-and-resources-used)
8. [Architecture & structure](#-architecture--structure)
9. [Transparency: AI, sources and rights](#-transparency-ai-sources-and-rights)
10. [3D models, images and dependencies](#-3d-models-images-and-dependencies)
11. [Scientific references](#-scientific-references-in-the-code)
12. [Verification and submission status](#-verification-and-submission-status)
13. [Final technical verification](#final-technical-verification--15-november-2026)
14. [Latest team declaration](#latest-team-declaration--15-november-2026)

---

## ✨ The idea in 30 seconds

When a mission ends, its hardware falls silent: a dust-covered rover on Mars, a probe that crossed the Solar System, a lander waiting on the Moon. **Cosmic Legacy** turns that "discarded equipment" into a **living museum**: rotate each spacecraft in 3D, open it up piece by piece, read its story, answer questions, earn medals, and walk through the last panorama Opportunity sent from Mars.

**Our angle:** it is not only about what these spacecraft *did*, but about what they *keep teaching us*.

| 🎯 Audience | 🧭 Format | 🌐 Access |
|---|---|---|
| Students, teachers and the curious | Guided exploration + educational game | Web browser, no installation or account |

---

## 🌠 Why it matters

- **Telling the ending is science too.** Each mission is presented with its origin, achievement, farewell and scientific inheritance.
- **Learning by touching.** 3D anatomy lets users understand what each part of a spacecraft is *for*, not just memorize its name.
- **Bilingual from the start.** Full Spanish and English to reach more classrooms.
- **Privacy by design.** There is no account server: progress lives only in each person's browser.
- **Scientific honesty.** Simulation indicators are **educational, not real telemetry**, and every artistic or AI-assisted recreation is **visibly labeled**.

---

## 🎮 What you can do

| Module | What it offers |
|---|---|
| 🪐 **Solar System** | Navigate celestial bodies with 3D models and planetary context. |
| 📚 **Planetary archive** | Profiles and exploration of planets and related missions. |
| 🔧 **3D space anatomy** | Explore the parts and instruments of each spacecraft. |
| 📖 **Stories & questions** | Historical exhibits and optional educational questions at the end of the tour. |
| 🏅 **Points, passport & medals** | Progression that rewards curiosity; stored locally. |
| 🕰️ **Echo Protocol** | Timeline and classroom-oriented reading of the missions. |
| 🔴 **Legacy Protocol** | Historic Opportunity panorama, points of interest and an energy-decision simulation. |
| 🌍 **EN / ES** | Language switch across the whole experience. |

---

## 🚀 The seven missions

| # | Team / Mission | Destination | The story it tells |
|---|---|---|---|
| 1 | **Opportunity** | Mars | The rover that outlived its planned mission and said goodbye after a global dust storm. |
| 2 | **Cassini** | Saturn | An exploration mission that closed with its Grand Finale between Saturn and its rings. |
| 3 | **NEAR Shoemaker** | Asteroid Eros | The first spacecraft to orbit and land on an asteroid. |
| 4 | **Pioneer 10** | Jupiter & the outer solar system | A trailblazer toward the outer Solar System. |
| 5 | **Ingenuity** | Mars | The helicopter that proved powered flight on another world. |
| 6 | **Apollo 11 / Eagle** | The Moon | The lunar module of the first crewed landing. |
| 7 | **Surveyor 3** | The Moon | A robotic precursor lander, later visited by astronauts. |

---

## 🧬 Echo Protocol & Legacy Protocol

**Echo Protocol** brings together the timeline and a classroom-friendly reading. It is the narrative gateway of the project and links to the sources and credits section.

**Legacy Protocol** focuses on **Opportunity**:

- 🖼️ **Interactive panorama** based on the *Opportunity Legacy Pan (true color)* mosaic, **PIA22909**, which opens by default in its original version.
- 📍 **Points of interest** with historical markers over the panorama.
- ⚡ **Energy-decision simulation:** helps users understand why solar power and dust shaped the rover's fate. *Indicators are educational, not real telemetry.*
- 🎨 An **AI-assisted artistic reconstruction** of the panorama, clearly labeled and **not presented as a scientific observation**.

---

## 🛰️ NASA data and resources used

| Resource | Use in the project |
|---|---|
| **PIA22909** — Opportunity Legacy Pan (true color) | Interactive panorama with historical markers. |
| **PIA22929** — Opportunity's Last Message | Context for the end of the mission. |
| **PIA22930** — Last Images Opportunity Took | Context for the end of the mission. |
| **NASA 3D Resources models** | Spacecraft and Solar System bodies (see the [model table](#-3d-models-images-and-dependencies) and its verification status). |
| **science.nasa.gov / jpl.nasa.gov mission pages** | Scientific basis of the content (see [references](#-scientific-references-in-the-code)). |

> Five NASA resources match the challenge list reproduced by the Athlone event; the central list could not be accessed.

---

## 🏗️ Architecture & structure

**Stack:** HTML + CSS + JavaScript (ES modules) · [`<model-viewer>`](https://modelviewer.dev/) for 3D (glTF/GLB) · WebGL · browser local storage · **no framework, no backend, no database**.

```
Project root/
├── index.html · styles.css · script.js        → Entry point, design and viewer
├── sistema-solar.* · explorador-planetas.*   → Exploration and planetary context
├── anatomia-espacial.* · legado-equipos*.js  → Anatomy, narration, questions and progress
├── legado-experiencia.* · integracion.* · fusion.css → Languages and experience integration
├── echo* · legacy-protocol-panorama-v2.* · legacy-assets/ → Stories, panorama and simulation
├── models/ · img/ · solar-assets/            → Models, images and textures
└── creditos-recursos.css · inventario-recursos.json → Visible credits + per-asset registry with size and SHA-256
```

**Design decisions**

- 🔒 **Privacy:** no accounts or server; progress is local.
- 🧾 **Traceability:** `inventario-recursos.json` records every asset with its size and **SHA-256** fingerprint.
- 🏷️ **Visible credits:** the *Sources and credits* section is in the site footer and linked from Echo Protocol (bilingual inventory, references, usage policies and AI statement).

---

## 🤝 Transparency: AI, sources and rights

We believe an educational project should be clear about what it is and what it is not.

**Declared AI use**

- Assistance with programming, educational writing and translation.
- Simplified **Apollo 11** and **Surveyor 3** models (educational recreations, **not official NASA models**).
- Artistic reconstruction of the Opportunity panorama.
- ChatGPT (OpenAI) was used for code and documentation editing and created the identified AI recreations (Apollo 11, Surveyor 3 and the artistic Opportunity panorama), as confirmed by the team. [OpenAI Terms of Use](https://openai.com/policies/terms-of-use/). Gemini (Google) was also used, as confirmed by the team; specific tasks were not reported.
- Visual recreations carry **visible labels** and are not presented as photographs, official engineering models or scientific data. The original panorama opens by default.

**Usage rights**

- NASA generally allows educational use of its resources under its [media guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/), with exceptions for logos and third-party material.
- JPL requires credit and no implied endorsement under its [image use policy](https://www.jpl.nasa.gov/jpl-image-use-policy/).
- A related source **does not by itself prove** that the local file comes from it; that is why every asset shows its verification status.
- The team's own code and design belong to their respective owners; no open-source license is imposed on team material without authorization.

---

## 📦 3D models, images and dependencies

### 3D models

| File | Reference and credit | Status |
|---|---|---|
| `models/opportunity.glb` | [Spirit and Opportunity Rover](https://science.nasa.gov/resource/spirit-and-opportunity-rover-3d-model/) — NASA/JPL-Caltech | Team-verified model; independent binary comparison not performed. |
| `models/cassini.glb` | [Cassini 3D Model](https://science.nasa.gov/resource/cassini-3d-model/) — NASA / VTAD | Team-verified model; independent binary comparison not performed. |
| `models/near-shoemaker.glb` | [NEAR Shoemaker](https://science.nasa.gov/3d-resources/near-shoemaker/) — NASA 3D Resources | Team-verified model; independent binary comparison not performed. |
| `models/pioneer-10.glb` | [Pioneer 10](https://science.nasa.gov/3d-resources/pioneer/) — NASA/JPL/Eyes on the Solar System | Team-verified model; independent binary comparison not performed. |
| `models/ingenuity.glb` | [Mars Ingenuity Helicopter, 3D Model](https://science.nasa.gov/resource/mars-ingenuity-helicopter-3d-model/) — NASA/JPL-Caltech | Team-verified model; independent binary comparison not performed. |
| `models/venus.glb` | [Venus Surface 3D Model](https://science.nasa.gov/resource/venus-surface-3d-model/) — NASA / VTAD | Direct NASA website download confirmed by the team; educational use subject to NASA guidelines. |
| `models/jupiter.glb` | [Jupiter 3D Model](https://science.nasa.gov/resource/jupiter-3d-model/) — NASA / VTAD | Direct NASA website download confirmed by the team; educational use subject to NASA guidelines. |
| `models/saturno.glb` | [Saturn 3D Model](https://science.nasa.gov/resource/saturn-3d-model/) — NASA / VTAD | Direct NASA website download confirmed by the team; educational use subject to NASA guidelines. |
| `models/urano.glb` | [Uranus 3D Model](https://science.nasa.gov/resource/uranus-3d-model/) — NASA / VTAD | Direct NASA website download confirmed by the team; educational use subject to NASA guidelines. |
| `models/neptuno.glb` | [Neptune 3D Model](https://science.nasa.gov/resource/neptune-3d-model/) — NASA / VTAD | Direct NASA website download confirmed by the team; educational use subject to NASA guidelines. |
| `models/tierra.glb` | [Earth with Clouds 3D Model](https://science.nasa.gov/resource/earth-with-clouds-3d-model/) — NASA / VTAD | Direct NASA website download confirmed by the team; educational use subject to NASA guidelines. |
| `models/marte.glb` | [Planet Mars, 3D Model](https://science.nasa.gov/resource/planet-mars-3d-model/) — NASA/JPL-Caltech | Direct NASA website download confirmed by the team; educational use subject to NASA guidelines. |
| `models/mercurio.glb` | [NASA Mercury 3D Model](https://science.nasa.gov/resource/mercury-3d-model/) — NASA (reported source); VTAD (reference credit) | Direct NASA website download confirmed by the team; educational use subject to NASA guidelines. |
| `models/luna.glb` | [NASA SVS 14959](https://svs.gsfc.nasa.gov/14959/) — NASA SVS / Dan Gallagher (reference) | Team-verified model; independent binary comparison not performed. |
| `models/apollo-11.glb` | [Apollo 11](https://science.nasa.gov/mission/apollo-11/) — Project model / ChatGPT (OpenAI) | Created with ChatGPT (OpenAI); not an official NASA model. |
| `models/surveyor-3.glb` | [Surveyor 3](https://science.nasa.gov/mission/surveyor-3/) — Project model / ChatGPT (OpenAI) | Created with ChatGPT (OpenAI); not an official NASA model. |

### Mission images

| File | Reference | Status |
|---|---|---|
| `img/astronauta-eagle.jpg` | [AS11-40-5927](https://eol.jsc.nasa.gov/SearchPhotos/photo.pl?frame=5927&mission=AS11&roll=40) — NASA / Neil Armstrong | Visual match identified; remote binary not compared. |
| `img/eagle.jpg` | [AS11-40-5927](https://eol.jsc.nasa.gov/SearchPhotos/photo.pl?frame=5927&mission=AS11&roll=40) — NASA / Neil Armstrong | Visual match identified; remote binary not compared. |
| `img/ingenuity.jpg` | [Perseverance Spots Ingenuity at Its Final Airfield](https://science.nasa.gov/photojournal/perseverance-spots-ingenuity-at-its-final-airfield/) — NASA/JPL-Caltech/ASU/MSSS | NASA source reported by team; exact montage not independently identified. |
| `img/near.jpg` | [NEAR rendezvous (artist's concept)](https://www.jpl.nasa.gov/images/pia18177-nasas-near-spacecrafts-rendezvous-with-asteroid-eros-artists-concept/) — NASA | Visual match identified; remote binary not compared. |
| `img/pioneer.jpg` | [Pioneer 10 at Jupiter (artist's concept)](https://science.nasa.gov/resource/pioneer-10-at-jupiter-artists-concept/) — NASA | Visual match identified; remote binary not compared. |

### Solar System textures

`solar-assets/` contains ten illustrative textures with NASA provenance reported by the team. Exact downloads, transformations and third-party rights remain independently unverified; see the inventory. They are not validated scientific maps.

### Opportunity panorama

| File | Source | Status |
|---|---|---|
| `legacy-assets/PIA22909-4096.webp` | [PIA22909](https://science.nasa.gov/photojournal/opportunity-legacy-pan-true-color/) — NASA/JPL-Caltech/Cornell/ASU | SHA-256 matches the included provenance; remote original not re-compared. Resized version without padding. |
| `legacy-assets/PIA22909-8192.webp` | [PIA22909](https://science.nasa.gov/photojournal/opportunity-legacy-pan-true-color/) — NASA/JPL-Caltech/Cornell/ASU | SHA-256 matches the included provenance; remote original not re-compared. Resized version without padding. |
| `legacy-assets/PIA22929.jpg` | [PIA22929](https://science.nasa.gov/photojournal/opportunitys-last-message/) — NASA/JPL-Caltech/Cornell/ASU | SHA-256 matches the included provenance; remote original not re-compared. |
| `legacy-assets/PIA22930.jpg` | [PIA22930](https://science.nasa.gov/photojournal/last-images-opportunity-took/) — NASA/JPL-Caltech/Cornell/ASU | SHA-256 matches the included provenance; remote original not re-compared. |
| `legacy-assets/PIA22909-reconstruccion-v2.webp` | [PIA22909 · original mosaic](https://science.nasa.gov/photojournal/opportunity-legacy-pan-true-color/) — NASA/JPL-Caltech/Cornell/ASU + project | AI-assisted artistic layer; SHA-256 matches the registry. **Not a scientific observation.** |

### Dependencies

- [model-viewer 4.1.0](https://ajax.googleapis.com/ajax/libs/model-viewer/4.1.0/model-viewer.min.js) — Google / model-viewer contributors · [Apache-2.0](https://github.com/google/model-viewer/blob/master/LICENSE)
- [Manrope](https://fonts.google.com/specimen/Manrope) — The Manrope Project Authors · [SIL OFL 1.1](https://github.com/google/fonts/blob/main/ofl/manrope/OFL.txt)
- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) — The Cormorant Project Authors / Christian Thalmann · [SIL OFL 1.1](https://github.com/CatharsisFonts/Cormorant)

---

## 📚 Scientific references in the code

<details>
<summary><b>View all sources consulted and the file where each is used</b></summary>

- <https://science.nasa.gov/mission/apollo-11/> — `echo-data.js`
- <https://science.nasa.gov/mission/cassini/about-the-mission/> — `echo-data.js`
- <https://science.nasa.gov/mission/cassini/grand-finale/overview/> — `echo-data.js`
- <https://science.nasa.gov/mission/cassini/spacecraft/cassini-orbiter/> — `anatomia-espacial.js`
- <https://science.nasa.gov/mission/dawn/toolkit/end-of-mission/> — `explorador-planetas.js`
- <https://science.nasa.gov/mission/kepler/> — `explorador-planetas.js`
- <https://science.nasa.gov/mission/magellan/> — `echo.js`, `explorador-planetas.js`
- <https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/> — `anatomia-espacial.js`
- <https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-highlights/> — `legacy-assets/content-panorama-v2.mjs`
- <https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-instruments/> — `anatomia-espacial.js`
- <https://science.nasa.gov/mission/mer-opportunity/> — `echo-data.js`, `legacy-assets/content-panorama-v2.mjs`
- <https://science.nasa.gov/mission/messenger/> — `echo.js`, `explorador-planetas.js`
- <https://science.nasa.gov/mission/near-shoemaker/> — `anatomia-espacial.js`, `echo-data.js`
- <https://science.nasa.gov/mission/pioneer-10/> — `anatomia-espacial.js`, `echo-data.js`
- <https://science.nasa.gov/mission/surveyor-3/> — `anatomia-espacial.js`, `echo-data.js`
- <https://science.nasa.gov/mission/voyager/voyager-2/> — `echo.js`, `explorador-planetas.js`
- <https://science.nasa.gov/missions/mer/six-things-to-know-about-nasas-opportunity-rover/> — `legacy-assets/content-panorama-v2.mjs`
- <https://science.nasa.gov/photojournal/last-images-opportunity-took/> — `legacy-assets/content-panorama-v2.mjs`
- <https://science.nasa.gov/photojournal/opportunity-legacy-pan-true-color/> — `legacy-assets/content-panorama-v2.mjs`
- <https://science.nasa.gov/photojournal/opportunitys-last-message/> — `echo-data.js`, `legacy-assets/content-panorama-v2.mjs`
- <https://science.nasa.gov/solar-system/planets/> — `echo.js`
- <https://science.nasa.gov/resource/venus-surface-3d-model/> · `/2344/` · `/2355/` · `/2364/` · `/2372/` · `/2375/` · `/2393/` — `sistema-solar.js`
- <https://www.jpl.nasa.gov/jpl-image-use-policy/> — `legacy-assets/content-panorama-v2.mjs`
- <https://www.jpl.nasa.gov/missions/explorer-1/> — `echo.js`, `explorador-planetas.js`
- <https://www.jpl.nasa.gov/news/nasas-opportunity-rover-mission-on-mars-comes-to-end/> — `legacy-assets/content-panorama-v2.mjs`
- <https://www.jpl.nasa.gov/news/opportunity-hunkers-down-during-dust-storm/> — `legacy-assets/content-panorama-v2.mjs`
- <https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/> — `anatomia-espacial.js`, `echo-data.js`
- <https://www.nasa.gov/news-release/after-three-years-on-mars-nasas-ingenuity-helicopter-mission-ends/> — `echo-data.js`

</details>

---

## ✅ Verification and submission status

**Review of the NASA 3.0 ZIP · November 15, 2026**

| Check | Result |
|---|---|
| Inventory | 16 active models · 5 mission images · 10 textures · 5 panorama assets |
| Model sizes vs. NASA-published sizes | 11 models match (rounded values) |
| Panorama SHA-256 fingerprints | 5 of 5 verified against the included documentation |
| JavaScript syntax | Passes in 11 original files and 2 MJS modules |
| HTML-declared paths and unique identifiers | Correct |
| Reading of all 36 visual assets | Successful |
| Visual interface and WebGL | **Not certified**: Chromium produced no DOM output in the initial test |
| Binary comparison with official NASA files | Not performed; NASA texture origin reported by the team |

The backup `respaldo-modelos/tierra-anterior.glb`, not in active use, is not distributed in this version; the original ZIP remains intact.

**Event terms and guidance:** [official terms](https://www.spaceappschallenge.org/legal/) · [AI clarifications](https://github.com/nasa/spaceapps/discussions/1947) · [submission clarifications](https://github.com/nasa/spaceapps/discussions/1858). The submission guide and the exact challenge resource list returned a 502 error during the review, so the challenge-specific resource requirement is not certified.

<details>
<summary><b>📝 Team to-do before submitting</b></summary>

- [x] Team reported the remaining NASA provenance; independent exact-file and rights checks remain open.
- [ ] Declare any additional AI tools actually used and visually check that recreations contain no AI-generated or AI-modified NASA identity elements; declare all tools in the form.
- [x] Five matching NASA challenge references documented using the Athlone list; central list not directly verified.
- [x] Team declared registration and authorized development start; official validation and rights review remain separate.
- [ ] Publish and test the public URL, models, controls, translation and panorama on desktop and mobile. Prepare a public demo and an English description.
- [ ] Complete Project Title, Summary, Project Demo, Final Project, Detailed Description, NASA Data, Other Resources, AI/SI Tools and terms; submit before the official deadline (November 15, 2026, 11:59 PM, event local time).

</details>

**Links:** [Event 2026](https://www.spaceappschallenge.org/2026/) · [Submission guide](https://www.spaceappschallenge.org/resources/project-submission-guide/en) · [Challenge resources](https://www.spaceappschallenge.org/2026/challenges/nasas-discarded-equipment-storytelling/?tab=resources)

> This is not an official eligibility certification. Pending inventory statuses do not constitute usage permission.

---

<div align="center">

**Cosmic Legacy** · *Abandoned, but not forgotten.* 🌌

</div>

## Final technical verification · 15 November 2026

The final ZIP has `index.html` at its root for direct Cloudflare upload. Static tests: 13 JavaScript modules, 16 GLB files, 20 image files, 36 recorded local hashes, 86 HTML local references and 652 complete educational simulation paths. The credits layout was tested in isolation at 1366 and 390 px in both languages. Details: [verification report](verificacion-final.json) and [asset inventory](inventario-recursos.json). Full WebGL and public deployment were not verifiable in the review environment; the site includes a non-WebGL link to the mission stories. Source identification gaps remain documented. Check registration, actual development dates, asset rights and the listed challenge resource before official submission.

**Planetary model provenance:** The project lead confirms direct downloads from the official NASA website for all eight planet models. Exact binary identity was not independently checked; the Mercury reference has a different published size. The team subsequently also reported NASA provenance for the separate textures.

## Latest team declaration · 15 November 2026

The team confirms official registration, a maximum of six members, the Abandoned but Not Forgotten challenge, a local event in Peru, development within the authorized window, compliance with event terms and disclosure of all AI tools. NASA provenance is reported by the team for the planetary models, Ingenuity image and Solar System textures (Earth, Mars, Moon and Saturn textures have NASA source models according to the team). Exact upstream files, transformations and individual third-party permissions were not independently established. AI tools: **ChatGPT (OpenAI) and Gemini (Google)**. ChatGPT assisted with code/documentation and the three previously identified visual recreations; Gemini's specific tasks were not provided. The entire project and NASA assets are not attributed to AI. Five NASA resources match the challenge list reproduced by the Athlone event; the central list was inaccessible. See the current [submission review](REVISION-DE-ENTREGA.md) and [inventory](inventario-recursos.json). Official eligibility, public deployment and full WebGL remain to be validated. The static HTML library is unchanged.



---

## Addendum — Guided Experience, Cosmic Heritage & Cosmic Learning

Team: **INTIHUATANA**, Peru. The original project and documentation are preserved. These independent extensions add a four-stage guided route, seven historical exhibits, an optional five-concept final challenge, an anonymous JSON learning report, a printable participation recognition and a mobile menu. Results are descriptive and require real participants; no test-user outcomes are claimed. The original passport, simulation, and scoring are unchanged.

The educational text is paraphrased from NASA/JPL sources below. The new questions and interface are independent educational materials; ChatGPT assisted with their implementation. The team has also declared Gemini previously. The original local PIA22909 panorama variant remains in Legacy Protocol, credited to NASA/JPL-Caltech/Cornell/ASU. The route now uses the NASA/JPL illustration PIA23720 described below. The NASA/JPL media policies apply subject to stated exceptions.

### NASA links used in the new modules

- https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/
- https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/
- https://www.nasa.gov/news-release/after-three-years-on-mars-nasas-ingenuity-helicopter-mission-ends/
- https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/
- https://science.nasa.gov/mission/surveyor-3/
- https://science.nasa.gov/mission/near-shoemaker/
- https://science.nasa.gov/mission/pioneer-10/
- https://science.nasa.gov/mission/cassini/grand-finale/overview/
- https://science.nasa.gov/photojournal/opportunity-legacy-pan-true-color/
- https://www.nasa.gov/nasa-brand-center/images-and-media/
- https://www.jpl.nasa.gov/jpl-image-use-policy/

### Validation scope

The new modules were tested separately in Chromium at 320, 360, 390, 430, 768 and 1366 px, including incomplete-form validation, both languages, learning report, reset, and recognition download. Local server access and the public deployment were blocked in the test environment; full WebGL and actual browser/device playback differences were not certified. Existing individual permissions and eligibility remain as documented in the original inventory and team declaration.

### Cosmic Heritage
The seven historical exhibits retain their official NASA/JPL sources. The Mission Spotlight panel and its quick challenges were removed to simplify the tour. The optional final activity remains.

### Responsive alignment and introductory image
The independent `responsive-center.css` adds a shared content axis, symmetric margins, a compact menu up to 1100 px and decorative overflow control. The guided route uses PIA23720 (official 2020 artist’s concept of Ingenuity and Perseverance; NASA/JPL-Caltech). The PNG supplied by the team is preserved unmodified; it is not a real Mars photograph. Panorama PIA22909 remains unchanged in Legacy Protocol. Official source: https://www.nasa.gov/image-detail/amf-pia23720/

NASA Photojournal reference: https://science.nasa.gov/photojournal/ingenuity-mars-helicopter-on-the-martian-surface-artists-concept/
