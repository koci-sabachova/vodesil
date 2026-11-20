// Jednoduchý CMS: texty a ceny se dají editovat v Google Sheetu,
// tahle stránka si je při načtení stáhne a přepíše do míst s [data-cms].
// Když se sheet nenačte (offline, výpadek), zůstanou původní texty z HTML.
(function () {
  var SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRNproCn8keZU3DfXi6pYa9XIKI394DMnujbz8bKmt4Zp7kcScJnkyezo4hFIfN8KR00MD1Fj3FyURW/pub?output=csv';

  if (!SHEET_CSV_URL) return;

  fetch(SHEET_CSV_URL)
    .then(function (r) { return r.text(); })
    .then(function (csv) {
      var data = {};
      csv.trim().split('\n').slice(1).forEach(function (line) {
        var idx = line.indexOf(',');
        if (idx === -1) return;
        var key = line.slice(0, idx).trim();
        var value = line.slice(idx + 1).trim();
        if (value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
          value = value.slice(1, -1).replace(/""/g, '"');
        }
        data[key] = value;
      });

      document.querySelectorAll('[data-cms]').forEach(function (el) {
        var key = el.getAttribute('data-cms');
        var value = data[key];
        if (!value) return;
        el.textContent = value;
        if (key === 'telefon' && el.tagName === 'A') {
          el.href = 'tel:' + value.replace(/\s+/g, '');
        }
        if (key === 'email' && el.tagName === 'A') {
          el.href = 'mailto:' + value;
        }
      });
    })
    .catch(function () {
      // ticho — zůstanou výchozí texty z HTML
    });
})();
