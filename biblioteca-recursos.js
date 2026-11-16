'use strict';
(() => {
  const q=document.getElementById('q'), count=document.getElementById('result-count');
  const cards=[...document.querySelectorAll('.asset')], filters=[...document.querySelectorAll('[data-filter]')], langs=[...document.querySelectorAll('[data-language]')];
  let language='es', filter='all';
  const normalize=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  function update(){const words=normalize(q.value).split(/\s+/).filter(Boolean);let shown=0; cards.forEach(card=>{const visible=(filter==='all'||filter===card.dataset.group)&&words.every(word=>normalize(card.dataset.search).includes(word));card.hidden=!visible;if(visible)shown++;});count.textContent=language==='en'?`${shown} of ${cards.length} assets`:`${shown} de ${cards.length} recursos`;}
  function setLanguage(l){language=l;document.documentElement.lang=l;document.querySelectorAll('[data-l]').forEach(el=>el.hidden=el.dataset.l!==l);langs.forEach(b=>b.setAttribute('aria-pressed',b.dataset.language===l));q.placeholder=l==='en'?'Opportunity, Apollo, Mars…':'Opportunity, Apollo, Marte…';document.title=l==='en'?'Scientific resource library | Cosmic Legacy':'Biblioteca científica | Cosmic Legacy';update();}
  filters.forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;filters.forEach(c=>c.setAttribute('aria-pressed',c===b));update();}));
  langs.forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.language)));
  q.addEventListener('input',update);
  const requested=new URLSearchParams(location.search).get('lang');setLanguage(requested==='en'?'en':'es');
})();
