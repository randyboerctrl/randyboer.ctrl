const toggleButton = document.getElementById('toggleLanguage');
const englishElements = document.querySelectorAll('.en');
const japaneseElements = document.querySelectorAll('.jp');

let isEnglish = true;

toggleButton.addEventListener('click', () => {
  isEnglish = !isEnglish;

  englishElements.forEach(el => el.classList.toggle('hidden', !isEnglish));
  japaneseElements.forEach(el => el.classList.toggle('hidden', isEnglish));

  toggleButton.textContent = isEnglish ? '日本語' : 'English';
});