const toggleBtn = document.getElementById('toggleLanguage');

toggleBtn.addEventListener('click', () => {
  const englishSections = document.querySelectorAll('[data-en]');
  const japaneseSections = document.querySelectorAll('[data-ja]');

  englishSections.forEach(section => {
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
  });

  japaneseSections.forEach(section => {
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
  });

  toggleBtn.textContent = toggleBtn.textContent === '日本語' ? 'English' : '日本語';
});

const navToggle = document.getElementById('navToggle');
const navbar = document.getElementById('navbar');

navToggle.addEventListener('click', () => {
  navbar.classList.toggle('show');
});