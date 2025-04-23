const toggleBtn = document.getElementById("toggleTranslate");
let isEnglish = true;

const translations = {
  en: {
    projects: "Projects",
    projects_title: "Projects",
    projects_text: "I’m open to freelance projects—if it’s a good fit, I’m ready to tackle the challenge.",
    my_band: "My band"
  },
  ja: {
    projects: "プロジェクト",
    projects_title: "プロジェクト",
    projects_text: "フリーランスのプロジェクトも受け付けています。良いご縁があれば、ぜひ挑戦したいと思っています。",
    my_band: "バンド"
  }
};

function toggleLanguage() {
  const lang = isEnglish ? "ja" : "en";

  // Translate blocks with data-en/data-ja
  const textBlocks = document.querySelectorAll(".block[data-en]");
  textBlocks.forEach(block => {
    const content = block.getAttribute(`data-${lang}`);
    if (content) block.textContent = content;
  });

  // Translate elements with data-i18n
  const i18nElements = document.querySelectorAll("[data-i18n]");
  i18nElements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  toggleBtn.textContent = isEnglish ? "EN" : "日本語";
  isEnglish = !isEnglish;
}

// Set default language on load
window.addEventListener("DOMContentLoaded", () => {
  const textBlocks = document.querySelectorAll(".block[data-en]");
  textBlocks.forEach(block => {
    const content = block.getAttribute("data-en");
    if (content) block.textContent = content;
  });

  // Initial i18n population
  const i18nElements = document.querySelectorAll("[data-i18n]");
  i18nElements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations.en[key]) {
      el.textContent = translations.en[key];
    }
  });
});

toggleBtn.addEventListener("click", toggleLanguage);