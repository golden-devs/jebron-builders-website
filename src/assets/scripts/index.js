document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  setupNavbar();
  setupBottomPanel();
});

function setupNavbar() {
  const navToggler = document.getElementById('js-nav-toggle');
  const navLinks = document.getElementById('js-nav-links');

  function collapseLinks(event) {
    navLinks.classList.add('navbar__links_collapsed');
  }

  navToggler.addEventListener('click', function() {
    navLinks.classList.toggle('navbar__links_collapsed');
  });

  document
    .querySelector('.navbar__brand')
    .addEventListener('click', collapseLinks);
  document.querySelectorAll('.navbar__link').forEach(function(link) {
    link.addEventListener('click', collapseLinks);
  });

  navLinks.classList.add('navbar__links_collapsed');
}

function setupBottomPanel() {
  const bottomPanel = document.getElementById('js-bottom-panel');

  const intersectionObserver = new IntersectionObserver(function(entries) {
    const isPageTop = entries[0].intersectionRatio > 0;
    if (isPageTop) {
      bottomPanel.classList.remove('bottom-panel_hidden');
    } else {
      bottomPanel.classList.add('bottom-panel_hidden');
    }
  });

  intersectionObserver.observe(document.getElementById('js-page-top'));
}
