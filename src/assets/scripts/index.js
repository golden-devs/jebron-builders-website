document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  const navToggler = document.getElementById('js-nav-toggle');
  const navLinks = document.getElementById('js-nav-links');

  navToggler.addEventListener('click', function() {
    navLinks.classList.toggle('navbar__links_collapsed');
  });

  navLinks.classList.add('navbar__links_collapsed');
});
