const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  const status = contactForm.querySelector('.form-status');
  const button = contactForm.querySelector('button[type="submit"]');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    button.disabled = true;
    status.hidden = false;
    status.textContent = 'Odesílám…';
    status.classList.remove('is-error');

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        status.textContent = 'Děkujeme, zpráva byla odeslána. Ozveme se vám co nejdříve.';
        contactForm.reset();
      } else {
        status.textContent = 'Zprávu se nepodařilo odeslat. Zkuste to prosím znovu nebo nám napište přímo na info@vodesil.cz.';
        status.classList.add('is-error');
      }
    } catch (err) {
      status.textContent = 'Zprávu se nepodařilo odeslat. Zkuste to prosím znovu nebo nám napište přímo na info@vodesil.cz.';
      status.classList.add('is-error');
    } finally {
      button.disabled = false;
    }
  });
}
