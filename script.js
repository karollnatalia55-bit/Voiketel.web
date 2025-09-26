// small interactions
document.getElementById('year').textContent = new Date().getFullYear();

// mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle && menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !open);
  if (mobileMenu.hasAttribute('hidden')) mobileMenu.removeAttribute('hidden');
  else mobileMenu.setAttribute('hidden', '');
});

// contact form basic handling
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form && form.addEventListener('submit', (e) => {
  e.preventDefault();
  // simple validation
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) {
    formMsg.style.color = 'crimson';
    formMsg.textContent = 'Por favor completa los campos requeridos.';
    return;
  }
  // in production you'd send to backend. For demo show success
  formMsg.style.color = 'green';
  formMsg.textContent = 'Mensaje enviado. Nos contactaremos pronto.';
  form.reset();
});

// WhatsApp quick contact
document.getElementById('btnWhats') && document.getElementById('btnWhats').addEventListener('click', () => {
  const phone = '573125673411'; // formato internacional sin +
  const text = encodeURIComponent('Hola Voiketel, quiero más información sobre la infraestructura de red para mi empresa.');
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
});
