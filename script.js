const toggleButton = document.getElementById('lang-toggle');
let isEnglish = true;

toggleButton.addEventListener('click', () => {
  // Toggle the language
  isEnglish = !isEnglish;

  const englishTexts = document.querySelectorAll('.lang-en');
  const japaneseTexts = document.querySelectorAll('.lang-ja');

  englishTexts.forEach((text) => {
    text.style.display = isEnglish ? 'block' : 'none';
  });

  japaneseTexts.forEach((text) => {
    text.classList.toggle('show', !isEnglish);
  });
});