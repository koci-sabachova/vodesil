const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
}
