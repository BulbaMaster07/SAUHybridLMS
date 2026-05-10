const oobe     = document.getElementById('oobe');
const logoImg  = document.getElementById('oobe-logo-img');
const logoFloat = document.getElementById('logo-float');
const page     = document.querySelector('.page');

setTimeout(() => logoImg.classList.add('breathe'), 2000);

setTimeout(() => {
  oobe.classList.add('exit');
}, 3200);

setTimeout(() => {
  oobe.classList.add('gone');

  logoFloat.classList.add('visible');

  page.classList.add('visible');

  document.body.classList.add('ready');

  document.querySelectorAll('[data-target]').forEach(animateCounter);
}, 3900);

function animateCounter(el) {
  const target  = parseFloat(el.dataset.target);
  const decimal = parseInt(el.dataset.decimal || 0);
  const duration = 1400;
  const start = performance.now();
  (function step(now) {
    const p   = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 4);
    el.textContent = decimal ? (target * ease).toFixed(decimal) : Math.round(target * ease);
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = decimal ? target.toFixed(decimal) : target;
  })(performance.now());
}

document.querySelectorAll('.portal-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top)  + 'px');
  });
});

document.querySelectorAll('.portal-card').forEach(card => {
  const items = card.querySelectorAll('.feature-item');
  card.addEventListener('mouseenter', () =>
    items.forEach((it, i) => it.style.transitionDelay = (i * 0.04) + 's'));
  card.addEventListener('mouseleave', () =>
    items.forEach(it => it.style.transitionDelay = '0s'));
});