document.addEventListener('DOMContentLoaded', function() {
  'use strict';

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
});
