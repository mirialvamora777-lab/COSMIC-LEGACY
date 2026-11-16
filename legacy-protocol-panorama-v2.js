/* LEGACY PROTOCOL — additive integration. No original globals are replaced.
 * The panorama is a horizontally wrapping photographic band, not a spherical
 * map or topographic reconstruction. An optional editorial overlay fills missing image areas.
 */
(() => {
  'use strict';
  const base = new URL('.', document.currentScript.src);
  const asset = name => new URL('legacy-assets/' + name, base).href;
  const lang = () => document.documentElement.lang === 'en' ? 'en' : 'es';
  const title = document.getElementById('xp-ship-title');
  const detail = document.getElementById('xp-detail');
  if (!title || !detail) return;

  const trigger = document.createElement('button');
  trigger.id = 'legacy-descend'; trigger.className = 'lp-launch';
  trigger.type = 'button'; trigger.hidden = true;
  trigger.setAttribute('data-lc-owned', '');
  trigger.setAttribute('aria-haspopup', 'dialog');
  detail.querySelector('.xp-chips').insertAdjacentElement('afterend', trigger);
  function syncTrigger() {
    trigger.hidden = title.textContent.trim().toUpperCase() !== 'OPPORTUNITY';
    trigger.textContent = lang() === 'es' ? '↓ DESCENDER A LA SUPERFICIE' : '↓ DESCEND TO THE SURFACE';
  }
  new MutationObserver(syncTrigger).observe(title, { childList: true, subtree: true, characterData: true });
  syncTrigger();

  let content, engine, modules, root, photoCanvas, dustCanvas, ctx, dustCtx;
  let photo, lowPhoto, hiPhoto, phase = 'closed', generation = 0, frame = 0;
  let fillPhoto, fillRequest, fillWanted = false, fillAlpha = 0, fillFrame = 0, fillError = false;
  let sim, feedback = null, panel = null, priorFocus, previousOverflow, panelFocus;
  let lastTick = 0, elapsed = 0, dust = 0, width = 0, height = 0, photoScale = 1;
  let camera = { u: .49, v: .35, z: 2.1 }, hudHidden = false;
  let sound = null, soundEnabled = false, soundFailed = false;
  let phaseLabel = '', hiLoading = false, audioBusy = false;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const pointers = new Map();
  let dragStart = null, pinchStart = null;
  const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  const wrap = v => ((v % 1) + 1) % 1;
  const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const $ = selector => root.querySelector(selector);
  const t = key => content.TEXT[lang()][key];
  const link = (index, label) => `<a href="${content.SOURCES[index][1]}" target="_blank" rel="noopener noreferrer">${escape(label || t('sourceLink'))} ↗</a>`;
  const btn = (action, label, cls = '', extra = '') => `<button type="button" class="lp-btn ${cls}" data-lp-action="${action}" ${extra}>${escape(label)}</button>`;
  const imageMarkup = (name, alt, cls = '') => `<img class="${cls}" src="${asset(name)}" alt="${escape(alt)}" decoding="async" loading="lazy">`;

  function makeRoot() {
    root = document.createElement('dialog');
    root.id = 'legacy-protocol'; root.setAttribute('data-lc-owned', '');
    root.setAttribute('aria-labelledby', 'lp-title'); root.setAttribute('aria-modal', 'true');
    root.innerHTML = `
      <div class="lp-scene"><canvas id="lp-photo" tabindex="0" role="img"></canvas><div id="lp-markers"></div></div>
      <div class="lp-atmosphere" aria-hidden="true"></div><canvas id="lp-dust" aria-hidden="true"></canvas>
      <div class="lp-vignette" aria-hidden="true"></div>
      <header class="lp-header">
        <button type="button" class="lp-back" data-lp-action="exit"><span aria-hidden="true">←</span><span data-lp-text="back"></span></button>
        <div class="lp-brand"><span>LEGACY PROTOCOL · V2</span><h1 id="lp-title" data-lp-text="title"></h1></div>
        <div class="lp-top-actions"><button type="button" class="lp-btn" data-lp-action="language"></button><button type="button" class="lp-btn" data-lp-action="sound" aria-pressed="false"></button><button type="button" class="lp-btn lp-source-button" data-lp-action="sources" data-lp-text="sources"></button></div>
      </header>
      <div id="lp-orbit" aria-hidden="true"><div class="lp-orbit-ring"></div><div class="lp-mars"></div><div class="lp-entry-flare"></div></div>
      <div id="lp-cinema"><p class="lp-kicker">LEGACY PROTOCOL / MER-B</p><h2 id="lp-cinema-title"></h2><p id="lp-cinema-note"></p><div class="lp-loading-track"><span></span></div><button type="button" class="lp-btn" data-lp-action="skip" data-lp-text="skip"></button></div>
      <div id="lp-surface">
        <div class="lp-location"><div class="lp-photo-modes" role="group" data-lp-label="modeGroup">${btn('photo-original', '', '', 'data-lp-text="modeOriginal" aria-pressed="true"')}${btn('photo-restored', '', '', 'data-lp-text="modeRestored" aria-pressed="false"')}</div><p class="lp-kicker" data-lp-text="location"></p><h2 data-lp-text="exploreTitle"></h2><p data-lp-text="exploreLead"></p></div>
        <div class="lp-pan-tools">${btn('zoom-in', '+', '', 'data-lp-label="zoomIn"')}${btn('zoom-out', '−', '', 'data-lp-label="zoomOut"')}${btn('home', '⌖', '', 'data-lp-label="home"')}${btn('hud', '◉', '', 'data-lp-label="hudHide"')}</div>
        <div class="lp-surface-bottom">
          <div class="lp-place-row"><span class="lp-kicker" data-lp-text="places"></span><div id="lp-place-list"></div></div>
          <div class="lp-surface-actions"><div><p id="lp-photo-mode-label" class="lp-kicker"></p><p class="lp-view-help" data-lp-text="viewHelp"></p></div><div class="lp-cta-group">${btn('science', '', '', 'data-lp-text="science"')}${btn('start', '', 'lp-primary', 'data-lp-text="start"')}<small data-lp-text="startHint"></small></div></div>
          <p class="lp-photo-credit"><span id="lp-photo-mode-note"></span><br>${content.CREDIT} · <a href="${content.SOURCES[0][1]}" target="_blank" rel="noopener noreferrer">PIA22909 ↗</a> · <button type="button" class="lp-credit-sources" data-lp-action="sources" data-lp-text="sources"></button></p>
        </div>
      </div>
      <div id="lp-mode-watermark" aria-hidden="true" hidden></div>
      <div id="lp-simulation"></div>
      <div id="lp-loss" aria-live="polite"><p class="lp-kicker" data-lp-text="endingLabel"></p><h2 id="lp-loss-title"></h2>${btn('end-now', '', '', 'data-lp-text="seeEnd"')}</div>
      <div id="lp-ending" tabindex="-1"></div>
      <aside id="lp-panel" hidden aria-labelledby="lp-panel-title"><button type="button" class="lp-panel-close" data-lp-action="close-panel" data-lp-label="close">×</button><div id="lp-panel-body"></div></aside>
      <div id="lp-status" class="lp-sr" role="status" aria-live="polite" aria-atomic="true"></div>`;
    document.body.appendChild(root);
    photoCanvas = $('#lp-photo'); dustCanvas = $('#lp-dust');
    ctx = photoCanvas.getContext('2d', { alpha: false }); dustCtx = dustCanvas.getContext('2d');
    root.addEventListener('click', handleAction);
    root.addEventListener('cancel', e => { e.preventDefault(); panel ? closePanel() : close(); });
    root.addEventListener('error', e => {
      if (e.target instanceof HTMLImageElement) { e.target.alt = t('photoUnavailable'); e.target.classList.add('lp-image-error'); }
    }, true);
    photoCanvas.addEventListener('pointerdown', pointerDown);
    photoCanvas.addEventListener('pointermove', pointerMove);
    for (const name of ['pointerup', 'pointercancel', 'lostpointercapture']) photoCanvas.addEventListener(name, pointerEnd);
    photoCanvas.addEventListener('wheel', e => { if (phase !== 'surface') return; e.preventDefault(); zoom(camera.z * Math.exp(-e.deltaY * .001)); }, { passive: false });
    new ResizeObserver(resize).observe(root);
  }

  let opening = false;
  async function open(event) {
    if (phase !== 'closed' || opening) return;
    opening = true;
    const origin = event?.currentTarget instanceof HTMLButtonElement ? event.currentTarget : trigger;
    origin.disabled = true;
    try {
      modules ||= Promise.all([import(asset('content-panorama-v2.mjs')), import(asset('simulation.mjs'))]);
      [content, engine] = await modules;
      if (!root) makeRoot();
      priorFocus = origin;
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      root.showModal();
      document.dispatchEvent(new Event('lc:legacy-visibility'));
      root.lang = lang();
      sim = null; feedback = null; panel = null; hudHidden = false;
      fillWanted = false; fillAlpha = 0; fillError = false;
      root.style.setProperty('--lp-entry', 0);
      root.classList.remove('lp-hud-hidden');
      $('#lp-panel').hidden = true;
      phase = 'loading'; generation++; translate(); setPhase('loading'); resize();
      $('[data-lp-action="exit"]').focus({ preventScroll: true });
      await loadPanorama(generation);
    } catch (error) {
      modules = null;
      if (root?.open) { failLoading(); }
      else {
        let notice = origin.parentElement.querySelector('.lp-launch-error');
        if (!notice) { notice = document.createElement('p'); notice.className = 'lp-launch-error'; notice.setAttribute('role', 'alert'); origin.after(notice); }
        notice.textContent = lang() === 'es' ? 'No se pudo cargar Legacy Protocol. Abre el proyecto con Live Server y conserva la carpeta legacy-assets.' : 'Legacy Protocol could not load. Use Live Server and keep the legacy-assets folder.';
      }
      console.warn('Legacy Protocol: unable to open the local archive.', error);
    } finally { origin.disabled = false; opening = false; }
  }
  trigger.addEventListener('click', open);
  window.lcOpenLegacy = open;

  function loadImage(url) {
    return new Promise((resolve, reject) => {
      const img = new Image(); img.decoding = 'async';
      const timeout = setTimeout(() => { img.onload = img.onerror = null; reject(new Error('Image load timeout')); }, 25000);
      img.onload = () => { clearTimeout(timeout); resolve(img); };
      img.onerror = () => { clearTimeout(timeout); reject(new Error('Image load failed')); };
      img.src = url;
    });
  }
  async function loadPanorama(token) {
    try {
      // Start the reconstruction and historical photograph together.
      const reconstruction = fillWanted ? loadFill() : null;
      lowPhoto ||= await loadImage(asset('PIA22909-4096.webp'));
      if (reconstruction) await Promise.race([reconstruction, new Promise(resolve => setTimeout(resolve, 4500))]);
      if (token !== generation || phase === 'closed') return;
      photo = hiPhoto || lowPhoto;
      if (fillWanted && fillPhoto) fillAlpha = 1;
      startCinema();
      // No high-resolution request on compact/mobile screens or save-data links.
      if (width > 1000 && !navigator.connection?.saveData && !hiPhoto && !hiLoading) {
        hiLoading = true;
        loadImage(asset('PIA22909-8192.webp')).then(img => {
          hiPhoto = img;
          if (root.open) { photo = img; drawPanorama(); }
        }).catch(() => { /* The local 4K version remains fully usable. */ }).finally(() => { hiLoading = false; });
      }
    } catch (_) { if (token === generation && phase !== 'closed') failLoading(); }
  }
  // A transparent layer shares the original normalized panorama coordinates.
  // Loading or failure never blocks the historical photograph.
  function loadFill() {
    if (fillPhoto) { animateFill(); return; }
    if (!fillRequest) {
      fillError = false;
      fillRequest = loadImage(asset('PIA22909-reconstruccion-v2.webp')).then(img => {
        fillPhoto = img;
        if (root?.open && fillWanted) {
          if (phase === 'loading' || phase === 'cinema') { fillAlpha = 1; syncFillUI(); drawPanorama(); }
          else animateFill();
        }
      }).catch(() => {
        fillError = true;
        if (root?.open) { syncFillUI(); announce(t('modeUnavailable')); }
      }).finally(() => { fillRequest = null; });
    }
    syncFillUI();
    return fillRequest;
  }
  function syncFillUI() {
    if (!root) return;
    const visible = fillAlpha > 0 || (fillWanted && !!fillPhoto);
    const original = $('[data-lp-action="photo-original"]');
    const restored = $('[data-lp-action="photo-restored"]');
    original.setAttribute('aria-pressed', String(!visible));
    restored.setAttribute('aria-pressed', String(visible));
    const loading = fillWanted && !fillPhoto && !fillError;
    restored.disabled = loading;
    restored.textContent = t(loading ? 'modeLoading' : 'modeRestored');
    $('#lp-photo-mode-label').textContent = t(visible ? 'restoredLabel' : 'panoramaLabel');
    $('#lp-photo-mode-note').textContent = t(visible ? 'restoredNote' : fillError && fillWanted ? 'modeUnavailable' : 'panoramaNote');
    const watermark = $('#lp-mode-watermark');
    watermark.hidden = !visible;
    watermark.textContent = t('restoredLabel');
    photoCanvas.setAttribute('aria-label', t('canvasLabel') + (visible ? ' ' + t('restoredLabel') : ''));
  }
  function animateFill() {
    cancelAnimationFrame(fillFrame);
    const from = fillAlpha, target = fillWanted && fillPhoto ? 1 : 0;
    if (reduced.matches || from === target) { fillAlpha = target; syncFillUI(); drawPanorama(); return; }
    const begin = performance.now();
    syncFillUI();
    function step(now) {
      if (!root?.open) return;
      const progress = clamp((now - begin) / 320, 0, 1);
      fillAlpha = from + (target - from) * (progress * progress * (3 - 2 * progress));
      if (progress < 1) fillFrame = requestAnimationFrame(step);
      else { fillAlpha = target; fillFrame = 0; syncFillUI(); }
      drawPanorama();
    }
    fillFrame = requestAnimationFrame(step);
  }
  function choosePhoto(restored) {
    fillWanted = restored;
    fillError = false;
    if (restored && !fillPhoto) loadFill();
    else animateFill();
    announce(t(restored ? 'modeRestored' : 'modeOriginal'));
  }
  function failLoading() {
    setPhase('error'); $('#lp-cinema-title').textContent = t('loadError');
    $('#lp-cinema-note').textContent = '';
    $('[data-lp-action="skip"]').textContent = t('retryLoad');
  }
  function setPhase(next) {
    phase = next; root.dataset.phase = next; elapsed = 0; lastTick = 0;
    root.style.setProperty('--lp-loss', 0);
    const surface = next === 'surface';
    $('#lp-surface').hidden = !surface;
    photoCanvas.tabIndex = surface ? 0 : -1;
    $('#lp-markers').hidden = !surface || hudHidden;
    $('#lp-orbit').hidden = !['loading', 'cinema', 'error'].includes(next);
    $('#lp-cinema').hidden = !['loading', 'cinema', 'error'].includes(next);
    $('#lp-simulation').hidden = !['simulation', 'loss'].includes(next);
    $('#lp-simulation').inert = next !== 'simulation';
    $('#lp-loss').hidden = next !== 'loss';
    $('#lp-ending').hidden = next !== 'ending';
    $('[data-lp-action="sound"]').disabled = ['ending', 'loss'].includes(next) || soundFailed;
    root.style.setProperty('--lp-dark', next === 'simulation' ? .12 : 0);
    dust = next === 'simulation' ? .12 : 0;
    syncFillUI();
    if (next === 'loading') {
      $('#lp-cinema-title').textContent = t('loading'); $('#lp-cinema-note').textContent = t('cinematicNote');
    }
    startFrame();
  }
  function startCinema() {
    camera = { u: .49, v: .35, z: 2.1 }; drawPanorama();
    setPhase('cinema'); phaseLabel = ''; root.classList.remove('lp-descent');
    $('#lp-cinema-note').textContent = t('cinematicNote');
    $('[data-lp-action="skip"]').textContent = t('skip');
    if (reduced.matches) surface();
    else $('[data-lp-action="skip"]').focus({ preventScroll: true });
  }
  function surface() {
    closePanel(false); setPhase('surface'); drawPanorama();
    $('#lp-simulation').replaceChildren();
    announce(t('location')); photoCanvas.focus({ preventScroll: true });
    setVolume(.025);
  }
  function close() {
    if (!root?.open) return;
    generation++; phase = 'closed'; cancelAnimationFrame(frame); frame = 0;
    cancelAnimationFrame(fillFrame); fillFrame = 0;
    pointers.clear(); dragStart = pinchStart = null;
    stopSound(); root.close(); document.dispatchEvent(new Event('lc:legacy-visibility')); document.body.style.overflow = previousOverflow;
    priorFocus?.focus?.({ preventScroll: true });
  }
  function translate() {
    root.lang = lang();
    root.querySelectorAll('[data-lp-text]').forEach(el => { el.textContent = t(el.dataset.lpText); });
    const backLabel = root.querySelector('.lp-back [data-lp-text="back"]');
    if (backLabel && priorFocus !== trigger) backLabel.textContent = lang() === 'es' ? 'Volver al museo' : 'Back to the museum';
    root.querySelectorAll('[data-lp-label]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.lpLabel)); el.title = t(el.dataset.lpLabel); });
    $('[data-lp-action="language"]').textContent = lang() === 'es' ? 'ES / EN' : 'EN / ES';
    $('[data-lp-action="language"]').setAttribute('aria-label', t('language'));
    updateSoundButton();
    syncFillUI();
    $('#lp-place-list').innerHTML = content.POINTS.map((p, i) => btn('point', `${String(i + 1).padStart(2, '0')} ${t('pointTitles')[p.id]}`, '', `data-point="${p.id}"`)).join('');
    $('#lp-markers').innerHTML = content.POINTS.map((p, i) => `<button type="button" class="lp-marker" data-lp-action="point" data-point="${p.id}" aria-label="${escape(t('pointTitles')[p.id])}"><span>${String(i + 1).padStart(2, '0')}</span><b>${escape(t('pointTitles')[p.id])}</b></button>`).join('');
    if (phase === 'simulation' || phase === 'loss') renderSimulation();
    if (phase === 'ending') renderEnding();
    if (panel) renderPanel();
    if (phase === 'error') failLoading();
    else if (phase === 'loading') { $('#lp-cinema-title').textContent = t('loading'); $('#lp-cinema-note').textContent = t('cinematicNote'); }
    else if (phase === 'cinema') { $('#lp-cinema-title').textContent = t(phaseLabel || 'orbit'); $('#lp-cinema-note').textContent = t('cinematicNote'); }
    drawPanorama();
  }
  new MutationObserver(() => {
    syncTrigger();
    if (root?.open) {
      const focused = document.activeElement;
      const action = focused?.dataset.lpAction, point = focused?.dataset.point;
      translate();
      if (action) root.querySelector(`[data-lp-action="${action}"]${point ? `[data-point="${point}"]` : ''}`)?.focus({ preventScroll: true });
    }
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  function resize() {
    if (!root.open) return;
    width = root.clientWidth; height = root.clientHeight;
    const ratio = Math.min(devicePixelRatio || 1, 1.5);
    for (const c of [photoCanvas, dustCanvas]) { c.width = Math.round(width * ratio); c.height = Math.round(height * ratio); }
    ctx?.setTransform(ratio, 0, 0, ratio, 0, 0); dustCtx?.setTransform(ratio, 0, 0, ratio, 0, 0);
    drawPanorama();
  }
  function drawPanorama() {
    if (!photo || !ctx || !width || !height || !root.open) return;
    photoScale = Math.max(width / photo.width, height / photo.height) * camera.z;
    const iw = photo.width * photoScale, ih = photo.height * photoScale;
    camera.u = wrap(camera.u); camera.v = clamp(camera.v, height / (2 * ih), 1 - height / (2 * ih));
    const x = width / 2 - camera.u * iw, y = height / 2 - camera.v * ih;
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, width, height);
    ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    for (let offset = -1; offset <= 1; offset++) ctx.drawImage(photo, x + offset * iw, y, iw, ih);
    if (fillPhoto && fillAlpha > 0) {
      ctx.save(); ctx.globalAlpha = fillAlpha;
      for (let offset = -1; offset <= 1; offset++) ctx.drawImage(fillPhoto, x + offset * iw, y, iw, ih);
      ctx.restore();
    }
    const bottom = root.querySelector('.lp-surface-bottom');
    const markerLimit = bottom?.getBoundingClientRect().height || (width < 700 ? 295 : 220);
    for (const p of content.POINTS) {
      const marker = root.querySelector(`.lp-marker[data-point="${p.id}"]`);
      if (!marker) continue;
      const delta = wrap(p.x - camera.u + .5) - .5;
      const mx = width / 2 + delta * iw, my = y + p.y * ih;
      marker.hidden = mx < 24 || mx > width - 24 || my < 115 || my > height - markerLimit;
      marker.classList.toggle('lp-marker-right', mx > width - 250);
      marker.style.transform = `translate(-50%,-50%) translate(${mx.toFixed(1)}px,${my.toFixed(1)}px)`;
    }
  }
  function zoom(value) { camera.z = clamp(value, 1, 4); drawPanorama(); }
  function pointerDown(e) {
    if (phase !== 'surface' || panel) return;
    photoCanvas.focus({ preventScroll: true }); photoCanvas.setPointerCapture(e.pointerId);
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    dragStart = { x: e.clientX, y: e.clientY, u: camera.u, v: camera.v };
    if (pointers.size === 2) { const a = [...pointers.values()]; pinchStart = { d: Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y), z: camera.z }; }
  }
  function pointerMove(e) {
    if (!pointers.has(e.pointerId) || !photo) return;
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.size >= 2 && pinchStart) {
      const a = [...pointers.values()]; zoom(pinchStart.z * Math.hypot(a[0].x - a[1].x, a[0].y - a[1].y) / Math.max(1, pinchStart.d));
    } else if (dragStart) {
      camera.u = dragStart.u - (e.clientX - dragStart.x) / (photo.width * photoScale);
      camera.v = dragStart.v - (e.clientY - dragStart.y) / (photo.height * photoScale); drawPanorama();
    }
  }
  function pointerEnd(e) {
    pointers.delete(e.pointerId); pinchStart = null;
    const remaining = [...pointers.values()][0];
    dragStart = remaining ? { ...remaining, u: camera.u, v: camera.v } : null;
  }
  function announce(message) { $('#lp-status').textContent = message; }

  // A native dialog makes the museum inert. Capture keys before its old handlers.
  window.addEventListener('keydown', e => {
    if (!root?.open) return;
    if (e.key === 'Escape') { e.preventDefault(); e.stopImmediatePropagation(); panel ? closePanel() : close(); return; }
    if (e.key === 'Tab') {
      const scope = panel ? $('#lp-panel') : root;
      const all = [...scope.querySelectorAll('button:not(:disabled),a[href],[tabindex="0"]')].filter(el => el.getClientRects().length && !el.closest('[hidden],[inert]'));
      const first = all[0], last = all[all.length - 1];
      if (e.shiftKey && (document.activeElement === first || !scope.contains(document.activeElement))) { e.preventDefault(); last?.focus(); }
      else if (!e.shiftKey && (document.activeElement === last || !scope.contains(document.activeElement))) { e.preventDefault(); first?.focus(); }
    }
    if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','=','-','Home'].includes(e.key)) {
      e.stopImmediatePropagation();
      if (document.activeElement !== photoCanvas || phase !== 'surface' || panel) return;
      e.preventDefault();
      if (e.key === 'ArrowLeft') camera.u -= .025;
      if (e.key === 'ArrowRight') camera.u += .025;
      if (e.key === 'ArrowUp') camera.v -= .035;
      if (e.key === 'ArrowDown') camera.v += .035;
      if (e.key === '+' || e.key === '=') zoom(camera.z * 1.12);
      if (e.key === '-') zoom(camera.z / 1.12);
      if (e.key === 'Home') camera = { u: .49, v: .35, z: 2.1 };
      drawPanorama();
    }
  }, true);

  function handleAction(e) {
    const b = e.target.closest('[data-lp-action]'); if (!b || b.disabled) return;
    const a = b.dataset.lpAction;
    if (a === 'exit') close();
    if (a === 'language') document.getElementById('lc-language-switch')?.click();
    if (a === 'sound') toggleSound();
    if (a === 'skip') {
      if (phase === 'error') { setPhase('loading'); loadPanorama(generation); }
      else if (photo) surface();
    }
    if (a === 'zoom-in') zoom(camera.z * 1.15);
    if (a === 'zoom-out') zoom(camera.z / 1.15);
    if (a === 'photo-original') choosePhoto(false);
    if (a === 'photo-restored') choosePhoto(true);
    if (a === 'home') { camera = { u: .49, v: .35, z: 2.1 }; drawPanorama(); }
    if (a === 'hud') { hudHidden = !hudHidden; root.classList.toggle('lp-hud-hidden', hudHidden); b.setAttribute('aria-label', t(hudHidden ? 'hudShow' : 'hudHide')); $('#lp-markers').hidden = hudHidden; syncFillUI(); }
    if (a === 'point') {
      const p = content.POINTS.find(p => p.id === b.dataset.point); if (!p) return;
      camera.u = p.x; camera.v = p.y; camera.z = 2.1; drawPanorama(); openPanel(p.id);
    }
    if (a === 'sources' || a === 'science') openPanel(a);
    if (a === 'close-panel') closePanel();
    if (a === 'start') { closePanel(false); sim = engine.createSimulation(); feedback = null; setPhase('simulation'); renderSimulation(); $('#lp-sim-title').focus(); }
    if (a === 'choose' && phase === 'simulation' && !feedback) {
      const updated = engine.decide(sim, b.dataset.command); if (updated === sim) return;
      sim = updated; feedback = sim.history.at(-1).outcome;
      dust = .13 + sim.turn * .16; root.style.setProperty('--lp-dark', .13 + sim.turn * .14);
      setVolume(.03 + sim.turn * .008); renderSimulation();
      announce(t('feedback')[feedback]); $('[data-lp-action="next"]').focus(); startFrame();
    }
    if (a === 'next') {
      if (sim.ended) startLoss();
      else { feedback = null; renderSimulation(); $('#lp-sim-title').focus(); }
    }
    if (a === 'surface') surface();
    if (a === 'end-now') ending();
    if (a === 'restart') { stopSound(); sim = null; feedback = null; closePanel(false); startCinema(); }
  }

  function renderSimulation() {
    if (!sim) return;
    const n = Math.min(4, sim.turn);
    const readout = (key, value, max = 100) => `<div class="lp-readout"><span>${escape(t(key))}</span><strong>${value}${key === 'temperature' ? '<small> °C</small>' : '<small> %</small>'}</strong>${key !== 'temperature' ? `<meter min="0" max="${max}" value="${value}" aria-label="${escape(t(key) + ' · ' + t('simulated'))}"></meter>` : '<div class="lp-thermal-line" aria-hidden="true"></div>'}</div>`;
    $('#lp-simulation').innerHTML = `
      <section class="lp-control-heading"><p class="lp-kicker">${escape(t('simKicker'))}</p><h2>${escape(t('simTitle'))}</h2><p class="lp-sim-note">${escape(t('simNote'))}</p></section>
      <div class="lp-control-grid">
        <section class="lp-telemetry lp-glass" aria-label="${escape(t('simulated'))}"><div class="lp-console-top"><span class="lp-kicker">MER-B / ${escape(t('simulated'))}</span><span class="lp-live-light" aria-hidden="true"></span></div>
          <p class="lp-alert ${sim.energy <= 30 ? 'is-critical' : ''}" role="status">${escape(t(sim.energy === 0 ? 'exhausted' : sim.energy <= 30 ? 'critical' : 'nominal'))}</p><div class="lp-readouts">${readout('energy', sim.energy)}${readout('visibility', sim.visibility)}${readout('link', sim.link)}${readout('temperature', sim.temperature)}</div>
          <div class="lp-instrument"><span>${escape(t('instruments'))}</span><strong>${escape(t(sim.instruments))}</strong></div>
          <div class="lp-instrument"><span>${escape(t('packets'))}</span><strong>${sim.packets}</strong></div>
          <div class="lp-signal${sim.link > 0 ? ' is-linked' : ''}" aria-hidden="true">${Array.from({ length: 36 }, (_, i) => `<i style="--bar:${2 + Math.abs(Math.sin(i * 1.3)) * (sim.link * .6)}px"></i>`).join('')}</div>
          <details class="lp-history"><summary>${escape(t('log'))} · ${sim.history.length}/5</summary><ol>${sim.history.map(h => `<li>${escape(t('actions')[h.action][0])} — ${h.energy}%</li>`).join('')}</ol></details>
          <details class="lp-historical"><summary>${escape(t('historical'))}</summary><p>${escape(t('historicalBody'))}</p>${link(4)}</details>
        </section>
        <section class="lp-decision lp-glass"><div class="lp-decision-head"><span class="lp-kicker">${escape(t('decision'))} ${Math.min(5, sim.turn + (feedback ? 0 : 1))} ${escape(t('of'))} 5</span><span class="lp-step-dots" aria-hidden="true">${Array.from({ length: 5 }, (_, i) => `<i class="${i < sim.turn ? 'is-done' : ''}"></i>`).join('')}</span></div>
          <h3 id="lp-sim-title" tabindex="-1">${escape(t('phaseNames')[feedback ? Math.max(0, sim.turn - 1) : n])}</h3>
          ${feedback ? `<div class="lp-feedback"><span class="lp-kicker">${escape(t('log'))}</span><p>${escape(t('feedback')[feedback])}</p></div>${btn('next', sim.ended ? t('seeEnd') : t('next'), 'lp-primary')}` : `<p>${escape(t('phasePrompts')[n])}</p><div class="lp-commands">${engine.ACTIONS.map((id, i) => `<button type="button" data-lp-action="choose" data-command="${id}" ${!engine.canAct(sim, id) ? 'disabled' : ''}><span class="lp-command-number">0${i + 1}</span><span><strong>${escape(t('actions')[id][0])}</strong><small>${escape(engine.canAct(sim, id) ? t('actions')[id][1] : t(sim.history.some(h => h.action === id) ? 'applied' : 'unavailable'))}</small></span><span aria-hidden="true">↗</span></button>`).join('')}</div>`}
          <p class="lp-paced">${escape(t('progressHelp'))}</p>${btn('surface', t('leaveSim'), 'lp-text-btn')}
        </section>
      </div>`;
  }

  function openPanel(id) {
    if (!panel) panelFocus = document.activeElement;
    panel = id; $('#lp-panel').hidden = false; renderPanel();
    root.classList.add('lp-panel-open'); $('[data-lp-action="close-panel"]').focus();
  }
  function closePanel(restore = true) {
    if (!root) return;
    panel = null; $('#lp-panel').hidden = true; root.classList.remove('lp-panel-open');
    if (restore && panelFocus?.isConnected) panelFocus.focus({ preventScroll: true });
  }
  function scienceCards() {
    return `<div class="lp-science-cards">${t('scienceCards').map((c, i) => `<article><span class="lp-kicker">0${i + 1}</span><h3>${escape(c[0])}</h3><p>${escape(c[1])}</p>${link(i === 3 ? 7 : 6)}</article>`).join('')}</div>`;
  }
  function renderPanel() {
    let html;
    if (panel === 'sources') {
      html = `<p class="lp-kicker">${escape(t('archiveLabel'))}</p><h2 id="lp-panel-title">${escape(t('creditsTitle'))}</h2><p>${escape(t('creditIntro'))}</p><div class="lp-source-types">${t('distinctions').map(c => `<article><h3>${escape(c[0])}</h3><p>${escape(c[1])}</p></article>`).join('')}</div><ol class="lp-source-list">${content.SOURCES.map((s, i) => `<li>${link(i, s[0])}</li>`).join('')}</ol><p>${escape(t('reuse'))}</p>`;
    } else if (panel === 'science') {
      html = `<p class="lp-kicker">2004 — 2018</p><h2 id="lp-panel-title">${escape(t('scienceTitle'))}</h2><p>${escape(t('scienceIntro'))}</p>${scienceCards()}`;
    } else {
      const point = content.POINTS.find(p => p.id === panel);
      html = `<p class="lp-kicker">${escape(t('observed'))} / PIA22909</p><h2 id="lp-panel-title">${escape(t('pointTitles')[panel])}</h2><p>${escape(t('pointBodies')[panel])}</p><p class="lp-small">${escape(t('pointNote'))}</p>${link(point.source)}<p class="lp-small">${content.CREDIT}</p>`;
    }
    $('#lp-panel-body').innerHTML = html;
  }
  function startLoss() {
    closePanel(false); setPhase('loss'); dust = .88; root.style.setProperty('--lp-dark', .82);
    $('#lp-loss-title').textContent = t('linkLost'); announce(t('linkLost'));
    $('[data-lp-action="end-now"]').focus(); setVolume(0, 3.8);
    if (reduced.matches) ending();
  }
  function ending() {
    stopSound(); setPhase('ending'); dustCtx?.clearRect(0, 0, width, height);
    renderEnding(); $('#lp-ending').scrollTop = 0; $('#lp-ending').focus();
    announce(t('silence'));
  }
  function renderEnding() {
    $('#lp-ending').innerHTML = `<div class="lp-ending-inner">
      <p class="lp-kicker">${escape(t('endingLabel'))}</p><h2>${escape(t('endingTitle'))}</h2>
      <div class="lp-final-grid"><figure>${imageMarkup('PIA22929.jpg', t('lastPhotoAlt'), 'lp-last-photo')}<figcaption><strong>${escape(t('lastPhotoTitle'))}</strong><p>${escape(t('lastPhotoText'))}</p><span>${content.CREDIT} · ${link(1, 'PIA22929')}</span></figcaption></figure>
      <div class="lp-final-story"><div class="lp-final-stats"><div><strong>${lang() === 'es' ? '45,16' : '45.16'}</strong><span>${escape(t('distanceLabel'))}</span></div><div><strong>${escape(t('durationValue'))}</strong><span>${escape(t('durationLabel'))}</span></div><div><strong>${escape(t('plannedValue'))}</strong><span>${escape(t('plannedLabel'))}</span></div></div><p>${escape(t('durationNote'))} ${link(5)}</p><p class="lp-outcome">${escape(t('outcome'))}</p><p>${escape(t('legacy'))}</p>
      ${sim ? `<details class="lp-summary"><summary>${escape(t('yourLog'))}</summary><p>${escape(t('energyEnd'))}: ${sim.energy}% · ${escape(t('packetEnd'))}: ${sim.packets}</p><ol>${sim.history.map(h => `<li>${escape(t('actions')[h.action][0])}<p>${escape(t('feedback')[h.outcome])}</p></li>`).join('')}</ol></details>` : ''}
      <details class="lp-thumbnails"><summary>${escape(t('thumbnailsTitle'))}</summary>${imageMarkup('PIA22930.jpg', t('thumbnailsAlt'))}<p>${escape(t('thumbnailsText'))}</p><p>${content.CREDIT} · ${link(2, 'PIA22930')}</p></details></div></div>
      <div class="lp-final-science"><p class="lp-kicker">${escape(t('science'))}</p><p>${escape(t('scienceIntro'))}</p>${scienceCards()}</div>
      <blockquote>${escape(t('quote'))}<cite>${escape(t('quoteCredit'))}</cite></blockquote>
      <div class="lp-ending-actions">${btn('restart', t('restart'), 'lp-primary')}${btn('surface', t('exploreAgain'))}${btn('exit', t('museum'))}</div>
      <p class="lp-final-credit">${content.CREDIT} · ${link(8, t('sources'))}</p>
    </div>`;
  }

  // One capped animation loop, active only for transitions / simulated weather.
  const motes = Array.from({ length: 70 }, (_, i) => ({ x: (i * .61803398875) % 1, y: (i * .381966) % 1, r: .7 + (i % 5) * .6 }));
  function startFrame() {
    if (frame || document.hidden || phase === 'closed') return;
    if (!['cinema', 'simulation', 'loss'].includes(phase) || (reduced.matches && phase === 'simulation')) { dustCtx?.clearRect(0, 0, width, height); return; }
    frame = requestAnimationFrame(tick);
  }
  function tick(now) {
    frame = 0; if (!root.open || document.hidden) return;
    const delta = lastTick ? Math.min(.08, (now - lastTick) / 1000) : 0;
    if (lastTick && delta < .032) { frame = requestAnimationFrame(tick); return; }
    lastTick = now; elapsed += delta;
    if (phase === 'cinema') {
      const p = clamp(elapsed / 7.5, 0, 1);
      root.style.setProperty('--lp-entry', p);
      root.classList.toggle('lp-descent', p > .62);
      const next = p < .24 ? 'orbit' : p < .50 ? 'approach' : p < .80 ? 'descent' : 'arrival';
      if (next !== phaseLabel) { phaseLabel = next; $('#lp-cinema-title').textContent = t(next); announce(t(next)); }
      dust = p > .5 ? Math.sin((p - .5) * Math.PI * 2) * .55 : .03;
      if (p >= 1) { surface(); return; }
    }
    if (phase === 'loss') {
      root.style.setProperty('--lp-loss', clamp(elapsed / 4, 0, 1));
      $('#lp-loss-title').textContent = elapsed < 2.5 ? t('linkLost') : elapsed < 5 ? t('listening') : t('silence');
      if (elapsed > 7) { ending(); return; }
    }
    if (dustCtx) {
      dustCtx.clearRect(0, 0, width, height);
      if (!reduced.matches) {
        dustCtx.fillStyle = `rgba(215,185,139,${Math.min(.4, .06 + dust * .25)})`;
        const count = Math.round((width < 700 ? 38 : 70) * dust);
        for (let i = 0; i < count; i++) {
          const m = motes[i]; m.x = (m.x + delta * (.07 + dust * .22) * (1 + m.r * .22)) % 1;
          m.y = (m.y + delta * .006) % 1;
          dustCtx.beginPath(); dustCtx.ellipse(m.x * width, m.y * height, m.r * (1 + dust * 3), m.r * .5, -.15, 0, Math.PI * 2); dustCtx.fill();
        }
      }
    }
    startFrame();
  }
  document.addEventListener('visibilitychange', () => {
    if (!root?.open) return;
    if (document.hidden) { cancelAnimationFrame(frame); frame = 0; lastTick = 0; sound?.context.suspend().catch(() => {}); }
    else { lastTick = 0; if (soundEnabled && sound) sound.context.resume().catch(() => {}); startFrame(); }
  });
  reduced.addEventListener('change', () => {
    if (!root?.open) return;
    if (reduced.matches && phase === 'cinema') surface();
    else if (reduced.matches && phase === 'loss') ending();
    else { cancelAnimationFrame(frame); frame = 0; startFrame(); }
  });
  function updateSoundButton() {
    if (!root) return;
    const b = $('[data-lp-action="sound"]'); b.textContent = t(soundFailed ? 'audioUnavailable' : soundEnabled ? 'audioOn' : 'audioOff');
    b.setAttribute('aria-pressed', String(soundEnabled)); b.title = t('soundCaption');
  }
  async function toggleSound() {
    if (audioBusy) return;
    if (soundEnabled) { stopSound(); return; }
    audioBusy = true; const token = generation;
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) throw new Error('No Web Audio');
      const context = new Audio();
      const gain = context.createGain(), filter = context.createBiquadFilter(), noise = context.createBufferSource();
      const buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate), data = buffer.getChannelData(0);
      let last = 0; for (let i = 0; i < data.length; i++) { last = (last + (Math.random() * 2 - 1) * .025) / 1.025; data[i] = last * 3; }
      noise.buffer = buffer; noise.loop = true; filter.type = 'lowpass'; filter.frequency.value = 600;
      gain.gain.value = 0; noise.connect(filter); filter.connect(gain); gain.connect(context.destination); noise.start();
      sound = { context, gain, noise }; await context.resume();
      if (!root.open || token !== generation || ['ending', 'loss'].includes(phase)) { stopSound(); return; }
      soundEnabled = true; setVolume(phase === 'simulation' ? .05 : .025); announce(t('soundCaption'));
    } catch (_) { stopSound(); soundFailed = true; }
    finally { audioBusy = false; updateSoundButton(); }
  }
  function setVolume(value, seconds = .4) {
    if (!sound) return;
    const now = sound.context.currentTime; sound.gain.gain.cancelScheduledValues(now);
    sound.gain.gain.setValueAtTime(sound.gain.gain.value, now); sound.gain.gain.linearRampToValueAtTime(value, now + seconds);
  }
  function stopSound() {
    if (sound) { try { sound.noise.stop(); sound.noise.disconnect(); sound.gain.disconnect(); sound.context.close().catch(() => {}); } catch (_) {} }
    sound = null; soundEnabled = false; if (content) updateSoundButton();
  }
})();
