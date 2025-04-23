document.getElementById("toggleLanguage").addEventListener("click", () => {
  document.querySelectorAll(".lang-en").forEach(el => el.classList.toggle("hidden"));
  document.querySelectorAll(".lang-ja").forEach(el => el.classList.toggle("hidden"));
});const toggleButton = document.getElementById('lang-toggle');
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
    text.style.display = isEnglish ? 'none' : 'block';
  });
});