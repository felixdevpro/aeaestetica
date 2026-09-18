/* PERSONALIZAÇÃO RÁPIDA: altere apenas estes dados. */
const siteConfig = {
  whatsappNumber: "5522981814636",
  whatsappMessage: "Olá! Gostaria de agendar uma avaliação de estética.",
  instagramUrl: "#" // Exemplo: https://instagram.com/suaclinica
};

const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
document.querySelectorAll('.contact-link').forEach(link => link.href = whatsappUrl);
document.querySelectorAll('[data-instagram]').forEach(link => link.href = siteConfig.instagramUrl);

const menuBtn=document.querySelector('.menu-btn'),navLinks=document.querySelector('.nav-links');
menuBtn.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);menuBtn.textContent=open?'×':'☰';document.body.classList.toggle('menu-open',open)});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='☰';document.body.classList.remove('menu-open')}));
document.getElementById('year').textContent=new Date().getFullYear();
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>o.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in'))}
