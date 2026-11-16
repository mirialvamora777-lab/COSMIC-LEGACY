/*
 * COSMIC LEGACY · Extensión independiente / Standalone extension.
 * Bilingüe ES/EN + modo misión. No sustituye ni edita el código existente.
 * Funciona sobre el HTML original y reutiliza sus visores 3D.
 */
(() => {
  'use strict';

  const LANG_KEY = 'legado-cosmico-language-tab';
  let language = 'es';
  try { language = sessionStorage.getItem(LANG_KEY) === 'en' ? 'en' : 'es'; } catch (_) {}
  const shouldAsk = (() => { try { return !sessionStorage.getItem(LANG_KEY); } catch (_) { return true; } })();

  const dictionary = {
    'COSMIC LEGACY — Museo espacial': 'COSMIC LEGACY — Space museum',
    'Cosmic Legacy: explora las historias que dejaron las misiones espaciales.': 'Cosmic Legacy: explore the stories left behind by space missions.',
    'Cosmic Legacy, inicio': 'Cosmic Legacy, home',
    'Navegación principal': 'Main navigation',
    'INICIO': 'HOME', 'EXPLORAR': 'EXPLORE', 'CUERPOS CELESTES': 'CELESTIAL BODIES',
    'MUSEO VIRTUAL': 'VIRTUAL MUSEUM',
    'UN VIAJE POR NUESTRO VECINDARIO CÓSMICO': 'A JOURNEY THROUGH OUR COSMIC NEIGHBORHOOD',
    'Las misiones terminan, pero sus descubrimientos permanecen.': 'Missions end, but their discoveries live on.',
    'Comenzar exploración': 'Begin exploring',
    'SELECCIONA UN': 'SELECT A', 'DESTINO': 'DESTINATION',
    'EL UNIVERSO EN MOVIMIENTO': 'THE UNIVERSE IN MOTION',
    'Sistema solar': 'An interactive', 'interactivo.': 'solar system.',
    'Recorre los ocho planetas en tres dimensiones. Gira la cámara, acércate y elige tu próximo destino.': 'Explore the eight planets in 3D. Rotate the camera, zoom in and choose your next destination.',
    '↶ VISTA GENERAL': '↶ OVERVIEW', 'VISTA GENERAL': 'OVERVIEW', 'Vista general': 'Overview',
    'PAUSAR': 'PAUSE', 'Pausar': 'Pause', 'Reanudar': 'Resume', 'REANUDAR': 'RESUME',
    'MODELO NASA ↗': 'NASA MODEL ↗', 'Velocidad ×1': 'Speed ×1', 'Velocidad ×2': 'Speed ×2', 'Velocidad ×0.5': 'Speed ×0.5',
    'ARRASTRA PARA GIRAR · RUEDA PARA ZOOM · SELECCIONA UN PLANETA': 'DRAG TO ROTATE · SCROLL TO ZOOM · SELECT A PLANET',
    'Mercurio': 'Mercury', 'La Luna': 'The Moon', 'La Tierra': 'Earth', 'Tierra': 'Earth',
    'Marte': 'Mars', 'Júpiter': 'Jupiter', 'Saturno': 'Saturn', 'Urano': 'Uranus', 'Neptuno': 'Neptune',
    'Visualización artística 3D · tamaños, distancias y velocidades no están a escala.': 'Artistic 3D visualization · sizes, distances and speeds are not to scale.',
    'PRIMERA PARADA': 'FIRST STOP', 'Un sistema.': 'One system.', 'Infinitas historias.': 'Endless stories.',
    'Ocho mundos, ocho paisajes y miles de preguntas por descubrir. Elige un cuerpo celeste para comenzar tu recorrido.': 'Eight worlds, eight landscapes, and thousands of questions to discover. Choose a celestial body to begin your journey.',
    '01 — SATÉLITE NATURAL': '01 — NATURAL SATELLITE', '02 — PLANETA ROCOSO': '02 — ROCKY PLANET',
    '03 — PLANETA ROCOSO': '03 — ROCKY PLANET', '04 — GIGANTE GASEOSO': '04 — GAS GIANT',
    '05 — PLANETA ROCOSO': '05 — ROCKY PLANET', '06 — GIGANTE GASEOSO': '06 — GAS GIANT',
    '07 — GIGANTE HELADO': '07 — ICE GIANT', '08 — GIGANTE HELADO': '08 — ICE GIANT',
    'Un archivo de impactos y huellas humanas.': 'An archive of impacts and human footprints.',
    'Nuestro hogar visto desde la inmensidad.': 'Our home seen from the vastness of space.',
    'El planeta que seguimos intentando comprender.': 'The planet we are still trying to understand.',
    'Un mundo de anillos.': 'A world of rings.',
    'EXPLORAR CUERPO': 'EXPLORE BODY', 'EXPLORAR CUERPO →': 'EXPLORE BODY →',
    'DESPLÁZATE PARA DESCUBRIR': 'SCROLL TO DISCOVER',
    'MODELOS 3D': '3D MODELS', 'Naves y': 'Spacecraft and', 'rovers.': 'rovers.',
    'SONDA ESPACIAL': 'SPACE PROBE', 'VER EN 360°': 'VIEW IN 360°',
    '← VOLVER': '← BACK', 'MODELO 3D': '3D MODEL',
    'FONDO TRANSPARENTE': 'TRANSPARENT BACKGROUND', 'VER NASA 3D': 'VIEW NASA 3D',
    'ARRASTRA PARA GIRAR': 'DRAG TO ROTATE', 'DESLIZA PARA ACERCAR': 'SWIPE TO ZOOM',
    'UNA EXPERIENCIA EDUCATIVA · NASA SPACE APPS CHALLENGE': 'AN EDUCATIONAL EXPERIENCE · NASA SPACE APPS CHALLENGE',
    'HECHO PARA EXPLORAR': 'MADE FOR EXPLORING',
    'Sistema solar tridimensional interactivo': 'Interactive 3D solar system',
    'Sistema solar 3D: arrastra para girar la cámara, usa rueda del mouse para zoom y los botones de planeta para elegir destino': '3D solar system: drag to rotate the camera, scroll to zoom and use the planet buttons to choose a destination',
    'Seleccionar planeta en el sistema solar': 'Choose a planet in the solar system',
    'Explorar la Luna': 'Explore the Moon', 'Explorar la Tierra': 'Explore Earth',
    'Explorar Marte': 'Explore Mars', 'Explorar Saturno': 'Explore Saturn',
    'Modelo tridimensional de luna': '3D model of the Moon',
    'Tierra tridimensional': '3D Earth', 'Modelo tridimensional de marte': '3D model of Mars',
    'Modelo tridimensional de Saturno': '3D model of Saturn',
    'Modelos 3D de naves y vehículos': '3D models of spacecraft and vehicles',
    'Abrir rover Opportunity en 3D': 'Open the Opportunity rover in 3D',
    'HELICÓPTERO MARCIANO': 'MARS HELICOPTER',
    'Abrir NEAR Shoemaker en 3D': 'Open NEAR Shoemaker in 3D',
    'Modelo NASA 3D de NEAR Shoemaker': 'NASA 3D model of NEAR Shoemaker',
    'Abrir Pioneer 10 en 3D': 'Open Pioneer 10 in 3D',
    'Modelo NASA 3D de Pioneer 10': 'NASA 3D model of Pioneer 10',
    'Abrir Surveyor 3 en 3D': 'Open Surveyor 3 in 3D',
    'Recreación educativa 3D de Surveyor 3': 'Educational 3D reconstruction of Surveyor 3',
    'SONDA LUNAR · RECREACIÓN': 'LUNAR LANDER · RECONSTRUCTION',
    'Abrir Apollo 11 Eagle en 3D': 'Open Apollo 11 Eagle in 3D',
    'Recreación educativa 3D del módulo lunar Eagle': 'Educational 3D reconstruction of the Eagle lunar module',
    'MÓDULO LUNAR · RECREACIÓN': 'LUNAR MODULE · RECONSTRUCTION',
    'Abrir Ingenuity en 3D': 'Open Ingenuity in 3D',
    'Modelo NASA 3D de Ingenuity': 'NASA 3D model of Ingenuity',
    'Abrir nave Cassini en 3D': 'Open the Cassini spacecraft in 3D',
    'Modelo NASA 3D de Opportunity': 'NASA 3D model of Opportunity',
    'Modelo NASA 3D de Cassini': 'NASA 3D model of Cassini',
    'Visor espacial 3D': '3D space viewer',
    'Cambiar entre vista NASA y 3D transparente': 'Switch between NASA view and transparent 3D',
    'Cerrar visor': 'Close viewer',
    'Modelo interactivo tridimensional': 'Interactive 3D model',
    'El navegador no tiene WebGL activo. Prueba Chrome o Edge.': 'WebGL is not enabled in this browser. Try Chrome or Edge.'
  };
  const attrNames = ['aria-label', 'alt', 'title', 'placeholder', 'content'];
  const originalText = new WeakMap();
  const originalAttrs = new WeakMap();
  const normalize = s => s.replace(/\s+/g, ' ').trim();

  function translated(input) {
    const source = normalize(input);
    if (language === 'es') return source;
    if (dictionary[source]) return dictionary[source];
    const speed = source.match(/^Velocidad\s+×(.+)$/);
    if (speed) return `Speed ×${speed[1]}`;
    const focus = source.match(/^Enfocar\s+(.+)$/);
    if (focus) return `Focus on ${dictionary[focus[1]] || focus[1]}`;
    if (source.startsWith('No fue posible iniciar el visor WebGL:')) return source.replace('No fue posible iniciar el visor WebGL:', 'Unable to start the WebGL viewer:');
    const model = source.match(/^Modelo 3D de\s+(.+)$/);
    if (model) return `3D model of ${dictionary[model[1]] || model[1]}`;
    const embed = source.match(/^NASA,\s+(.+)\s+en 3D interactivo$/);
    if (embed) return `NASA, interactive 3D ${dictionary[embed[1]] || embed[1]}`;
    return source;
  }

  function applyText(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE || !node.parentElement || node.parentElement.closest('[data-lc-owned]')) return;
    if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(node.parentElement.tagName)) return;
    if (!normalize(node.nodeValue)) return;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const raw = originalText.get(node);
    const leading = raw.match(/^\s*/)[0], trailing = raw.match(/\s*$/)[0];
    const result = language === 'es' ? raw : leading + translated(raw) + trailing;
    if (node.nodeValue !== result) node.nodeValue = result;
  }
  function applyAttributes(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE || element.closest('[data-lc-owned]')) return;
    let record = originalAttrs.get(element);
    if (!record) { record = {}; originalAttrs.set(element, record); }
    for (const name of attrNames) {
      if (!element.hasAttribute(name) || (name === 'content' && !(element.matches('meta[name="description"]')))) continue;
      const current = element.getAttribute(name);
      if (!record[name] || (current !== record[name].shown && current !== record[name].source)) {
        record[name] = {source:current, shown:current};
      }
      const next = language === 'es' ? record[name].source : translated(record[name].source);
      record[name].shown = next;
      if (current !== next) element.setAttribute(name, next);
    }
  }
  function translateTree(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) { applyText(root); return; }
    if (root.nodeType !== Node.ELEMENT_NODE || root.closest('[data-lc-owned]')) return;
    applyAttributes(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      if (walker.currentNode.nodeType === Node.TEXT_NODE) applyText(walker.currentNode);
      else applyAttributes(walker.currentNode);
    }
  }
  function translateOriginalPage() {
    document.documentElement.lang = language;
    document.title = language === 'en' ? dictionary['COSMIC LEGACY — Museo espacial'] : 'COSMIC LEGACY — Museo espacial';
    translateTree(document.body);
    applyAttributes(document.querySelector('meta[name="description"]'));
  }
  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes') applyAttributes(mutation.target);
      for (const node of mutation.addedNodes || []) translateTree(node);
    }
  });

  function updateNav() {
    const b=document.getElementById('lc-language-switch');
    if(b){b.textContent=language==='en'?'Language: EN · ⇄':'Idioma: ES · ⇄';b.setAttribute('aria-label',language==='en'?'Change language':'Cambiar idioma');}
  }
  function createLanguageControl(){
    const bar=document.querySelector('.topbar');if(!bar)return;
    const b=document.createElement('button');b.type='button';b.id='lc-language-switch';b.className='lc-language-switch';b.setAttribute('data-lc-owned','');b.addEventListener('click',()=>setLanguage(language==='es'?'en':'es'));bar.append(b);updateNav();
  }
  function setLanguage(next) {
    language=next==='en'?'en':'es';
    try{sessionStorage.setItem(LANG_KEY,language);}catch(_){}
    translateOriginalPage();
    updateNav();
    const gate=document.getElementById('lc-language-gate');
    if(gate){gate.remove();document.body.classList.remove('lc-language-open');window.scrollTo({top:0,behavior:'instant'});}
  }
  function createWelcomeGate() {
    if (!shouldAsk) return;
    const gate=document.createElement('div');gate.id='lc-language-gate';gate.className='lc-language-gate';gate.setAttribute('data-lc-owned','');
    gate.setAttribute('role','dialog');gate.setAttribute('aria-modal','true');
    gate.setAttribute('aria-labelledby','lc-language-title');
    gate.innerHTML=`<div class="lc-language-sky" aria-hidden="true"><div class="lc-language-planet"></div></div>
      <div class="lc-language-panel"><div class="lc-language-emblem" aria-hidden="true">✦</div>
      <p class="lc-language-kicker">COSMIC LEGACY</p>
      <h2 id="lc-language-title">El espacio no tiene fronteras.<br><em>Space knows no borders.</em></h2>
      <p class="lc-language-prompt">¿En qué idioma deseas explorar? <span>Choose your language to begin.</span></p>
      <div class="lc-language-options"><button type="button" data-lc-lang="es"><span class="lc-language-icon">ES</span><span><strong>Español</strong><small>Explorar en español</small></span><span>↗</span></button>
      <button type="button" data-lc-lang="en"><span class="lc-language-icon">EN</span><span><strong>English</strong><small>Explore in English</small></span><span>↗</span></button></div>
      <p class="lc-language-footer">IDIOMA / LANGUAGE <span>·</span> SE PUEDE CAMBIAR DESPUÉS / YOU CAN SWITCH LATER</p></div>`;
    document.body.appendChild(gate);
    document.body.classList.add('lc-language-open');
    gate.querySelectorAll('[data-lc-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lcLang)));
    const choices=[...gate.querySelectorAll('button')];
    gate.addEventListener('keydown',e=>{
      if(e.key==='Tab'){
        if(e.shiftKey&&document.activeElement===choices[0]){e.preventDefault();choices[1].focus();}
        else if(!e.shiftKey&&document.activeElement===choices[1]){e.preventDefault();choices[0].focus();}
      }
    });
    choices[0].focus();
  }

  createLanguageControl();
  translateOriginalPage();
  observer.observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:attrNames});
  createWelcomeGate();
})();
