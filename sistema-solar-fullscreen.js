/* COSMIC LEGACY — additive fullscreen control. Existing renderer is untouched. */
(() => {
  'use strict';
  const section = document.getElementById('sistema-solar');
  const frame = section?.querySelector('.solar3d-frame');
  const stage = section?.querySelector('.solar3d-stage');
  if (!section || !frame || !stage) return;

  const bar = document.createElement('div');
  bar.className = 'solar-fs-bar';
  bar.setAttribute('data-lc-owned', '');
  const button = document.createElement('button');
  button.type = 'button';
  button.id = 'solar3d-fullscreen';
  button.className = 'solar-fs-toggle';
  button.setAttribute('aria-controls', section.id);
  button.setAttribute('aria-pressed', 'false');
  button.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path class="solar-fs-expand" d="M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6"/><path class="solar-fs-contract" d="M3 9h6V3m12 6h-6V3M9 21v-6H3m12 6v-6h6"/></svg><span></span>';
  bar.append(button);
  frame.insertBefore(bar, stage);

  let fallback = false, busy = false, spacer = null, scrollX = 0, scrollY = 0;
  const currentFullscreen = () => document.fullscreenElement || document.webkitFullscreenElement;
  const active = () => fallback || currentFullscreen() === section;
  function sync() {
    const expanded = active();
    section.classList.toggle('solar-fs-expanded', expanded);
    button.setAttribute('aria-pressed', String(expanded));
    const en = document.documentElement.lang.toLowerCase().startsWith('en');
    const label = expanded ? (en ? 'Exit full screen' : 'Salir de pantalla completa') : (en ? 'Full screen' : 'Pantalla completa');
    button.querySelector('span').textContent = label;
    button.setAttribute('aria-label', label);
    button.title = label;
    // The existing ResizeObserver/animation loop fits the canvas to the new stage.
  }
  function enterFallback() {
    if (active()) return;
    scrollX = window.scrollX; scrollY = window.scrollY;
    spacer = document.createElement('div');
    spacer.setAttribute('aria-hidden', 'true');
    spacer.style.height = `${section.getBoundingClientRect().height}px`;
    section.before(spacer);
    fallback = true;
    section.classList.add('solar-fs-fallback');
    document.documentElement.classList.add('solar-fs-scroll-lock');
    document.body.classList.add('solar-fs-scroll-lock');
    sync();
  }
  function leaveFallback() {
    fallback = false;
    section.classList.remove('solar-fs-fallback');
    document.documentElement.classList.remove('solar-fs-scroll-lock');
    document.body.classList.remove('solar-fs-scroll-lock');
    spacer?.remove(); spacer = null;
    sync();
    window.scrollTo({left:scrollX, top:scrollY, behavior:'instant'});
  }
  async function enter() {
    const request = section.requestFullscreen || section.webkitRequestFullscreen;
    if (!request || document.fullscreenEnabled === false) { enterFallback(); return; }
    try {
      await request.call(section);
      // Standard implementations return a promise; prefixed Safari may return void.
      sync();
    } catch (_) { enterFallback(); }
  }
  async function exit() {
    if (fallback) { leaveFallback(); return; }
    if (currentFullscreen() !== section) return;
    const leave = document.exitFullscreen || document.webkitExitFullscreen;
    try { if (leave) await leave.call(document); } catch (_) { /* Browser retains native exit control. */ }
    sync();
  }
  button.addEventListener('click', async () => {
    if (busy) return;
    busy = true;
    try { if (active()) await exit(); else await enter(); }
    finally { busy = false; sync(); if (button.isConnected) button.focus({preventScroll:true}); }
  });
  for (const event of ['fullscreenchange','webkitfullscreenchange']) document.addEventListener(event, sync);
  new MutationObserver(sync).observe(document.documentElement, {attributes:true,attributeFilter:['lang']});
  document.addEventListener('keydown', event => {
    if (!active() || event.key !== 'Escape') return;
    event.preventDefault(); event.stopImmediatePropagation();
    void exit().then(() => button.focus({preventScroll:true}));
  }, true);

  // The existing spacecraft story dialog lives outside the solar system.
  // Leave fullscreen when opening it so it is never hidden behind the native top layer.
  document.addEventListener('lc:story-visibility', () => {
    if (!active() || !document.body.classList.contains('lct-lock')) return;
    void exit().then(() => document.querySelector('.lct.on .lct-x')?.focus({preventScroll:true}));
  });
  // Preserve existing same-page navigation, including the WebGL-unavailable link.
  section.addEventListener('click', event => {
    if (!active()) return;
    const link = event.target.closest('a[href^="#"]');
    if (!link || link.getAttribute('href') === '#') return;
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (!target || section.contains(target)) return;
    event.preventDefault();
    void exit().then(() => { location.hash = link.getAttribute('href'); target.scrollIntoView(); });
  });
  sync();
})();
