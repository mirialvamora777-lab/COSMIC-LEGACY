<div align="center">

# 🛰️ Cosmic Legacy

### *Lo que las misiones dejaron atrás sigue enseñando.*

**Un museo espacial interactivo, bilingüe y 3D que da voz a siete misiones "abandonadas" que nunca fueron olvidadas.**

![NASA Space Apps 2026](https://img.shields.io/badge/NASA%20Space%20Apps-2026-0B3D91?style=for-the-badge)
![Challenge](https://img.shields.io/badge/Challenge-Abandoned%20but%20Not%20Forgotten-FC3D21?style=for-the-badge)
![Idiomas](https://img.shields.io/badge/Idiomas-ES%20%7C%20EN-2ea44f?style=for-the-badge)
![3D](https://img.shields.io/badge/3D-glTF%20%2B%20model--viewer-8A2BE2?style=for-the-badge)
![Sin backend](https://img.shields.io/badge/Backend-ninguno-lightgrey?style=for-the-badge)

🇬🇧 **[Read this in English → README ENGLISH.md](README%20ENGLISH.md)**

</div>

> ⚠️ Proyecto educativo independiente. **No es un producto oficial ni cuenta con aval de NASA o JPL.**

---

## ▶️ Cómo ejecutarlo

### Opción 1 — Abrir la web publicada (recomendada para el jurado)

**[Abrir Cosmic Legacy en Cloudflare](https://legado-cosmico.lopezrosalezpiero.workers.dev/)**

No requiere instalar programas, extensiones ni descargar el ZIP. Abre el enlace en un navegador moderno con conexión a Internet y WebGL habilitado. Comprueba que el despliegue corresponde a esta versión del ZIP.

### Opción 2 — Ejecutar el ZIP con Visual Studio Code y Live Server

Es el método utilizado durante el desarrollo del proyecto.

1. Descomprime el ZIP completo en una carpeta de tu elección; conserva todos los archivos y subcarpetas.
2. Abre [Visual Studio Code](https://code.visualstudio.com/) y selecciona **Archivo → Abrir carpeta**. Elige la carpeta que contiene directamente `index.html`.
3. En **Extensiones** (`Ctrl + Shift + X`), busca **Live Server** (Ritwick Dey) e instala la extensión si aún no la tienes.
4. Abre `index.html` en el explorador de archivos de VS Code. Haz clic derecho y selecciona **Open with Live Server** (o pulsa **Go Live**).
5. Se abrirá el navegador automáticamente, normalmente en <http://127.0.0.1:5500/>. Si se utiliza otro puerto, abre la dirección que indique Live Server.
6. Elige español o inglés y explora el museo.

### Opción 3 — Servidor local con Python 3 (alternativa)

Abre una terminal **dentro de la carpeta que contiene `index.html`**. No es necesario que esa carpeta tenga un nombre específico.

Windows:

```bash
py -m http.server 8000
```

macOS o Linux:

```bash
python3 -m http.server 8000
```

Después, abre <http://localhost:8000/> en el navegador. Mantén la terminal abierta mientras utilizas la web. Para detener el servidor, pulsa `Ctrl + C`.

### Requisitos y comprobación rápida

- Navegador moderno con WebGL; conexión a Internet para Google Fonts y model-viewer (CDN).
- No se necesita npm, backend, base de datos, cuenta ni clave API.
- No abras `index.html` directamente mediante `file://`: utiliza uno de los servidores locales anteriores o la web publicada.
- `index.html` es la entrada principal; `index(1).html` es una copia compatible.
- Comprueba el sistema solar, los modelos 3D, los idiomas, Echo Protocol, Legacy Protocol y la biblioteca de recursos. Si un modelo no carga, revisa la conexión y la disponibilidad de WebGL.
- Para publicar otra versión en Cloudflare, sube el ZIP con `index.html` en la raíz y prueba el enlace en incógnito. La revisión documental no comprobó independientemente el despliegue público ni WebGL integral.

---

## 📑 Contenido

1. [Cómo ejecutarlo](#-cómo-ejecutarlo)
2. [La idea en 30 segundos](#-la-idea-en-30-segundos)
3. [Por qué importa](#-por-qué-importa)
4. [Qué se puede hacer](#-qué-se-puede-hacer)
5. [Las siete misiones](#-las-siete-misiones)
6. [Echo Protocol y Legacy Protocol](#-echo-protocol-y-legacy-protocol)
7. [Datos y recursos de NASA utilizados](#-datos-y-recursos-de-nasa-utilizados)
8. [Arquitectura y estructura](#-arquitectura-y-estructura)
9. [Transparencia: IA, fuentes y derechos](#-transparencia-ia-fuentes-y-derechos)
10. [Modelos 3D, imágenes y dependencias](#-modelos-3d-imágenes-y-dependencias)
11. [Referencias científicas](#-referencias-científicas-del-código)
12. [Verificación y estado de entrega](#-verificación-y-estado-de-entrega)
13. [Verificación técnica final](#verificación-técnica-final--15-de-noviembre-de-2026)
14. [Declaración vigente del equipo](#declaración-vigente-del-equipo--15-de-noviembre-de-2026)

---

## ✨ La idea en 30 segundos

Cuando una misión termina, su hardware queda en silencio: un rover cubierto de polvo en Marte, una sonda que cruzó el Sistema Solar, un módulo de aterrizaje que espera en la Luna. **Cosmic Legacy** convierte ese "equipo descartado" en un **museo vivo**: puedes girar cada nave en 3D, abrirla por piezas, leer su historia, responder preguntas, ganar medallas y caminar por el último panorama que Opportunity envió desde Marte.

**Enfoque:** no se trata solo de lo que estas naves *hicieron*, sino de lo que *siguen enseñando*.

| 🎯 Público | 🧭 Formato | 🌐 Acceso |
|---|---|---|
| Estudiantes, docentes y curiosos | Exploración guiada + juego educativo | Navegador web, sin instalación ni cuenta |

---

## 🌠 Por qué importa

- **Narrar el final también es ciencia.** Cada misión se presenta con su origen, su logro, su despedida y su herencia científica.
- **Aprender tocando.** La anatomía 3D permite entender para qué sirve cada parte de una nave, no solo memorizar su nombre.
- **Bilingüe de origen.** Español e inglés completos para llegar a más aulas.
- **Privacidad por diseño.** No hay servidor de cuentas: el progreso vive solo en el navegador de cada persona.
- **Honestidad científica.** Los indicadores de simulación son **didácticos, no telemetría real**, y toda recreación artística o hecha con IA está **etiquetada de forma visible**.

---

## 🎮 Qué se puede hacer

| Módulo | Qué ofrece |
|---|---|
| 🪐 **Sistema solar** | Navegación por cuerpos celestes con modelos 3D y contexto de cada planeta. |
| 📚 **Archivo planetario** | Fichas y exploración de planetas y misiones relacionadas. |
| 🔧 **Anatomía espacial 3D** | Explora las piezas e instrumentos de cada nave. |
| 📖 **Historias y preguntas** | Fichas históricas y preguntas educativas opcionales al final del recorrido. |
| 🏅 **Puntos, pasaporte y medallas** | Progresión que premia la curiosidad; se guarda localmente. |
| 🕰️ **Echo Protocol** | Línea temporal y lectura escolar de las misiones. |
| 🔴 **Legacy Protocol** | Panorama histórico de Opportunity, puntos de interés y simulación de decisiones energéticas. |
| 🌍 **ES / EN** | Cambio de idioma de toda la experiencia. |

---

## 🚀 Las siete misiones

| # | Equipo / Misión | Destino | Historia que cuenta |
|---|---|---|---|
| 1 | **Opportunity** | Marte | El rover que superó su vida útil prevista y se despidió tras una tormenta de polvo global. |
| 2 | **Cassini** | Saturno | Una misión de exploración que cerró con su Gran Final entre Saturno y sus anillos. |
| 3 | **NEAR Shoemaker** | Asteroide Eros | La primera nave en orbitar y aterrizar sobre un asteroide. |
| 4 | **Pioneer 10** | Júpiter y espacio exterior | Pionera hacia el Sistema Solar exterior. |
| 5 | **Ingenuity** | Marte | El helicóptero que demostró el vuelo propulsado en otro mundo. |
| 6 | **Apollo 11 / Eagle** | La Luna | El módulo lunar del primer alunizaje tripulado. |
| 7 | **Surveyor 3** | La Luna | Un módulo robótico precursor, visitado después por astronautas. |

---

## 🧬 Echo Protocol y Legacy Protocol

**Echo Protocol** reúne la línea temporal y una lectura pensada para el aula: es la puerta narrativa del proyecto y enlaza con la sección de fuentes y créditos.

**Legacy Protocol** se centra en **Opportunity**:

- 🖼️ **Panorama interactivo** basado en el mosaico *Opportunity Legacy Pan (true color)*, **PIA22909**, que se abre de forma predeterminada en su versión original.
- 📍 **Puntos de interés** con marcadores históricos sobre el panorama.
- ⚡ **Simulación de decisiones energéticas:** ayuda a entender por qué la energía solar y el polvo definieron el destino del rover. *Los indicadores son didácticos, no telemetría real.*
- 🎨 Una **reconstrucción artística asistida por IA** del panorama, claramente etiquetada y **no presentada como observación científica**.

---

## 🛰️ Datos y recursos de NASA utilizados

| Recurso | Uso en el proyecto |
|---|---|
| **PIA22909** — Opportunity Legacy Pan (true color) | Panorama interactivo con marcadores históricos. |
| **PIA22929** — Opportunity's Last Message | Contexto del final de la misión. |
| **PIA22930** — Last Images Opportunity Took | Contexto del final de la misión. |
| **Modelos 3D de NASA 3D Resources** | Naves y cuerpos del Sistema Solar (ver [tabla de modelos](#-modelos-3d-imágenes-y-dependencias) y su estado de verificación). |
| **Páginas de misión de science.nasa.gov / jpl.nasa.gov** | Base científica del contenido (ver [referencias](#-referencias-científicas-del-código)). |

> Cinco recursos NASA coinciden con el listado del desafío reproducido por la sede de Athlone; no se pudo consultar directamente el listado central.

---

## 🏗️ Arquitectura y estructura

**Stack:** HTML + CSS + JavaScript (módulos ES) · [`<model-viewer>`](https://modelviewer.dev/) para 3D (glTF/GLB) · WebGL · almacenamiento local del navegador · **sin framework, sin backend, sin base de datos**.

```
Raíz del proyecto/
├── index.html · styles.css · script.js        → Entrada, diseño y visor
├── sistema-solar.* · explorador-planetas.*   → Exploración y contexto planetario
├── anatomia-espacial.* · legado-equipos*.js  → Anatomía, narración, preguntas y progreso
├── legado-experiencia.* · integracion.* · fusion.css → Idiomas e integración
├── echo* · legacy-protocol-panorama-v2.* · legacy-assets/ → Historias, panorama y simulación
├── models/ · img/ · solar-assets/            → Modelos, imágenes y texturas
└── creditos-recursos.css · inventario-recursos.json → Créditos visibles + registro con tamaño y SHA-256
```

**Decisiones de diseño**

- 🔒 **Privacidad:** sin cuentas ni servidor; el progreso es local.
- 🧾 **Trazabilidad:** `inventario-recursos.json` registra cada recurso con su tamaño y huella **SHA-256**.
- 🏷️ **Créditos visibles:** la sección *Fuentes y créditos* está en el pie de la web y se enlaza desde Echo Protocol (inventario bilingüe, referencias, políticas de uso y declaración de IA).

---

## 🤝 Transparencia: IA, fuentes y derechos

Creemos que un proyecto educativo debe ser claro sobre lo que es y lo que no es.

**Uso de IA declarado**

- Asistencia en programación, redacción educativa y traducción.
- Modelos simplificados de **Apollo 11** y **Surveyor 3** (recreaciones educativas, **no modelos oficiales de NASA**).
- Reconstrucción artística del panorama de Opportunity.
- ChatGPT (OpenAI) se utilizó para edición de código y documentación y creó las recreaciones identificadas como IA (Apollo 11, Surveyor 3 y panorama artístico de Opportunity), según confirma el equipo. [Términos de uso de OpenAI](https://openai.com/policies/terms-of-use/). Gemini (Google) también fue utilizado, según confirma el equipo; no se especificaron tareas concretas.
- Las recreaciones visuales llevan **etiquetas visibles** y no se presentan como fotografías, modelos de ingeniería oficiales ni datos científicos. El panorama original se abre por defecto.

**Derechos de uso**

- NASA permite generalmente el uso educativo de sus recursos según sus [directrices de medios](https://www.nasa.gov/nasa-brand-center/images-and-media/), con excepciones para marcas y material de terceros.
- JPL exige crédito y no implicar patrocinio, conforme a su [política de imágenes](https://www.jpl.nasa.gov/jpl-image-use-policy/).
- Una fuente relacionada **no demuestra por sí sola** que el archivo local provenga de ella; por eso cada recurso muestra su estado de verificación.
- El código y diseño propios pertenecen a sus titulares; no se impone una licencia abierta al material del equipo sin su autorización.

---

## 📦 Modelos 3D, imágenes y dependencias

### Modelos 3D

| Archivo | Referencia y crédito | Estado |
|---|---|---|
| `models/opportunity.glb` | [Spirit and Opportunity Rover](https://science.nasa.gov/resource/spirit-and-opportunity-rover-3d-model/) — NASA/JPL-Caltech | Modelo verificado por el equipo; sin comparación binaria independiente. |
| `models/cassini.glb` | [Cassini 3D Model](https://science.nasa.gov/resource/cassini-3d-model/) — NASA / VTAD | Modelo verificado por el equipo; sin comparación binaria independiente. |
| `models/near-shoemaker.glb` | [NEAR Shoemaker](https://science.nasa.gov/3d-resources/near-shoemaker/) — NASA 3D Resources | Modelo verificado por el equipo; sin comparación binaria independiente. |
| `models/pioneer-10.glb` | [Pioneer 10](https://science.nasa.gov/3d-resources/pioneer/) — NASA/JPL/Eyes on the Solar System | Modelo verificado por el equipo; sin comparación binaria independiente. |
| `models/ingenuity.glb` | [Mars Ingenuity Helicopter, 3D Model](https://science.nasa.gov/resource/mars-ingenuity-helicopter-3d-model/) — NASA/JPL-Caltech | Modelo verificado por el equipo; sin comparación binaria independiente. |
| `models/venus.glb` | [Venus Surface 3D Model](https://science.nasa.gov/resource/venus-surface-3d-model/) — NASA / VTAD | Descarga directa del sitio NASA confirmada por el equipo; uso educativo sujeto a las directrices NASA. |
| `models/jupiter.glb` | [Jupiter 3D Model](https://science.nasa.gov/resource/jupiter-3d-model/) — NASA / VTAD | Descarga directa del sitio NASA confirmada por el equipo; uso educativo sujeto a las directrices NASA. |
| `models/saturno.glb` | [Saturn 3D Model](https://science.nasa.gov/resource/saturn-3d-model/) — NASA / VTAD | Descarga directa del sitio NASA confirmada por el equipo; uso educativo sujeto a las directrices NASA. |
| `models/urano.glb` | [Uranus 3D Model](https://science.nasa.gov/resource/uranus-3d-model/) — NASA / VTAD | Descarga directa del sitio NASA confirmada por el equipo; uso educativo sujeto a las directrices NASA. |
| `models/neptuno.glb` | [Neptune 3D Model](https://science.nasa.gov/resource/neptune-3d-model/) — NASA / VTAD | Descarga directa del sitio NASA confirmada por el equipo; uso educativo sujeto a las directrices NASA. |
| `models/tierra.glb` | [Earth with Clouds 3D Model](https://science.nasa.gov/resource/earth-with-clouds-3d-model/) — NASA / VTAD | Descarga directa del sitio NASA confirmada por el equipo; uso educativo sujeto a las directrices NASA. |
| `models/marte.glb` | [Planet Mars, 3D Model](https://science.nasa.gov/resource/planet-mars-3d-model/) — NASA/JPL-Caltech | Descarga directa del sitio NASA confirmada por el equipo; uso educativo sujeto a las directrices NASA. |
| `models/mercurio.glb` | [NASA Mercury 3D Model](https://science.nasa.gov/resource/mercury-3d-model/) — NASA (origen declarado); VTAD (ficha de referencia) | Descarga directa del sitio NASA confirmada por el equipo; uso educativo sujeto a las directrices NASA. |
| `models/luna.glb` | [NASA SVS 14959](https://svs.gsfc.nasa.gov/14959/) — NASA SVS / Dan Gallagher (referencia) | Modelo verificado por el equipo; sin comparación binaria independiente. |
| `models/apollo-11.glb` | [Apollo 11](https://science.nasa.gov/mission/apollo-11/) — Modelo del proyecto / ChatGPT (OpenAI) | Creado con ChatGPT (OpenAI); no es un modelo oficial de NASA. |
| `models/surveyor-3.glb` | [Surveyor 3](https://science.nasa.gov/mission/surveyor-3/) — Modelo del proyecto / ChatGPT (OpenAI) | Creado con ChatGPT (OpenAI); no es un modelo oficial de NASA. |

### Imágenes de misiones

| Archivo | Referencia | Estado |
|---|---|---|
| `img/astronauta-eagle.jpg` | [AS11-40-5927](https://eol.jsc.nasa.gov/SearchPhotos/photo.pl?frame=5927&mission=AS11&roll=40) — NASA / Neil Armstrong | Coincidencia visual identificada; binario remoto no comparado. |
| `img/eagle.jpg` | [AS11-40-5927](https://eol.jsc.nasa.gov/SearchPhotos/photo.pl?frame=5927&mission=AS11&roll=40) — NASA / Neil Armstrong | Coincidencia visual identificada; binario remoto no comparado. |
| `img/ingenuity.jpg` | [Perseverance Spots Ingenuity at Its Final Airfield](https://science.nasa.gov/photojournal/perseverance-spots-ingenuity-at-its-final-airfield/) — NASA/JPL-Caltech/ASU/MSSS | Origen NASA declarado por el equipo; montaje exacto no identificado independientemente. |
| `img/near.jpg` | [NEAR rendezvous (artist's concept)](https://www.jpl.nasa.gov/images/pia18177-nasas-near-spacecrafts-rendezvous-with-asteroid-eros-artists-concept/) — NASA | Coincidencia visual identificada; binario remoto no comparado. |
| `img/pioneer.jpg` | [Pioneer 10 at Jupiter (artist's concept)](https://science.nasa.gov/resource/pioneer-10-at-jupiter-artists-concept/) — NASA | Coincidencia visual identificada; binario remoto no comparado. |

### Texturas del Sistema Solar

`solar-assets/` contiene diez texturas ilustrativas de origen NASA declarado por el equipo. Las descargas, transformaciones y derechos de terceros exactos no se verificaron independientemente; consultar el inventario. No son mapas científicos validados.

### Panorama de Opportunity

| Archivo | Fuente | Estado |
|---|---|---|
| `legacy-assets/PIA22909-4096.webp` | [PIA22909](https://science.nasa.gov/photojournal/opportunity-legacy-pan-true-color/) — NASA/JPL-Caltech/Cornell/ASU | SHA-256 coincide con la procedencia incluida; original remoto no recomparado. Versión redimensionada sin relleno. |
| `legacy-assets/PIA22909-8192.webp` | [PIA22909](https://science.nasa.gov/photojournal/opportunity-legacy-pan-true-color/) — NASA/JPL-Caltech/Cornell/ASU | SHA-256 coincide con la procedencia incluida; original remoto no recomparado. Versión redimensionada sin relleno. |
| `legacy-assets/PIA22929.jpg` | [PIA22929](https://science.nasa.gov/photojournal/opportunitys-last-message/) — NASA/JPL-Caltech/Cornell/ASU | SHA-256 coincide con la procedencia incluida; original remoto no recomparado. |
| `legacy-assets/PIA22930.jpg` | [PIA22930](https://science.nasa.gov/photojournal/last-images-opportunity-took/) — NASA/JPL-Caltech/Cornell/ASU | SHA-256 coincide con la procedencia incluida; original remoto no recomparado. |
| `legacy-assets/PIA22909-reconstruccion-v2.webp` | [PIA22909 · mosaico original](https://science.nasa.gov/photojournal/opportunity-legacy-pan-true-color/) — NASA/JPL-Caltech/Cornell/ASU + proyecto | Capa artística asistida por IA; SHA-256 coincide con el registro. **No constituye observación científica.** |

### Dependencias

- [model-viewer 4.1.0](https://ajax.googleapis.com/ajax/libs/model-viewer/4.1.0/model-viewer.min.js) — Google / model-viewer contributors · [Apache-2.0](https://github.com/google/model-viewer/blob/master/LICENSE)
- [Manrope](https://fonts.google.com/specimen/Manrope) — The Manrope Project Authors · [SIL OFL 1.1](https://github.com/google/fonts/blob/main/ofl/manrope/OFL.txt)
- [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) — The Cormorant Project Authors / Christian Thalmann · [SIL OFL 1.1](https://github.com/CatharsisFonts/Cormorant)

---

## 📚 Referencias científicas del código

<details>
<summary><b>Ver las 35 fuentes consultadas y el archivo donde se usan</b></summary>

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

## ✅ Verificación y estado de entrega

**Revisión del ZIP NASA 3.0 · 15 de noviembre de 2026**

| Comprobación | Resultado |
|---|---|
| Inventario | 16 modelos activos · 5 imágenes de misiones · 10 texturas · 5 recursos de panorama |
| Tamaños de modelos vs. publicados por NASA | 11 modelos coinciden (valores redondeados) |
| Huellas SHA-256 del panorama | 5 de 5 verificadas contra la documentación incluida |
| Sintaxis JavaScript | Correcta en 11 archivos originales y 2 módulos MJS |
| Rutas declaradas en HTML e identificadores únicos | Correctos |
| Lectura de los 36 recursos visuales | Correcta |
| Interfaz visual y WebGL | **No certificadas**: Chromium no produjo salida DOM en la prueba inicial |
| Comparación binaria con originales de NASA | No realizada; origen NASA de las texturas declarado por el equipo |

El respaldo `respaldo-modelos/tierra-anterior.glb`, sin uso activo, no se distribuye en esta versión; el ZIP original queda intacto.

**Términos y guías del evento:** [términos oficiales](https://www.spaceappschallenge.org/legal/) · [aclaraciones de IA](https://github.com/nasa/spaceapps/discussions/1947) · [aclaraciones de entrega](https://github.com/nasa/spaceapps/discussions/1858). La guía de entrega y el listado exacto del desafío devolvieron error 502 durante la revisión, por lo que el requisito de recurso específico del desafío no se certifica.

<details>
<summary><b>📝 Pendientes del equipo antes de enviar</b></summary>

- [x] El equipo declaró el origen NASA restante; quedan comprobaciones independientes de originales y permisos.
- [ ] Declarar cualquier herramienta IA adicional realmente utilizada y revisar visualmente que las recreaciones no contengan elementos de identidad NASA generados o modificados por IA; declarar todas las herramientas en el formulario.
- [x] Cinco referencias NASA del desafío documentadas mediante la lista de Athlone; lista central no comprobada directamente.
- [x] El equipo declaró inscripción e inicio autorizado; la validación oficial y revisión de derechos son independientes.
- [ ] Publicar y probar la URL pública, los modelos, controles, traducción y panorama en escritorio y móvil. Preparar demo pública y descripción en inglés.
- [ ] Completar Project Title, Summary, Project Demo, Final Project, Detailed Description, NASA Data, Other Resources, AI/SI Tools y términos; enviar antes del cierre oficial (15 de noviembre de 2026, 23:59, hora local del evento).

</details>

**Enlaces:** [Evento 2026](https://www.spaceappschallenge.org/2026/) · [Guía de entrega](https://www.spaceappschallenge.org/resources/project-submission-guide/en) · [Recursos del desafío](https://www.spaceappschallenge.org/2026/challenges/nasas-discarded-equipment-storytelling/?tab=resources)

> Esto no es una certificación oficial de elegibilidad. Los estados pendientes del inventario no constituyen permisos de uso.

---

<div align="center">

**Cosmic Legacy** · *Abandoned, but not forgotten.* 🌌

</div>

## Verificación técnica final · 15 de noviembre de 2026

El ZIP final contiene `index.html` en su raíz para subirlo directamente a Cloudflare. Pruebas estáticas: 13 archivos JavaScript, 16 modelos GLB, 20 imágenes, 36 huellas locales, 86 referencias HTML locales y 652 rutas completas de la simulación educativa. El diseño de créditos se comprobó de manera aislada a 1366 y 390 px en ambos idiomas. Detalles: [informe de pruebas](verificacion-final.json) e [inventario de recursos](inventario-recursos.json). No se pudo comprobar WebGL integral ni el despliegue público desde el entorno de revisión; se añadió una alternativa de navegación a las historias cuando WebGL no está disponible. Las limitaciones de procedencia siguen documentadas. Comprobar registro, fecha real de desarrollo, derechos de recursos y recurso del listado del desafío antes de la entrega oficial.

**Procedencia de los modelos planetarios:** El responsable confirma la descarga directa desde la web oficial de NASA de los ocho modelos de planetas. No se comprobó independientemente la identidad binaria; la ficha de Mercurio publica un tamaño distinto. El equipo confirmó posteriormente también el origen NASA de las texturas independientes.

## Declaración vigente del equipo · 15 de noviembre de 2026

El equipo confirma registro oficial, máximo seis integrantes, desafío Abandoned but Not Forgotten, sede local de Perú, desarrollo dentro del horario autorizado, respeto de las bases y declaración de todas las herramientas IA. Confirma origen NASA de los modelos planetarios, la imagen de Ingenuity y las texturas del sistema solar (Tierra, Marte, Luna y Saturno tienen modelos de origen NASA según el equipo). No se acreditaron independientemente los archivos originales exactos, las transformaciones ni los permisos particulares de terceros. Herramientas IA: **ChatGPT (OpenAI) y Gemini (Google)**. ChatGPT asistió en código, documentación y las tres recreaciones visuales identificadas; no se especificaron las tareas concretas de Gemini. No se atribuye todo el proyecto ni los recursos NASA a IA. Cinco recursos NASA coinciden con la lista del desafío reproducida por la sede de Athlone; la central no fue accesible. Consultar la [revisión de entrega vigente](REVISION-DE-ENTREGA.md) y el [inventario](inventario-recursos.json). Queda la validación oficial de elegibilidad, publicación y WebGL integral. La biblioteca HTML estática permanece intacta.



---

## Anexo — Guided Experience, Cosmic Heritage y Cosmic Learning

Equipo: **INTIHUATANA**, Perú. Se conserva el proyecto y la documentación original. Los módulos independientes añaden una ruta guiada de cuatro etapas, siete fichas históricas, reto final opcional de cinco conceptos, informe anónimo JSON, reconocimiento de participación imprimible y menú móvil. Los resultados son descriptivos y requieren participantes reales; no se afirman resultados de usuarios de prueba. El pasaporte, la simulación y las puntuaciones originales no cambian.

Los textos educativos se sintetizan a partir de las fuentes NASA/JPL indicadas. Las preguntas y la interfaz son materiales educativos independientes; ChatGPT asistió en su implementación. El equipo declaró también el uso de Gemini anteriormente. Se conserva la versión original local del panorama PIA22909 en Legacy Protocol, acreditada a NASA/JPL-Caltech/Cornell/ASU. El recorrido utiliza ahora la ilustración NASA/JPL PIA23720 descrita más abajo. Aplican las políticas de uso NASA/JPL con sus excepciones.

### Enlaces NASA utilizados en los nuevos módulos

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

### Alcance de la validación

Los módulos nuevos se probaron de manera aislada en Chromium a 320, 360, 390, 430, 768 y 1366 px, incluyendo validación de formulario incompleto, ambos idiomas, informe, reinicio y descarga del reconocimiento. El servidor local y la publicación pública estuvieron bloqueados desde el entorno de prueba; no se certificaron WebGL integral ni diferencias reales de reproducción entre navegador/dispositivo. Los permisos individuales y la elegibilidad se mantienen según el inventario original y la declaración del equipo.

### Cosmic Heritage
Las siete fichas históricas conservan sus fuentes oficiales NASA/JPL. El panel Mission Spotlight y sus retos rápidos se retiraron para simplificar el recorrido. Se mantiene la actividad final opcional.

### Ajuste responsive y portada
Se añade `responsive-center.css`: eje de contenido compartido, márgenes simétricos, menú compacto hasta 1100 px y control del desbordamiento decorativo. La portada del recorrido utiliza PIA23720 (ilustración artística oficial de Ingenuity y Perseverance, 2020; NASA/JPL-Caltech). Se conserva sin cambios el PNG aportado por el equipo; no es una fotografía real de Marte. El panorama PIA22909 permanece intacto en Legacy Protocol. Fuente oficial: https://www.nasa.gov/image-detail/amf-pia23720/

Referencia complementaria NASA Photojournal: https://science.nasa.gov/photojournal/ingenuity-mars-helicopter-on-the-martian-surface-artists-concept/
