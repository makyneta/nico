/* ═══════════════════════════════════════════
   NICHOLAS SIMÕES — index.js
   Makyneta Unipessoal, Lda.
═══════════════════════════════════════════ */

/* ─── CUSTOM CURSOR ─── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

function attachCursorScale(selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.style.transform = 'translate(-50%,-50%) scale(2)';
    });
    el.addEventListener('mouseleave', () => {
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
    });
  });
}
attachCursorScale('a, button, .tag, .proj-item, .filtro-btn');


/* ─── NAV SCROLL ─── */
window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
});


/* ─── REVEAL ON SCROLL ─── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


/* ─── HAMBURGER MENU ─── */
const hamburger  = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-links a');

function openMenu() {
  hamburger.classList.add('is-open');
  mobileMenu.classList.add('is-open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileMenu.setAttribute('aria-hidden', 'false');
  document.body.classList.add('menu-open');
}

function closeMenu() {
  hamburger.classList.remove('is-open');
  mobileMenu.classList.remove('is-open');
  hamburger.setAttribute('aria-expanded', 'false');
  mobileMenu.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('menu-open');
}

hamburger.addEventListener('click', () => {
  hamburger.classList.contains('is-open') ? closeMenu() : openMenu();
});

mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

// Cursor scale for mobile menu links
attachCursorScale('.mobile-links a');


/* ─── CONTACT FORM ─── */
function handleForm(e) {
  e.preventDefault();
  const btn = document.getElementById('btnSend');

  btn.textContent = 'Enviando...';
  btn.style.background = 'var(--caramel)';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = '✓ Mensagem enviada!';
    btn.style.background = 'var(--wood)';

    setTimeout(() => {
      btn.textContent = 'Enviar mensagem';
      btn.style.background = '';
      btn.disabled = false;
      e.target.reset();
    }, 3000);
  }, 1200);
}