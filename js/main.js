/* ══════════════════════════════════════════════
   main.js - ملف JavaScript الرئيسي
   The Legal Shark | Hanafy & Sarhan Law Firm
   ══════════════════════════════════════════════ */

/* ══════════════════════════════════════════════
   تأثير الـ scroll على شريط التنقل (Nav Scroll Effect)
   ══════════════════════════════════════════════ */

/* ══════════════════════════════════════════════
   وظيفة التنقل بين الصفحات (Page Navigation)
   ══════════════════════════════════════════════ */

/* ══════════════════════════════════════════════
   وظيفة عرض تفاصيل الخدمات (Services Tabs)
   ══════════════════════════════════════════════ */

/* ══════════════════════════════════════════════
   تأثيرات الحركة والظهور (Scroll Reveal Animations)
   ══════════════════════════════════════════════ */

/* ══════════════════════════════════════════════
   معالجة نموذج التواصل (Contact Form Submit)
   ══════════════════════════════════════════════ */

/* ══════════════════════════════════════════════
   تهيئة الصفحة عند التحميل (Init on Load)
   ══════════════════════════════════════════════ */


// ─── NAV SCROLL ───
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

// ─── MOBILE MENU ───
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ─── PAGE NAVIGATION ───
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  const activeNav = document.getElementById('nav-' + name);
  if (activeNav) activeNav.classList.add('active');
  
  document.getElementById('navLinks').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  setTimeout(initReveal, 100);
  
  if (name === 'services') {
    showService('founding');
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.tab-btn').classList.add('active');
  }
}

// ─── SERVICES TABS ───
function showService(name) {
  document.querySelectorAll('.service-detail-block').forEach(b => b.classList.remove('active'));
  document.getElementById('service-' + name).classList.add('active');
  
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    const services = ['founding','contracts','ip','compliance','investment','disputes'];
    btn.classList.toggle('active', services[i] === name);
  });
}

// ─── SCROLL REVEAL ───
function initReveal() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add a slight delay based on index for staggered effect if they are in the same view
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  reveals.forEach((el, index) => {
    // If multiple elements are close, stagger them
    if (!el.classList.contains('visible')) {
      observer.observe(el);
    }
  });
}

// ─── FORM SUBMIT ───
function submitForm() {
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
}

// ─── INIT ───
window.addEventListener('load', () => {
  initReveal();
});
